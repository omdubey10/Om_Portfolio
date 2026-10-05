export function knockBlackFromImage(
  src: string,
  thresh = 28,
): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) {
        resolve(src);
        return;
      }
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, w, h);
      const d = imageData.data;
      const visited = new Uint8Array(w * h);
      const stack: number[] = [];

      const push = (x: number, y: number) => {
        if (x < 0 || y < 0 || x >= w || y >= h) return;
        const i = y * w + x;
        if (visited[i]) return;
        const o = i * 4;
        if (d[o + 3] < 8) return;
        if (d[o] > thresh || d[o + 1] > thresh || d[o + 2] > thresh) return;
        visited[i] = 1;
        stack.push(i);
      };

      for (let x = 0; x < w; x++) {
        push(x, 0);
        push(x, h - 1);
      }
      for (let y = 0; y < h; y++) {
        push(0, y);
        push(w - 1, y);
      }

      while (stack.length) {
        const i = stack.pop()!;
        const x = i % w;
        const y = (i / w) | 0;
        d[i * 4 + 3] = 0;
        push(x + 1, y);
        push(x - 1, y);
        push(x, y + 1);
        push(x, y - 1);
      }

      ctx.putImageData(imageData, 0, 0);
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = () => resolve(src);
    img.src = src;
  });
}

/** Drop pitch-black fabric so a dark hoodie doesn't paint a black blob over the base. */
export function liftDarkFabric(src: string, lumCut = 36): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) {
        resolve(src);
        return;
      }
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, w, h);
      const d = imageData.data;

      for (let i = 0; i < d.length; i += 4) {
        if (d[i + 3] < 8) continue;
        const r = d[i];
        const g = d[i + 1];
        const b = d[i + 2];
        const isBlueLight = b > 90 && b > r + 12 && b > g + 8;
        const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        if (!isBlueLight && lum < lumCut) {
          d[i + 3] = 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = () => resolve(src);
    img.src = src;
  });
}
