$(document).ready(function () {
    $('#add-prompt-form').submit(function (event) {
        event.preventDefault();
        const newPromptTitle = $('#new-title').val();
        const newPromptText = $('#new-prompt').val();
        const newPromptID = (promptsData.length + 1).toString().padStart(4, '0');
        const newPrompt = {
            "Prompt ID": newPromptID,
            "Titel": newPromptTitle,
            "Prompt": newPromptText
        };
        $.ajax({
            url: '/prompts',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(newPrompt),
            success: function () {
                $('#new-title').val('');
                $('#new-prompt').val('');
                alert('Prompt added successfully!');
            }
        });
    });
});
