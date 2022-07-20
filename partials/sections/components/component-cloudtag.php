<?php

    $posts = $args['posts'];
    $tags = $args['tags'];

    foreach(array_keys($tags) as $tag) {
        $tagHydrated = get_tag($tag);
        $tags[$tag] = ['id' => $tag, 'name' => $tagHydrated->name, 'slug' => $tagHydrated->slug, 'occurences' => $tags[$tag]];
    }

    usort($tags, function($a, $b) {
        return $b['occurences'] <=> $a['occurences'];
    });

    $spanTags = [];
    $nbTags = sizeof($tags);
    $i = 0;

    foreach($tags as $tag) {

        $sizeClass = 'bottomSize';
        $top = 1 - ($i / $nbTags);

        if($top > 0.75) {
            $sizeClass = 'topSize';
        } else if($top > 0.5) {
            $sizeClass = 'middleTopSize';
        } else if($top > 0.25) {
            $sizeClass = 'middleBottomSize';
        }

        $spanTags[] = '<span class="spanTag '.$sizeClass.'" data-id="'.$tag['id'].'">'.$tag['name'].'('.$tag['occurences'].')</span>';
        $i++;
    }

    shuffle($spanTags);

    echo '<div class="section__row" style="margin-bottom: 50px !important;">';
        foreach($spanTags as $spanTag) {
            echo $spanTag;
        }
    echo '</div>';

    if($args["listType"] = "Thumbnail") {
        get_template_part('/partials/sections/components/component', 'cloudtagthumbnail', $args);
    } else {
        get_template_part('/partials/sections/components/component', 'cloudtaglistimage', $args);
    }

