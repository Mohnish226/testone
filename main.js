var totall=0;
function add() 
{
            if(document.getElementById('txt1').value ==""){
                return;
            }
            var table = document.getElementById('List');
            var No = table.rows.length;
            var row = table.insertRow(No);
            var tempText=document.getElementById('txt1').value;
 			var cell1 = row.insertCell(0);
            var str = document.createElement("input");
            // To Do Text for list
            str.type = "text";
            str.style.width="100%";
            str.name = "txt";
            str.value=tempText;
            cell1.appendChild(str);
            // checkbox 
 			var cell2 = row.insertCell(1);
            var cb = document.createElement("input");
            cb.type = "checkbox";
            cb.name="chkbox";
            cell2.appendChild(cb);
			document.getElementById('txt1').value="";
            document.getElementById('Total').innerHTML= ++totall;
}
function imp() 
{
            if(document.getElementById('txt1').value ==""){
                return;
            }
            var table = document.getElementById('Implist');
            var No = table.rows.length;
            var row = table.insertRow(No);
            var tempText=document.getElementById('txt1').value;
 			var cell1 = row.insertCell(0);
            var str = document.createElement("input");
            // To Do Text for Imp list
            str.type = "text";
            str.style.width="100%";
            str.style.background = "#fff0b2";
            str.name = "txt";
            str.value=tempText;
            cell1.appendChild(str);
            // checkbox 
 			var cell2 = row.insertCell(1);
            var cb = document.createElement("input");
            cb.type = "checkbox";
            cb.name="chkbox";
            cell2.appendChild(cb);
			document.getElementById('txt1').value="";
            document.getElementById('Total').innerHTML= ++totall;
}
function delete1() 
{
            //Delete from regular list
            var table = document.getElementById('List');
            var rowNo = table.rows.length;
            for(var i=0; i<rowNo; i++) {
                var row = table.rows[i];
                var chkbox = row.cells[1].childNodes[0];
                if(chkbox != null && chkbox.checked==true) {
                    table.deleteRow(i);
                    rowNo--;
                    i--;
                    document.getElementById('Total').innerHTML= --totall;
                    
                }
            }
            //Delete from important list
            var itable = document.getElementById('Implist');
            var irowNo = itable.rows.length;
            for(var i=0; i<irowNo; i++) {
                var irow = itable.rows[i];
                var ichkbox = irow.cells[1].childNodes[0];
                if(ichkbox != null && ichkbox.checked==true) {
                    itable.deleteRow(i);
                    irowNo--;
                    i--;
                    document.getElementById('Total').innerHTML= --totall;
                 }
             }
}
