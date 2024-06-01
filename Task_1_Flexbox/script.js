document.addEventListener('DOMContentLoaded', () => {
    const flexContainer = document.getElementById('flex-container');
    const flexDirectionSelect = document.getElementById('flex-direction');
    const justifyContentSelect = document.getElementById('justify-content');
    const alignItemsSelect = document.getElementById('align-items');
    const cssOutputTextarea = document.getElementById('css-output');
    const copyButton = document.getElementById('copy-button');

    // Function to update the flex container styles
    function updateFlexContainer() {
        flexContainer.style.flexDirection = flexDirectionSelect.value;
        flexContainer.style.justifyContent = justifyContentSelect.value;
        flexContainer.style.alignItems = alignItemsSelect.value;

        // Generate CSS command based on selected options
        const cssCommand = `
            display: flex;
            flex-direction: ${flexDirectionSelect.value};
            justify-content: ${justifyContentSelect.value};
            align-items: ${alignItemsSelect.value};
        `;
        cssOutputTextarea.value = cssCommand.trim();
    }

    // Event listeners for each select element
    flexDirectionSelect.addEventListener('change', updateFlexContainer);
    justifyContentSelect.addEventListener('change', updateFlexContainer);
    alignItemsSelect.addEventListener('change', updateFlexContainer);

    // Initial update
    updateFlexContainer();

    // Copy CSS button functionality
    copyButton.addEventListener('click', () => {
        cssOutputTextarea.select();
        document.execCommand('copy');
        alert('CSS command copied to clipboard!');
    });

    
});
