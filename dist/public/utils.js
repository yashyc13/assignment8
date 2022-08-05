export function selectDropdown(list, cell) {
    let td = document.createElement("td");
    td.setAttribute('id', 'select');
    let select = document.createElement("select");
    select.setAttribute('id', 'dropdown');
    for (const i of list) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        if (cell.textContent === i) {
            option.selected = true;
        }
        else
            option.selected = false;
        select.appendChild(option);
    }
    td.append(select);
    cell.replaceWith(td);
}
//# sourceMappingURL=utils.js.map