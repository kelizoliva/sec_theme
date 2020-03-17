 // SEC-specific CSS (needs to move to its own theme)
 $(document).ready(function () {
    $('#edit-field-organization-state-tid').SumoSelect({search: true, searchText: 'Search here.', placeholder: 'Select state(s)...', csvDispCount: 3 });
    $('#edit-field-topic-tid').SumoSelect({search: true, searchText: 'Search here', placeholder: 'Select topic(s)...', csvDispCount: 3 });
 });