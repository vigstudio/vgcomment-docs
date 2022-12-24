#  Configuration
All of the configuration options can be changed from config/vgcomment.php

## _Languages_
**You can publish the lang with:**
```bash
php artisan vendor:publish --tag=vgcomment-lang
```
You can change the language of the package by changing in `lang/vendor/vgcomment` folder.

## _Prefix_
You can change the prefix route of the package by changing the `prefix` in `config/vgcomment.php` file.

```php
'prefix' => 'vgcomments',
```

## _Comments must be moderated before being published_
You can change on/off the moderation in `config/vgcomment.php` file.
```php
'moderation' => false,
```

## _Add Moderation User_
This is the setting for comments must be moderated before being published.
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

## _Gravatar_
You can change on/off the gravatar in `config/vgcomment.php` file.
Set the imageset to use for avatars if no image is associated with the email hash, one of:
- '404': do not load any image if none is associated with the email hash, instead return an HTTP 404 (File Not Found) response
- 'mp': (mystery-person) a simple, cartoon-style silhouetted outline of a person (does not vary by email hash)
- 'identicon': a geometric pattern based on an email hash
- 'monsterid': a generated 'monster' with different colors, faces, etc
- 'wavatar': generated faces with differing features and backgrounds
- 'retro': awesome generated, 8-bit arcade-style pixelated faces
- 'robohash': a generated robot with different colors, faces, etc
- 'blank': a transparent PNG image (border added to HTML below for demonstration purposes)

```php
    /*
    |--------------------------------------------------------------------------
    | Gravatar Settings Imageset
    |--------------------------------------------------------------------------
    |
    | This is the setting for gravatar imageset.
    | Set the imageset to use for avatars if no image is associated with the email hash, one of:
    | '404': do not load any image if none is associated with the email hash, instead return an HTTP 404 (File Not Found) response
    | 'mp': (mystery-person) a simple, cartoon-style silhouetted outline of a person (does not vary by email hash)
    | 'identicon': a geometric pattern based on an email hash
    | 'monsterid': a generated 'monster' with different colors, faces, etc
    | 'wavatar': generated faces with differing features and backgrounds
    | 'retro': awesome generated, 8-bit arcade-style pixelated faces
    | 'robohash': a generated robot with different colors, faces, etc
    | 'blank': a transparent PNG image (border added to HTML below for demonstration purposes)
    |
    */
    'gravatar' => true,
    'gravatar_imageset' => 'wavatar',
```

## _Validation Rules for Comments Content length_
You can change the validation rules for comments content length in `config/vgcomment.php` file.
```php
    /*
    |--------------------------------------------------------------------------
    | Validation Rules for Comments Content length
    |--------------------------------------------------------------------------
    |
    | This is the validation rules for the comments content length.
    | min_length: Minimum number of characters allowed in a comment
    | max_length: Maximum number of characters allowed in a comment
    |
    */
    'min_length' => 10,
    'max_length' => 1000,
```

## _Throttle Settings for Comments requests (in minutes)_
You can change the throttle settings for comments requests in `config/vgcomment.php` file.
```php
    /*
    |--------------------------------------------------------------------------
    | Throttle Settings for Comments requests (in minutes)
    |--------------------------------------------------------------------------
    |
    | This is the throttle settings for the comments requests.
    | max_rate: The maximum number of comment post attempts for delaying further attempts
    | per_minutes: Allow users to access a given request :throttle_max_rate times :throttle_per_minutes
    |
    */
    'throttle_max_rate' => 10,
    'throttle_per_minutes' => 1,
```

## _Comments must be moderated before being published_
You can change on/off the moderation in `config/vgcomment.php` file.
```php
    /*
    |--------------------------------------------------------------------------
    | Comments must be moderated before being published
    |--------------------------------------------------------------------------
    |
    | This is the setting for comments must be moderated before being published.
    |
    */
    'moderation' => false,
```

## _Add Moderation User_
This is the setting for comments must be moderated before being published.
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

## _Moderation Keys_
```php 
/*
    |--------------------------------------------------------------------------
    | Moderation Keys
    |--------------------------------------------------------------------------
    |
    | This is the setting for moderation keys.
    | Every key is a word that will be held in the moderation queue.
    | If the comment contains one of the words declared in the array
    |
    */
    'moderation_keys' => [],
```
## _Spam Keys_
```php
    /*
    |--------------------------------------------------------------------------
    | Spam Keys
    |--------------------------------------------------------------------------
    |
    | This is the setting for spam keys.
    | Every key is a word that will be marked as spam.
    | If the comment contains one of the words declared in the array
    |
    */
    'blacklist_keys' => [],
```

