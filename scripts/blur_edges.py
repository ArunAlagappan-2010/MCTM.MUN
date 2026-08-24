from PIL import Image, ImageFilter, ImageDraw
import sys

def blur_edges(input_path, output_path, blur_radius=40, edge_width=100):
    img = Image.open(input_path).convert("RGBA")
    w, h = img.size

    # Create a completely blurred version of the image
    blurred = img.filter(ImageFilter.GaussianBlur(blur_radius))

    # Create a mask for the edges
    mask = Image.new("L", (w, h), 0)
    
    pixels = mask.load()
    
    # Calculate gradient for edges
    for x in range(w):
        for y in range(h):
            dist_x = min(x, w - 1 - x)
            dist_y = min(y, h - 1 - y)
            dist = min(dist_x, dist_y)
            
            if dist < edge_width:
                alpha = int(255 * (1 - dist / edge_width))
                pixels[x, y] = alpha

    # Composite the blurred image over the original using the mask
    result = Image.composite(blurred, img, mask)
    
    result.save(output_path, format="webp")

if __name__ == "__main__":
    blur_edges(sys.argv[1], sys.argv[2])
