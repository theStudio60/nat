<?php

    $posts = $args['posts'];
    $tags = $args['tags'];

    foreach(array_keys($tags) as $tag) {
        $tagHydrated = get_tag($tag);
        $tags[$tag] = ['id' => $tag, 'name' => $tagHydrated->name, 'slug' => $tagHydrated->slug, 'posts' => $tags[$tag]];
    }

    foreach($tags as $tag) {

        echo '<h1 class="title title--white title--centered border">'.$tag['name'].'</h1>';

        ?>

        <p>
            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Link with href
            </a>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Button with data-target
            </button>
        </p>
        <div class="collapse" id="collapseExample">
            <div class="card card-body">
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
        </div>
        <?php

        foreach($posts as $post) {
            if(in_array($post['id'], $tag['posts'])) {
                echo '<div id="thumbnail_section" class="section__row">';
                echo '<img src="'.$post["vignette"]["url"].'">';
                echo '</div>';
            }

        }

    }
