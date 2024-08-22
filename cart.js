
document.querySelectorAll('.quantity button').forEach(function(button) {
    button.addEventListener('click', function() {
        var input = button.closest('.quantity').querySelector('input');
        var oldValue = parseFloat(input.value);
        var newVal;

        if (button.classList.contains('btn-plus')) {
            newVal = oldValue + 1;
        } else {
            newVal = oldValue > 1 ? oldValue - 1 : 1;
        }

        input.value = newVal;
    });
});
document.querySelectorAll('.btn.btn-sm.btn-primary.text-white').forEach(function(button) {
    button.addEventListener('click', function() {
        var row = button.closest('tr');
        row.remove();
    });
});
