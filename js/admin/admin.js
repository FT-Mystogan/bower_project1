$(document).ready(function() {
    setupLeftMenu();
    $('.datatable').dataTable();
    setSidebarHeight();
});

$(document).ready(function() { $('.btn-red').click(function() { return confirm($(".btn-red").attr("data-confirm")); }); });