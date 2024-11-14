<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Mon Application Laravel-React</title>
</head>
<body>
    <div id="app"></div>
    
    <!-- Inclure le fichier JS généré par React (par exemple via Laravel Mix) -->
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
