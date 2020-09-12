
// Create a filter/search table

function myFunction() {

    // Declare variables

    // let input = document.getElementById("input");
    // let filter = input.value.toUpperCase();
    // let table = document.getElementById("employees");
    // let tr = table.getElementsByTagName("tr");

    // // Loop through all table rows, and hide those who don't match the search query

    // for (let i = 0; i < tr.length; i++) {
    //     let td = tr[i].getElementsByTagName("td")[0];
    //     if (td) {
    //         let txtValue = td.textContent || td.innerText;
    //         if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //             tr[i].style.display = "";

    //         } else {
    //             tr[i].style.display = "none";
    //         }

    //     }
    // }

// Create a filter/search for the Employee ID

// Declare variables

    let input = document.getElementById("input").value;
    let table = document.getElementById("employees");
    let tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.indexOf(input) > -1) {
                tr[i].style.display = "";

            } else {
                tr[i].style.display = "none";
            }

        }
    }

console.log(capitalize('venkata'));
   
}

// Capitalize first letter of a string and return the new string

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  
  capitalize('venkata') //'Venkata'
  capitalize('v')      //'V'
  capitalize(0)        //''
  capitalize({})       //''