## _Censor_
You can change on/off the censor in `config/vgcomment.php` file.
```php
    /*
    |--------------------------------------------------------------------------
    | Censor
    |--------------------------------------------------------------------------
    |
    | This is the setting for censor.
    | 'censor'      :     Enable or disable the censor
    | 'censors_text':     Array of words to censor
    |
    | Every key is a word that will be censored.
    | If the comment contains one of the words declared in the array
    | The list is not case-sensitive. If you censor "foo", then "FOO" and "Foo" are also censored.
    | Jokers are accepted: * matches any number of letters or digits, ? matches one character exactly.
    | A single space matches any number of whitespace characters, meaning that censoring "b u g" will also censor "bug" or "b u g".
    | Censored words are replaced with **** unless a replacement is specified when the censored word is added to the list.
    |
    */
    'censor' => true,
    'censors_text' => [],
```

## _Max Links in Comment_
You can change the max links in comment in `config/vgcomment.php` file.
```php
    /*
    |--------------------------------------------------------------------------
    | Max Links in Comment
    |--------------------------------------------------------------------------
    |
    | This is the setting for max links in comment.
    |
    */
    'max_links' => 10,
```
## _Duplicate Comments's content_
You can change on/off the duplicate comments's content in `config/vgcomment.php` file.
```php
    /*
    |--------------------------------------------------------------------------
    | Duplicate Comments's content
    |--------------------------------------------------------------------------
    |
    | This is the setting for duplicate comments's content.
    |
    */
    'duplicates_check' => false,
```

## _Change disk flysystem_
You can change the disk flysystem in `config/vgcomment.php` file.
```php
/*
    |--------------------------------------------------------------------------
    | Filesystem Disks
    |--------------------------------------------------------------------------
    |
    | This is the setting for filesystem disks.
    | disk_filesystem: The disk on which the files will be stored
    | "local"       : The local disk
    | "public"      : The public disk
    | "s3"          : The s3 disk
    | Setting the default disk name in the filesystems.php file
    |
    */
    'disk_filesystem' => config('filesystems.default', 'local'),
```

## _Upload File Rules_
You can change the upload file rules in `config/vgcomment.php` file.
```php
/*
|--------------------------------------------------------------------------
| Upload Rules
|--------------------------------------------------------------------------
|
| This is the setting for upload rules.
| "upload_rules"            : Rules for upload
| "upload_rules_max"        : Maximum number of files to upload
|
*/
'upload_rules' => ['max:5120', 'mimes:doc,pdf,jpg,png,jpge,gif'],
'upload_rules_max' => 5,
```

## _Not Safe For Work Upload Image_
You can change on/off the NSFW image upload check in `config/vgcomment.php` file.
Use Api form sightengine.com to check image.
```php
/*
|--------------------------------------------------------------------------
| Not Safe For Work
|--------------------------------------------------------------------------
|
| This is the setting for not safe for work.
| "nsfw" : Block NSFW
| "nsfw_api" : Api form sightengine.com
| "user" : User for api
| "key" : Key for api
|
*/
'nsfw' => false,
'nsfw_api_user' => '',
'nsfw_api_key' => '',
```

## _reCAPTCHA_
reCAPTCHA is a free service from Google that helps protect websites from spam and abuse. It uses advanced risk analysis techniques to tell humans and bots apart. With reCAPTCHA, you can be sure that only humans are interacting with your site.

I use reCAPTCHA v3 to prevent spam.

You can change on/off and change key/secret the reCAPTCHA key in `config/vgcomment.php` file.

```php
/*
|--------------------------------------------------------------------------
| reCAPTCHA
|--------------------------------------------------------------------------
|
| This is the setting for reCAPTCHA.
| "recaptcha" : Enable reCAPTCHA
| "recaptcha_key" : Key for api
| "recaptcha_secret" : Secret for api
|
*/
'recaptcha' => false,
'recaptcha_key' => env('RECAPTCHA_KEY', ''),
'recaptcha_secret' => env('RECAPTCHA_SECRET', ''),
```


## _Real Time_
(Coming soon)
