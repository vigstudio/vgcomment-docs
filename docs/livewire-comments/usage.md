#  Usage

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
## _Add the Livewire Component_
Add the Livewire component to your view file.
If you don't have a pageId, you can use the current url as pageId.
```blade
<livewire:livewire-comments::comments
                        :key="Str::uuid()"
                        pageId="dashboard"
                    />
```

If you have Commentable models, you can use the model's id as pageId.
```blade
<livewire:livewire-comments::comments
                        :key="Str::uuid()"
                        pageId="{{ $post->id }}"
                        commentableType="{{ $post }}"
                    />
```