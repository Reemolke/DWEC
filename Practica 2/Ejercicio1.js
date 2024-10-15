
    let x = document.getElementsByTagName('a');
    
    document.write("Hay " +x.length +" enlaces en la página<br>");
    document.write(x.item(x.length-1)+ "<br>");
    document.write("Hay " +document.getElementById('p1').getElementsByTagName('a').length + " enlaces en la página");