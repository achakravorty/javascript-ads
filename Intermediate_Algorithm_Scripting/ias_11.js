// Convert HTML Entities


function convertHTML(str) {

    //first split the str into words ad symbols
    let parts = str.split("");
    
    for(let i=0; i < parts.length; i++) {
        switch (parts[i]) {
            case "&":
                parts[i] ="&amp;";
                break;
            case "<":
                parts[i] = "&lt;";
                break;
            case ">":
                parts[i] = "&gt;"
                break;
            case '"': 
                parts[i] = "&quot;";
                break;
            case "'":
                parts[i] = "&apos;";
                break;
        }
    };

    return parts.join("");
  }
  
  console.log(convertHTML("Dolce & Gabbana"));
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));
  console.log(convertHTML('Stuff in "quotation marks"'));
  console.log(convertHTML("<>"));