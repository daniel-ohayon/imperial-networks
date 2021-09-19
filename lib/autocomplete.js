// Adapted from https://www.w3schools.com/howto/howto_js_autocomplete.asp

function autocomplete(input, autocompleteValues, onAcceptCallback) {
    var currentFocus;

    input.addEventListener("input", function (e) {
        const queryText = this.value;

        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!queryText) { return false; }
        currentFocus = -1;

        allSuggestionsDiv = document.createElement("div");
        allSuggestionsDiv.setAttribute("id", this.id + "autocomplete-list");
        allSuggestionsDiv.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(allSuggestionsDiv);


        for (i = 0; i < autocompleteValues.length; i++) {
            if (autocompleteValues[i].substr(0, queryText.length).toUpperCase() !== queryText.toUpperCase()) {
                continue;
            }

            let suggestionDiv = document.createElement("div");
            suggestionDiv.innerHTML = "<strong>" + autocompleteValues[i].substr(0, queryText.length) + "</strong>";
            suggestionDiv.innerHTML += autocompleteValues[i].substr(queryText.length);

            let hiddenInput = document.createElement('input')
            hiddenInput.type = 'hidden';
            hiddenInput.value = autocompleteValues[i];
            suggestionDiv.appendChild(hiddenInput);

            suggestionDiv.addEventListener("click", function (_) {
                debugger;
                input.value = hiddenInput.value;
                closeAllLists();
                onAcceptCallback(input.value)
            });
            allSuggestionsDiv.appendChild(suggestionDiv);
        }
    });

    /*execute a function presses a key on the keyboard:*/
    input.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {  // arrow DOWN
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) { // UP
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) { // ENTER
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != input) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}