$(document).ready(function(){
    let counter = 0;

    $('#but').on('click', function(){
        let Element = $('#in-field').val();
        if(Element == ''){
			$('#danger').show(0).delay(2000).hide(0);
		}
		else{
			$('#todo-list').append(`<li class="todo">${Element}</li>`);	
			$('#count').text(++counter);
			$('#in-field').val('');
		}
    })

    $('#todo-list').on('click','.todo',function(){
        $('#done-list').append($('<li class="done">'+$(this).text()+'</li>'));
        $(this).remove();
        $('#count').text(--counter);
    })

    $('#done-list').on('click','.done' ,function() {
        $('#todo-list').append($('<li class="todo">'+$(this).text()+'</li>'));
        $(this).remove();
        $('#count').text(++counter);
    })
});