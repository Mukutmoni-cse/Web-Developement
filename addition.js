function addition(form) {
    document.getElementById("sum").value = Number(form.x.value) + Number(form.y.value)
    document.getElementById("subs").value = Number(form.x.value) - Number(form.y.value)
    document.getElementById("multi").value = Number(form.x.value) * Number(form.y.value)
    document.getElementById("div").value = Number(form.x.value) / Number(form.y.value)
}