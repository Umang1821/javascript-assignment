(function(){


    var table=document.createElement("table");
    var thead=document.createElement("thead");
    var tbody=document.createElement("tbody");
    table.style="border:5px groove black; background-color: skyblue; margin-left:23% ; margin-top:10% ";


    table.appendChild(thead);
    table.appendChild(tbody);


    document.getElementById("Mainbody").appendChild(table);
    document.getElementById("Mainheading").style="text-align:center; color:darkblue; font-size:50px";


    //row 1


    var row1=document.createElement("tr");
    var heading=document.createElement("th");
    var text=document.createTextNode("Name");
    heading.appendChild(text);
    row1.appendChild(heading);
    heading.style="border: 2px groove black; padding:20px ;  ";


    
    var heading2=document.createElement("th");
    var text2=document.createTextNode("Age");
    heading2.appendChild(text2);
    row1.appendChild(heading2);
    heading2.style="border: 2px groove black;padding:20px; ";



    var heading3=document.createElement("th");
    var text3=document.createTextNode("DOB");
    heading3.appendChild(text3);
    row1.appendChild(heading3);
    heading3.style="border: 2px groove black;padding:20px; ";



    var heading4=document.createElement("th");
    var text4=document.createTextNode("Email");
    heading4.appendChild(text4);
    row1.appendChild(heading4);
    heading4.style="border: 2px groove black; padding:20px;";



    var heading5=document.createElement("th");
    var text5=document.createTextNode("Company");
    heading5.appendChild(text5);
    row1.appendChild(heading5);
    heading5.style="border: 2px groove black; padding:20px;";


    tbody.appendChild(row1);

      
    
    // row2


    var row2=document.createElement("tr");
    var value1=document.createElement("td");
    var text11=document.createTextNode("Umang Mishra");
    value1.appendChild(text11);
    row2.appendChild(value1);
    value1.style="border: 2px groove black; padding:20px ;";



    var value2=document.createElement("td");
    var text12=document.createTextNode("21");
    value2.appendChild(text12);
    row2.appendChild(value2);
    value2.style="border: 2px groove black;padding:20px; ";





    var value3=document.createElement("td");
    var text13=document.createTextNode("21-04-2001");
    value3.appendChild(text13);
    row2.appendChild(value3);
    value3.style="border: 2px groove black;padding:20px; ";



    
    
    var value4=document.createElement("td");
    var text14=document.createTextNode("umangmishra171@gmail.com");
    value4.appendChild(text14);
    row2.appendChild(value4);
    value4.style="border: 2px groove black; padding:20px;";


    
    
    
    var value5=document.createElement("td");
    var text15=document.createTextNode("Gemini Solutions");
    value5.appendChild(text15);
    row2.appendChild(value5);
    value5.style="border: 2px groove black; padding:20px;";




    tbody.appendChild(row2);


    //row 3


    
    var row3=document.createElement("tr");
    var value11=document.createElement("td");
    var text111=document.createTextNode("Yash Gupta");
    value11.appendChild(text111);
    row3.appendChild(value11);
    value11.style="border: 2px groove black; padding:20px ;";



    var value12=document.createElement("td");
    var text112=document.createTextNode("20");
    value12.appendChild(text112);
    row3.appendChild(value12);
    value12.style="border: 2px groove black;padding:20px; ";





    var value13=document.createElement("td");
    var text113=document.createTextNode("04-06-2002");
    value13.appendChild(text113);
    row3.appendChild(value13);
    value13.style="border: 2px groove black; padding:20px;";



    
    
    var value14=document.createElement("td");
    var text114=document.createTextNode("yashgupta@gmail.com");
    value14.appendChild(text114);
    row3.appendChild(value14);
    value14.style="border: 2px groove black;padding:20px; ";


    
    
    
    var value15=document.createElement("td");
    var text115=document.createTextNode("Gemini Solutions");
    value15.appendChild(text115);
    row3.appendChild(value15);
    value15.style="border: 2px groove black; padding:20px;";




    tbody.appendChild(row3);


    //row4

    
    var row4=document.createElement("tr");
    var value21=document.createElement("td");
    var text011=document.createTextNode("Suyash Sahu");
    value21.appendChild(text011);
    row4.appendChild(value21);
    value21.style="border: 2px groove black; padding:20px;";



    var value22=document.createElement("td");
    var text012=document.createTextNode("21");
    value22.appendChild(text012);
    row4.appendChild(value22);
    value22.style="border: 2px groove black;padding:20px; ";





    var value23=document.createElement("td");
    var text013=document.createTextNode("08-09-2001");
    value23.appendChild(text013);
    row4.appendChild(value23);
    value23.style="border: 2px groove black;padding:20px; ";



    
    
    var value24=document.createElement("td");
    var text014=document.createTextNode("suyashsahu@gmail.com");
    value24.appendChild(text014);
    row4.appendChild(value24);
    value24.style="border: 2px groove black;padding:20px; ";


    
    
    
    var value25=document.createElement("td");
    var text015=document.createTextNode("Gemini Solutions");
    value25.appendChild(text015);
    row4.appendChild(value25);
    value25.style="border: 2px groove black; padding:20px;";




    tbody.appendChild(row4);

    //row5


    
    var row5=document.createElement("tr");
    var value001=document.createElement("td");
    var text101=document.createTextNode("Shivansh Mishra");
    value001.appendChild(text101);
    row5.appendChild(value001);
    value001.style="border: 2px groove black; padding:20px ; ";



    var value002=document.createElement("td");
    var text102=document.createTextNode("21");
    value002.appendChild(text102);
    row5.appendChild(value002);
    value002.style="border: 2px groove black; padding:20px;";





    var value003=document.createElement("td");
    var text103=document.createTextNode("32-13-2001");
    value003.appendChild(text103);
    row5.appendChild(value003);
    value003.style="border: 2px groove black; padding:20px;";



    
    
    var value004=document.createElement("td");
    var text104=document.createTextNode("shivanshmishra@gmail.com");
    value004.appendChild(text104);
    row5.appendChild(value004);
    value004.style="border: 2px groove black;padding:20px; ";


    
    
    
    var value005=document.createElement("td");
    var text105=document.createTextNode("Gemini Solutions");
    value005.appendChild(text105);
    row5.appendChild(value005);
    value005.style="border: 2px groove black; padding:20px;";





    tbody.appendChild(row5);
})();