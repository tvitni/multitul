document.getElementById('odin').oninput = document.getElementById('dva').oninput = function() {
    var arr1 = document.getElementById('odin').value.split(/\n/);
    var arr2 = document.getElementById('dva').value.split(/\n/);
    var dublArr = [];

    arr1.forEach(function(element) {

        console.log(element);
        if (arr2.includes(element)){    //includes - Этот метод позволяет вам определять, содержит ли строка другую строку.
            console.log (element+' - Дубликат')

        } else {
            dublArr.push(element);
        }

    });
    console.log(dublArr);
    var dubl_string = dublArr.join(' ');
    console.log(dubl_string)
    var dubl1 = document.createElement("div"); dubl1.innerHTML=dubl_string; dubl1.style.color = "red"; dubl1.style.width = '255px'; dubl1.style.height = '100px'; dubl1.style.marginRight = '4px'; dubl1.id='contentTU';
    var h2 = document.getElementsByTagName('h2')[0];
    console.log(dublArr.length);
        if (""!==dubl_string) {
            try { document.getElementById('contentTU').remove();} catch (err) {}
            h2.insertBefore(dubl1, h2.firstChild);
        } else {
             try { document.getElementById('contentTU').remove();} catch (err) {}
        }
};
