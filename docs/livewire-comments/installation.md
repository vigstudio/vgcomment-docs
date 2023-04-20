# _Install Livewire Comments Package_

**In your terminal run:**
```bash
composer require vigstudio/livewire-comments
```

**Publish the assets files with:**
```bash
php artisan vendor:publish --tag=vgcomment-assets
php artisan vendor:publish --tag=vgcomment-assets-livewire
```


**Publish the assets files if you upgrade the package:**
```bash
php artisan vendor:publish --tag=vgcomment-assets --force
php artisan vendor:publish --tag=vgcomment-assets-livewire --force
```

**Or Add this to `composer.json` Auto Publish the assets files when upgrade the package:**
```bash
"scripts": {
        ...
        "post-update-cmd": [
            "@php artisan vendor:publish --tag=vgcomment-assets --force",
            "@php artisan vendor:publish --tag=vgcomment-assets-livewire --force",
        ],
        ...
    },
```

**You can publish the config with:**
```bash
php artisan vendor:publish --tag=vgcomment-config
```

## _Include the CSS_
Add to head section of your layout file.
```blade
@commentStyles
```

## _Include the JavaScript_
Add to bottom of body section of your layout file.
```blade
@commentScripts
```

## _Add the alpine JS library if you haven't already_
```blade
<script src="//unpkg.com/alpinejs" defer></script>
```

## _Config_
Edit prefix route in `config/vgcomment.php` file.
```php
    /*
    |--------------------------------------------------------------------------
    | Route Prefix
    |--------------------------------------------------------------------------
    |
    | This is the URI path where VgComment will be accessible from. Feel free to
    | change this path to anything you like.
    |
    */
    'prefix' => 'vgcomment',
```

Edit connection name in `config/vgcomment.php` file.
```php
    /*
    |--------------------------------------------------------------------------
    | Database Connection
    |--------------------------------------------------------------------------
    |
    | Here you may specify which of the database connections below you wish
    | to use as your default connection for all of your database work.
    |
    */
    'connection' => env('DB_CONNECTION', 'mysql'),
```

Edit table names in `config/vgcomment.php` file.

```php
    /*
    |--------------------------------------------------------------------------
    | Name of Tables in Database
    |--------------------------------------------------------------------------
    |
    | This is the name of the table that will be created by the migration and
    | used by the Comment model shipped with this package.
    |
    | "comments"    : Comments Table
    | "files"       : Files Attachment Table
    | "reactions"   : Reactions Table
    | "reports"     : Reports Table
    | "settings"    : Settings Table
    |
    */
    'table' => [
        'comments' => 'vgcomments',
        'files' => 'vgcomment_files',
        'reactions' => 'vgcomment_reactions',
        'reports' => 'vgcomment_reports',
        'settings' => 'vgcomment_settings',
    ],
```

Config Column or Attribute User Model in `config/vgcomment.php` file.
```php
        /*
    |--------------------------------------------------------------------------
    | Column of User Table for get Data
    |--------------------------------------------------------------------------
    |
    | This is the setting for column of user table for get data.
    | "user_column_name"  : Column name for get name user
    | "user_column_email" : Column name for get email user
    | "user_column_url"   : Column name for get url user
    |
    */
    'user_column_name' => 'name',
    'user_column_email' => 'email',
    'user_column_url' => 'url',
    'user_column_avatar_url' => 'avatar_url',
```

Set moderation user in `config/vgcomment.php` file.
```php
        /*
    |--------------------------------------------------------------------------
    | Users Manager Comments
    |--------------------------------------------------------------------------
    |
    | This is the setting for users manager comments.
    | 'guard' => [user_id]
    |
    | Example:
    | 'web' => [1, 2, 3]
    | 'api' => [1, 2, 3]
    |
    */
    'moderation_users' => [
        'web' => [1],
    ],
```

**Run the migrate command to create the necessary tables:**
Before running the migrate command, you can edit the `config/vgcomment.php` file to change the table names.
```bash
php artisan migrate
```

**Additionally you may want to clear the config, cache, etc:**
```bash
php artisan optimize:clear
php artisan optimize
```