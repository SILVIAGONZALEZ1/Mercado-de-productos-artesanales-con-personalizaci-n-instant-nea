function updateProduct() {
        const color = document.getElementById("color").value;
        const pattern = document.getElementById("pattern").value;
        const text = document.getElementById("text").value;
        
        const productImage = document.getElementById("productImage");
        productImage.style.backgroundColor = color;
        
        if (pattern === "stripes") {
          productImage.style.backgroundImage = "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.2) 10px, rgba(0,0,0,0.2) 20px)";
        } else if (pattern === "dots") {
          productImage.style.backgroundImage = "radial-gradient(circle, rgba(0,0,0,0.2) 1px, transparent 1px)";
          productImage.style.backgroundSize = "20px 20px";
        } else {
          productImage.style.backgroundImage = "none";
        }
        
        productImage.alt = text;
      }
      
