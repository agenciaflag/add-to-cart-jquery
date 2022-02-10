<script>
    jQuery(document).on("change input", ".qty", function() {
        var id = jQuery(this).closest(".product").attr('class').split(' ')[2];
        id_post = id.split('-')[1];
        // alert(jQuery( this ).val());
        var add_to_cart_button = jQuery(this).closest(".product").find(".button");
        src = add_to_cart_button.prop('href');
        add_to_cart_button.attr("href", "?add-to-cart=" + id_post + "&quantity=" + jQuery(this).val());
    });
</script>