(function($, window, document, undefined) {
    $.imageMapProLiteLaunchPremiumWindow = function() {
        var html = '';

        html += '<div id="lite-wrap">';
        html += '    <div id="lite-overlay"></div>';
        html += '    <div id="lite-window">';
        html += '        <div id="lite-window-close-button">';
        html += '            <i class="fa fa-times" aria-hidden="true"></i>';
        html += '        </div>';

        html += '        <div id="lite-window-content">';
        html += '            <div id="lite-logo"></div>';
        html += '            <h1>Premium Feature</h1>';
        html += '            <p><i class="fa fa-heart" aria-hidden="true"></i>&nbsp;&nbsp;Thank you for using Image Map Pro!&nbsp;&nbsp;<i class="fa fa-heart" aria-hidden="true"></i>';
        html += '            <br>This feature requires a Regular License, which you can purchase from';
        html += '            CodeCanyon for just $24.';

        html += '            <br>By purchasing the full version of Image Map Pro you get access to:</p>';

        html += '            <div id="lite-premium-features">';
        html += '                <div class="lite-premium-feature">';
        html += '                    <div class="lite-premium-feature-icon" id="lite-premium-feature-icon-polygon"></div>';
        html += '                    <p>Custom Polygon<br>Shapes</p>';
        html += '                </div>';
        html += '                <div class="lite-premium-feature">';
        html += '                    <div class="lite-premium-feature-icon" id="lite-premium-feature-icon-builder"><i class="fa fa-comment" aria-hidden="true"></i></div>';
        html += '                    <p>Content Builder<br>for Tooltips</p>';
        html += '                </div>';
        html += '                <div class="lite-premium-feature">';
        html += '                    <div class="lite-premium-feature-icon" id="lite-premium-feature-icon-api"><i class="fa fa-code" aria-hidden="true"></i></div>';
        html += '                    <p>JavaScript &amp;<br>HTML API</p>';
        html += '                </div>';
        html += '                <div class="lite-premium-feature">';
        html += '                    <div class="lite-premium-feature-icon" id="lite-premium-feature-icon-import-export"><i class="fa fa-download" aria-hidden="true"></i></div>';
        html += '                    <p>Image Map<br>Import</p>';
        html += '                </div>';
        html += '                <div class="lite-premium-feature">';
        html += '                    <div class="lite-premium-feature-icon" id="lite-premium-feature-icon-support"><i class="fa fa-life-ring" aria-hidden="true"></i></div>';
        html += '                    <p>6 Months<br>Customer Support</p>';
        html += '                </div>';
        html += '            </div>';
        html += '        </div>';

        html += '        <div class="lite-window-buttons">';
        html += '            <div class="lite-window-button" id="lite-window-button-try">';
        html += '                <a href="https://webcraftplugins.com/image-map-pro/?platform=wordpress&utm_source=lite-version&utm_medium=try-button" target="_blank">';
        html += '                    <div class="lite-window-button-inner">';
        html += '                        Try for <span>FREE</span><p>With all features and your own image</p>';
        html += '                    </div>';
        html += '                </a>';
        html += '            </div>';
        html += '            <div class="lite-window-button" id="lite-window-button-buy"><a href="https://codecanyon.net/item/image-map-pro-for-wordpress-interactive-image-map-builder/2826664?ref=nickys&utm_source=lite-version&utm_medium=buy-button" target="_blank"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Buy Now</a></div>';
        html += '        </div>';
        html += '    </div>';
        html += '</div>';

        $('body').append(html);

        setTimeout(function() {
            $('#lite-wrap').addClass('visible');
        }, 1);
    }

    $.imageMapProLiteLaunchBanner = function() {
        var html = '';

        html += '<div id="lite-banner-wrap">';
        html += '<div id="lite-banner">';
        html += '   <div id="lite-banner-close"><i class="fa fa-times" aria-hidden="true"></i></div>';
        html += '   Thank you for trying Image Map Pro! Purchasing a license will get you access to all of its features and 6 months customer support.';
        html += '   <div class="lite-banner-button" id="lite-banner-button-buy-now"><a href="https://codecanyon.net/item/image-map-pro-for-wordpress-interactive-image-map-builder/2826664?ref=nickys&utm_source=lite-version&utm_medium=banner-buy-button" target="_blank"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Buy Now</a></div>';
        html += '   <div class="lite-banner-button" id="lite-banner-button-learn-more"><a href="https://webcraftplugins.com/image-map-pro/?platform=wordpress&utm_source=lite-version&utm_medium=banner-learn-more-button" target="_blank">Learn More</a></div>';
        html += '</div>';
        html += '</div>';

        $('#wcp-editor').append('');

        setTimeout(function() {
            $('#lite-banner').addClass('visible');
        }, 3000);
    }

    $(document).ready(function() {
        $(document).on('click', '#lite-window-close-button', function() {
            $('#lite-wrap').removeClass('visible');
            setTimeout(function() {
                $('#lite-wrap').remove();
            }, 200);
        });
        $(document).on('click', '#lite-banner-close', function() {
            $('#lite-banner').removeClass('visible');
            setTimeout(function() {
                $('#lite-banner-wrap').remove();
            }, 250);
        });
    });
})(jQuery, window, document);
(function($, window, document, undefined) {
	
    $.imageMapProShapeDefaults = {
		id: 'spot-0',
		title: '',
		type: 'spot',
		x: -1,
		y: -1,
		width: 44,
		height: 44,
		actions: {
			mouseover: 'show-tooltip',
			click: 'no-action',
			link: '#',
			open_link_in_new_window: 1
		},
		default_style: {
			opacity: 1,
			border_radius: 50,
			background_color: '#000000',
			background_opacity: 0.4,
			border_width: 0,
			border_style: 'solid',
			border_color: '#ffffff',
			border_opacity: 1,

			// poly-specific
			fill: '#000000',
			fill_opacity: 0.4,
			stroke_color: '#ffffff',
			stroke_opacity: 0.75,
			stroke_width: 0,
			stroke_dasharray: '10 10',
			stroke_linecap: 'round',

			// spot-specific
			use_icon: 1,
			icon_type: 'library', // or 'custom'
			icon_svg_path: 'M409.81,160.113C409.79,71.684,338.136,0,249.725,0C161.276,0,89.583,71.684,89.583,160.113     c0,76.325,119.274,280.238,151.955,334.638c1.72,2.882,4.826,4.641,8.178,4.641c3.351,0,6.468-1.759,8.168-4.631     C290.545,440.361,409.81,236.438,409.81,160.113z M249.716,283.999c-68.303,0-123.915-55.573-123.915-123.895     c0-68.313,55.592-123.895,123.915-123.895s123.876,55.582,123.876,123.895S318.029,283.999,249.716,283.999z',
			icon_svg_viewbox: '0 0 499.392 499.392',
			icon_fill: '#000000',
			icon_url: '',
			icon_is_pin: 1,
			icon_shadow: 0
		},
		mouseover_style: {
			opacity: 1,
			border_radius: 50,
			background_color: '#ffffff',
			background_opacity: 0.4,
			border_width: 0,
			border_style: 'solid',
			border_color: '#ffffff',
			border_opacity: 1,

			// poly-specific
			fill: '#ffffff',
			fill_opacity: 0.4,
			stroke_color: '#ffffff',
			stroke_opacity: 0.75,
			stroke_width: 0,
			stroke_dasharray: '10 10',
			stroke_linecap: 'round',

			// spot-specific
			icon_fill: '#000000'
		},
		tooltip_style: {
			border_radius: 5,
			padding: 20,
			background_color: '#000000',
			background_opacity: 0.9,
			position: 'top',
			width: 300,
			auto_width: 0
		},
		tooltip_content: {
			content_type: 'plain-text',
			plain_text: 'Lorem Ipsum',
			plain_text_color: '#ffffff',
			squares_settings: {
				containers: [{
					id: "sq-container-403761",
					settings: {
						elements: [{
							settings: {
								name: "Paragraph",
								iconClass: "fa fa-paragraph"
							}
						}]
					}
				}]
			}
		},
		points: [],
		vs: []
	};

    $.imageMapProEditorDefaults = {
		id: 0,
		editor: {
			previewMode: 0,
			selected_shape: -1,
			tool: 'spot',
			state: {
				dragging: false
			}
		},
		runtime: {
			is_fullscreen: 0
		},
		general: {
			name: '',
			shortcode: '',
			width: 1280,
			height: 776,
			naturalWidth: 1280,
			naturalHeight: 776,
			responsive: 1,
			preserve_quality: 1,
			pageload_animation: 'none',
			late_initialization: 0,
			center_image_map: 0
		},
		image: {
			url: 'https://webcraftplugins.com/uploads/image-map-pro/demo.jpg',
		},
		fullscreen: {
			enable_fullscreen_mode: 0,
			start_in_fullscreen_mode: 0,
			fullscreen_background: '#000000',
			fullscreen_button_position: 1,
			fullscreen_button_type: 'icon_and_text',
			fullscreen_button_color: '#ffffff',
			fullscreen_button_text_color: '#222222'
		},
		tooltips: {
			sticky_tooltips: 0,
			constrain_tooltips: 1,
			tooltip_animation: 'grow',
			fullscreen_tooltips: 'none', // none / mobile / always,
		}, 
		custom_code: {
			custom_css: '',
			custom_js: ''
		},
		spots: []
	};
})(jQuery, window, document);
/*

TO DO:

- add lots of elements (as many as possible from Bootstrap)
- create test file with empty editor
- create test file for saving/loading editor state
- create test file for editor and content side-by-side
- create how to use guide
- create API docs

*/

// Squares
// Description: Interactive and embeddable HTML content builder.
// Author: Nikolay Dyankov
// License: MIT

/*

Usage

This script is meant to be embedded in a back-end site builder or similar project.
The usage scenario is the following (for now):

1. Add a class "squares" to the containers that should have editable content
2. Call an API to get the current state of the editor to store it.
3. Call an API to get the generated HTML content for the front-end
4. Include the "squares.css" file in the front-end
5. Insert the previously generated HTML code

*/

;(function ($, window, document, undefined) {

    var editorWindow = undefined, registeredElements = new Array(), registeredControls = new Array(), editors = new Array();

    // =========================================================================
    // [API]

    // Create an editor with previously stored settings in JSON format.
    // The "host" parameter is the root element of the editor. It contains
    // (or will contain a reference to the JS class instance).
    $.squaresInitWithSettings = function(host, settings) {
        // If the host already has an editor attached, remove the editor from the editors array
        if (host.data.editor) {
            for (var i=0; i<editors.length; i++) {
                if (editors[i].id == host.data.editor.id) {
                    editors.splice(i, 1);
                }
            }
        }

        // Init the new editor
        var squaresInstance = new Squares(host, settings);
        editors.push(squaresInstance);
    };

    // Gets the current state as JS object of an editor, selected by its host
    $.squaresGetCurrentSettings = function(host) {
        return host.data.editor.getCompressedSettings();
    };

    // Called at the end to generate the final HTML code to be inserted in the
    // front-end.
    $.squaresGenerateHTML = function(host) {
        return host.data.editor.generateHTML();
    };

    /*
    Adds a new element to the catalog.
    Required options for Element registration:
    - name: sematic name for the Element
    - iconClass: complete class name from Font Awesome
    - content(): callback function which returns HTML code to be rendered
    - (optional) extendOptions - array containing additional controls for
    the element. For example:

    */
    $.squaresRegisterElement = function(options) {
        registeredElements.push(options);
    };

    /*
    Registers a control that can be added to the element settings window
    Required options for Control registration:
    - type: int, float, text, color, etc
    - getValue: getter for the value of the control
    - setValue: setter for the value of the control
    - HTML: returns the HTML of the control
    - init: create events associated with this specific control element, etc
    */

    $.squaresRegisterControl = function(options) {
        registeredControls.push(options);
    }

    $.squaresShowEditorWindow = function(x, y) {
        editorWindow.show(x, y);
    }
    $.squaresHideEditorWindow = function() {
        editorWindow.hide();
    }
    $.squaresExtendElementDefaults = function(extendedDefaults) {
        elementDefaultSettings = $.extend(true, {}, elementDefaultSettings, extendedDefaults);
    }

    // [END API]
    // =========================================================================

    $(document).ready(function() {
        // On document load, loop over all elements with the "squares" class
        // and initialize a Squares editor on them.
        $('.squares').each(function() {
            var squaresInstance = new Squares(this);
            editors.push(squaresInstance);
            $(this).data.editor = squaresInstance;
        });

        // Create the editor window


        // Test initWithSettings
        // var s = '{"containers":[{"id":"sq-container-220041","settings":{"elements":[{"settings":{"name":"Heading","iconClass":"fa fa-header"},"options":{"heading":{"heading":"h1"}}}]}},{"id":"sq-container-352351","settings":{"elements":[{"settings":{"name":"Paragraph","iconClass":"fa fa-font"},"options":{"layout":{"column_span":"6"},"text":{"font_size":"18"}}},{"settings":{"name":"Paragraph","iconClass":"fa fa-font"},"options":{"layout":{"column_span":"6"},"style":{"background_color":"#75fa00","opacity":0.6321428571428571,"border_opacity":0.8571428571428571}}},{"settings":{"name":"Button","iconClass":"fa fa-hand-pointer-o"}}]}},{"id":"sq-container-307581","settings":{"elements":[{"settings":{"name":"Image","iconClass":"fa fa-picture-o"}},{"settings":{"name":"Video","iconClass":"fa fa-video-camera"}},{"settings":{"name":"YouTube","iconClass":"fa fa-youtube"}}]}}]}';
        // var s = '{"containers":[{"id":"sq-container-229951","settings":{"elements":[{"settings":{"name":"Heading","iconClass":"fa fa-header"}}]}}]}';
        // var s = '{"containers":[{"id":"sq-container-718651","settings":{"elements":[{"settings":{"name":"Heading","iconClass":"fa fa-header"},"options":{"heading":{"text":"Lorem Ipsum31231","heading":"h2"}}},{"settings":{"name":"Paragraph","iconClass":"fa fa-font"},"options":{"text":{"text":"Pellentes2131231ue habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}}}]}}]}';
        // var s = '{"containers":[{"id":"sq-container-298901","settings":{"elements":[{"settings":{"name":"Heading","iconClass":"fa fa-header"}},{"settings":{"name":"Image","iconClass":"fa fa-picture-o"},"options":{"layout":{"column_span":{"lg":{"class":"sq-col-lg-6"}}}}},{"settings":{"name":"Paragraph","iconClass":"fa fa-font"},"options":{"layout":{"column_span":{"lg":{"class":"sq-col-lg-6"}}}}}]}}]}';
        // var s = '{"containers":[{"id":"sq-container-335181","settings":{"elements":[{"settings":{"name":"Heading","iconClass":"fa fa-header"},"options":{"general":{"id":"element-1-id","classes":"some-class","css":"background: red;"},"layout":{"box_model":{"margin":{"top":20,"bottom":20}},"use_grid":0},"font":{"font_family":"serif","font_size":"39","font_style":"italic","line_height":"auto","text_color":"#ffffff","text_align":"center","text_decoration":"underline","text_transform":"uppercase"},"style":{"background_color":"#f5fc58","background_opacity":0.5571428571428572,"opacity":0.29642857142857143,"box_shadow":"0 0 10px black","border_width":2,"border_style":"dashed","border_color":"#00f92b","border_opacity":0.5285714285714286,"border_radius":100},"heading":{"heading":"h1"}}},{"settings":{"name":"Paragraph","iconClass":"fa fa-paragraph"},"options":{"layout":{"column_span":{"lg":{"class":"sq-col-lg-6"}}}}},{"settings":{"name":"Image","iconClass":"fa fa-camera"},"options":{"layout":{"column_span":{"lg":{"class":"sq-col-lg-6"}}}}},{"settings":{"name":"Button","iconClass":"fa fa-link"}}]}}]}';
        // $.squaresInitWithSettings($('.squares').first(), s);
        // $.squaresInitWithSettings($('.squares').first());
    });

    // The bulk of the functionality goes here.
    // Squares is the "root" class.
    var squaresDefaultSettings = {
        containers: []
    };

    function Squares(host, settings) {
        var that = this;

        // "host" is the direct parent of the embedded editor
        this.host = $(host);
        this.id = Math.floor(Math.random() * 9999) + 1;
        this.settings = $.extend(true, {}, squaresDefaultSettings);

        this.contentRoot = undefined;
        this.root = undefined;
        this.Window = undefined;

        // Drag general flags
        this.ix = 0; // initial dragged object x
        this.iy = 0; // initial dragged object x
        this.iex = 0; // initial event x
        this.iey = 0; // initial event y

        // Drag container flags
        this.shouldStartDraggingContainer = false;
        this.didStartDraggingContainer = false;
        this.draggingContainer = false;

        // Drag container vars
        this.draggedContainerIndex = 0;
        this.draggedContainer = undefined;
        this.dummyContainer = undefined;
        this.containerReorderMap = undefined;
        this.newIndexOfDraggedContainer = 0;

        // Reorder elements
        this.shouldStartDraggingElement = false;
        this.didStartDraggingElement = false;
        this.draggingElement = false;
        this.draggedElementIndex = -1;
        this.draggedElementContainerIndex = -1;
        this.elementDragMap = undefined;
        this.dummyElement = undefined;
        this.newIndexOfDraggedElement = -1;
        this.draggedElementWidth = -1;

        // Selected Element ID
        this.selectedElementID = undefined;

        this.loadSettings(settings);
        this.init();
    };
    Squares.prototype.loadSettings = function(settings) {
        // When settings are loaded, we make sure containers and elements
        // have the correct prototype.
        if (settings) {
            // Iterate over all containers
            if (settings.containers) {
                for (var i=0; i<settings.containers.length; i++) {
                    var c = settings.containers[i];

                    // Add a container and store a reference
                    var newContainer = this.appendContainer();

                    // Iterate over all elements of the container
                    if (c.settings) {
                        for (var j=0; j<c.settings.elements.length; j++) {
                            var e = c.settings.elements[j];

                            // Get the catalog index of the element with the same name
                            // and insert it in the container
                            for (var k=0; k<registeredElements.length; k++) {
                                if (e.settings.name == registeredElements[k].name) {
                                    newContainer.insertElement(k, j, e.options);
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    Squares.prototype.init = function () {
        // Save a reference in the host to the Editor
        this.host.data.editor = this;

        // Insert a container to hold everything
        this.host.html('');
        this.host.append('<div class="sq-root-container"></div>');
        this.root = this.host.find('.sq-root-container');

        // Insert a container to hold all the user generated content
        this.host.find('.sq-root-container').append('<div class="sq-content"></div>');
        this.contentRoot = this.host.find('.sq-content');

        this.contentRoot.attr('id', 'sq-editor-' + this.id);

        this.addUI();
        this.addEvents();
        this.redraw();

        // Editor window
        editorWindow = new EditorWindow();
        editorWindow.hide();
    };
    Squares.prototype.redraw = function () {
        // This is the global redraw function.
        // It is called only when a change in hierarchy is made.
        // It is responsible for creating the root element for each
        //      container and element, telling those objects that they have a new
        //      root element, and calling the "render" function on them.

        this.contentRoot.html('');

        for (var i=0; i<this.settings.containers.length; i++) {
            var c = this.settings.containers[i];

            // Append a container
            var html = '<div class="sq-container" data-index="'+ i +'" id="'+ c.id +'"></div>';

            this.contentRoot.append(html);

            // Set the container's "root" object
            var containerRoot = $('#' + c.id);

            // Call the render() function of the container
            c.render();
            c.appendEditorControls();

            for (var j=0; j<c.settings.elements.length; j++) {
                var e = c.settings.elements[j];

                // Append an element to the container
                var html = '<div class="sq-element" data-index="' + j + '" id="'+ e.id +'"></div>';
                containerRoot.append(html);

                // Call the render() function of the element
                e.render();
                e.appendEditorControls();
            }

            containerRoot.append('<div class="squares-clear"></div>');
        }

        // If there are no containers, hide the "elements button"
        if (this.settings.containers.length == 0) {
            this.root.find('.sq-add-elements').hide();
        } else {
            this.root.find('.sq-add-elements').show();
        }

        // Re-select the currently selected element
        if (this.selectedElementID) {
            this.selectElement(this.selectedElementID);
        }
    };
    Squares.prototype.addEvents = function() {
        var self = this;

        // Button for appending a new container
        this.host.find('.sq-add-container').off('click');
        this.host.find('.sq-add-container').on('click', function() {
            self.appendContainer();
            self.redraw();
        });

        // Delete container button
        $(document).off('mouseout', '#sq-editor-' + this.id + ' .sq-container');
        $(document).on('mouseout', '#sq-editor-' + this.id + ' .sq-container', function(e) {
            if ($(e.target).closest('.sq-container-confirm-delete').length == 0 && !$(e.target).hasClass('sq-container-confirm-delete') &&
                $(e.target).closest('.sq-container-delete').length == 0 && !$(e.target).hasClass('sq-container-delete')) {
                $('.sq-container-confirm-delete').hide();
            }
        });
        $(document).off('click', '#sq-editor-' + this.id + ' .sq-container-delete');
        $(document).on('click', '#sq-editor-' + this.id + ' .sq-container-delete', function() {
            $(this).siblings('.sq-container-confirm-delete').show();
        });
        $(document).off('click', '#sq-editor-' + this.id + ' .sq-container-confirm-delete');
        $(document).on('click', '#sq-editor-' + this.id + ' .sq-container-confirm-delete', function() {
            self.deleteContainer($(this).data('container-id'));
            self.redraw();
        });

        // Reorder containers and elements functionality

        // Containers
        $(document).off('mousedown', '#sq-editor-'+ self.id +' .sq-container-move');
        $(document).on('mousedown', '#sq-editor-'+ self.id +' .sq-container-move', function(e) {
            // If there is just one container, then don't do anything
            if (self.settings.containers.length <= 1) return;

            self.iex = e.pageX;
            self.iey = e.pageY;
            self.shouldStartDraggingContainer = true;
            self.draggedContainerIndex = $(e.target).closest('.sq-container').data('index');
            self.draggedContainer = self.host.find('.sq-container[data-index='+ self.draggedContainerIndex +']');
        });


        // Elements
        $(document).off('mousedown', '#sq-editor-'+ self.id +' .sq-element');
        $(document).on('mousedown', '#sq-editor-'+ self.id +' .sq-element', function(e) {
            // If there is just one container with one element, then don't do anything
            if (self.settings.containers.length == 1 && self.settings.containers[0].settings.elements.length == 1) return;

            self.iex = e.pageX;
            self.iey = e.pageY;
            self.shouldStartDraggingElement = true;
            self.draggedElement = $(this);
            self.draggedElementIndex = $(this).data('index');
            self.draggedElementContainerIndex = $(this).closest('.sq-container').data('index');
        });

        $(document).off('mousemove.'+ self.id);
        $(document).on('mousemove.'+ self.id, function(e) {
            // Drag container
            if (self.shouldStartDraggingContainer && !self.didStartDraggingContainer) {
                self.startDraggingContainer(e);
            }

            if (self.draggingContainer) {
                self.dragContainer(e);
            }

            // Drag element
            if (self.shouldStartDraggingElement && !self.didStartDraggingElement) {
                self.startDraggingElement(e);
            }

            if (self.draggingElement) {
                self.dragElement(e);
            }
        });
        $(document).off('mouseup.'+ self.id);
        $(document).on('mouseup.'+ self.id, function(e) {
            if (self.draggingContainer) {
                self.endDraggingContainer(e);
            }
            if (self.draggingElement) {
                self.endDraggingElement(e);
            }

            // Clean up
            self.shouldStartDraggingContainer = false;
            self.didStartDraggingContainer = false;
            self.draggingContainer = false;

            self.draggedContainerIndex = 0;
            self.draggedContainer = undefined;
            self.dummyContainer = undefined;

            self.shouldStartDraggingElement = false;
            self.didStartDraggingElement = false;
            self.draggingElement = false;
            self.draggedElementIndex = -1;
            self.draggedElementContainerIndex = -1;
        });

        // [end] Reorder containers functionality

        // Delete element button
        $(document).off('click.' + this.id, '#sq-delete-element-button');
        $(document).on('click.' + this.id, '#sq-delete-element-button', function() {
            var elementID = $(this).data('element-id');

            // Search for the element
            for (var i=0; i<self.settings.containers.length; i++) {
                var c = self.settings.containers[i];

                for (var j=0; j<c.settings.elements.length; j++) {
                    if (c.settings.elements[j].id == elementID) {
                        c.removeElementAtIndex(j);
                        self.redraw();
                    }
                }
            }
        });
    };
    Squares.prototype.startDraggingContainer = function(e) {
        if (Math.abs(e.pageX - this.iex) > 5 || Math.abs(e.pageY - this.iey) > 5) {
            this.draggingContainer = true;
            this.didStartDraggingContainer = true;

            // Create a virtual map of the current containers, where
            // every possible position of the dragged container is
            // precalculated
            this.containerReorderMap = new Array();
            var draggedContainerY = this.draggedContainer.outerHeight()/2;

            for (var i=0; i<this.settings.containers.length; i++) {
                var y = draggedContainerY;

                // Add the height of all previous containers to calculate
                // the new virtual Y position of the dragged container
                // for the current index
                for (var j=i-1; j>=0; j--) {
                    var index = j;

                    // The height of the dragged container must not be
                    // included in the calculation.
                    // If the current index is the index of the dragged
                    // container, then increase the index
                    if (j >= this.draggedContainerIndex) {
                        index++;
                    }

                    var c = this.host.find('.sq-container[data-index='+ index +']');
                    y += c.outerHeight();
                }

                this.containerReorderMap.push(y);
            }

            // Position the container absolutely
            this.ix = this.draggedContainer.position().left;
            this.iy = this.draggedContainer.position().top;

            this.draggedContainer.css({
                position: 'absolute',
                left: this.ix,
                top: this.iy,
                width: this.draggedContainer.width()
            });

            this.draggedContainer.addClass('sq-dragging');

            // Insert a dummy container
            this.draggedContainer.after('<div id="sq-dummy-container"></div>');
            this.dummyContainer = $('#sq-dummy-container');
            this.dummyContainer.css({
                width: this.draggedContainer.outerWidth(),
                height: this.draggedContainer.outerHeight()
            });
        }
    }
    Squares.prototype.dragContainer = function(e) {
        this.draggedContainer.css({
            left: this.ix + e.pageX - this.iex,
            top: this.iy + e.pageY - this.iey
        });

        var y = this.draggedContainer.position().top + this.draggedContainer.outerHeight()/2;
        var closestDeltaY = 999999;
        var closestIndex = undefined;

        for (var i=0; i<this.containerReorderMap.length; i++) {
            if (Math.abs(y - this.containerReorderMap[i]) < closestDeltaY) {
                closestDeltaY = Math.abs(y - this.containerReorderMap[i]);
                closestIndex = i;
            }
        }

        // If the closest index changed, move the dummy container to the
        // new position.
        if (closestIndex != this.newIndexOfDraggedContainer) {
            this.newIndexOfDraggedContainer = closestIndex;

            this.dummyContainer.remove();

            if (this.newIndexOfDraggedContainer < this.draggedContainerIndex) {
                this.host.find('.sq-container[data-index='+ this.newIndexOfDraggedContainer +']').before('<div id="sq-dummy-container"></div>');
            } else {
                this.host.find('.sq-container[data-index='+ this.newIndexOfDraggedContainer +']').after('<div id="sq-dummy-container"></div>');
            }

            this.dummyContainer = $('#sq-dummy-container');
            this.dummyContainer.css({
                width: this.draggedContainer.outerWidth(),
                height: this.draggedContainer.outerHeight()
            });
        }
    }
    Squares.prototype.endDraggingContainer = function(e) {
        // Switch places of containers
        if (this.draggedContainerIndex != this.newIndexOfDraggedContainer) {
            var a = this.settings.containers[this.draggedContainerIndex];
            this.settings.containers.splice(this.draggedContainerIndex, 1);
            this.settings.containers.splice(this.newIndexOfDraggedContainer, 0, a);
        }

        this.redraw();
    }
    Squares.prototype.startDraggingElement = function(e) {
        if (Math.abs(e.pageX - this.iex) > 5 || Math.abs(e.pageY - this.iey) > 5) {
            this.draggingElement = true;
            this.didStartDraggingElement = true;

            // Save the starting posiiton of the draggedElement
            this.ix = this.draggedElement.offset().left;
            this.iy = this.draggedElement.offset().top;

            // Create a virtual map of all possible positions of the element
            // in each container
            this.elementDragMap = new Array();

            var draggedElementObject = this.settings.containers[this.draggedElementContainerIndex].settings.elements[this.draggedElementIndex];

            this.draggedElementWidth = getWidthOfElementInGrid(draggedElementObject.controls['layout']['column_span'].getVal());
            this.draggedElementWidth = this.draggedElement.outerWidth();

            var dummyElementHTML = '<div id="sq-dummy-element-tmp" style="width: '+ this.draggedElementWidth +'px; height: '+ this.draggedElement.outerHeight() +'px;"></div>';

            this.draggedElement.hide();
            for (var i=0; i<this.settings.containers.length; i++) {
                var c = this.settings.containers[i];

                // If the container doesn't have any elements, insert just one
                // dummy element and move on to next container
                if (c.settings.elements.length == 0) {
                    this.host.find('.sq-container[data-index='+i+']').append(dummyElementHTML);
                    var el = $('#sq-dummy-element-tmp');
                    this.elementDragMap.push({ x: el.offset().left + el.width()/2, y: el.offset().top + el.height()/2, containerIndex: i, elementIndex: 0 });
                    $('#sq-dummy-element-tmp').remove();
                }

                for (var j=0; j<c.settings.elements.length; j++) {
                    this.host.find('.sq-container[data-index='+i+']').find('.sq-element[data-index='+j+']').before(dummyElementHTML);
                    var el = $('#sq-dummy-element-tmp');
                    this.elementDragMap.push({ x: el.offset().left + el.width()/2, y: el.offset().top + el.height()/2, containerIndex: i, elementIndex: j });
                    $('#sq-dummy-element-tmp').remove();

                    if (j == c.settings.elements.length - 1) {
                        this.host.find('.sq-container[data-index='+i+']').find('.sq-element[data-index='+j+']').after(dummyElementHTML);
                        var el = $('#sq-dummy-element-tmp');
                        this.elementDragMap.push({ x: el.offset().left + el.width()/2, y: el.offset().top + el.height()/2, containerIndex: i, elementIndex: j + 1 });
                        $('#sq-dummy-element-tmp').remove();
                    }
                }
            }

            this.draggedElement.show();

            // Insert a dummy element
            this.draggedElement.after('<div id="sq-dummy-element"><div id="sq-dummy-element-inner"></div></div>');
            this.dummyElement = $('#sq-dummy-element');
            this.dummyElement.css({
                width: this.draggedElementWidth,
                height: this.draggedElement.outerHeight(),
                margin: this.draggedElement.css('margin'),
                padding: 0
            });

            // Position the element absolutely

            var draggedElementWidth = this.draggedElement.width();
            var draggedElementHeight = this.draggedElement.height();
            var draggedElementHTML = this.draggedElement.clone().attr('id', 'sq-dragged-element').wrap('<div>').parent().html();

            this.draggedElement.hide();

            $('body').prepend(draggedElementHTML);
            this.draggedElement = $('#sq-dragged-element');

            this.draggedElement.css({
                position: 'absolute',
                left: this.ix,
                top: this.iy,
                width: draggedElementWidth,
                height: draggedElementHeight
            });
            this.draggedElement.addClass('sq-dragging');
        }
    }
    Squares.prototype.dragElement = function(e) {
        this.draggedElement.css({
            left: this.ix + e.pageX - this.iex,
            top: this.iy + e.pageY - this.iey
        });

        // Find the closest virtual position to the mouse position
        var closestIndex = 0;
        var closestDistance = 999999;

        for (var i=0; i<this.elementDragMap.length; i++) {
            var d = Math.abs(e.pageX - this.elementDragMap[i].x) + Math.abs(e.pageY - this.elementDragMap[i].y);
            if (d < closestDistance) {
                closestDistance = d;
                closestIndex = i;
            }
        }

        if (closestIndex != this.newIndexOfDraggedElement) {
            this.newIndexOfDraggedElement = closestIndex;

            // Remove the current dummy element
            $('#sq-dummy-element').remove();

            // Insert a new dummy element at the container/element index
            var containerIndex = this.elementDragMap[this.newIndexOfDraggedElement].containerIndex;
            var elementIndex = this.elementDragMap[this.newIndexOfDraggedElement].elementIndex;
            var c = this.host.find('.sq-container[data-index='+ containerIndex +']');
            // If the index of the dummy element is bigger than the number
            // of elements in that container, insert the dummy at the end
            if (this.settings.containers[containerIndex].settings.elements.length == 0) {
                c.prepend('<div id="sq-dummy-element"><div id="sq-dummy-element-inner"></div></div>');
            } else if (elementIndex == this.settings.containers[containerIndex].settings.elements.length) {
                var lastElementIndex = this.settings.containers[containerIndex].settings.elements.length - 1;
                var el = c.find('.sq-element[data-index='+ lastElementIndex +']');
                el.after('<div id="sq-dummy-element"><div id="sq-dummy-element-inner"></div></div>');
            } else {
                var el = c.find('.sq-element[data-index='+ elementIndex +']');
                el.before('<div id="sq-dummy-element"><div id="sq-dummy-element-inner"></div></div>');
            }

            this.dummyElement = $('#sq-dummy-element');
            this.dummyElement.css({
                width: this.draggedElementWidth,
                height: this.draggedElement.outerHeight(),
                margin: this.draggedElement.css('margin'),
            });
        }
    }
    Squares.prototype.endDraggingElement = function(e) {
        this.draggedElement.remove();

        // Move the element to the new index
        var newContainerIndex = this.elementDragMap[this.newIndexOfDraggedElement].containerIndex;
        var newElementIndex = this.elementDragMap[this.newIndexOfDraggedElement].elementIndex;

        var oldElementIndex = this.draggedElementIndex;
        var oldContainerIndex = this.draggedElementContainerIndex;

        var el = this.settings.containers[oldContainerIndex].settings.elements[oldElementIndex];
        this.settings.containers[oldContainerIndex].settings.elements.splice(oldElementIndex, 1);
        this.settings.containers[newContainerIndex].settings.elements.splice(newElementIndex, 0, el);

        this.redraw();
    }
    Squares.prototype.addUI = function() {
        this.appendAddContainerButton();
        this.appendAddElementsButton();
    };
    Squares.prototype.appendAddContainerButton = function() {
        var addContainerButtonHTML = '<div class="sq-add-container"><i class="fa fa-plus"></i> <span>Add Container</span></div>';

        this.root.append(addContainerButtonHTML);
    };
    Squares.prototype.appendAddElementsButton = function() {
        var addElementsButtonHTML = '<div class="sq-add-elements"><i class="fa fa-cube"></i></div>';

        this.root.append(addElementsButtonHTML);
    };
    Squares.prototype.appendContainer = function() {
        var c = new Container();
        this.settings.containers.push(c);

        return c;
    };
    Squares.prototype.deleteContainer = function(id) {
        // Find out the index of the container
        var index = 0;

        for (var i=0; i<this.settings.containers.length; i++) {
            if (this.settings.containers[i].id == id) {
                index = i;
            }
        }

        this.settings.containers.splice(index, 1);
    };
    Squares.prototype.addElement = function(containerIndex, elementIndex, elementCatalogIndex, elementControlOptions) {
        var self = this;

        // Add element to container at index
        self.settings.containers[containerIndex].insertElement(elementCatalogIndex, elementIndex, elementControlOptions);

        // Redraw
        self.redraw();
    };
    Squares.prototype.getCompressedSettings = function() {
        var settings = $.extend(true, {}, this.settings);

        // Compress element settings
        for (var i=0; i<settings.containers.length; i++) {
            // var c = $.extend(true, {}, settings.containers[i]);
			var c = {
				id: settings.containers[i].id,
				settings: $.extend(true, {}, settings.containers[i].settings)
			};

            for (var j=0; j<c.settings.elements.length; j++) {
                var e = $.extend(true, {}, c.settings.elements[j]);

                e.settings = subtract(e.settings, elementDefaultSettings);
                e.settings = clean(e.settings);

                // Get the current values of the controls
                var options = e.getCurrentOptions();
                options = subtract(options, e.defaults);
                options = clean(options);

                c.settings.elements[j] = {
                    settings: e.settings,
                    options: options
                };
            }

            settings.containers[i] = c;
        }

        return settings;
    }
    Squares.prototype.generateHTML = function() {
        // function generating the HTML code that will be used in the end product

        var html = '';

        for (var i=0; i<this.settings.containers.length; i++) {
            var c = this.settings.containers[i];

            html += c.generateHTML();
        }

        // Strip slashes
        html = html.replace(/\\(.)/mg, "$1");

        // Replace line breaks with <br>
        html = html.replace(/\n/mg, "<br>");

        return html;
    }
    Squares.prototype.selectElement = function(elementID) {
        this.selectedElementID = elementID;

        $('.sq-element-selected').removeClass('sq-element-selected');
        $('#' + this.selectedElementID).addClass('sq-element-selected');
    }

    // The "Container" class servs literally as a container
    // for Element objects, similar to Bootstrap's "row" class.
    // It will have settings only for layout.

    var containerDefaultSettings = {
        elements: []
    };

    function Container() {
        // this.root is the highest element in the container's hierarchy.
        // it will contain data-index attribute, used to reference this element
        this.id = 'sq-container-' + Math.floor(Math.random() * 99999) + 1;

        this.settings = $.extend(true, {}, containerDefaultSettings);
    }
    Container.prototype.insertElement = function(elementCatalogIndex, index, options) {
        var e = new Element(registeredElements[elementCatalogIndex], options);
        this.settings.elements.splice(index, 0, e);
    }
    Container.prototype.removeElementAtIndex = function(i) {
        this.settings.elements.splice(i, 1);
        editorWindow.openFirstTab();
        editorWindow.removeElementSettings();
    }
    Container.prototype.render = function() {
        // Nothing to render for now
    }
    Container.prototype.appendEditorControls = function() {
        var html = '';
        html += '     <div class="sq-container-move"></div>';
        html += '     <div class="sq-container-delete"><i class="fa fa-times" aria-hidden="true"></i></div>';
        html += '     <div class="sq-container-confirm-delete" data-container-id="'+ this.id +'">Delete</div>';

        $('#' + this.id).append(html);
    }
    Container.prototype.generateHTML = function() {
        // function generating the HTML code that will be used in the end product

        var html = '';

        html += '<div class="squares-container">';

        for (var i=0; i<this.settings.elements.length; i++) {
            var e = this.settings.elements[i];
            html += e.generateHTML();
        }

        html += '<div class="squares-clear"></div>'
        html += '</div>';

        return html;
    }

    // The element object will represent a single piece of content.
    // Image, text, video, etc.
    // It will have settings for layout and styling

    var elementDefaultSettings = {
        name: 'Untitled Element',
        iconClass: 'fa fa-cube',
        controls: [],
        defaultControls: {
            layout: {
                box_model: {
                    name: 'Box Model',
                    type: 'box model',
                    default: {
                        margin: {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0
                        },
                        padding: {
                            top: 10,
                            bottom: 10,
                            left: 10,
                            right: 10
                        }
                    }
                },
                use_grid: {
                    name: 'Use Grid System',
                    type: 'switch',
                    default: 1
                },
                column_span: {
                    name: 'Grid Settings',
                    type: 'grid system',
                    group: 'Layout Grid',
                    default: {
                        xs: {
                            use: 0,
                            class: 'sq-col-xs-12',
                            visible: 0
                        },
                        sm: {
                            use: 0,
                            class: 'sq-col-sm-12',
                            visible: 0
                        },
                        md: {
                            use: 0,
                            class: 'sq-col-md-12',
                            visible: 1
                        },
                        lg: {
                            use: 1,
                            class: 'sq-col-lg-12',
                            visible: 1
                        },
                    }
                },
                width: {
                    name: 'Width',
                    type: 'int',
                    group: 'Layout Manual',
                    default: '100'
                },
                auto_width: {
                    name: 'Auto Width',
                    type: 'switch',
                    group: 'Layout Manual',
                    default: 1
                },
                height: {
                    name: 'Height',
                    type: 'int',
                    group: 'Layout Manual',
                    default: '100'
                },
                auto_height: {
                    name: 'Auto Height',
                    type: 'switch',
                    group: 'Layout Manual',
                    default: 1
                }
            },
            style: {
                background_color: {
                    name: 'Background Color',
                    type: 'color',
                    default: '#ffffff'
                },
                background_opacity: {
                    name: 'Background Opacity',
                    type: 'slider',
                    options: {
                        min: 0,
                        max: 1
                    },
                    default: '0'
                },
                opacity: {
                    name: 'Opacity',
                    type: 'slider',
                    options: {
                        min: 0,
                        max: 1
                    },
                    default: '1'
                },
                box_shadow: {
                    name: 'Box Shadow',
                    type: 'text',
                    default: 'none'
                },
                border_width: {
                    name: 'Border Width',
                    type: 'slider',
                    options: { min: 0, max: 20, type: 'int' },
                    default: '0'
                },
                border_style: {
                    name: 'Border Style',
                    type: 'select',
                    options: [ 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset' ],
                    default: 'none'
                },
                border_color: {
                    name: 'Border Color',
                    type: 'color',
                    default: '#000000'
                },
                border_opacity: {
                    name: 'Border Opacity',
                    type: 'slider',
                    options: {
                        min: 0,
                        max: 1
                    },
                    default: '1'
                },
                border_radius: {
                    name: 'Border Radius',
                    type: 'slider',
                    options: { min: 0, max: 100, type: 'int' },
                    default: '0'
                },
            },
            font: {
                font_family: {
                    name: 'Font Family',
                    type: 'text',
                    default: 'sans-serif'
                },
                font_size: {
                    name: 'Font Size',
                    type: 'text',
                    format: 'int',
                    default: '14'
                },
                font_weight: {
                    name: 'Font Weight',
                    type: 'text',
                    default: 'normal'
                },
                font_style: {
                    name: 'Font Style',
                    type: 'select',
                    options: [ 'normal', 'italic', 'oblique', 'initial', 'inherit' ],
                    default: 'normal'
                },
                line_height: {
                    name: 'Line Height',
                    type: 'text',
                    format: 'int',
                    default: '22'
                },
                text_color: {
                    name: 'Text Color',
                    type: 'color',
                    default: '#000000'
                },
                text_align: {
                    name: 'Text Align',
                    type: 'select',
                    options: ['left', 'right', 'center', 'justify', 'justify-all', 'start', 'end', 'match-parent', 'inherit', 'initial', 'unset'],
                    default: 'left'
                },
                text_decoration: {
                    name: 'Text Decoration',
                    type: 'select',
                    options: ['none', 'underline'],
                    default: 'none'
                },
                text_transform: {
                    name: 'Text Transform',
                    type: 'select',
                    options: [ 'none', 'capitalize', 'uppercase', 'lowercase', 'initial', 'inherit' ],
                    default: 'none'
                },
                text_shadow: {
                    name: 'Text Shadow',
                    type: 'text',
                    default: ''
                }
            },
            general: {
                id: {
                    name: 'ID',
                    type: 'text',
                    default: ''
                },
                classes: {
                    name: 'Classes',
                    type: 'text',
                    default: ''
                },
                css: {
                    name: 'CSS',
                    type: 'text',
                    default: ''
                }
            }
        },
        defaultControlGroupIcons: {
            general: 'fa fa-wrench',
            layout: 'fa fa-th-large',
            font: 'fa fa-font',
            style: 'fa fa-paint-brush'
        },
        content: function() {
            return '';
        }
    };

    function Element(settings, options) {
        // this.root is the highest element in the container's hierarchy.
        // it will contain data-index attribute, used to reference this element
        this.id = 'sq-element-' + Math.floor(Math.random() * 99999) + 1;

        // Settings are used only for initialization
        this.settings = $.extend(true, {}, elementDefaultSettings, settings);

        // This array will contain only the default values for each option and
        // it will be used only for compressing the generated JSON
        this.defaults = new Array();

        // Array containing all control objects
        // all options of this element should be accessed from here
        this.controls = new Array();

        // Create a reference to the content() function, so 'this' within that function
        // refers to the Element object and it has access to its controls
        this.content = this.settings.content;

        // Temporary variable until a better solution is found
        this.fontStyles = '';

        this.init(options);
    }
    Element.prototype.init = function(options) {
        // Merge the custom controls with the default controls
        this.settings.controls = $.extend(true, {}, this.settings.controls, this.settings.defaultControls);

        // Merge the custom control group icons with the default control group icons
        this.settings.controlGroupIcons = $.extend(true, {}, this.settings.controlGroupIcons, this.settings.defaultControlGroupIcons);

        // Remove the default style controls if the option is specified
        if (this.settings.useStyleControls === false) {
            this.settings.controls.style = undefined;
        }
        // Remove the default text style controls if the option is specified
        if (this.settings.useFontControls === false) {
            this.settings.controls.font = undefined;
        }

        // Create associative array from this.settings.controls containing default values
        // Used only for compression
        for (var g in this.settings.controls) {
            if (this.settings.controls.hasOwnProperty(g)) {
                var group = this.settings.controls[g];

                if (!this.defaults[g]) {
                    this.defaults[g] = {};
                }

                for (var op in group) {
                    if (group.hasOwnProperty(op)) {
                        var option = group[op];

                        this.defaults[g][op] = option.default;
                    }
                }
            }
        }

        // Create controls
        for (var g in this.settings.controls) {
            if (this.settings.controls.hasOwnProperty(g)) {
                var group = this.settings.controls[g];

                for (var op in group) {
                    if (group.hasOwnProperty(op)) {
                        var option = group[op];

                        // Get a control from the registered controls
                        // of the corresponding type
                        var controlOptions = undefined;

                        for (var i=0; i<registeredControls.length; i++) {
                            if (registeredControls[i].type == option.type) {
                                controlOptions = registeredControls[i];
                            }
                        }

                        // Check if there is a value in the init options
                        var v = option.default;

                        if (options !== undefined && options[g] !== undefined && options[g][op] !== undefined) {
                            if (typeof(options[g][op]) == 'object') {
                                v = $.extend(true, {}, option.default, options[g][op]);
                            } else {
                                v = options[g][op];
                            }
                        }

                        if (this.controls[g] === undefined) {
                            this.controls[g] = {};
                        }

                        var self = this;

                        this.controls[g][op] = new SquaresControl(controlOptions, option.name, option.group, g, option.options, function() {
                            self.updateForm();
                            self.render();
                            self.appendEditorControls();
                        });

                        this.controls[g][op].setVal(v);
                    }
                }
            }
        }
    }
    Element.prototype.getSettingsForm = function() {
        // Loop over all controls and get the HTML from each control
        // Also add a label with the name of the control
        var html = '';

        // Create tabs
        html += '<div id="sq-window-settings-sidebar">';
        var groupCount = 0;
        for (var g in this.controls) {
            var icon = '<i class="fa fa-toggle-on" aria-hidden="true"></i>';

            if (this.settings.controlGroupIcons[g]) {
                icon = '<i class="'+ this.settings.controlGroupIcons[g] +'" aria-hidden="true"></i>';
            }

            html += '<div class="sq-window-settings-sidebar-button" data-tab-index="'+ groupCount +'" data-tab-group="sq-element-settings-tab-group" data-tab-button>';
            html += '   <div class="sq-window-settings-sidebar-button-icon">'+ icon +'</div>';
            html += '   <div class="sq-window-settings-sidebar-button-title">'+ g +'</div>';
            html += '</div>';
            groupCount++;
        }

        // Append delete element tab button
        html += '<div class="sq-window-settings-sidebar-button" data-tab-index="'+ groupCount +'" data-tab-group="sq-element-settings-tab-group" data-tab-button>';
        html += '   <div class="sq-window-settings-sidebar-button-icon"><i class="fa fa-trash-o" aria-hidden="true"></i></div>';
        html += '   <div class="sq-window-settings-sidebar-button-title">Delete</div>';
        html += '</div>';

        html += '</div>';


        // Create content for each tab
        html += '<div class="sq-settings-window-content-wrap">';

        var groupCount = 0;
        for (var g in this.controls) {
            html += '<div class="sq-window-content" data-tab-content data-tab-index="'+ groupCount +'" data-tab-group="sq-element-settings-tab-group">';

            var tabGroup = this.controls[g];
            groupCount++;

            for (var c in tabGroup) {
                var control = tabGroup[c];

                html += '<div class="sq-form-control '+ control.elementClass +'">';

                if (control.customLabel) {
                    html += control.HTML();
                } else {
                    html += '<label for="'+ control.elementID +'">'+ control.name +'</label>';
                    html += control.HTML();
                }

                html += '</div>';
            }

            html += '</div>';
        }

        // Create content for the delete element tab
        html += '<div class="sq-window-content" data-tab-content data-tab-index="'+ groupCount +'" data-tab-group="sq-element-settings-tab-group">';
        html += '   <div class="sq-form-control">';
        html += '       <p>Delete Element?</p>';
        html += '       <div id="sq-delete-element-button" data-element-id="'+ this.id +'">Delete</div>';
        html += '   </div>';
        html += '</div>';

        html += '</div>';

        return html;
    }
    Element.prototype.loadOptions = function() {
        // Load the current options of the element in the settings window

        for (var g in this.controls) {
            var tabGroup = this.controls[g];

            for (var c in tabGroup) {
                var control = tabGroup[c];
                control.loadVal();
            }
        }

        this.updateForm();
    }
    Element.prototype.updateForm = function() {
        if (this.controls['layout']['use_grid'].getVal() == 1) {
            $('.' + this.controls['layout']['width'].elementClass).hide();
            $('.' + this.controls['layout']['column_span'].elementClass).show();
        } else {
            $('.' + this.controls['layout']['width'].elementClass).show();
            $('.' + this.controls['layout']['column_span'].elementClass).hide();
        }
    }
    Element.prototype.generateStyles = function() {
        var css = '';
        // =====================================================================
        // Layout
        // =====================================================================

        var o = this.controls['layout'];

        // Box Model
        if (isNumeric(o['box_model'].getVal().margin.top)) {
            css += 'margin-top: ' + o['box_model'].getVal().margin.top + 'px; ';
        }
        if (isNumeric(o['box_model'].getVal().margin.bottom)) {
            css += 'margin-bottom: ' + o['box_model'].getVal().margin.bottom + 'px; ';
        }
        if (isNumeric(o['box_model'].getVal().margin.left)) {
            css += 'margin-left: ' + o['box_model'].getVal().margin.left + 'px; ';
        }
        if (isNumeric(o['box_model'].getVal().margin.right)) {
            css += 'margin-right: ' + o['box_model'].getVal().margin.right + 'px; ';
        }

        if (isNumeric(o['box_model'].getVal().padding.top)) {
            css += 'padding-top: ' + o['box_model'].getVal().padding.top + 'px; ';
        }
        if (isNumeric(o['box_model'].getVal().padding.bottom)) {
            css += 'padding-bottom: ' + o['box_model'].getVal().padding.bottom + 'px; ';
        }
        if (isNumeric(o['box_model'].getVal().padding.left)) {
            css += 'padding-left: ' + o['box_model'].getVal().padding.left + 'px; ';
        }
        if (isNumeric(o['box_model'].getVal().padding.right)) {
            css += 'padding-right: ' + o['box_model'].getVal().padding.right + 'px; ';
        }

        if (parseInt(o['use_grid'].getVal(), 10) == 1) {
            // Grid system

        } else {
            // Width
            if (parseInt(o['auto_width'].getVal(), 10) == 1) {
                css += 'width: auto; ';
            } else {
                if (o['width'].getVal() !== '' && !isNaN(o['width'].getVal())) {
                    css += 'width: '+ o['width'].getVal() +'px; ';
                }
            }

            // Height
            if (parseInt(o['auto_height'].getVal(), 10) == 1) {
                css += 'height: auto; ';
            } else {
                if (o['height'].getVal() !== '' && !isNaN(o['height'].getVal())) {
                    css += 'height: '+ o['height'].getVal() +'px; ';
                }
            }
        }

        css += 'float: left; ';

        // =====================================================================
        // Text
        // =====================================================================
        var o = this.controls['font'];

        if (o) {
            // Font Family
            if (o['font_family'].getVal() !== '') {
                css += 'font-family: ' + o['font_family'].getVal() + '; ';
                this.fontStyles += 'font-family: ' + o['font_family'].getVal() + '; ';
            }

            // Font Size
            if (isNumeric(o['font_size'].getVal())) {
                css += 'font-size: ' + o['font_size'].getVal() + 'px; ';
                this.fontStyles += 'font-size: ' + o['font_size'].getVal() + 'px; ';
            }

            // Font Weight
            if (o['font_weight'].getVal() !== '') {
                css += 'font-weight: ' + o['font_weight'].getVal() + '; ';
                this.fontStyles += 'font-weight: ' + o['font_weight'].getVal() + '; ';
            }

            // Font Style
            if (o['font_style'].getVal() !== '') {
                css += 'font-style: ' + o['font_style'].getVal() + '; ';
                this.fontStyles += 'font-style: ' + o['font_style'].getVal() + '; ';
            }

            // Line Height
            if (isNumeric(o['line_height'].getVal())) {
                css += 'line-height: ' + o['line_height'].getVal() + 'px; ';
                this.fontStyles += 'line-height: ' + o['line_height'].getVal() + 'px; ';
            }

            // Text Color
            if (o['text_color'].getVal() !== '') {
                css += 'color: ' + o['text_color'].getVal() + '; ';
                this.fontStyles += 'color: ' + o['text_color'].getVal() + '; ';
            }

            // Text Align
            if (o['text_align'].getVal() !== '') {
                css += 'text-align: ' + o['text_align'].getVal() + '; ';
                this.fontStyles += 'text-align: ' + o['text_align'].getVal() + '; ';
            }

            // Text Decoration
            if (o['text_decoration'].getVal() !== '') {
                css += 'text-decoration: ' + o['text_decoration'].getVal() + '; ';
                this.fontStyles += 'text-decoration: ' + o['text_decoration'].getVal() + '; ';
            }

            // Text Transform
            if (o['text_transform'].getVal() !== '') {
                css += 'text-transform: ' + o['text_transform'].getVal() + '; ';
                this.fontStyles += 'text-transform: ' + o['text_transform'].getVal() + '; ';
            }

            // Text Shadow
            if (o['text_shadow'].getVal() !== '') {
                css += 'text-shadow: ' + o['text_shadow'].getVal() + '; ';
                this.fontStyles += 'text-shadow: ' + o['text_shadow'].getVal() + '; ';
            }
        }

        // =====================================================================
        // Style
        // =====================================================================
        var o = this.controls['style'];

        if (o) {
            // Background Color
            var c_bg = hexToRgb(o['background_color'].getVal());
            css += 'background-color: rgba('+ c_bg.r +', '+ c_bg.g +', '+ c_bg.b +', '+ o['background_opacity'].getVal() +'); ';

            // Opacity
            if (isNumeric(o['opacity'].getVal())) {
                css += 'opacity: ' + o['opacity'].getVal() + '; ';
            }

            // Box Shadow
            if (o['box_shadow'].getVal() !== '') {
                css += 'box-shadow: ' + o['box_shadow'].getVal() + '; ';
            }

            // Border Width
            if (isNumeric(o['border_width'].getVal())) {
                css += 'border-width: ' + o['border_width'].getVal() + 'px; ';
            }

            // Border Style
            if (o['border_style'].getVal() !== '') {
                css += 'border-style: ' + o['border_style'].getVal() + '; ';
            }

            // Border Color
            var c_bg = hexToRgb(o['border_color'].getVal());
            css += 'border-color: rgba('+ c_bg.r +', '+ c_bg.g +', '+ c_bg.b +', '+ o['border_opacity'].getVal() +'); ';

            // Border Radius
            if (isNumeric(o['border_radius'].getVal())) {
                css += 'border-radius: ' + o['border_radius'].getVal() + 'px; ';
            }
        }

        return css;
    }
    Element.prototype.generateLayoutClass = function() {
        var o = this.controls['layout'];

        if (parseInt(o['use_grid'].getVal(), 10) == 1) {
            var classes = '';
            var v = o['column_span'].getVal();

            if (parseInt(v.xs.use, 10) == 1) {
                classes += v.xs.class + ' ';

                if (parseInt(v.xs.visible, 10) == 0) {
                    classes += 'sq-hidden-xs ';
                }
            }
            if (parseInt(v.sm.use, 10) == 1) {
                classes += v.sm.class + ' ';

                if (parseInt(v.sm.visible, 10) == 0) {
                    classes += 'sq-hidden-sm ';
                }
            }
            if (parseInt(v.md.use, 10) == 1) {
                classes += v.md.class + ' ';

                if (parseInt(v.md.visible, 10) == 0) {
                    classes += 'sq-hidden-md ';
                }
            }
            if (parseInt(v.lg.use, 10) == 1) {
                classes += v.lg.class + ' ';

                if (parseInt(v.lg.visible, 10) == 0) {
                    classes += 'sq-hidden-lg ';
                }
            }
            return classes;
        } else {
            return '';
        }
    }
    Element.prototype.render = function() {
        // Preserve selection
        var selected = false;
        if ($('#' + this.id).hasClass('sq-element-selected')) {
            selected = true;
        }

        // Update the element's style
        $('#' + this.id).attr('style', this.generateStyles());

        // Add layout classes to the element
        $('#' + this.id).attr('class', 'sq-element ' + this.generateLayoutClass());

        // Update the element's user set content
        $('#' + this.id).html(this.content());

        if (selected) {
            $('#' + this.id).addClass('sq-element-selected');
        }
    }
    Element.prototype.appendEditorControls = function() {
        var html = '';

        html += '     <div class="sq-element-controls">';
        html += '         <div class="sq-element-control-drag"></div>';
        html += '     </div>';

        $('#' + this.id).append(html);
    }
    Element.prototype.getCurrentOptions = function() {
        // Loop over all controls and put their values in an associative array

        var options = {};

        for (var controlGroupName in this.controls) {
            for (var controlName in this.controls[controlGroupName]) {
                var c = this.controls[controlGroupName][controlName];
                if (!options[controlGroupName]) {
                    options[controlGroupName] = {};
                }

                options[controlGroupName][controlName] = c.getVal();
            }
        }

        return options;
    }
    Element.prototype.generateHTML = function() {
        // function generating the HTML code that will be used in the end product

        var html = '';

        html += '<div id="'+ this.id +'" class="squares-element '+ this.generateLayoutClass() +'" style="'+ this.generateStyles() +'">';
        html += this.content();
        html += '</div>';

        return html;
    }

    function EditorWindow() {
        this.root = undefined;
        this.id = Math.floor(Math.random() * 10000) + 1;

        this.visible = false;

        // flags for dragging the window
        this.shouldStartDragging = false;
        this.didStartDragging = false;
        this.dragging = false;
        this.iex = 0; // initial event x
        this.iey = 0; // initial event y
        this.ix = 0; // initial window x
        this.iy = 0; // initial window y

        this.init();
        this.events();
        this.show(600, 100);
    }
    EditorWindow.prototype.init = function() {
        var WindowHTML = '';

        WindowHTML += ' <div class="sq-window" id="sq-window-'+ this.id +'">';
        WindowHTML += '     <div class="sq-window-header">';
        WindowHTML += '         <div class="sq-window-main-nav">';
        WindowHTML += '             <div id="sq-window-main-nav-button-elements" class="sq-window-main-nav-button" data-tab-group="sq-window-main-tab-group" data-tab-index="0" data-tab-button><i class="fa fa-cube" aria-hidden="true"></i></div>';
        WindowHTML += '             <div id="sq-window-main-nav-button-settings" class="sq-window-main-nav-button" data-tab-group="sq-window-main-tab-group" data-tab-index="1" data-tab-button><i class="fa fa-cog" aria-hidden="true"></i></div>';
        WindowHTML += '         </div>';
        WindowHTML += '         <div class="sq-window-close"><i class="fa fa-times"></i></div>';
        WindowHTML += '     </div>';
        WindowHTML += '     <div class="sq-window-container">';

        // Elements tab
        WindowHTML += '         <div class="sq-window-tab-content" data-tab-group="sq-window-main-tab-group" data-tab-index="0" data-tab-content id="sq-window-elements-tab-content">';
        WindowHTML += '             <div class="sq-window-main-tab-header">';
        WindowHTML += '                 <h1>Elements</h1>';
        WindowHTML += '                 <div id="sq-window-elements-search">';
        WindowHTML += '                     <i class="fa fa-search" aria-hidden="true"></i>';
        WindowHTML += '                     <input type="text" id="sq-window-elements-search-input">';
        WindowHTML += '                 </div>';
        WindowHTML += '             </div>';
        WindowHTML += '             <div class="sq-window-content">';
        WindowHTML += '                 <div id="sq-no-elements-found">No elements found.</div>';
        for (var i=0; i<registeredElements.length; i++) {
            WindowHTML += '             <div class="sq-element-thumb" data-index="' + i + '">';
            WindowHTML += '                 <div class="sq-element-thumb-icon">';
            WindowHTML += '                     <i class="' + registeredElements[i].iconClass + '"></i>';
            WindowHTML += '                 </div>';
            WindowHTML += '                 <div class="sq-element-thumb-title">';
            WindowHTML += '                     <h2>'+ registeredElements[i].name +'</h2>';
            WindowHTML += '                 </div>';
            WindowHTML += '             </div>';
        }
        WindowHTML += '                 <div class="squares-clear"></div>';
        WindowHTML += '             </div>';
        WindowHTML += '         </div>';

        // Settings tab
        WindowHTML += '         <div class="sq-window-tab-content" data-tab-group="sq-window-main-tab-group" data-tab-index="1" data-tab-content id="sq-window-settings-tab-content">';
        WindowHTML += '             <div class="sq-window-main-tab-header"><h1>Settings</h1></div>';
        WindowHTML += '             <div id="sq-window-settings-tab-inner-content"></div>';
        WindowHTML += '         </div>';

        WindowHTML += '     </div>';
        WindowHTML += ' </div>';

        if ($('.sq-windows-root').length == 0) {
            $('body').prepend('<div class="sq-windows-root"></div>');
        }

        $('.sq-windows-root').html(WindowHTML);

        this.root = $('#sq-window-' + this.id);

        this.openFirstTab();
        this.removeElementSettings();
    }
    EditorWindow.prototype.events = function() {
        var self = this;

        // Search field
        $(document).on('keyup', '#sq-window-elements-search-input', function() {
            var v = $(this).val().toLowerCase();

            var elementsFound = false;

            $('.sq-element-thumb').each(function() {
                var elementTitle = $(this).find('h2').html();

                if (elementTitle.toLowerCase().indexOf(v) >= 0) {
                    elementsFound = true;
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });

            if (!elementsFound) {
                $('#sq-no-elements-found').show();
            } else {
                $('#sq-no-elements-found').hide();
            }
        });

        // Open the editor window when click on element
        $(document).on('click', '.sq-element', function() {
            if (!self.visible) {
                var x = $(this).offset().left + $(this).closest('.sq-root-container').width() + 40;
                var y = $(this).offset().top;
                self.show(x, y);
            }

            var editor = $(this).closest('.sq-root-container').data.editor;
            var containerIndex = $(this).closest('.sq-container').data('index');
            var elementIndex = $(this).data('index');
            var el = editor.settings.containers[containerIndex].settings.elements[elementIndex];

            // Open the settings tab
            $('#sq-window-elements-tab-content').hide();
            $('#sq-window-settings-tab-content').show();

            // Highlight the settings tab
            $('.sq-window-main-nav-button').removeClass('active');
            $('#sq-window-main-nav-button-settings').addClass('active');

            // Load the element settings
            $('#sq-window-settings-tab-inner-content').html(el.getSettingsForm());
            el.loadOptions();

            // Go to the first tab of the settings
            $('[data-tab-content][data-tab-group="sq-element-settings-tab-group"]').hide();
            $('[data-tab-content][data-tab-group="sq-element-settings-tab-group"][data-tab-index="0"]').show();

            // Highlight the first tab button
            $('[data-tab-button][data-tab-group="sq-element-settings-tab-group"]').removeClass('active').first().addClass('active');

            // Select the element
            editor.selectElement(el.id);
        });

        // Open the window when clicked on the add elements button
        $(document).on('click', '.sq-add-elements', function() {
            if (!self.visible) {
                var x = $(this).closest('.sq-root-container').offset().left + $(this).closest('.sq-root-container').width() + 40;
                var y = $(this).closest('.sq-root-container').offset().top;
                self.show(x + 20, y + 20);
            }

            // Show the elements tab
            $('#sq-window-elements-tab-content').show();
            $('#sq-window-settings-tab-content').hide();

            // Tabs
            $('.sq-window-main-nav-button').removeClass('active');
            $('#sq-window-main-nav-button-elements').addClass('active');
        });

        // Generic Tab functionality
        $(document).on('click', '[data-tab-button]', function() {
            var index = $(this).data('tab-index');
            var tabGroup = $(this).data('tab-group');

            $('[data-tab-button][data-tab-group="'+ tabGroup +'"]').removeClass('active');
            $(this).addClass('active');

            $('[data-tab-content][data-tab-group="'+ tabGroup +'"]').hide();
            $('[data-tab-content][data-tab-group="'+ tabGroup +'"][data-tab-index="'+ index +'"]').show();
        });

        // Button for closing the elements window
        self.root.find('.sq-window-close').on('click', function(e) {
            self.hide();
        });

        // Move the window by dragging its header
        self.root.find('.sq-window-header').off('mousedown');
        self.root.find('.sq-window-header').on('mousedown', function(e) {
            if ($(e.target).hasClass('sq-window-close') || $(e.target).closest('.sq-window-close').length > 0) return;

            self.shouldStartDragging = true;

            self.iex = e.pageX;
            self.iey = e.pageY;

            $('.sq-window-active').removeClass('sq-window-active');
            self.root.addClass('sq-window-active');
        });
        $(document).on('mousemove.' + self.id, function(e) {
            // Start moving the window only if the user drags it by 5 pixels or
            // more, to prevent accidental drag
            if (self.shouldStartDragging && !self.didStartDragging) {
                if (Math.abs(e.pageX - self.iex) > 5 || Math.abs(e.pageY - self.iey) > 5) {
                    self.ix = self.root.offset().left;
                    self.iy = self.root.offset().top;
                    self.dragging = true;
                    self.didStartDragging = true;
                }

            }

            if (self.dragging) {
                self.root.css({
                    left: self.ix + e.pageX - self.iex,
                    top: self.iy + e.pageY - self.iey,
                });
            }
        });

        $(document).on('mouseup.' + self.id, function(e) {
            self.shouldStartDragging = false;
            self.didStartDragging = false;
            self.dragging = false;
        });

        // =====================================================================
        // Needs tidying up
        // Drag elements from window to container functionality
        var shouldStartDraggingElementToContainer = false,
        didStartDraggingElementToContainer = false,
        draggingElementToContainer = false,
        virtualIndexOfDraggedElement = -1,
        draggedElementFromWindowCatalogIndex = -1,
        thumbElWhenDraggingFromWindow = undefined,
        targetEditor = undefined,
        dummyElementAtMouse = undefined,
        elementDragMap = undefined;
        var iex = 0, iey = 0, ix = 0, iy = 0;

        $(document).off('mousedown', '.sq-element-thumb');
        $(document).on('mousedown', '.sq-element-thumb', function(e) {
            shouldStartDraggingElementToContainer = true;

            iex = e.pageX;
            iey = e.pageY;

            thumbElWhenDraggingFromWindow = $(this);
        });
        $(document).off('mousemove.elementFromWindow');
        $(document).on('mousemove.elementFromWindow', function(e) {
            if (shouldStartDraggingElementToContainer && !didStartDraggingElementToContainer) {
                if (Math.abs(e.pageX - iex) > 5 || Math.abs(e.pageY - iey) > 5) {
                    didStartDraggingElementToContainer = true;

                    // Get contents and position of the element thumb
                    draggedElementFromWindowCatalogIndex = thumbElWhenDraggingFromWindow.data('index');

                    var contents = thumbElWhenDraggingFromWindow.html();

                    ix = thumbElWhenDraggingFromWindow.offset().left;
                    iy = thumbElWhenDraggingFromWindow.offset().top;

                    // Create a copy of the thumb and place it at mouse location
                    $('body').prepend('<div id="sq-dragged-element-clone" class="sq-element-thumb">' + contents + '</div>');
                    dummyElementAtMouse = $('#sq-dragged-element-clone');
                    dummyElementAtMouse.css({
                        left: ix,
                        top: iy,
                        margin: 0
                    });

                    // Create a virtual map of all possible positions of the
                    // dragged element in all editors
                    elementDragMap = new Array();

                    for (var k=0; k<editors.length; k++) {
                        var editor = editors[k];

                        for (var i=0; i<editor.settings.containers.length; i++) {
                            var coords = { x: 0, y: 0 };
                            var c = editor.host.find('.sq-container[data-index='+ i +']');

                            // if the container has no elements, add one dummy element
                            // and move on to next container
                            if (editor.settings.containers[i].settings.elements.length == 0) {
                                c.append('<div id="sq-dummy-element-dragging-from-window-tmp"></div>');
                                var x = $('#sq-dummy-element-dragging-from-window-tmp').offset().left + $('#sq-dummy-element-dragging-from-window-tmp').outerWidth()/2;
                                var y = $('#sq-dummy-element-dragging-from-window-tmp').offset().top + $('#sq-dummy-element-dragging-from-window-tmp').outerHeight()/2;
                                elementDragMap.push({ x: x, y: y, elementIndex: 0, containerIndex: i, editorIndex: k });
                                $('#sq-dummy-element-dragging-from-window-tmp').remove();
                            }

                            for (var j=0; j<editor.settings.containers[i].settings.elements.length; j++) {
                                var el = c.find('.sq-element[data-index='+ j +']');

                                el.before('<div id="sq-dummy-element-dragging-from-window-tmp"></div>');

                                var x = $('#sq-dummy-element-dragging-from-window-tmp').offset().left + $('#sq-dummy-element-dragging-from-window-tmp').outerWidth()/2;
                                var y = $('#sq-dummy-element-dragging-from-window-tmp').offset().top + $('#sq-dummy-element-dragging-from-window-tmp').outerHeight()/2;
                                elementDragMap.push({ x: x, y: y, elementIndex: j, containerIndex: i, editorIndex: k });
                                $('#sq-dummy-element-dragging-from-window-tmp').remove();

                                // When we reach the end of the elements array, add a dummy element after the last element
                                if (j == editor.settings.containers[i].settings.elements.length - 1) {
                                    el.after('<div id="sq-dummy-element-dragging-from-window-tmp"></div>');
                                    var x = $('#sq-dummy-element-dragging-from-window-tmp').offset().left + $('#sq-dummy-element-dragging-from-window-tmp').outerWidth()/2;
                                    var y = $('#sq-dummy-element-dragging-from-window-tmp').offset().top + $('#sq-dummy-element-dragging-from-window-tmp').outerHeight()/2;
                                    elementDragMap.push({ x: x, y: y, elementIndex: j+1, containerIndex: i, editorIndex: k });
                                    $('#sq-dummy-element-dragging-from-window-tmp').remove();
                                }
                            }
                        }
                    }

                    if (elementDragMap.length == 0) {
                        // no valid containers found
                        dummyElementAtMouse.remove();
                        didStartDraggingElementToContainer = false;
                        shouldStartDraggingElementToContainer = false;
                        didStartDraggingElementToContainer = false;
                        draggingElementToContainer = false;
                        virtualIndexOfDraggedElement = -1;
                    }
                }
            }

            if (didStartDraggingElementToContainer) {
                // Update dummy element at mouse position
                dummyElementAtMouse.css({
                    left: ix + e.pageX - iex,
                    top: iy + e.pageY - iey
                });

                // Find the closest virtual position to the mouse position
                var closestIndex = 0;
                var closestDistance = 999999;

                for (var i=0; i<elementDragMap.length; i++) {
                    var d = Math.abs(e.pageX - elementDragMap[i].x) + Math.abs(e.pageY - elementDragMap[i].y);
                    if (d < closestDistance) {
                        closestDistance = d;
                        closestIndex = i;
                    }
                }

                // If the closest index is different than the current index,
                // remove the dummy element and insert a new one and the new index
                if (closestIndex != virtualIndexOfDraggedElement) {
                    virtualIndexOfDraggedElement = closestIndex;

                    // Remove the current dummy element
                    $('#sq-dummy-element-dragging-from-window').remove();

                    // Insert a new dummy element at the container/element index
                    var containerIndex = elementDragMap[virtualIndexOfDraggedElement].containerIndex;
                    var elementIndex = elementDragMap[virtualIndexOfDraggedElement].elementIndex;
                    var editorIndex = elementDragMap[virtualIndexOfDraggedElement].editorIndex;
                    var c = editors[editorIndex].host.find('.sq-container[data-index='+ containerIndex +']');

                    // If the index of the dummy element is bigger than the number
                    // of elements in that container, insert the dummy at the end
                    if (editors[editorIndex].settings.containers[containerIndex].settings.elements.length == 0) {
                        c.prepend('<div id="sq-dummy-element-dragging-from-window"><div id="sq-dummy-element-dragging-from-window-inner"></div></div>');
                    } else if (elementIndex == editors[editorIndex].settings.containers[containerIndex].settings.elements.length) {
                        var lastElementIndex = editors[editorIndex].settings.containers[containerIndex].settings.elements.length - 1;
                        var e = c.find('.sq-element[data-index='+ lastElementIndex +']');
                        e.after('<div id="sq-dummy-element-dragging-from-window"><div id="sq-dummy-element-dragging-from-window-inner"></div></div>');
                    } else {
                        var e = c.find('.sq-element[data-index='+ elementIndex +']');
                        e.before('<div id="sq-dummy-element-dragging-from-window"><div id="sq-dummy-element-dragging-from-window-inner"></div></div>');
                    }
                }
            }

        });
        $(document).off('mouseup.elementFromWindow');
        $(document).on('mouseup.elementFromWindow', function() {
            if (didStartDraggingElementToContainer) {
                // Remove element clone (at mouse position)
                dummyElementAtMouse.remove();

                var containerIndex = elementDragMap[virtualIndexOfDraggedElement].containerIndex;
                var elementIndex = elementDragMap[virtualIndexOfDraggedElement].elementIndex;
                var editorIndex = elementDragMap[virtualIndexOfDraggedElement].editorIndex;

                editors[editorIndex].addElement(containerIndex, elementIndex, draggedElementFromWindowCatalogIndex);
            }

            shouldStartDraggingElementToContainer = false;
            didStartDraggingElementToContainer = false;
            draggingElementToContainer = false;
            virtualIndexOfDraggedElement = -1;
        });

        // [end] Drag elements from window to container functionality
    }
    EditorWindow.prototype.show = function(x, y) {
        this.visible = true;
        this.root.show();

        if (x !== undefined && y !== undefined) {
            this.root.css({
                left: x,
                top: y
            });
        }
    }
    EditorWindow.prototype.hide = function() {
        this.visible = false;
        this.root.hide();
    }
    EditorWindow.prototype.openFirstTab = function() {
        // Open the first tab
        $('.sq-window-main-nav-button').removeClass('active');
        $('#sq-window-main-nav-button-elements').addClass('active');
        $('[data-tab-content][data-tab-group="sq-window-main-tab-group"]').hide();
        $('[data-tab-content][data-tab-group="sq-window-main-tab-group"][data-tab-index="0"]').show();
    }
    EditorWindow.prototype.removeElementSettings = function() {
        $('#sq-window-settings-tab-inner-content').html('<div id="sq-window-settings-tab-no-element">No element selected. To create an element, open the Elements tab and drag an element into a container.</div>');
    }

    function SquaresControl(s, name, group, tabGroup, options, valueUpdated) {
        // The 's' argument is the array coming from the registeredControls array
        // Automatically generated at the time of object creation
        this.id = Math.floor(Math.random() * 9999) + 1;
        this.elementID = 'sq-control-' + this.id;
        this.elementClass = 'sq-element-option-group';

        // Settings coming from the registered controls catalog
        // referenced in the 'this' variable, so 'this' can be accessed within
        // those functions (in case of validate(), HTML(), events(), etc)
        // These settings are also common in all controls
        this.type = s.type;
        this.getValue = s.getValue;
        this.setValue = s.setValue;
        this.HTML = s.HTML;

        // These variables are specific for each individual control
        this.name = name;
        this.options = options;
        this.group = group;
        this.tabGroup = tabGroup;

        // Private property, must be accessed only via setter and getter
        this._value = undefined;

        // Update this.elementClass
        if (this.group !== undefined) {
            this.elementClass = 'sq-element-option-group-' + this.group.toLowerCase().replace(/\s/g, '-');
        }

        // Launch the events provided from the settings
        this.init = s.init;
        this.init();

        // Create a callback function for when the control updates its value
        this.valueUpdated = valueUpdated;

        // Inline label flag
        this.customLabel = s.customLabel;
    }
    SquaresControl.prototype.getVal = function() {
        return this._value;
    }
    SquaresControl.prototype.setVal = function(v) {
        this._value = v;

        try {
            this.setValue(v);
        } catch (err) {

        }
    }
    SquaresControl.prototype.loadVal = function(v) {
        this.setValue(this._value);
    }
    SquaresControl.prototype.valueChanged = function() {
        // Re-sets the control to its stored value
        this._value = this.getValue();
        this.valueUpdated();
    }

    // Utility
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    function subtract(a, b) {
        var r = {};

        // For each property of 'b'
        // if it's different than the corresponding property of 'a'
        // place it in 'r'
        for (var key in b) {
            if (typeof(b[key]) == 'object') {
                if (!a[key]) a[key] = {};
                r[key] = subtract(a[key], b[key]);
            } else {
                if (b[key] != a[key]) {
                    r[key] = a[key];
                }
            }
        }

        return r;
    }
    function clean(a) {
        var r = undefined;

        // Check if 'a' is an object
        if (typeof(a) == 'object') {
            // If 'a' is an object, check if it's empty and set to undefined if true
            if (isEmpty(a)) {
                r = undefined;
            } else {
                // If 'a' is NOT empty, iterate over each of its properties
                // and recursively clean
                for (var key in a) {
                    var cleaned = clean(a[key]);

                    if (cleaned !== undefined) {
                        if (r === undefined) r = {};

                        r[key] = cleaned;
                    }
                }
            }
        } else {
            r = a;
        }

        return r;
    }
    function isEmpty(obj) {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
            return false;
        }

        return true && JSON.stringify(obj) === JSON.stringify({});
    }
    function getWidthOfElementInGrid(span) {
        var columnWidth = 8.33333333;
        var elementWidth = columnWidth * span;

        return elementWidth + '%';
    }
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

})(jQuery, window, document);

;(function($, window, document, undefined) {

	var registeredElements = new Array();
	$.squaresRendererRegisterElement = function(options) {
		registeredElements[options.name] = options;
	};

	$.squaresRendererRenderObject = function(settings) {
		if (typeof(settings) != 'object') {
			try {
				settings = JSON.parse(settings);
			} catch(err) {
				console.log(err);
				console.log('Squares renderer failed to parse JSON: ');
				console.log(settings);

				return '';
			}
		}

		var renderer = new Renderer(settings);
		var html = renderer.render();

		return html;
	}

	function Renderer(settings) {
		this.settings = settings;
		this.containers = [];

		this.init();
	}
	Renderer.prototype.init = function() {
		// Create containers
		for (var i=0; i<this.settings.containers.length; i++) {
			this.containers[i] = new Container(this.settings.containers[i]);
		}
	};
	Renderer.prototype.render = function() {
		var html = '';

		for (var i=0; i<this.containers.length; i++) {
			html += this.containers[i].render();
		}

		return html;
	}

	function Container(settings) {
		this.settings = settings;
		this.elements = [];

		this.init();
	}
	Container.prototype.init = function() {
		// Create elements
		if (this.settings.settings) {
			for (var i=0; i<this.settings.settings.elements.length; i++) {
				this.elements[i] = new Element(this.settings.settings.elements[i]);
			}
		}
	};
	Container.prototype.render = function() {
		var html = '';

		html += '<div class="squares-container">';

		if (this.settings.settings) {
			for (var i=0; i<this.settings.settings.elements.length; i++) {
				html += this.elements[i].render();
			}
		}

		html += '	<div class="squares-clear"></div>'
		html += '</div>';

		return html;
	}

	var elementDefaultOptions = {
		layout: {
			box_model: {
				margin: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				padding: {
					top: 10,
					bottom: 10,
					left: 10,
					right: 10
				}
			},
			use_grid: 1,
			column_span: {
				xs: {
					use: 0,
					class: 'sq-col-xs-12',
					visible: 0
				},
				sm: {
					use: 0,
					class: 'sq-col-sm-12',
					visible: 0
				},
				md: {
					use: 0,
					class: 'sq-col-md-12',
					visible: 1
				},
				lg: {
					use: 1,
					class: 'sq-col-lg-12',
					visible: 1
				},
			},
			width: '100',
			auto_width: 1,
			height: '100',
			auto_height: 1
		},
		style: {
			background_color: '#ffffff',
			background_opacity: '0',
			opacity: '1',
			box_shadow: 'none',
			border_width: '0',
			border_style: 'none',
			border_color: '#000000',
			border_opacity: '1',
			border_radius: '0',
		},
		font: {
			font_family: 'sans-serif',
			font_size: '14',
			font_weight: 'normal',
			font_style: 'normal',
			line_height: '22',
			text_color: '#ffffff',
			text_align: 'left',
			text_decoration: 'none',
			text_transform: 'none',
			text_shadow: ''
		},
		general: {
			id: '',
			classes: '',
			css: ''
		}
	};

	function Element(e) {
		this.settings = e.settings;

		this.defaults = $.extend(true, {}, elementDefaultOptions);
		this.elementSpecificDefaults = {};
		this.options = undefined;

		this.init(e);
	}
	Element.prototype.init = function(e) {
		// Merge defaults with element-specific options defaults
		var elementSpecificControls = $.extend(true, {}, registeredElements[this.settings.name].controls);

		for (var controlsGroupKey in elementSpecificControls) {
			var controlsRootObj = elementSpecificControls[controlsGroupKey];
			this.elementSpecificDefaults[controlsGroupKey] = {};

			for (var key in controlsRootObj) {
				var control = controlsRootObj[key];

				this.elementSpecificDefaults[controlsGroupKey][key] = control.default;
			}
		}

		this.defaults = $.extend(true, {}, this.defaults, this.elementSpecificDefaults);

		// Merge defaults with the provided options
		this.options = $.extend(true, {}, this.defaults, e.options);
	}
	Element.prototype.render = function() {
		var html = '';
		html += '<div class="squares-element '+ this.generateLayoutClass(this.options['layout']) +'" style="'+ this.generateCSS(this.options) +'">';
		html += registeredElements[this.settings.name].render(this.options);
		html += '</div>';

		return html;
	}
	Element.prototype.generateLayoutClass = function() {
		var o = this.options['layout'];

		if (parseInt(o['use_grid'], 10) == 1) {
			var classes = '';
			var v = o['column_span'];

			if (parseInt(v.xs.use, 10) == 1) {
				classes += v.xs.class + ' ';

				if (parseInt(v.xs.visible, 10) == 0) {
					classes += 'sq-hidden-xs ';
				}
			}
			if (parseInt(v.sm.use, 10) == 1) {
				classes += v.sm.class + ' ';

				if (parseInt(v.sm.visible, 10) == 0) {
					classes += 'sq-hidden-sm ';
				}
			}
			if (parseInt(v.md.use, 10) == 1) {
				classes += v.md.class + ' ';

				if (parseInt(v.md.visible, 10) == 0) {
					classes += 'sq-hidden-md ';
				}
			}
			if (parseInt(v.lg.use, 10) == 1) {
				classes += v.lg.class + ' ';

				if (parseInt(v.lg.visible, 10) == 0) {
					classes += 'sq-hidden-lg ';
				}
			}
			return classes;
		} else {
			return '';
		}
	}
	Element.prototype.generateCSS = function() {
		var css = '';

		// =====================================================================
		// Layout
		// =====================================================================

		var o = this.options['layout'];

		// Box Model
		css += 'margin-top: ' + o['box_model'].margin.top + 'px; ';
		css += 'margin-bottom: ' + o['box_model'].margin.bottom + 'px; ';
		css += 'margin-left: ' + o['box_model'].margin.left + 'px; ';
		css += 'margin-right: ' + o['box_model'].margin.right + 'px; ';
		css += 'padding-top: ' + o['box_model'].padding.top + 'px; ';
		css += 'padding-bottom: ' + o['box_model'].padding.bottom + 'px; ';
		css += 'padding-left: ' + o['box_model'].padding.left + 'px; ';
		css += 'padding-right: ' + o['box_model'].padding.right + 'px; ';

		if (parseInt(o['use_grid'], 10) == 1) {
			// Grid system

		} else {
			// Width
			if (parseInt(o['auto_width'], 10) == 1) {
				css += 'width: auto; ';
			} else {
				if (o['width'] !== '' && !isNaN(o['width'])) {
					css += 'width: '+ o['width'] +'px; ';
				}
			}

			// Height
			if (parseInt(o['auto_height'], 10) == 1) {
				css += 'height: auto; ';
			} else {
				if (o['height'] !== '' && !isNaN(o['height'])) {
					css += 'height: '+ o['height'] +'px; ';
				}
			}
		}

		css += 'float: left; ';

		// =====================================================================
		// Text
		// =====================================================================
		var o = this.options['font'];
		this.options.fontStyles = '';

		if (o) {
			// Font Family
			css += 'font-family: ' + o['font_family'] + '; ';
			this.options.fontStyles += 'font-family: ' + o['font_family'] + '; ';

			// Font Size
			css += 'font-size: ' + o['font_size'] + 'px; ';
			this.options.fontStyles += 'font-size: ' + o['font_size'] + 'px; ';

			// Font Weight
			css += 'font-weight: ' + o['font_weight'] + '; ';
			this.options.fontStyles += 'font-weight: ' + o['font_weight'] + '; ';

			// Font Style
			css += 'font-style: ' + o['font_style'] + '; ';
			this.options.fontStyles += 'font-style: ' + o['font_style'] + '; ';

			// Line Height
			css += 'line-height: ' + o['line_height'] + 'px; ';
			this.options.fontStyles += 'line-height: ' + o['line_height'] + 'px; ';

			// Text Color
			css += 'color: ' + o['text_color'] + '; ';
			this.options.fontStyles += 'color: ' + o['text_color'] + '; ';

			// Text Align
			css += 'text-align: ' + o['text_align'] + '; ';
			this.options.fontStyles += 'text-align: ' + o['text_align'] + '; ';

			// Text Decoration
			css += 'text-decoration: ' + o['text_decoration'] + '; ';
			this.options.fontStyles += 'text-decoration: ' + o['text_decoration'] + '; ';

			// Text Transform
			css += 'text-transform: ' + o['text_transform'] + '; ';
			this.options.fontStyles += 'text-transform: ' + o['text_transform'] + '; ';

			// Text Shadow
			css += 'text-shadow: ' + o['text_shadow'] + '; ';
			this.options.fontStyles += 'text-shadow: ' + o['text_shadow'] + '; ';
		}

		// =====================================================================
		// Style
		// =====================================================================
		var o = this.options['style'];

		if (o) {
			// Background Color
			var c_bg = hexToRgb(o['background_color']);
			css += 'background-color: rgba('+ c_bg.r +', '+ c_bg.g +', '+ c_bg.b +', '+ o['background_opacity'] +'); ';

			// Opacity
			css += 'opacity: ' + o['opacity'] + '; ';

			// Box Shadow
			css += 'box-shadow: ' + o['box_shadow'] + '; ';

			// Border Width
			css += 'border-width: ' + o['border_width'] + 'px; ';

			// Border Style
			css += 'border-style: ' + o['border_style'] + '; ';

			// Border Color
			var c_bg = hexToRgb(o['border_color']);
			css += 'border-color: rgba('+ c_bg.r +', '+ c_bg.g +', '+ c_bg.b +', '+ o['border_opacity'] +'); ';

			// Border Radius
			css += 'border-radius: ' + o['border_radius'] + 'px; ';
		}

		return css;
	}

	function hexToRgb(hex) {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	}

})(jQuery, window, document);

// Squares
// Description: Interactive and embeddable HTML content builder.
// Author: Nikolay Dyankov
// License: MIT

;(function ($, window, document, undefined) {
    // Register built-in elements using the public API
	var paragraphElementOptions = {
        name: "Paragraph",
        iconClass: "fa fa-paragraph",
        controls: {
            text: {
                text: {
                    name: 'Text',
                    type: 'textarea',
                    default: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
                }
            }
        },
        controlGroupIcons: {
            text: 'fa fa-ellipsis-h'
        },
		// Obsolete with the "render" function.
		// To be removed after squares.js is reworked to use the "render" function.
        content: function() {
            var text = this.controls.text.text.getVal();

            // Strip slashes
            text = text.replace(/\\(.)/mg, "$1");

            // Replace line breaks with <br>
            text = text.replace(/\n/mg, "<br>");

            return '<p id="'+ this.controls.general.id.getVal() +'" style="'+ this.controls.general.css.getVal() + this.fontStyles +' margin: 0; padding: 0;" class="'+ this.controls.general.classes.getVal() +'">'+ text +'</p>';
        },
		render: function(options) {
			var text = options.text.text;

            // Strip slashes
            text = text.replace(/\\(.)/mg, "$1");

            // Replace line breaks with <br>
            text = text.replace(/\n/mg, "<br>");

            return '<p id="'+ options.general.id +'" style="'+ options.general.css + options.fontStyles +' margin: 0; padding: 0;" class="'+ options.general.classes +'">'+ text +'</p>';
		}
    };

	if ($.squaresRegisterElement) {
		$.squaresRegisterElement(paragraphElementOptions);
	}
    $.squaresRendererRegisterElement(paragraphElementOptions);

	var headingElementOptions = {
        name: "Heading",
        iconClass: "fa fa-header",
        controls: {
            heading: {
                text: {
                    name: 'Text',
                    type: 'text',
                    default: 'Lorem Ipsum'
                },
                heading: {
                    name: 'Heading',
                    type: 'select',
                    options: ['h1', 'h2', 'h3'],
                    default: 'h3'
                }
            }
        },
        controlGroupIcons: {
            heading: 'fa fa-header'
        },
		// Obsolete with the "render" function.
		// To be removed after squares.js is reworked to use the "render" function.
        content: function() {
            return '<'+ this.controls['heading']['heading'].getVal() +' id="'+ this.controls['general']['id'].getVal() +'" style="'+ this.controls['general']['css'].getVal() + this.fontStyles +' margin: 0; padding: 0;" class="'+ this.controls['general']['classes'].getVal() +'">'+ this.controls.heading.text.getVal() +'</'+ this.controls['heading']['heading'].getVal() +'>';
        },
		render: function(options) {
			return '<'+ options['heading']['heading'] +' id="'+ options['general']['id'] +'" style="'+ options['general']['css'] + options.fontStyles +' margin: 0; padding: 0;" class="'+ options['general']['classes'] +'">'+ options.heading.text +'</'+ options['heading']['heading'] +'>';
		}
    };

	if ($.squaresRegisterElement) {
		$.squaresRegisterElement(headingElementOptions);
	}
    $.squaresRendererRegisterElement(headingElementOptions);

	var imageElementSettings = {
        name: "Image",
        iconClass: "fa fa-camera",
        controls: {
            image: {
                url: {
                    name: 'Image URL',
                    type: 'wp media upload',
                    default: 'https://webcraftplugins.com/uploads/placeholder_image.png'
                },
                image_is_a_link: {
                    name: 'Image is a Link',
                    type: 'switch',
                    default: 0
                },
                link_to: {
                    name: 'Link to',
                    type: 'text',
                    default: '#'
                }
            }
        },
        controlGroupIcons: {
            image: 'fa fa-camera'
        },
        useFontControls: false,
		// Obsolete with the "render" function.
		// To be removed after squares.js is reworked to use the "render" function.
        content: function() {
            var html = '';

            if (parseInt(this.controls.image.image_is_a_link.getVal(), 10) == 1) {
                html += '<a href="'+ this.controls.image.link_to.getVal() +'">';
            }

            html += '<img src="'+ this.controls.image.url.getVal() +'" id="'+ this.controls.general.id.getVal() +'" style="'+ this.controls.general.css.getVal() +'" class="'+ this.controls.general.classes.getVal() +'">';

            if (parseInt(this.controls.image.image_is_a_link.getVal(), 10) == 1) {
                html += '</a>';
            }

            return html;
        },
		render: function(options) {
			var html = '';

			if (parseInt(options.image.image_is_a_link, 10) == 1) {
				html += '<a href="'+ options.image.link_to +'">';
			}

			html += '<img src="'+ options.image.url +'" id="'+ options.general.id +'" style="'+ options.general.css +'" class="'+ options.general.classes +'">';

			if (parseInt(options.image.image_is_a_link, 10) == 1) {
				html += '</a>';
			}

			return html;
		}
    };

	if ($.squaresRegisterElement) {
		$.squaresRegisterElement(imageElementSettings);
	}
    $.squaresRendererRegisterElement(imageElementSettings);

	var videoElementSettings = {
        name: "Video",
        iconClass: "fa fa-video-camera",
        controls: {
            video: {
                mp4_url: {
                    name: 'MP4 URL',
                    type: 'text',
                    default: 'http://webcraftplugins.com/uploads/example_video.mp4'
                },
                webm_url: {
                    name: 'WEBM URL',
                    type: 'text',
                    default: 'http://webcraftplugins.com/uploads/example_video.webm'
                },
                ogv_url: {
                    name: 'OGV URL',
                    type: 'text',
                    default: 'http://webcraftplugins.com/uploads/example_video.ogv'
                },
                video_is_a_link: {
                    name: 'Video is a Link',
                    type: 'switch',
                    default: 0
                },
                link_to: {
                    name: 'Link to',
                    type: 'text',
                    default: '#'
                },
                autoplay: {
                    name: 'Autoplay',
                    type: 'switch',
                    default: 0
                },
                loop: {
                    name: 'Loop',
                    type: 'switch',
                    default: 0
                },
                controls: {
                    name: 'Controls',
                    type: 'switch',
                    default: 0
                }
            }
        },
        useFontControls: false,
        controlGroupIcons: {
            video: 'fa fa-video-camera'
        },
		// Obsolete with the "render" function.
		// To be removed after squares.js is reworked to use the "render" function.
        content: function() {
            var html = '';

            if (parseInt(this.controls.video.video_is_a_link.getVal(), 10) == 1) {
                html += '<a href="'+ this.controls.video.link_to.getVal() +'">';
            }

            var videoTagAtts = '';

            if (parseInt(this.controls.video.autoplay.getVal(), 10) == 1) {
                videoTagAtts += ' autoplay ';
            }
            if (parseInt(this.controls.video.loop.getVal(), 10) == 1) {
                videoTagAtts += ' loop ';
            }
            if (parseInt(this.controls.video.controls.getVal(), 10) == 1) {
                videoTagAtts += ' controls ';
            }

            html += '<video '+ videoTagAtts +' id="'+ this.controls.general.id.getVal() +'" style="'+ this.controls.general.css.getVal() +'" class="'+ this.controls.general.classes.getVal() +'"><source src="'+ this.controls.video.mp4_url.getVal() +'" type="video/mp4"><source src="'+ this.controls.video.webm_url.getVal() +'" type="video/webm"><source src="'+ this.controls.video.ogv_url.getVal() +'" type="video/ogv"></video>';

            if (parseInt(this.controls.video.video_is_a_link.getVal(), 10) == 1) {
                html += '</a>';
            }

            return html;
        },
		render: function(options) {
			var html = '';

            if (parseInt(options.video.video_is_a_link, 10) == 1) {
                html += '<a href="'+ options.video.link_to +'">';
            }

            var videoTagAtts = '';

            if (parseInt(options.video.autoplay, 10) == 1) {
                videoTagAtts += ' autoplay ';
            }
            if (parseInt(options.video.loop, 10) == 1) {
                videoTagAtts += ' loop ';
            }
            if (parseInt(options.video.controls, 10) == 1) {
                videoTagAtts += ' controls ';
            }

            html += '<video '+ videoTagAtts +' id="'+ options.general.id +'" style="'+ options.general.css +'" class="'+ options.general.classes +'"><source src="'+ options.video.mp4_url +'" type="video/mp4"><source src="'+ options.video.webm_url +'" type="video/webm"><source src="'+ options.video.ogv_url +'" type="video/ogv"></video>';

            if (parseInt(options.video.video_is_a_link, 10) == 1) {
                html += '</a>';
            }

            return html;
		}
    };

	if ($.squaresRegisterElement) {
		$.squaresRegisterElement(videoElementSettings);
	}
    $.squaresRendererRegisterElement(videoElementSettings);

	var youtubeElementSettings = {
        name: "YouTube",
        iconClass: "fa fa-youtube",
        useStyleControls: false,
        useFontControls: false,
        controls: {
            youtube: {
                embed_code: {
                    name: 'Embed Code',
                    type: 'textarea',
                    default: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6NC_ODHu5jg" frameborder="0" allowfullscreen></iframe>'
                },
                allow_fullscreen: {
                    name: 'Allow Fullscreen',
                    type: 'switch',
                    default: 1
                },
                iframe_width: {
                    name: 'iframe Width',
                    type: 'int',
                    default: 320
                },
                iframe_auto_width: {
                    name: 'iframe Auto Width',
                    type: 'switch',
                    default: 1
                },
                iframe_height: {
                    name: 'iframe Height',
                    type: 'int',
                    default: 320
                }
            }
        },
        controlGroupIcons: {
            youtube: 'fa fa-youtube'
        },
		// Obsolete with the "render" function.
		// To be removed after squares.js is reworked to use the "render" function.
        content: function() {
            // to do:
            // get the embed code from the controls, wrap it in a div, apply ID, CSS and classes to the DIV and set the iframe to 100% width and height
            // also implement the "allow fullscreen" option

            var embedCode = this.controls.youtube.embed_code.getVal();
            var html = '';

            html += '<div id="'+ this.controls.general.id.getVal() +'" style="'+ this.controls.general.css.getVal() +'" class="'+ this.controls.general.classes.getVal() +'">';

            // Allow fullscreen
            embedCode = embedCode.replace('allowfullscreen', '');
            if (parseInt(this.controls.youtube.allow_fullscreen.getVal(), 10) == 1 && embedCode.indexOf('allowfullscreen') == -1) {
                embedCode = embedCode.replace('></iframe>', ' allowfullscreen></iframe>');
            }

            // Set width
            if (parseInt(this.controls.youtube.iframe_auto_width.getVal(), 10) == 1) {
                embedCode = embedCode.replace(/width="\d+"/g, 'width="100%"');
            } else {
                embedCode = embedCode.replace(/width="\d+"/g, 'width="'+ this.controls.youtube.iframe_width.getVal() +'px"');
            }

            // Set height
            embedCode = embedCode.replace(/height="\d+"/g, 'height="'+ this.controls.youtube.iframe_height.getVal() +'px"');

            html += embedCode;

            html += '</div>';

            return html;
        },
		render: function(options) {
			// to do:
            // get the embed code from the controls, wrap it in a div, apply ID, CSS and classes to the DIV and set the iframe to 100% width and height
            // also implement the "allow fullscreen" option

            var embedCode = options.youtube.embed_code;
            var html = '';

            html += '<div id="'+ options.general.id +'" style="'+ options.general.css +'" class="'+ options.general.classes +'">';

            // Allow fullscreen
            embedCode = embedCode.replace('allowfullscreen', '');
            if (parseInt(options.youtube.allow_fullscreen, 10) == 1 && embedCode.indexOf('allowfullscreen') == -1) {
                embedCode = embedCode.replace('></iframe>', ' allowfullscreen></iframe>');
            }

            // Set width
            if (parseInt(options.youtube.iframe_auto_width, 10) == 1) {
                embedCode = embedCode.replace(/width="\d+"/g, 'width="100%"');
            } else {
                embedCode = embedCode.replace(/width="\d+"/g, 'width="'+ options.youtube.iframe_width +'px"');
            }

            // Set height
            embedCode = embedCode.replace(/height="\d+"/g, 'height="'+ options.youtube.iframe_height +'px"');

            html += embedCode;

            html += '</div>';

            return html;
		}
    };

	if ($.squaresRegisterElement) {
		$.squaresRegisterElement(youtubeElementSettings);
	}
    $.squaresRendererRegisterElement(youtubeElementSettings);

	var buttonElementSettings = {
        name: "Button",
        iconClass: "fa fa-link",
        controls: {
            button: {
                text: {
                    name: 'Text',
                    type: 'text',
                    default: 'Button'
                },
                link_to: {
                    name: 'Link to',
                    type: 'text',
                    default: '#'
                },
                new_tab: {
                    name: 'Open in New Tab',
                    type: 'switch',
                    default: 0
                },
                display: {
                    name: 'Display',
                    type: 'button group',
                    options: ['inline-block', 'block'],
                    default: 'inline-block'
                },
                height: {
                    name: 'Height',
                    type: 'int',
                    default: 44
                },
                bg_color: {
                    name: 'Background Color',
                    type: 'color',
                    default: '#2196f3'
                },
                text_color: {
                    name: 'Text Color',
                    type: 'color',
                    default: '#ffffff'
                },
                border_radius: {
                    name: 'Border Radius',
                    type: 'int',
                    default: 10
                },
                padding: {
                    name: 'Padding Left/Right',
                    type: 'int',
                    default: 20
                },
            }
        },
        controlGroupIcons: {
            button: 'fa fa-link'
        },
		// Obsolete with the "render" function.
		// To be removed after squares.js is reworked to use the "render" function.
        content: function() {
            var buttonStyle = '';

            buttonStyle += 'display: ' + this.controls.button.display.getVal() + '; ';
            buttonStyle += 'height: ' + this.controls.button.height.getVal() + 'px; ';
            buttonStyle += 'line-height: ' + this.controls.button.height.getVal() + 'px; ';
            buttonStyle += 'background-color: ' + this.controls.button.bg_color.getVal() + '; ';
            buttonStyle += 'color: ' + this.controls.button.text_color.getVal() + '; ';
            buttonStyle += 'border-radius: ' + this.controls.button.border_radius.getVal() + 'px; ';
            buttonStyle += 'padding-left: ' + this.controls.button.padding.getVal() + 'px; ';
            buttonStyle += 'padding-right: ' + this.controls.button.padding.getVal() + 'px; ';

            var newTab = '';

            if (parseInt(this.controls.button.new_tab.getVal(), 10) == 1) {
                newTab = 'target="_blank"';
            }

            return '<div id="'+ this.controls.general.id.getVal() +'" style="'+ this.controls.general.css.getVal() +'" class="'+ this.controls.general.classes.getVal() +'"><a href="'+ this.controls.button.link_to.getVal() +'" style="'+ buttonStyle +'" '+ newTab +' class="squares-button">'+ this.controls.button.text.getVal() +'</a></div>';
        },
		render: function(options) {
			var buttonStyle = '';

            buttonStyle += 'display: ' + options.button.display + '; ';
            buttonStyle += 'height: ' + options.button.height + 'px; ';
            buttonStyle += 'line-height: ' + options.button.height + 'px; ';
            buttonStyle += 'background-color: ' + options.button.bg_color + '; ';
            buttonStyle += 'color: ' + options.button.text_color + '; ';
            buttonStyle += 'border-radius: ' + options.button.border_radius + 'px; ';
            buttonStyle += 'padding-left: ' + options.button.padding + 'px; ';
            buttonStyle += 'padding-right: ' + options.button.padding + 'px; ';

            var newTab = '';

            if (parseInt(options.button.new_tab, 10) == 1) {
                newTab = 'target="_blank"';
            }

            return '<div id="'+ options.general.id +'" style="'+ options.general.css +'" class="'+ options.general.classes +'"><a href="'+ options.button.link_to +'" style="'+ buttonStyle +'" '+ newTab +' class="squares-button">'+ options.button.text +'</a></div>';
		}
    };

	if ($.squaresRegisterElement) {
		$.squaresRegisterElement(buttonElementSettings);
	}
    $.squaresRendererRegisterElement(buttonElementSettings);

})(jQuery, window, document);

// Squares
// Description: Interactive and embeddable HTML content builder.
// Author: Nikolay Dyankov
// License: MIT

;(function ($, window, document, undefined) {
    $.squaresRegisterControl({
        type: 'int',
        getValue: function() {
            return parseInt($('#' + this.elementID).val(), 10);
        },
        setValue: function(v) {
            $('#' + this.elementID).val(parseInt(v, 10));
        },
        HTML: function() {
            return '<input type="text" id="'+ this.elementID +'">';
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
    $.squaresRegisterControl({
        type: 'float',
        getValue: function() {
            return parseFloat($('#' + this.elementID).val());
        },
        setValue: function(v) {
            $('#' + this.elementID).val(parseFloat(v));
        },
        HTML: function() {
            return '<input type="text" id="'+ this.elementID +'">';
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
    $.squaresRegisterControl({
        type: 'text',
        getValue: function() {
            return $('#' + this.elementID).val();
        },
        setValue: function(v) {
            $('#' + this.elementID).val(v);
        },
        HTML: function() {
            return '<input type="text" id="'+ this.elementID +'">';
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
    $.squaresRegisterControl({
        type: 'textarea',
        getValue: function() {
            return $('#' + this.elementID).val();
        },
        setValue: function(v) {
            $('#' + this.elementID).val(v);
        },
        HTML: function() {
            return '<textarea id="'+ this.elementID +'" rows="5"></textarea>';
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
    $.squaresRegisterControl({
        type: 'checkbox',
        getValue: function() {
            if ($('#' + this.elementID).get(0).checked == true) {
                return 1;
            } else {
                return 0;
            }
        },
        setValue: function(v) {
            if (parseInt(v, 10) === 1) {
                $('#' + this.elementID).get(0).checked = true;
            } else {
                $('#' + this.elementID).get(0).checked = false;
            }
        },
        HTML: function() {
            return '<input type="checkbox" id="'+ this.elementID +'">';
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
    $.squaresRegisterControl({
        type: 'color',
        getValue: function() {
            return $('#' + this.elementID).val();
        },
        setValue: function(v) {
            $('#' + this.elementID).val(v);
        },
        HTML: function() {
            return '<input type="color" id="'+ this.elementID +'">';
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
    $.squaresRegisterControl({
        type: 'select',
        getValue: function() {
            return $('#' + this.elementID).val();
        },
        setValue: function(v) {
            $('#' + this.elementID).val(v);
        },
        HTML: function() {
            var html = '';

            html += '<select id="'+ this.elementID +'">';

            for (var i=0; i<this.options.length; i++) {
                html += '<option value="'+ this.options[i] +'">'+ this.options[i] +'</option>';
            }

            html += '</select>';

            return html;
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
    $.squaresRegisterControl({
        type: 'box model',
        getValue: function() {
            return {
                margin: {
                    top: parseInt($('#sq-element-option-boxmodel-margin-top').val(), 10),
                    bottom: parseInt($('#sq-element-option-boxmodel-margin-bottom').val(), 10),
                    left: parseInt($('#sq-element-option-boxmodel-margin-left').val(), 10),
                    right: parseInt($('#sq-element-option-boxmodel-margin-right').val(), 10)
                },
                padding: {
                    top: parseInt($('#sq-element-option-boxmodel-padding-top').val(), 10),
                    bottom: parseInt($('#sq-element-option-boxmodel-padding-bottom').val(), 10),
                    left: parseInt($('#sq-element-option-boxmodel-padding-left').val(), 10),
                    right: parseInt($('#sq-element-option-boxmodel-padding-right').val(), 10)
                }
            }
        },
        setValue: function(v) {
            $('#sq-element-option-boxmodel-margin-top').val(this._value.margin.top);
            $('#sq-element-option-boxmodel-margin-bottom').val(this._value.margin.bottom);
            $('#sq-element-option-boxmodel-margin-left').val(this._value.margin.left);
            $('#sq-element-option-boxmodel-margin-right').val(this._value.margin.right);

            $('#sq-element-option-boxmodel-padding-top').val(this._value.padding.top);
            $('#sq-element-option-boxmodel-padding-bottom').val(this._value.padding.bottom);
            $('#sq-element-option-boxmodel-padding-left').val(this._value.padding.left);
            $('#sq-element-option-boxmodel-padding-right').val(this._value.padding.right);
        },
        HTML: function() {
            var html = '';

            html += '<div class="sq-boxmodel-margin" id="'+ this.elementID +'">';
            html += '   <div id="sq-boxmodel-label-margin">margin</div>';
            html += '   <input type="text" class="sq-boxmodel-input" id="sq-element-option-boxmodel-margin-top">';
            html += '   <input type="text" class="sq-boxmodel-input" id="sq-element-option-boxmodel-margin-bottom">';
            html += '   <input type="text" class="sq-boxmodel-input" id="sq-element-option-boxmodel-margin-left">';
            html += '   <input type="text" class="sq-boxmodel-input" id="sq-element-option-boxmodel-margin-right">';
            html += '   <div class="sq-boxmodel-padding">';
            html += '       <div id="sq-boxmodel-label-padding">padding</div>';
            html += '       <input type="text" class="sq-boxmodel-input" id="sq-element-option-boxmodel-padding-top">';
            html += '       <input type="text" class="sq-boxmodel-input" id="sq-element-option-boxmodel-padding-bottom">';
            html += '       <input type="text" class="sq-boxmodel-input" id="sq-element-option-boxmodel-padding-left">';
            html += '       <input type="text" class="sq-boxmodel-input" id="sq-element-option-boxmodel-padding-right">';
            html += '   </div>';
            html += '</div>';

            return html;
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID + ' input', function() {
                self.valueChanged();
            });
        }
    });
    $.squaresRegisterControl({
        type: 'slider',
        getValue: function() {
            var v = 0;

            // Get the ball position
            var ball = $('#' + this.elementID).find('.sq-control-slider-ball');
            var ballPosition = ball.position().left;

            // Get the track width
            var track = $('#' + this.elementID).find('.sq-control-slider-track');
            var trackWidth = track.outerWidth();

            // Calculate value
            var progress = ballPosition / trackWidth;
            v = this.options.min + (this.options.max - this.options.min) * progress;

            if (this.options.type == 'int') v = Math.round(v);

            return v;
        },
        setValue: function(v) {
            if (this.options.type == 'int') v = Math.round(v);

            var progress = (v - this.options.min) / (this.options.max - this.options.min);

            var ball = $('#' + this.elementID).find('.sq-control-slider-ball');

            // Get the track width
            var track = $('#' + this.elementID).find('.sq-control-slider-track');
            var trackWidth = track.outerWidth();

            ball.css({
                left: trackWidth * progress
            });
        },
        HTML: function() {
            var html = '';

            html += '<div class="sq-control-slider" id="'+ this.elementID +'">';
            html += '   <div class="sq-control-slider-bubble"></div>';
            html += '   <div class="sq-control-slider-track"></div>';
            html += '   <div class="sq-control-slider-ball"></div>';
            html += '</div>';

            return html;
        },
        init: function() {
            var self = this;
            var ix = 0, iex = 0, dragging = false, ball = undefined, track = undefined, bubble = undefined;

            // Ball dragging
            $(document).on('mousedown', '#' + self.elementID + ' .sq-control-slider-ball', function(e) {
                ball = $('#' + self.elementID).find('.sq-control-slider-ball');
                track = $('#' + self.elementID).find('.sq-control-slider-track');
                bubble = $('#' + self.elementID).find('.sq-control-slider-bubble');
                ix = ball.position().left;
                iex = e.pageX;

                dragging = true;

                if ($.wcpEditorSliderStartedDragging) {
                    $.wcpEditorSliderStartedDragging();
                }

                // Show value bubble
                bubble.show();
            });
            $(document).on('mousemove.' + this.elementID, function(e) {
                if (dragging) {
                    var o = ix - iex + e.pageX;

                    if (o < 0) o = 0;
                    if (o > track.outerWidth()) o = track.outerWidth();

                    if (self.options.type == 'int') {
                        var step = track.outerWidth() / (self.options.max + 1);

                        o = o - (o % step);
                    }

                    ball.css({
                        left: o
                    });

                    self.valueChanged();

                    // Update value bubble
                    var rounded = Math.round(self.getValue() * 10)/10;

                    if (self.options.type == 'int') {
                        rounded = self.getValue();
                    }

                    bubble.html(rounded);
                    bubble.css({
                        left: o
                    });
                }
            });
            $(document).on('mouseup.' + this.elementID, function(e) {
                if (dragging) {
                    if ($.wcpEditorSliderFinishedDragging) {
                        $.wcpEditorSliderFinishedDragging();
                    }

                    dragging = false;
                    self.valueChanged();

                    // Hide value bubble
                    bubble.hide();
                }
            });

            // Click on the track
            $(document).on('mousedown', '#' + self.elementID + ' .sq-control-slider-track', function(e) {
                ball = $('#' + self.elementID).find('.sq-control-slider-ball');
                track = $('#' + self.elementID).find('.sq-control-slider-track');
                bubble = $('#' + self.elementID).find('.sq-control-slider-bubble');

                // Set the ball to the mouse position
                var o = e.pageX - track.offset().left;

                if (o < 0) o = 0;
                if (o > track.outerWidth()) o = track.outerWidth();

                ball.css({
                    left: o
                });

                // Start dragging
                ix = ball.position().left;
                iex = e.pageX;

                dragging = true;

                // Show value bubble
                bubble.show();
            });
        }
    });
    $.squaresRegisterControl({
        type: 'grid system',
        getValue: function() {
            // tmp
            var res = {
                xs: {
                    use: 1,
                    class: 'sq-col-xs-1',
                    visible: 1
                },
                sm: {
                    use: 1,
                    class: 'sq-col-sm-1',
                    visible: 1
                },
                md: {
                    use: 1,
                    class: 'sq-col-md-1',
                    visible: 1
                },
                lg: {
                    use: 1,
                    class: 'sq-col-lg-1',
                    visible: 1
                },
            };

            var root = $('#' + this.elementID);

            // XS ---------
            var xsGroup = root.find('.sq-grid-system-control-res-group-xs');

            // Use
            if (xsGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked) {
                res.xs.use = 1;
            } else {
                res.xs.use = 0;
            }

            // Class
            res.xs.class = xsGroup.find('.sq-grid-system-control-select-colspan').val();

            // Visible
            if (xsGroup.find('.sq-grid-system-control-visible').hasClass('sq-grid-system-control-visible-not')) {
                res.xs.visible = 0;
            } else {
                res.xs.visible = 1;
            }

            // SM ---------
            var smGroup = root.find('.sq-grid-system-control-res-group-sm');

            // Use
            if (smGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked) {
                res.sm.use = 1;
            } else {
                res.sm.use = 0;
            }

            // Class
            res.sm.class = smGroup.find('.sq-grid-system-control-select-colspan').val();

            // Visible
            if (smGroup.find('.sq-grid-system-control-visible').hasClass('sq-grid-system-control-visible-not')) {
                res.sm.visible = 0;
            } else {
                res.sm.visible = 1;
            }

            // MD ---------
            var mdGroup = root.find('.sq-grid-system-control-res-group-md');

            // Use
            if (mdGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked) {
                res.md.use = 1;
            } else {
                res.md.use = 0;
            }

            // Class
            res.md.class = mdGroup.find('.sq-grid-system-control-select-colspan').val();

            // Visible
            if (mdGroup.find('.sq-grid-system-control-visible').hasClass('sq-grid-system-control-visible-not')) {
                res.md.visible = 0;
            } else {
                res.md.visible = 1;
            }

            // LG ---------
            var lgGroup = root.find('.sq-grid-system-control-res-group-lg');

            // Use
            if (lgGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked) {
                res.lg.use = 1;
            } else {
                res.lg.use = 0;
            }

            // Class
            res.lg.class = lgGroup.find('.sq-grid-system-control-select-colspan').val();

            // Visible
            if (lgGroup.find('.sq-grid-system-control-visible').hasClass('sq-grid-system-control-visible-not')) {
                res.lg.visible = 0;
            } else {
                res.lg.visible = 1;
            }

            return res;
        },
        setValue: function(v) {
            var root = $('#' + this.elementID);

            // XS ---------
            var xsGroup = root.find('.sq-grid-system-control-res-group-xs');

            // Use
            if (parseInt(v.xs.use, 10) == 1) {
                xsGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked = true;
                xsGroup.find('select').removeAttr('disabled');
                xsGroup.find('.sq-grid-system-control-visible').removeClass('sq-control-disabled');
            } else {
                xsGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked = false;
                xsGroup.find('select').attr('disabled', 'disabled');
                xsGroup.find('.sq-grid-system-control-visible').addClass('sq-control-disabled');
            }

            // Class
            xsGroup.find('.sq-grid-system-control-select-colspan').val(v.xs.class);

            // Visible
            if (parseInt(v.xs.visible, 10) == 1) {
                xsGroup.find('.sq-grid-system-control-visible').removeClass('sq-grid-system-control-visible-not');
            } else {
                xsGroup.find('.sq-grid-system-control-visible').addClass('sq-grid-system-control-visible-not');
            }

            // SM ---------
            var smGroup = root.find('.sq-grid-system-control-res-group-sm');

            // Use
            if (parseInt(v.sm.use, 10) == 1) {
                smGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked = true;
                smGroup.find('select').removeAttr('disabled');
                smGroup.find('.sq-grid-system-control-visible').removeClass('sq-control-disabled');
            } else {
                smGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked = false;
                smGroup.find('select').attr('disabled', 'disabled');
                smGroup.find('.sq-grid-system-control-visible').addClass('sq-control-disabled');
            }

            // Class
            smGroup.find('.sq-grid-system-control-select-colspan').val(v.sm.class);

            // Visible
            if (parseInt(v.sm.visible, 10) == 1) {
                smGroup.find('.sq-grid-system-control-visible').removeClass('sq-grid-system-control-visible-not');
            } else {
                smGroup.find('.sq-grid-system-control-visible').addClass('sq-grid-system-control-visible-not');
            }

            // MD ---------
            var mdGroup = root.find('.sq-grid-system-control-res-group-md');

            // Use
            if (parseInt(v.md.use, 10) == 1) {
                mdGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked = true;
                mdGroup.find('select').removeAttr('disabled');
                mdGroup.find('.sq-grid-system-control-visible').removeClass('sq-control-disabled');
            } else {
                mdGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked = false;
                mdGroup.find('select').attr('disabled', 'disabled');
                mdGroup.find('.sq-grid-system-control-visible').addClass('sq-control-disabled');
            }

            // Class
            mdGroup.find('.sq-grid-system-control-select-colspan').val(v.md.class);

            // Visible
            if (parseInt(v.md.visible, 10) == 1) {
                mdGroup.find('.sq-grid-system-control-visible').removeClass('sq-grid-system-control-visible-not');
            } else {
                mdGroup.find('.sq-grid-system-control-visible').addClass('sq-grid-system-control-visible-not');
            }

            // LG ---------
            var lgGroup = root.find('.sq-grid-system-control-res-group-lg');

            // Use
            if (parseInt(v.lg.use, 10) == 1) {
                lgGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked = true;
                lgGroup.find('select').removeAttr('disabled');
                lgGroup.find('.sq-grid-system-control-visible').removeClass('sq-control-disabled');
            } else {
                lgGroup.find('.sq-grid-system-control-res-use-checkbox').get(0).checked = false;
                lgGroup.find('select').attr('disabled', 'disabled');
                lgGroup.find('.sq-grid-system-control-visible').addClass('sq-control-disabled');
            }

            // Class
            lgGroup.find('.sq-grid-system-control-select-colspan').val(v.lg.class);

            // Visible
            if (parseInt(v.lg.visible, 10) == 1) {
                lgGroup.find('.sq-grid-system-control-visible').removeClass('sq-grid-system-control-visible-not');
            } else {
                lgGroup.find('.sq-grid-system-control-visible').addClass('sq-grid-system-control-visible-not');
            }
        },
        HTML: function() {
            var html = '';

            html += '<div class="sq-grid-system-control" id="'+ this.elementID +'">';

            // LG
            html += '   <div class="sq-grid-system-control-res-group sq-grid-system-control-res-group-lg">';
            html += '       <div class="sq-grid-system-control-res-name">LG</div>';
            html += '       <div class="sq-grid-system-control-res-use">';
            html += '           <input type="checkbox" class="sq-grid-system-control-res-use-checkbox">';
            html += '       </div>';
            html += '       <div class="sq-grid-system-control-colspan">';
            html += '           <select class="sq-grid-system-control-select-colspan">';
            html += '               <option value="sq-col-lg-1">1 Column</option>';
            html += '               <option value="sq-col-lg-2">2 Columns</option>';
            html += '               <option value="sq-col-lg-3">3 Columns</option>';
            html += '               <option value="sq-col-lg-4">4 Columns</option>';
            html += '               <option value="sq-col-lg-5">5 Columns</option>';
            html += '               <option value="sq-col-lg-6">6 Column</option>';
            html += '               <option value="sq-col-lg-7">7 Columns</option>';
            html += '               <option value="sq-col-lg-8">8 Columns</option>';
            html += '               <option value="sq-col-lg-9">9 Columns</option>';
            html += '               <option value="sq-col-lg-10">10 Columns</option>';
            html += '               <option value="sq-col-lg-11">11 Columns</option>';
            html += '               <option value="sq-col-lg-12">12 Columns</option>';
            html += '           </select>';
            html += '       </div>';
            html += '       <div class="sq-grid-system-control-visible">';
            html += '           <i class="fa fa-eye" aria-hidden="true"></i>';
            html += '           <i class="fa fa-eye-slash" aria-hidden="true"></i>';
            html += '       </div>';
            html += '   </div>';

            // MD
            html += '   <div class="sq-grid-system-control-res-group sq-grid-system-control-res-group-md">';
            html += '       <div class="sq-grid-system-control-res-name">MD</div>';
            html += '       <div class="sq-grid-system-control-res-use">';
            html += '           <input type="checkbox" class="sq-grid-system-control-res-use-checkbox">';
            html += '       </div>';
            html += '       <div class="sq-grid-system-control-colspan">';
            html += '           <select class="sq-grid-system-control-select-colspan">';
            html += '               <option value="sq-col-md-1">1 Column</option>';
            html += '               <option value="sq-col-md-2">2 Columns</option>';
            html += '               <option value="sq-col-md-3">3 Columns</option>';
            html += '               <option value="sq-col-md-4">4 Columns</option>';
            html += '               <option value="sq-col-md-5">5 Columns</option>';
            html += '               <option value="sq-col-md-6">6 Column</option>';
            html += '               <option value="sq-col-md-7">7 Columns</option>';
            html += '               <option value="sq-col-md-8">8 Columns</option>';
            html += '               <option value="sq-col-md-9">9 Columns</option>';
            html += '               <option value="sq-col-md-10">10 Columns</option>';
            html += '               <option value="sq-col-md-11">11 Columns</option>';
            html += '               <option value="sq-col-md-12">12 Columns</option>';
            html += '           </select>';
            html += '       </div>';
            html += '       <div class="sq-grid-system-control-visible">';
            html += '           <i class="fa fa-eye" aria-hidden="true"></i>';
            html += '           <i class="fa fa-eye-slash" aria-hidden="true"></i>';
            html += '       </div>';
            html += '   </div>';

            // SM
            html += '   <div class="sq-grid-system-control-res-group sq-grid-system-control-res-group-sm">';
            html += '       <div class="sq-grid-system-control-res-name">SM</div>';
            html += '       <div class="sq-grid-system-control-res-use">';
            html += '           <input type="checkbox" class="sq-grid-system-control-res-use-checkbox">';
            html += '       </div>';
            html += '       <div class="sq-grid-system-control-colspan">';
            html += '           <select class="sq-grid-system-control-select-colspan">';
            html += '               <option value="sq-col-sm-1">1 Column</option>';
            html += '               <option value="sq-col-sm-2">2 Columns</option>';
            html += '               <option value="sq-col-sm-3">3 Columns</option>';
            html += '               <option value="sq-col-sm-4">4 Columns</option>';
            html += '               <option value="sq-col-sm-5">5 Columns</option>';
            html += '               <option value="sq-col-sm-6">6 Column</option>';
            html += '               <option value="sq-col-sm-7">7 Columns</option>';
            html += '               <option value="sq-col-sm-8">8 Columns</option>';
            html += '               <option value="sq-col-sm-9">9 Columns</option>';
            html += '               <option value="sq-col-sm-10">10 Columns</option>';
            html += '               <option value="sq-col-sm-11">11 Columns</option>';
            html += '               <option value="sq-col-sm-12">12 Columns</option>';
            html += '           </select>';
            html += '       </div>';
            html += '       <div class="sq-grid-system-control-visible">';
            html += '           <i class="fa fa-eye" aria-hidden="true"></i>';
            html += '           <i class="fa fa-eye-slash" aria-hidden="true"></i>';
            html += '       </div>';
            html += '   </div>';

            // XS
            html += '   <div class="sq-grid-system-control-res-group sq-grid-system-control-res-group-xs">';
            html += '       <div class="sq-grid-system-control-res-name">XS</div>';
            html += '       <div class="sq-grid-system-control-res-use">';
            html += '           <input type="checkbox" class="sq-grid-system-control-res-use-checkbox">';
            html += '       </div>';
            html += '       <div class="sq-grid-system-control-colspan">';
            html += '           <select class="sq-grid-system-control-select-colspan">';
            html += '               <option value="sq-col-xs-1">1 Column</option>';
            html += '               <option value="sq-col-xs-2">2 Columns</option>';
            html += '               <option value="sq-col-xs-3">3 Columns</option>';
            html += '               <option value="sq-col-xs-4">4 Columns</option>';
            html += '               <option value="sq-col-xs-5">5 Columns</option>';
            html += '               <option value="sq-col-xs-6">6 Column</option>';
            html += '               <option value="sq-col-xs-7">7 Columns</option>';
            html += '               <option value="sq-col-xs-8">8 Columns</option>';
            html += '               <option value="sq-col-xs-9">9 Columns</option>';
            html += '               <option value="sq-col-xs-10">10 Columns</option>';
            html += '               <option value="sq-col-xs-11">11 Columns</option>';
            html += '               <option value="sq-col-xs-12">12 Columns</option>';
            html += '           </select>';
            html += '       </div>';
            html += '       <div class="sq-grid-system-control-visible">';
            html += '           <i class="fa fa-eye" aria-hidden="true"></i>';
            html += '           <i class="fa fa-eye-slash" aria-hidden="true"></i>';
            html += '       </div>';
            html += '   </div>';

            // end
            html += '   <div class="squares-clear"></div>';
            html += '</div>';

            return html;
        },
        init: function() {
            var self = this;
            // self.valueChanged();

            // "Use" checkboxes
            $(document).on('change', '#' + this.elementID + ' .sq-grid-system-control-res-use-checkbox', function() {
                // Enable/disable the other inputs from this resolution group

                if ($(this).get(0).checked) {
                    $(this).closest('.sq-grid-system-control-res-group').find('select').removeAttr('disabled');
                    $(this).closest('.sq-grid-system-control-res-group').find('.sq-grid-system-control-visible').removeClass('sq-control-disabled');
                } else {
                    $(this).closest('.sq-grid-system-control-res-group').find('select').attr('disabled', 'disabled');
                    $(this).closest('.sq-grid-system-control-res-group').find('.sq-grid-system-control-visible').addClass('sq-control-disabled');
                }

                self.valueChanged();
            });

            // Toggle visibility
            $(document).on('click', '#' + this.elementID + ' .sq-grid-system-control-visible', function() {
                $(this).toggleClass('sq-grid-system-control-visible-not');
                self.valueChanged();
            });

            // Select colspan
            $(document).on('change', '#' + this.elementID + ' .sq-grid-system-control-select-colspan', function() {
                self.valueChanged();
            });
        }
    });
    $.squaresRegisterControl({
        type: 'switch',
        customLabel: true,
        getValue: function() {
            var v = 0;

            if ($('#' + this.elementID).hasClass('active')) {
                v = 1;
            }

            return v;
        },
        setValue: function(v) {
            if (parseInt(v, 10) == 1) {
                $('#' + this.elementID).addClass('active');
            } else {
                $('#' + this.elementID).removeClass('active');
            }
        },
        HTML: function() {
            var html = '';

            html += '<div class="sq-control-switch" id="'+ this.elementID +'">';
            html += '   <div class="sq-control-switch-ball"></div>';
            html += '</div>';

            html += '<div class="sq-control-switch-label" id="'+ this.elementID +'-label">'+ this.name +'</div>';
            html += '<div class="squares-clear"></div>';

            return html;
        },
        init: function() {
            var self = this;

            $(document).on('click', '#' + this.elementID, function() {
                $(this).toggleClass('active');
                self.valueChanged();
            });
            $(document).on('click', '#' + this.elementID + '-label', function() {
                $('#' + self.elementID).toggleClass('active');
                self.valueChanged();
            });
        }
    });
    $.squaresRegisterControl({
        type: 'button group',
        getValue: function() {
            var v = $('#' + this.elementID).find('.active[data-button-value]').data('button-value');

            return v;
        },
        setValue: function(v) {
            $('#' + this.elementID).find('[data-button-value]').removeClass('active');
            $('#' + this.elementID).find('[data-button-value="'+ v +'"]').addClass('active');
        },
        HTML: function() {
            var html = '';

            html += '<div class="sq-control-button-group" id="'+ this.elementID +'">';

            for (var i=0; i<this.options.length; i++) {
                html += '<div class="sq-control-button-group-button" data-button-value="'+ this.options[i] +'">'+ this.options[i] +'</div>';
            }

            html += '</div>';

            return html;
        },
        init: function() {
            var self = this;

            $(document).on('click', '#' + this.elementID + ' .sq-control-button-group-button', function() {
                $(this).siblings().removeClass('active').removeClass('no-border-right');
                $(this).prev().addClass('no-border-right');
                $(this).addClass('active');
                self.valueChanged();
            });
        }
    });
    $.squaresRegisterControl({
        type: 'wp media upload',
        getValue: function() {
            return $('#' + this.elementID + ' input').val();
        },
        setValue: function(v) {
            $('#' + this.elementID + ' input').val(v);
        },
        HTML: function() {
            return '<div class="sq-input-with-button" id="'+ this.elementID +'"><input type="text"><div class="sq-control-button">Choose Media</div></div>';
        },
        init: function() {
            var self = this;

            var inputSelector = '#' + this.elementID + ' input';
            var buttonSelector = '#' + this.elementID + ' .sq-control-button';

            $.wcpWPMedia(inputSelector, buttonSelector, function() {
                self.valueChanged();
            });
        }
    });
})(jQuery, window, document);

;(function ($, window, document, undefined) {
    $.wcpCompress = function(obj, defaults) {
        objCopy = $.extend(true, {}, obj);
        defaultsCopy = $.extend(true, {}, defaults);

        var objSubtracted = subtract(objCopy, defaultsCopy);
        var objCleaned = clean(objSubtracted);

        return objCleaned;
    }
    function subtract(a, b) {
        var r = {};

        // For each property of 'b'
        // if it's different than the corresponding property of 'a'
        // place it in 'r'
        for (var key in b) {
            if (Object.prototype.toString.call(b[key]) === '[object Array]') {
                r[key] = a[key].slice();
            } else if (typeof(b[key]) == 'object') {
                if (!a[key]) a[key] = {};
                r[key] = subtract(a[key], b[key]);
            } else {
                if (b[key] != a[key]) {
                    r[key] = a[key];
                }
            }
        }

        return r;
    }
    function clean(a) {
        var r = undefined;

        // Check if 'a' is an object or array
        if (Object.prototype.toString.call(a) === '[object Array]') {
            if (a.length == 0) {
                r = undefined;
            } else {
                r = a.slice();
            }
        }
        if (typeof(a) == 'object') {
            // If 'a' is an object, check if it's empty and set to undefined if true
            if (isEmpty(a)) {
                r = undefined;
            } else {
                // If 'a' is NOT empty, iterate over each of its properties
                // and recursively clean
                for (var key in a) {
                    var cleaned = clean(a[key]);

                    if (cleaned !== undefined) {
                        if (r === undefined) r = {};

                        r[key] = cleaned;
                    }
                }
            }
        } else {
            r = a;
        }

        return r;
    }
    function isEmpty(obj) {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
            return false;
        }

        return true && JSON.stringify(obj) === JSON.stringify({});
    }
})(jQuery, window, document);

// Webcraft Plugins Ltd.
// Author: Nikolay Dyankov

/*
Class hierarchy and descriptions:

- WCPEditor
The main class.

- WCPEditorForm
An abstract class, containing a list of controls, grouped in tabs.
It will get/set values for the controls in bulk.
It will generate its own HTML code.

- WCPEditorControl
An object, representing a single control. It will have a getter
and a setter.
*/

;(function ($, window, document, undefined) {
    var wcpEditor = undefined;
    var wcpForms = [];
    var registeredControls = [];

    function WCPEditor() {
        this.host = $('#wcp-editor');
        this.forms = {};

        this.tooltip = undefined;
        this.modal = undefined;
        this.modalTimeout = undefined;

        this.loadingScreen = undefined;
        this.loadingScreenTimeout = undefined;

        // Temp vars
        this.saveToDeleteID = undefined;
    }
    WCPEditor.prototype.init = function(options) {
        this.options = options;

        // Build UI
        var html = '';

        var canvasClass = '';
        if (this.options.canvasFill) {
            canvasClass = 'wcp-editor-canvas-fill';
        }

        var canvasStyle = '';
        if (!this.options.canvasFill) {
            canvasStyle += 'width: ' + this.options.canvasWidth + 'px; height: ' + this.options.canvasHeight + 'px;';
        }

        html += '<div id="wcp-editor-left">';

        // Save, Load, Code, Preview buttons

        html += '   <div id="wcp-editor-main-buttons">';
        if (this.options.newButton) {
            html += '       <div id="wcp-editor-button-new" class="wcp-editor-main-button">';
            html += '           <div class="wcp-editor-main-button-icon"><i class="fa fa-file" aria-hidden="true"></i></div>';
            html += '           <div class="wcp-editor-main-button-text">New</div>';
            html += '       </div>';
        }
        html += '       <div id="wcp-editor-button-save" class="wcp-editor-main-button">';
        html += '           <div class="wcp-editor-main-button-icon"><i class="fa fa-floppy-o" aria-hidden="true"></i></div>';
        html += '           <div class="wcp-editor-main-button-text">Save</div>';
        html += '       </div>';
        html += '       <div id="wcp-editor-button-load" class="wcp-editor-main-button">';
        html += '           <div class="wcp-editor-main-button-icon"><i class="fa fa-sign-out" aria-hidden="true"></i></div>';
        html += '           <div class="wcp-editor-main-button-text">Load</div>';
        html += '       </div>';
        html += '       <div id="wcp-editor-button-undo" class="wcp-editor-main-button">';
        html += '           <div class="wcp-editor-main-button-icon"><i class="fa fa-undo" aria-hidden="true"></i></div>';
        html += '           <div class="wcp-editor-main-button-text">Undo</div>';
        html += '       </div>';
        html += '       <div id="wcp-editor-button-redo" class="wcp-editor-main-button">';
        html += '           <div class="wcp-editor-main-button-icon"><i class="fa fa-repeat" aria-hidden="true"></i></div>';
        html += '           <div class="wcp-editor-main-button-text">Redo</div>';
        html += '       </div>';
        html += '       <div id="wcp-editor-button-preview" class="wcp-editor-main-button">';
        html += '           <div class="wcp-editor-main-button-icon"><i class="fa fa-eye" aria-hidden="true"></i></div>';
        html += '           <div class="wcp-editor-main-button-text">Preview</div>';
        html += '       </div>';

        html += '   </div>';

        // Main toolbar tab buttons
        html += '<div id="wcp-editor-main-tab-buttons">';
        for (var i=0; i<this.options.mainTabs.length; i++) {
            html += '<div class="wcp-editor-main-tab-button" data-wcp-main-tab-button-name="'+ this.options.mainTabs[i].name +'">';
            html += '   <div class="wcp-editor-main-tab-button-icon"><i class="'+ this.options.mainTabs[i].icon +'" aria-hidden="true"></i></div>';
            html += '   <div class="wcp-editor-main-tab-button-text">'+ this.options.mainTabs[i].name +'</div>';
            html += '</div>';
        }
        html += '</div>';

        // Main toolbar tab content
        html += '<div id="wcp-editor-main-tab-contents">';
        for (var i=0; i<this.options.mainTabs.length; i++) {
            html += '<div class="wcp-editor-main-tab-content" data-wcp-main-tab-content-name="'+ this.options.mainTabs[i].name +'">';
            html += '   <div class="wcp-editor-main-tab-content-title">'+ this.options.mainTabs[i].title +'</div>';
            html += '   <div class="wcp-editor-main-tab-content-inner-wrap">'+ $.wcpEditorGetContentForTabWithName(this.options.mainTabs[i].name) +'</div>';
            html += '</div>';
        }
        html += '</div>';

        html += '</div>';
        html += '<div id="wcp-editor-center">';

        // Help button
        if (this.options.helpButton) {
            html += '<div id="wcp-editor-help-button"><i class="fa fa-question" aria-hidden="true"></i></div>';
        }

        // Extra main buttons
        html += '    <div id="wcp-editor-extra-main-buttons">';
        for (var i=0; i<this.options.extraMainButtons.length; i++) {
            var b = this.options.extraMainButtons[i];

            var tooltip = '';

            if (b.tooltip) {
                tooltip = 'data-wcp-tooltip="'+ b.tooltip +'" data-wcp-tooltip-position="bottom"';
            }

            html += '       <div class="wcp-editor-extra-main-button" data-wcp-editor-extra-main-button-name="'+ b.name +'" '+ tooltip +'>';
            html += '           <div class="wcp-editor-extra-main-button-icon"><i class="'+ b.icon +'" aria-hidden="true"></i></div>';
            html += '           <div class="wcp-editor-extra-main-button-title">'+ b.title +'</div>';
            html += '       </div>';
        }
        html += '    </div>';

        // Toolbar

        // Are toolbar buttons grouped?
        if (this.options.toolbarButtons[0].constructor == Array) {
            // Grouped
            html += '   <div id="wcp-editor-toolbar-wrap">';
            for (var i=0; i<this.options.toolbarButtons.length; i++) {
                html += '   <div id="wcp-editor-toolbar" class="wcp-editor-toolbar-grouped">';
                var b = this.options.toolbarButtons[i];
                for (var j=0; j<b.length; j++) {
                    drawToolbarButton(b[j]);
                }
                html += '    </div>';
            }
            html += '    </div>';
        } else {
            // Not grouped
            html += '   <div id="wcp-editor-toolbar">';
            for (var i=0; i<this.options.toolbarButtons.length; i++) {
                var b = this.options.toolbarButtons[i];
                drawToolbarButton(b);
            }
            html += '    </div>';
        }

        function drawToolbarButton(b) {
            var icon = '';

            if (b.customIcon != undefined) {
                icon = b.customIcon;
            } else {
                icon = '<i class="'+ b.icon +'" aria-hidden="true"></i>';
            }

            html += '       <div class="wcp-editor-toolbar-button" data-wcp-editor-toolbar-button-name="'+ b.name +'" data-wcp-tooltip="'+ b.title +'" data-wcp-tooltip-position="right" data-wcp-editor-toolbar-button-kind="'+ b.kind +'">';
            html += '           <div class="wcp-editor-toolbar-button-icon">'+ icon +'</div>';
            html += '           <div class="wcp-editor-toolbar-button-title">'+ b.title +'</div>';
            html += '       </div>';
        }

        // Canvas
        html += '    <div id="wcp-editor-canvas" class="'+ canvasClass +'" style="'+ canvasStyle +'">'+ $.wcpEditorGetContentForCanvas() +'</div>';
        html += '</div>';

        // Editor-right
        html += '<div id="wcp-editor-right">';
        html += '</div>';

        this.host.html(html);

        // Set the list items
        this.setListItems($.wcpEditorGetListItems());

        // Show the first main tab
        this.openMainTabWithName(this.options.mainTabs[0].name);

        this.events();
    };
    WCPEditor.prototype.events = function () {
        var self = this;

        // Main tab functionality
        $('[data-wcp-main-tab-button-name]').on('click', function() {
            var name = $(this).data('wcp-main-tab-button-name');
            self.openMainTabWithName(name);
        });

        // Main buttons events

        // New
        $(document).off('click', '#wcp-editor-button-new');
        $(document).on('click', '#wcp-editor-button-new', function() {
            $.wcpEditorEventNewButtonPressed();
            self.presentCreateNewModal();
        });

        // Save
        $(document).off('click', '#wcp-editor-button-save');
        $(document).on('click', '#wcp-editor-button-save', function() {
            $.wcpEditorEventSaveButtonPressed();
        });

        // Load
        $(document).off('click', '#wcp-editor-button-load');
        $(document).on('click', '#wcp-editor-button-load', function() {
            $.wcpEditorEventLoadButtonPressed();
            self.presentLoadModal();
        });

        // Undo
        $(document).off('click', '#wcp-editor-button-undo');
        $(document).on('click', '#wcp-editor-button-undo', function() {
            $.wcpEditorEventUndoButtonPressed();
        });

        // Redo
        $(document).off('click', '#wcp-editor-button-redo');
        $(document).on('click', '#wcp-editor-button-redo', function() {
            $.wcpEditorEventRedoButtonPressed();
        });

        // Preview
        $(document).off('click', '#wcp-editor-button-preview');
        $(document).on('click', '#wcp-editor-button-preview', function() {
            $.wcpEditorEventPreviewButtonPressed();

            if (self.options.previewToggle) {
                if ($(this).hasClass('wcp-active')) {
                    $(this).removeClass('wcp-active');

                    $.wcpEditorEventExitedPreviewMode();
                } else {
                    $(this).addClass('wcp-active');
                    $.wcpEditorEventEnteredPreviewMode();
                }
            }
        });

        // Extra main buttons events
        $(document).off('click', '.wcp-editor-extra-main-button');
        $(document).on('click', '.wcp-editor-extra-main-button', function(e) {
            var buttonName = $(this).data('wcp-editor-extra-main-button-name');
            $.wcpEditorEventExtraMainButtonClick(buttonName);

            // Import button
            if (buttonName == 'import') {
                // Lite
                //$.imageMapProLiteLaunchPremiumWindow();
                self.presentImportModal();
            }

            // Export button
            if (buttonName == 'export') {
                self.presentExportModal();
            }
        });

        // Tools events
        $(document).off('click', '.wcp-editor-toolbar-button');
        $(document).on('click', '.wcp-editor-toolbar-button', function(e) {
            $.wcpEditorEventPressedTool($(this).data('wcp-editor-toolbar-button-name'));

            if ($(this).data('wcp-editor-toolbar-button-kind') == 'button') {
                return;
            }

            $('.wcp-editor-toolbar-button').removeClass('wcp-active');
            $(this).addClass('wcp-active');
            $.wcpEditorEventSelectedTool($(this).data('wcp-editor-toolbar-button-name'));
        });

        // Help button event
        $(document).off('click', '#wcp-editor-help-button');
        $(document).on('click', '#wcp-editor-help-button', function(e) {
            $.wcpEditorEventHelpButtonPressed();
        });


        // List items events
        $(document).off('mouseover', '.wcp-editor-list-item');
        $(document).on('mouseover', '.wcp-editor-list-item', function(e) {
            $.wcpEditorEventListItemMouseover($(this).data('wcp-editor-list-item-id'));
        });

        $(document).off('click', '.wcp-editor-list-item');
        $(document).on('click', '.wcp-editor-list-item', function(e) {
            if ($(e.target).closest('.wcp-editor-list-item-buttons').length == 0) {
                self.selectListItem($(this).data('wcp-editor-list-item-id'));

                $.wcpEditorEventListItemSelected($(this).data('wcp-editor-list-item-id'));
            }
        });
        $(document).off('click', '.wcp-editor-list-item-button');
        $(document).on('click', '.wcp-editor-list-item-button', function() {
            var itemID = $(this).closest('.wcp-editor-list-item').data('wcp-editor-list-item-id');
            var buttonName = $(this).data('wcp-editor-list-item-button-name');
            $.wcpEditorEventListItemButtonPressed(itemID, buttonName);
        });

        // List title buttons
        $(document).off('click', '.wcp-editor-list-item-title-button');
        $(document).on('click', '.wcp-editor-list-item-title-button', function() {
            var buttonName = $(this).data('wcp-editor-list-item-title-button-name');
            $.wcpEditorEventListItemTitleButtonPressed(buttonName);
        });

        // Tooltip functionality
        $(document).off('mouseover', '[data-wcp-tooltip]');
        $(document).on('mouseover', '[data-wcp-tooltip]', function(e) {
            $(this).addClass('wcp-visible-tooltip');
            self.showTooltip($(this), $(this).data('wcp-tooltip'), $(this).data('wcp-tooltip-position'));
        });
        $(document).off('mouseout', '[data-wcp-tooltip]');
        $(document).on('mouseout', '[data-wcp-tooltip]', function(e) {
            self.hideTooltip($(this));
        });

        // Modal events
        $(document).off('click', '#wcp-editor-modal');
        $(document).on('click', '#wcp-editor-modal', function(e) {
            if ($(e.target).attr('id') == 'wcp-editor-modal') {
                self.closeModal();
                var modalName = $('#wcp-editor-modal').data('wcp-editor-modal-name');
                $.wcpEditorEventModalClosed(modalName);
            }
        });
        $(document).off('click', '.wcp-editor-modal-close');
        $(document).on('click', '.wcp-editor-modal-close', function(e) {
            self.closeModal();
            var modalName = $('#wcp-editor-modal').data('wcp-editor-modal-name');
            $.wcpEditorEventModalClosed(modalName);
        });
        $(document).off('click', '.wcp-editor-modal-button');
        $(document).on('click', '.wcp-editor-modal-button', function(e) {
            var modalName = $('#wcp-editor-modal').data('wcp-editor-modal-name');
            var buttonName = $(this).data('wcp-editor-modal-button-name');
            $.wcpEditorEventModalButtonClicked(modalName, buttonName);
        });
        $(document).off('click', '#wcp-editor-confirm-import');
        $(document).on('click', '#wcp-editor-confirm-import', function(e) {
            // Validate JSON
            var json = $('#wcp-editor-textarea-import').val();
            var parsedJSON = undefined;

            try {
                parsedJSON = JSON.parse(json);
            } catch (err) {
                console.log('error decoding JSON!');
            }

            if (parsedJSON === undefined) {
                // Show error text
                $('#wcp-editor-import-error').show();
            } else {
                // No error
                $('#wcp-editor-import-error').hide();

                // Fire event
                $.wcpEditorEventImportedJSON(parsedJSON);

                // Close modal
                self.closeModal();
            }
        });
        $(document).off('click', '#button-loading-screen-close');
        $(document).on('click', '#button-loading-screen-close', function() {
            self.hideLoadingScreen();
        });


        // Create new instance button
        $(document).off('click', '#wcp-editor-button-create-new-instance');
        $(document).on('click', '#wcp-editor-button-create-new-instance', function(e) {
            // validate
            if ($('#wcp-editor-input-create-new').val().length == 0) {
                // show error
                $('#wcp-editor-create-new-error').show();
            } else {
                // hide error, send event and close modal
                $('#wcp-editor-create-new-error').hide();

                var instanceName = $('#wcp-editor-input-create-new').val();
                $.wcpEditorEventCreatedNewInstance(instanceName);
                self.closeModal();
            }
        });
        // Load modal list item
        $(document).off('click', '.wcp-editor-save-list-item');
        $(document).on('click', '.wcp-editor-save-list-item', function() {
            var saveID = $(this).parent().data('wcp-editor-save-list-item-id');
            $.wcpEditorEventLoadSaveWithID(saveID);
            self.closeModal();
        });
        // Load modal delete button
        $(document).off('click', '.wcp-editor-save-list-item-delete-button');
        $(document).on('click', '.wcp-editor-save-list-item-delete-button', function() {
            self.saveToDeleteID = $(this).parent().data('wcp-editor-save-list-item-id');

            self.closeModal();

            // Present delete save confirmation modal
            self.presentDeleteSaveConfirmationModal();
        });
        // Save delete modal cancel
        $(document).off('click', '#wcp-editor-cancel-delete-save');
        $(document).on('click', '#wcp-editor-cancel-delete-save', function() {
            self.presentLoadModal();
        });
        // Save delete modal confirm
        $(document).off('click', '#wcp-editor-confirm-delete-save');
        $(document).on('click', '#wcp-editor-confirm-delete-save', function() {
            $.wcpEditorEventDeleteSaveWithID(self.saveToDeleteID, function() {
                self.presentLoadModal();
            });
        });

        // Press Enter to trigger the primary modal button
        $(document).off('keyup', '#wcp-editor-input-create-new');
        $(document).on('keyup', '#wcp-editor-input-create-new', function(e) {
            if (e.keyCode == 13 && $('#wcp-editor-modal').length > 0 && $('#wcp-editor-modal').hasClass('wcp-editor-modal-visible')) {
                if ($('.wcp-editor-modal-button-primary').length == 1) {
                    $('.wcp-editor-modal-button-primary').click();
                }
                if ($('.wcp-editor-modal-button-danger').length == 1) {
                    $('.wcp-editor-modal-button-danger').click();
                }
            }
        });

        // List items reorder
        var iex = 0, iey = 0, ix = 0, iy = 0;
        var shouldStartDragging = false, didStartDragging = false, dragThreshold = 5;
        var dragMap = [], startingItemIndex = -1, currentItemIndex = -1;
        var draggedListItem = undefined, listItemCopy = undefined;
        var draggedListItemWidth = 0;
        var draggedListItemHeight = 0;
        var listScroll = 0;

        $(document).off('mousedown', '.wcp-editor-list-item');
        $(document).on('mousedown', '.wcp-editor-list-item', function(e) {
            iex = e.pageX;
            iey = e.pageY;

            shouldStartDragging = true;
            draggedListItem = $(this);

            // Set the startingItemIndex
            startingItemIndex = draggedListItem.data('wcp-editor-list-item-index');

            // Cache some variables
            draggedListItemWidth = draggedListItem.outerWidth();
            draggedListItemHeight = draggedListItem.outerHeight();

            // Cache the list scroll
            listScroll = $('#wcp-editor-right').scrollTop();
        });

        $(document).off('mousemove.wcp-editor-list-item-reorder');
        $(document).on('mousemove.wcp-editor-list-item-reorder', function(e) {
            var dx = Math.abs(e.pageX - iex);
            var dy = Math.abs(e.pageY - iey);

            if (!didStartDragging && shouldStartDragging && (dx > dragThreshold || dy > dragThreshold)) {
                didStartDragging = true;

                // Create a copy of the list item at the current mouse position
                listItemCopy = draggedListItem.clone();
                listItemCopy.addClass('wcp-editor-dragged-list-item');
                listItemCopy.css({
                    width: draggedListItemWidth,
                    left: draggedListItem.offset().left,
                    top: draggedListItem.offset().top
                });

                ix = draggedListItem.offset().left;
                iy = draggedListItem.offset().top;

                $('body').prepend(listItemCopy);

                // Wrap the listItemCopy in an element to prevent it from going
                // beyond the boundaries of the document
                listItemCopy.wrap('<div class="wcp-editor-dragged-list-item-wrap"></div>');

                // Create a virtual map of every possible position of the item
                // using an invisible dummy item of the same dimentions
                var tempElHtml = '<div id="wcp-editor-list-item-invisible-tmp" style="width: '+ draggedListItemWidth +'px; height: '+ draggedListItemHeight +'px; position: relative;"></div>';

                var numberOfListItems = $('#wcp-editor-right .wcp-editor-list-item').length;
                for (var i=0; i<numberOfListItems; i++) {
                    // Insert temp el
                    $('#wcp-editor-right .wcp-editor-list-item[data-wcp-editor-list-item-index="'+ i +'"]').before(tempElHtml);

                    // Store its position
                    dragMap.push($('#wcp-editor-list-item-invisible-tmp').offset().top + draggedListItemHeight/2);

                    // Delete it
                    $('#wcp-editor-list-item-invisible-tmp').remove();
                }

                // Hide the draggedListItem
                draggedListItem.hide();
            }

            if (didStartDragging) {
                clearSelection();

                // Update the position of the listItemCopy
                listItemCopy.css({
                    left: ix - (iex - e.pageX),
                    top: iy - (iey - e.pageY)
                });

                // Check which is the closest map point from the virtual map
                var closestIndex = -1;
                var smallestDistance = 99999;
                var listItemCopyOffsetTop = listItemCopy.offset().top + draggedListItemHeight/2;

                for (var i=0; i<dragMap.length; i++) {
                    var distance = Math.abs(listItemCopyOffsetTop - dragMap[i]);

                    if (distance < smallestDistance) {
                        smallestDistance = distance;
                        closestIndex = i;
                    }
                }

                // If the map point has a different index from the currentItemIndex,
                // then insert a visible dummy element at that position
                if (currentItemIndex != closestIndex) {
                    // Remove the current temp element
                    $('#wcp-editor-list-item-visible-tmp').remove();

                    var visibleDummyElementHTML = '<div id="wcp-editor-list-item-visible-tmp" style="width: '+ draggedListItemWidth +'px; height: '+ draggedListItemHeight +'px;"><div id="wcp-editor-list-item-visible-tmp-inner"></div></div>';

                    if (closestIndex < startingItemIndex) {
                        $('#wcp-editor-right .wcp-editor-list-item[data-wcp-editor-list-item-index="'+ closestIndex +'"]').before(visibleDummyElementHTML);
                    } else {
                        $('#wcp-editor-right .wcp-editor-list-item[data-wcp-editor-list-item-index="'+ closestIndex +'"]').after(visibleDummyElementHTML);
                    }

                    // Set the currentItemIndex to the new index
                    currentItemIndex = closestIndex;
                }

                // Preserve the list scroll
                $('#wcp-editor-right').scrollTop(listScroll);
            }
        });

        $(document).off('mouseup.wcp-editor-list-item-reorder');
        $(document).on('mouseup.wcp-editor-list-item-reorder', function() {
            if (didStartDragging) {
                // Delete temporary items
                $('.wcp-editor-dragged-list-item-wrap').remove();
                $('#wcp-editor-list-item-visible-tmp').remove();

                // Show the hidden original list item
                draggedListItem.show();

                // Send an event that the order of the items changed
                $.wcpEditorEventListItemMoved(draggedListItem.attr('id'), startingItemIndex, currentItemIndex);
            }

            // Clean up
            shouldStartDragging = false;
            didStartDragging = false;
            startingItemIndex = -1;
            currentItemIndex = -1;
            dragMap = [];
        });
    };
    WCPEditor.prototype.openMainTabWithName = function(tabName) {
        $('.wcp-editor-main-tab-content').hide();
        $('[data-wcp-main-tab-content-name="'+ tabName +'"]').show();

        $('.wcp-editor-main-tab-button').removeClass('wcp-active');
        $('[data-wcp-main-tab-button-name="'+ tabName +'"]').addClass('wcp-active');
    };
    WCPEditor.prototype.presentModal = function(options) {
        clearTimeout(this.modalTimeout);

        if ($('#wcp-editor-modal').length == 0) {
            var html = '';

            html += '<div id="wcp-editor-modal">';
            html += '   <div class="wcp-editor-modal-body">';
            html += '       <div class="wcp-editor-modal-close"><i class="fa fa-times" aria-hidden="true"></i></div>';
            html += '       <div class="wcp-editor-modal-header"></div>';
            html += '       <div class="wcp-editor-modal-content"></div>';
            html += '       <div class="wcp-editor-modal-footer"></div>';
            html += '       </div>';
            html += '   </div>';
            html += '</div>';

            $('body').append(html);
            this.modal = $('#wcp-editor-modal');
        }
        if (!this.modal) {
            this.modal = $('#wcp-editor-modal');
        }

        // Set the data-name
        this.modal.data('wcp-editor-modal-name', options.name);

        // Set the title
        this.modal.find('.wcp-editor-modal-header').html(options.title);

        // Set the body
        this.modal.find('.wcp-editor-modal-content').html(options.body);

        // Set the buttons
        var buttonHtml = '';
        for (var i=0; i<options.buttons.length; i++) {
            var buttonClass = '';
            var buttonId = '';

            if (options.buttons[i].class == 'primary') {
                buttonClass = 'wcp-editor-modal-button-primary';
            }
            if (options.buttons[i].class == 'danger') {
                buttonClass = 'wcp-editor-modal-button-danger';
            }

            if (options.buttons[i].id) {
                buttonId = options.buttons[i].id;
            }

            buttonHtml += '<div class="wcp-editor-modal-button '+ buttonClass +'" id="'+ buttonId +'" data-wcp-editor-modal-button-name="'+ options.buttons[i].name +'">'+ options.buttons[i].title +'</div>'
        }

        this.modal.find('.wcp-editor-modal-footer').html(buttonHtml);

        // Show modal
        var self = this;
        self.modal.css({ display: 'flex' });
        setTimeout(function() {
            self.modal.addClass('wcp-editor-modal-visible');
        }, 10);
    };
    WCPEditor.prototype.closeModal = function() {
        var self = this;

        this.modal.removeClass('wcp-editor-modal-visible');

        this.modalTimeout = setTimeout(function() {
            self.modal.hide();
        }, 330);
    };
    WCPEditor.prototype.presentCreateNewModal = function() {
        var modalBody = '';
        modalBody += '<div class="wcp-editor-form-control">';
        modalBody += '  <label for="wcp-editor-input-create-new">Name: </label>';
        modalBody += '  <input type="text" id="wcp-editor-input-create-new">';
        modalBody += '  <div id="wcp-editor-create-new-error">Please enter a name!</div>';
        modalBody += '</div>';

        var modalOptions = {
            name: 'create_new',
            title: 'Create New',
            buttons: [
                {
                    name: 'cancel',
                    title: 'Cancel',
                    class: '',
                },
                {
                    name: 'create',
                    title: 'Create',
                    class: 'primary',
                    id: 'wcp-editor-button-create-new-instance'
                },
            ],
            body: modalBody
        };

        this.presentModal(modalOptions);

        // Focus the name input
        $('#wcp-editor-input-create-new').get(0).focus();
    };
    WCPEditor.prototype.presentLoadModal = function() {
        var self = this;

        this.presentLoadingScreenWithText('Loading Saves...');

        $.wcpEditorGetSaves(function(savesList) {
            var modalBody = '';

            for (var i=0; i<savesList.length; i++) {
                modalBody += '  <div class="wcp-editor-save-list-item-wrap" data-wcp-editor-save-list-item-name="'+ savesList[i].name +'" data-wcp-editor-save-list-item-id="'+ savesList[i].id +'">';
                modalBody += '      <div class="wcp-editor-save-list-item">'+ savesList[i].name +'</div>';
                modalBody += '      <div class="wcp-editor-save-list-item-delete-button"><i class="fa fa-trash-o" aria-hidden="true"></i></div>';
                modalBody += '  </div>';
            }

            var modalOptions = {
                name: 'load',
                title: 'Load',
                buttons: [
                    {
                        name: 'cancel',
                        title: 'Cancel',
                        class: '',
                    },
                ],
                body: modalBody
            };

            self.hideLoadingScreen();
            self.presentModal(modalOptions);
        });
    };
    WCPEditor.prototype.presentDeleteSaveConfirmationModal = function() {
        var modalOptions = {
            name: 'confirmation',
            title: 'Delete Save',
            buttons: [
                {
                    name: 'cancel',
                    title: 'Cancel',
                    class: '',
                    id: 'wcp-editor-cancel-delete-save'
                },
                {
                    name: 'delete',
                    title: 'Delete',
                    class: 'danger',
                    id: 'wcp-editor-confirm-delete-save'
                },
            ],
            body: 'Are you sure you want to permanently delete this save?'
        };

        this.presentModal(modalOptions);
    };
    WCPEditor.prototype.presentImportModal = function() {
        var html = '';

        html += '<div class="wcp-editor-form-control">';
        html += '   <label for="wcp-editor-textarea-import">Paste code to import:</label>';
        html += '   <textarea id="wcp-editor-textarea-import"></textarea>';
        html += '  <div id="wcp-editor-import-error">Invalid code!</div>';
        html += '</div>';

        var modalOptions = {
            name: 'import',
            title: 'Import',
            buttons: [
                {
                    name: 'cancel',
                    title: 'Cancel',
                    class: '',
                },
                {
                    name: 'import',
                    title: 'Import',
                    class: 'primary',
                    id: 'wcp-editor-confirm-import'
                },
            ],
            body: html
        };

        this.presentModal(modalOptions);

        // Focus the textarea
        $('#wcp-editor-textarea-import').get(0).focus();
    };
    WCPEditor.prototype.presentExportModal = function() {
        var html = '';

        html += '<div class="wcp-editor-form-control">';
        html += '   <label for="wcp-editor-textarea-export">Copy this code to import it later:</label>';
        html += '   <textarea id="wcp-editor-textarea-export">'+ $.wcpEditorGetExportJSON() +'</textarea>';
        html += '</div>';

        var modalOptions = {
            name: 'export',
            title: 'Export',
            buttons: [
                {
                    name: 'cancel',
                    title: 'Done',
                    class: 'primary',
                }
            ],
            body: html
        };

        this.presentModal(modalOptions);

        // Select the text
        $('#wcp-editor-textarea-export').get(0).select();
    };
    WCPEditor.prototype.setContentForTabWithName = function(tabName, content) {
        $('.wcp-editor-main-tab-content[data-wcp-main-tab-content-name="'+ tabName +'"]').find('.wcp-editor-main-tab-content-inner-wrap').html(content);
    };
    WCPEditor.prototype.setContentForCanvas = function(content) {
        $('#wcp-editor-canvas').html(content);
    };
    WCPEditor.prototype.setListItems = function(listItems) {
        // Preserve scroll
        var s = $('#wcp-editor-list').scrollTop();

        var buttonsHTML = '';

        for (var i=0; i<this.options.listItemButtons.length; i++) {
            var b = this.options.listItemButtons[i];

            buttonsHTML += '<div class="wcp-editor-list-item-button" data-wcp-editor-list-item-button-name="'+ b.name +'" data-wcp-tooltip="'+ b.title +'" data-wcp-tooltip-position="bottom">';
            buttonsHTML += '    <i class="'+ b.icon +'" aria-hidden="true"></i>';
            buttonsHTML += '</div>';
        }

        var html = '';

        // Set the title and title buttons
        if (this.options.listItemTitle && this.options.listItemTitle.length > 0) {
            $('#wcp-editor-right').addClass('wcp-editor-right-with-title');

            html += '<div id="wcp-editor-list-title">'+ this.options.listItemTitle +'</div>';

            if (this.options.listItemTitleButtons.length > 0) {
                $('#wcp-editor-right').addClass('wcp-editor-right-with-title-buttons');

                html += '<div id="wcp-editor-list-item-title-buttons">';

                for (var i=0; i<this.options.listItemTitleButtons.length; i++) {
                    var b = this.options.listItemTitleButtons[i];
                    html += '<div class="wcp-editor-list-item-title-button" data-wcp-editor-list-item-title-button-name="'+ b.name +'" data-wcp-tooltip="'+ b.title +'" data-wcp-tooltip-position="bottom">';
                    html += '    <i class="'+ b.icon +'" aria-hidden="true"></i>';
                    html += '</div>';
                }
                html += '</div>';
            }
        } else {
            $('#wcp-editor-right').removeClass('wcp-editor-right-with-title');
        }

        // Populate the list
        html += '<div id="wcp-editor-list">';
        for (var i=0; i<listItems.length; i++) {
            html += '<div class="wcp-editor-list-item" id="wcp-editor-list-item-'+ listItems[i].id +'" data-wcp-editor-list-item-index="'+ i +'" data-wcp-editor-list-item-id="'+ listItems[i].id +'">';
            html += '   <div class="wcp-editor-list-item-title">'+ listItems[i].title +'</div>';
            html += '   <div class="wcp-editor-list-item-buttons">'+ buttonsHTML +'</div>';
            html += '</div>';
        }
        html += '</div>';

        $('#wcp-editor-right').html(html);

        // Restore scroll
        $('#wcp-editor-list').scrollTop(s);
    };
    WCPEditor.prototype.selectListItem = function(listItemId) {
        $('.wcp-editor-list-item').removeClass('wcp-active');
        $('#wcp-editor-list-item-' + listItemId).addClass('wcp-active');

        // Adjust list scroll position to show the selected list item
        
    };
    WCPEditor.prototype.showTooltip = function(element, text, tooltipPosition) {
        if ($('#wcp-editor-tooltip').length == 0) {
            $('body').append('<div id="wcp-editor-tooltip"></div>');
            this.tooltip = $('#wcp-editor-tooltip');
        }
        if (!this.tooltip) {
            this.tooltip = $('#wcp-editor-tooltip');
        }

        // Set the text
        this.tooltip.html(text);

        // Show (invisible)
        this.tooltip.show();

        // Set the position
        var x = 0;
        var y = 0;
        var tooltipSpacing = 12;

        if (tooltipPosition == 'left') {
            x = element.offset().left - this.tooltip.outerWidth() - tooltipSpacing;
            y = element.offset().top + element.outerHeight()/2 - this.tooltip.outerHeight()/2;
        }
        if (tooltipPosition == 'right') {
            x = element.offset().left + element.outerWidth() + tooltipSpacing;
            y = element.offset().top + element.outerHeight()/2 - this.tooltip.outerHeight()/2;
        }
        if (tooltipPosition == 'top') {
            x = element.offset().left + element.outerWidth()/2 - this.tooltip.outerWidth()/2;
            y = element.offset().top - this.tooltip.outerHeight() - tooltipSpacing;
        }
        if (tooltipPosition == 'bottom') {
            x = element.offset().left + element.outerWidth()/2 - this.tooltip.outerWidth()/2;
            y = element.offset().top + element.outerHeight() + tooltipSpacing;
        }
        
        this.tooltip.css({
            left: x,
            top: y
        });

        // Set tooltip position class
        if (tooltipPosition == 'left') {
            this.tooltip.removeClass('wcp-editor-tooltip-left');
            this.tooltip.removeClass('wcp-editor-tooltip-right');
            this.tooltip.removeClass('wcp-editor-tooltip-top');
            this.tooltip.removeClass('wcp-editor-tooltip-bottom');

            this.tooltip.addClass('wcp-editor-tooltip-left');
        }
        if (tooltipPosition == 'right') {
            this.tooltip.removeClass('wcp-editor-tooltip-left');
            this.tooltip.removeClass('wcp-editor-tooltip-right');
            this.tooltip.removeClass('wcp-editor-tooltip-top');
            this.tooltip.removeClass('wcp-editor-tooltip-bottom');

            this.tooltip.addClass('wcp-editor-tooltip-right');
        }
        if (tooltipPosition == 'top') {
            this.tooltip.removeClass('wcp-editor-tooltip-left');
            this.tooltip.removeClass('wcp-editor-tooltip-right');
            this.tooltip.removeClass('wcp-editor-tooltip-top');
            this.tooltip.removeClass('wcp-editor-tooltip-bottom');

            this.tooltip.addClass('wcp-editor-tooltip-top');
        }
        if (tooltipPosition == 'bottom') {
            this.tooltip.removeClass('wcp-editor-tooltip-left');
            this.tooltip.removeClass('wcp-editor-tooltip-right');
            this.tooltip.removeClass('wcp-editor-tooltip-top');
            this.tooltip.removeClass('wcp-editor-tooltip-bottom');

            this.tooltip.addClass('wcp-editor-tooltip-bottom');
        }

        // Constrain to window
        if (this.tooltip.offset().left + this.tooltip.outerWidth() > window.innerWidth) {
            this.tooltip.css({
                left: window.innerWidth - this.tooltip.outerWidth()
            });
        }
        if (this.tooltip.offset().left < 0) {
            this.tooltip.css({
                left: 0
            });
        }
        if (this.tooltip.offset().top + this.tooltip.outerHeight() > window.innerHeight) {
            this.tooltip.css({
                top: window.innerHeight - this.tooltip.outerHeight()
            });
        }
        if (this.tooltip.offset().top < 0) {
            this.tooltip.css({
                top: 0
            });
        }

        // Show (visible)
        this.tooltip.addClass('wcp-editor-tooltip-visible');
    }
    WCPEditor.prototype.hideTooltip = function() {
        this.tooltip.hide();
        this.tooltip.removeClass('wcp-editor-tooltip-visible');
    }
    WCPEditor.prototype.presentLoadingScreenWithText = function(text) {
        clearTimeout(this.loadingScreenTimeout);

        if ($('#wcp-editor-loading-screen').length == 0) {
            var html = '';

            html += '<div id="wcp-editor-loading-screen">';
            html += '   <div id="wcp-editor-loading-screen-icon"><i class="fa fa-circle-o-notch fa-spin"></i></div>';
            html += '   <div id="wcp-editor-loading-screen-text"></div>';
            html += '</div>';

            $('body').append(html);

            this.loadingScreen = $('#wcp-editor-loading-screen');
        }
        if (!this.loadingScreen) {
            this.loadingScreen = $('#wcp-editor-loading-screen');
        }

        this.loadingScreen.css({ display: 'flex' });

        // Change icon
        $('#wcp-editor-loading-screen-icon').html('<i class="fa fa-circle-o-notch fa-spin"></i>');

        // Change text
        $('#wcp-editor-loading-screen-text').html(text);

        var self = this;
        setTimeout(function() {
            self.loadingScreen.addClass('wcp-editor-loading-screen-visible');
        }, 10);
    }
    WCPEditor.prototype.updateLoadingScreenMessage = function(text) {
        $('#wcp-editor-loading-screen-text').html(text);
    };
    WCPEditor.prototype.hideLoadingScreen = function() {
        if (!this.loadingScreen) {
            this.loadingScreen = $('#wcp-editor-loading-screen');
        }
        this.loadingScreen.removeClass('wcp-editor-loading-screen-visible');

        var self = this;
        this.loadingScreenTimeout = setTimeout(function() {
            self.loadingScreen.hide();
        }, 250);
    }
    WCPEditor.prototype.hideLoadingScreenWithText = function(text, error, manualClose) {
        var self = this;

        // Change text
        if (manualClose) {
            text += '<div class="wcp-editor-control-button" id="button-loading-screen-close">Close</div>';
        }

        $('#wcp-editor-loading-screen-text').html(text);

        // Change icon
        if (error) {
            $('#wcp-editor-loading-screen-icon').html('<i class="fa fa-times"></i>');
        } else {
            $('#wcp-editor-loading-screen-icon').html('<i class="fa fa-check"></i>');
        }

        if (!manualClose) {
            setTimeout(function() {
                self.hideLoadingScreen();
            }, 1000);
        }
    }
    WCPEditor.prototype.selectTool = function(toolName) {
        $('.wcp-editor-toolbar-button').removeClass('wcp-active');
        $('[data-wcp-editor-toolbar-button-name="'+ toolName +'"]').addClass('wcp-active');

        $.wcpEditorEventSelectedTool(toolName);
    }
    WCPEditor.prototype.setPreviewModeOn = function() {
        $('#wcp-editor-button-preview').addClass('wcp-active');
    }
    WCPEditor.prototype.setPreviewModeOff = function() {
        $('#wcp-editor-button-preview').removeClass('wcp-active');
    }
    WCPEditor.prototype.showExtraMainButton = function(buttonName) {
        // Shows an extra main button using the button's name 
        // as specified during initialization

        $('[data-wcp-editor-extra-main-button-name=' + buttonName + ']').show();
    }
    WCPEditor.prototype.hideExtraMainButton = function(buttonName) {
        // Hides an extra main button using the button's name 
        // as specified during initialization

        $('[data-wcp-editor-extra-main-button-name=' + buttonName + ']').hide();
    }

    function WCPEditorForm(options) {
        this.options = options;

        this.id = 'wcp-form-' + (Math.floor(Math.random() * 9999) + 1);

        // Contains a reference to each WCPEditorControl object
        this.controls = [];

        // Callback function for when a control changes its value
        this.formUpdated = undefined;

        // Assoc array of all control values
        this.model = {};

        this.selectedTab = 0;
    };
    WCPEditorForm.prototype.init = function() {
        // Create WCPEditorControl objects
        // Iterate over control groups
        for (var i=0; i<this.options.controlGroups.length; i++) {

            // Iterate over controls in each group
            for (var j=0; j<this.options.controlGroups[i].controls.length; j++) {
                var controlOptions = this.options.controlGroups[i].controls[j];
                var controlRegisteredSettings = $.extend(true, {}, registeredControls[controlOptions.type]);

                var self = this;
                var c = new WCPEditorControl(controlOptions, controlRegisteredSettings, function() {
                    self.controlUpdated(this.name);
                });

                c.setVal(controlOptions.value);

                this.controls[controlOptions.name] = c;
            }
        }

        // Create events
        this.events();
    };
    WCPEditorForm.prototype.events = function(controls) {
        var self = this;

        // Tab functionality
        $(document).on('click', '#' + this.id + ' [data-wcp-form-tab-button-name]', function() {
            var name = $(this).data('wcp-form-tab-button-name');
            self.openFormTabWithName(name);
        });
    }
    WCPEditorForm.prototype.openFormTabWithName = function(tabName) {
        var formRoot = $('#' + this.id);

        formRoot.find('.wcp-editor-form-tab-content').hide();
        formRoot.find('[data-wcp-form-tab-content-name="'+ tabName +'"]').show();

        formRoot.find('.wcp-editor-form-tab-button').removeClass('wcp-active');
        formRoot.find('[data-wcp-form-tab-button-name="'+ tabName +'"]').addClass('wcp-active');

        this.updateForm();

        this.selectedTab = formRoot.find('[data-wcp-form-tab-button-name="'+ tabName +'"]').data('wcp-form-tab-button-index');
    };
    WCPEditorForm.prototype.getFormHTML = function() {
        var html = '';
        var tabsHTML = '';
        var tabsContentsHTML = '';

        tabsHTML += '<div class="wcp-editor-form-tabs-wrap">';
        tabsContentsHTML += '<div class="wcp-editor-form-tabs-content-wrap">';

        // Iterate over control groups
        for (var i=0; i<this.options.controlGroups.length; i++) {
            var controlGroup = this.options.controlGroups[i];
            var buttonClass = '';

            if (i == this.selectedTab) buttonClass = 'wcp-active';

            // Add a tab button
            tabsHTML += '<div class="wcp-editor-form-tab-button '+ buttonClass +'" data-wcp-form-tab-button-name="'+ controlGroup.groupName +'" data-wcp-form-tab-button-index="'+ i +'">';
            tabsHTML += '   <div class="wcp-editor-form-tab-button-icon"><i class="'+ controlGroup.groupIcon +'" aria-hidden="true"></i></div>';
            tabsHTML += '   <div class="wcp-editor-form-tab-button-text">'+ controlGroup.groupTitle +'</div>';
            tabsHTML += '</div>';

            // Create a tab container for the controls
            var contentStyle = 'display: none;';

            if (i == this.selectedTab) contentStyle = '';

            tabsContentsHTML += '<div class="wcp-editor-form-tab-content" data-wcp-form-tab-content-name="'+ controlGroup.groupName +'" style="'+ contentStyle +'">';

            // Iterate over controls in each group
            for (var j=0; j<controlGroup.controls.length; j++) {
                var control = controlGroup.controls[j];

				if (control.render !== false) {
					var tooltipAttributes = '';
	                if (control.tooltip) {
	                    tooltipAttributes = 'data-wcp-tooltip="'+ control.tooltip.text +'" data-wcp-tooltip-position="'+ control.tooltip.position +'"';
	                }

	                tabsContentsHTML += '<div class="wcp-editor-form-control" id="wcp-editor-form-control-'+ control.name +'" '+ tooltipAttributes +'>';

	                if (!this.controls[control.name].customLabel) {
	                    tabsContentsHTML += '   <label>'+ control.title +'</label>';
	                }
	                tabsContentsHTML += this.controls[control.name].HTML();
	                tabsContentsHTML += '</div>';
				}
            }

            // Close the tab container
            tabsContentsHTML += '</div>';
        }

        tabsContentsHTML += '</div>';
        tabsHTML += '</div>';

        html = '<div class="wcp-editor-form-wrap" id="'+ this.id +'">' + tabsHTML + tabsContentsHTML + '</div>';

        return html;
    };
    WCPEditorForm.prototype.controlUpdated = function(controlName) {
        $.wcpEditorEventFormUpdated(this.options.name, controlName);
    }
    WCPEditorForm.prototype.updateForm = function() {
        for (var c in this.controls) {
            this.controls[c].loadVal();
        }
    }
    WCPEditorForm.prototype.getModel = function() {
        var model = {};

        for (var i=0; i<this.options.controlGroups.length; i++) {
            var controlGroupName = this.options.controlGroups[i].groupName;

            model[controlGroupName] = {};

            // Iterate over controls in each group
            for (var j=0; j<this.options.controlGroups[i].controls.length; j++) {
                var controlName = this.options.controlGroups[i].controls[j].name;
                var controlValue = this.controls[controlName].getVal();

                model[controlGroupName][controlName] = controlValue;
            }
        }

        return model;
    }
    WCPEditorForm.prototype.setControlValue = function(controlName, v) {
        if (this.controls[controlName] && this.controls[controlName].getVal() !== v) {
            this.controls[controlName].setVal(v);
        }
    }
    WCPEditorForm.prototype.showControlsGroup = function(groupName) {
        var formRoot = $('#' + this.id);

        $('[data-wcp-form-tab-button-name="'+ groupName +'"]').show();
    }
    WCPEditorForm.prototype.hideControlsGroup = function(groupName) {
        var formRoot = $('#' + this.id);

        formRoot.find('[data-wcp-form-tab-button-name="'+ groupName +'"]').hide();

        if (this.selectedTab == formRoot.find('[data-wcp-form-tab-button-name="'+ groupName +'"]').data('wcp-form-tab-button-index')) {
            this.selectedTab = 0;

            this.openFormTabWithName(formRoot.find('[data-wcp-form-tab-button-index="0"]').data('wcp-form-tab-button-name'));
        }
    }
    WCPEditorForm.prototype.showControl = function(controlName) {
        var formRoot = $('#' + this.id);

        formRoot.find('#wcp-editor-form-control-' + controlName).show();
    }
    WCPEditorForm.prototype.hideControl = function(controlName) {
        var formRoot = $('#' + this.id);

        formRoot.find('#wcp-editor-form-control-' + controlName).hide();
    }
    WCPEditorForm.prototype.addControl = function(controlGroupName, controlOptions) {
        // Add the control to the form's options
        for (var i=0; i<this.options.controlGroups.length; i++) {
            var controlGroup = this.options.controlGroups[i];

            if (controlGroup.groupName == controlGroupName) {
                controlGroup.controls.push(controlOptions);
                break;
            }
        }

        // Create the WCPEditorControl object and add it to this.controls
        var controlRegisteredSettings = $.extend(true, {}, registeredControls[controlOptions.type]);

        var self = this;
        var c = new WCPEditorControl(controlOptions, controlRegisteredSettings, function() {
            self.controlUpdated(this.name);
        });

        c.setVal(controlOptions.value);

        this.controls[controlOptions.name] = c;
    };
    WCPEditorForm.prototype.removeControl = function(controlName) {
        // Delete it from the list of Controls
        delete this.controls[controlName];

        // Delete it from the options array
        for (var i=0; i<this.options.controlGroups.length; i++) {
            var controlGroup = this.options.controlGroups[i];
            var done = false;
            for (var j=0; j<controlGroup.controls.length; j++) {
                var control = controlGroup.controls[j];

                if (control.name == controlName) {
                    controlGroup.controls.splice(j, 1);
                    done = true;
                    break;
                }
            }

            if (done) break;
        }
    };

    function WCPEditorControl(controlOptions, controlRegisteredSettings, valueUpdated) {
        // The 's' argument is the array coming from the registeredControls array
        // Automatically generated at the time of object creation
        this.id = Math.floor(Math.random() * 9999) + 1;
        this.elementID = 'wcp-editor-control-' + this.id;
        this.elementClass = 'sq-element-option-group';

        // Settings coming from the registered controls catalog
        // referenced in the 'this' variable, so 'this' can be accessed within
        // those functions (in case of validate(), HTML(), events(), etc)
        // These settings are also common in all controls
        this.type = controlRegisteredSettings.type;
        this.getValue = controlRegisteredSettings.getValue;
        this.setValue = controlRegisteredSettings.setValue;
        this.HTML = controlRegisteredSettings.HTML;

        // These variables are specific for each individual control
        this.name = controlOptions.name;
        this.title = controlOptions.title;
        this.options = controlOptions.options;

        // Private property, must be accessed only via setter and getter
        this._value = undefined;

        // Launch the events provided from the settings
        this.init = controlRegisteredSettings.init;
        this.init();

        // Create a callback function for when the control updates its value
        this.valueUpdated = valueUpdated;

        // Inline label flag
        this.customLabel = controlRegisteredSettings.customLabel;
    }
    WCPEditorControl.prototype.getVal = function() {
        return this._value;
    }
    WCPEditorControl.prototype.setVal = function(v) {
        this._value = v;

        try {
            this.setValue(v);
        } catch (err) {
            console.log(err);
        }
    }
    WCPEditorControl.prototype.loadVal = function() {
        this.setValue(this._value);
    }
    WCPEditorControl.prototype.valueChanged = function() {
        // Re-sets the control to its stored value
        this._value = this.getValue();
        this.valueUpdated();
    }

    // Utility
    function clearSelection() {
        if (document.selection) {
            document.selection.empty();
        } else if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
    }

    // API =====================================================================

    // Basic initialization of the editor. Builds UI.
    $.wcpEditorInit = function(options) {
        var defaultOptions = {
            canvasFill: false,
            canvasWidth: 800,
            canvasHeight: 600,
            mainTabs: [], // Objects { name: 'Name', icon: 'fa fa-icon-name', title: 'The Title' }
            toolbarButtons: [], // Objects { name: 'Name', icon: 'fa fa-icon-name', title: 'The Title' }
            extraMainButtons: [], // Objects { name: 'Name', icon: 'fa fa-icon-name', title: 'The Title' }
            listItemButtons: [], // Objects { name: 'Name', icon: 'fa fa-icon-name', title: 'The Title' }
            newButton: true,
            previewToggle: true
        };
        wcpEditor = new WCPEditor();
        wcpEditor.init($.extend(true, {}, defaultOptions, options));
    };

    // Provide a declaration for a control that can later be used in a form
    // as a WCPEditorControl object
    $.wcpEditorRegisterControl = function(options) {
        registeredControls[options.type] = options;
    };

    // A form is created only as an object, does not exist in the DOM
    // It initializes its own WCPEditorControl objects
    $.wcpEditorCreateForm = function(options) {
        wcpForms[options.name] = new WCPEditorForm(options);
        wcpForms[options.name].init();
    };

    // The form will try to re-set the values of all its controls
    $.wcpEditorUpdateForm = function(formName) {
        wcpForms[formName].updateForm();
    };

    // Add/remove controls from a form
    $.wcpEditorFormAddControl = function(formName, controlGroupName, controlOptions) {
        wcpForms[formName].addControl(controlGroupName, controlOptions);
    }
    $.wcpEditorFormRemoveControl = function(formName, controlName) {
        wcpForms[formName].removeControl(controlName);
    }

    // Opens a specific form tab
    $.wcpEditorFormOpenTab = function(formName, tabName) {
        wcpForms[formName].openFormTabWithName(tabName);
    };

    // Generates HTML code for a form with formName
    $.wcpEditorGetHTMLForFormWithName = function(formName) {
        return wcpForms[formName].getFormHTML();
    };

    // Returns an assoc array containing control values
    $.wcpEditorGetModelOfFormWithName = function(formName) {
        return wcpForms[formName].getModel();
    }

    // Sets a new value for a control with controlName in a form with formName
    $.wcpEditorSetControlValue = function(formName, controlName, v) {
        wcpForms[formName].setControlValue(controlName, v);
    }

    // Functions to show/hide controls or control groups(tabs)
    $.wcpEditorFormShowControlsGroup = function(formName, groupName) {
        wcpForms[formName].showControlsGroup(groupName);
    }
    $.wcpEditorFormHideControlsGroup = function(formName, groupName) {
        wcpForms[formName].hideControlsGroup(groupName);
    }
    $.wcpEditorFormShowControl = function(formName, controlName) {
        wcpForms[formName].showControl(controlName);
    }
    $.wcpEditorFormHideControl = function(formName, controlName) {
        wcpForms[formName].hideControl(controlName);
    }

    // Inserts content in a main tab
    $.wcpEditorSetContentForTabWithName = function(tabName, content) {
        wcpEditor.setContentForTabWithName(tabName, content);
    };

    // Opens a main tab with tabName
    $.wcpEditorOpenMainTabWithName = function(tabName) {
        wcpEditor.openMainTabWithName(tabName);
    };

    // Inserts content in the canvas
    $.wcpEditorSetContentForCanvas = function(content) {
        wcpEditor.setContentForCanvas(content);
    };

    // Updates list items
    $.wcpEditorSetListItems = function(listItems) {
        wcpEditor.setListItems(listItems);
    }

    // Selects a list item
    $.wcpEditorSelectListItem = function(listItemId) {
        wcpEditor.selectListItem(listItemId);
    }

    // Selects a tool
    $.wcpEditorSelectTool = function(toolName) {
        wcpEditor.selectTool(toolName);
    }

    // Present loading screen
    $.wcpEditorPresentLoadingScreen = function(text) {
        wcpEditor.presentLoadingScreenWithText(text);
    }
    $.wcpEditorUpdateLoadingScreenMessage = function(text) {
        wcpEditor.updateLoadingScreenMessage(text);
    }
    $.wcpEditorHideLoadingScreen = function() {
        wcpEditor.hideLoadingScreen();
    }
    $.wcpEditorHideLoadingScreenWithMessage = function(text, error, manualClose) {
        wcpEditor.hideLoadingScreenWithText(text, error, manualClose);
    }

    // Present load modal
    $.wcpEditorPresentLoadModal = function() {
        wcpEditor.presentLoadModal();
    }

    // Present modal
    $.wcpEditorPresentModal = function(options) {
        var modalDefaults = {
            title: '',
            buttons: [

            ],
            body: ''
        };

        wcpEditor.presentModal($.extend(true, {}, modalDefaults, options));
    }

    // Close modal
    $.wcpEditorCloseModal = function() {
        wcpEditor.closeModal();
    }

    // Set preview mode
    $.wcpEditorSetPreviewModeOn = function() {
        wcpEditor.setPreviewModeOn();
    }
    $.wcpEditorSetPreviewModeOff = function() {
        wcpEditor.setPreviewModeOff();
    }

    // Show/hide extra main buttons
    $.wcpEditorShowExtraMainButton = function(buttonName) {
        wcpEditor.showExtraMainButton(buttonName);
    }
    $.wcpEditorHideExtraMainButton = function(buttonName) {
        wcpEditor.hideExtraMainButton(buttonName);
    }

    // BOILERPLATE CODE FOR IMPLEMENTING REQUIRED API FUNCTIONS ****************
    // *************************************************************************

    // [data source] Called on initialization:
    $.wcpEditorGetContentForTabWithName = function(tabName) {

    }
    $.wcpEditorGetContentForCanvas = function() {

    }
    $.wcpEditorGetListItems = function() {
        // Returns an array of objects in the format { id: 'id', title: 'title' }
    }
    // [data source] Get a list of saves
    $.wcpEditorGetSaves = function(callback) {
        // Format: [ { name: 'name', id: 'id' }, ... ]

    }
    // [data source] Provide encoded JSON for export
    $.wcpEditorGetExportJSON = function() {
        return '{}';
    }

    // Form events
    $.wcpEditorEventFormUpdated = function(formName, controlName) {

    }

    // Main button events
    $.wcpEditorEventNewButtonPressed = function() {

    }
    $.wcpEditorEventSaveButtonPressed = function() {

    }
    $.wcpEditorEventLoadButtonPressed = function() {

    }
    $.wcpEditorEventUndoButtonPressed = function() {

    }
    $.wcpEditorEventRedoButtonPressed = function() {

    }
    $.wcpEditorEventPreviewButtonPressed = function() {

    }
    $.wcpEditorEventEnteredPreviewMode = function() {

    }
    $.wcpEditorEventExitedPreviewMode = function() {

    }

    // List events
    $.wcpEditorEventListItemMouseover = function(itemID) {

    }
    $.wcpEditorEventListItemSelected = function(itemID) {

    }
    $.wcpEditorEventListItemMoved = function(itemID, oldIndex, newIndex) {

    }
    $.wcpEditorEventListItemButtonPressed = function(itemID, buttonName) {

    }
    $.wcpEditorEventListItemTitleButtonPressed = function(buttonName) {

    }

    // Tool events
    $.wcpEditorEventSelectedTool = function(toolName) {

    }
    $.wcpEditorEventPressedTool = function(toolName) {

    }

    // Extra main button events
    $.wcpEditorEventExtraMainButtonClick = function(buttonName) {

    }

    // Modal events
    $.wcpEditorEventModalButtonClicked = function(modalName, buttonName) {

    }
    $.wcpEditorEventModalClosed = function(modalName) {

    }

    // Create new event
    $.wcpEditorEventCreatedNewInstance = function(instanceName) {

    }

    // Event for loading a save
    $.wcpEditorEventLoadSaveWithID = function(saveID) {

    }

    // Event for deleting a save
    $.wcpEditorEventDeleteSaveWithID = function(saveID) {

    }

    // Event for importing
    $.wcpEditorEventImportedJSON = function(parsedJSON) {

    }

    // Event for help button
    $.wcpEditorEventHelpButtonPressed = function() {

    }

})(jQuery, window, document);

// Webcraft Plugins Ltd.
// Author: Nikolay Dyankov

/* 

To be rewritten

- All controls must share properties
- Inheritance?
- New: tooltip functionality
- New: colspan functionality

*/

;(function ($, window, document, undefined) {
    $.wcpEditorRegisterControl({
        type: 'int',
        getValue: function() {
            return parseInt($('#' + this.elementID).val(), 10);
        },
        setValue: function(v) {
            $('#' + this.elementID).val(parseInt(v, 10));
        },
        HTML: function() {
            return '<input type="text" id="'+ this.elementID +'">';
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                var parsedValue = parseInt($(this).val(), 10);

                if (isNaN(parsedValue)) {
                    parsedValue = 0;
                }

                $(this).val(parsedValue);

                self.valueChanged();
            });
        }
    });
    $.wcpEditorRegisterControl({
        type: 'float',
        getValue: function() {
            return parseFloat($('#' + this.elementID).val());
        },
        setValue: function(v) {
            $('#' + this.elementID).val(parseFloat(v));
        },
        HTML: function() {
            return '<input type="text" id="'+ this.elementID +'">';
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                var parsedValue = parseFloat($(this).val());

                if (isNaN(parsedValue)) {
                    parsedValue = 0;
                }

                $(this).val(parsedValue);

                self.valueChanged();
            });
        }
    });
    $.wcpEditorRegisterControl({
        type: 'text',
        getValue: function() {
            return $('#' + this.elementID).val();
        },
        setValue: function(v) {
            $('#' + this.elementID).val(v);
        },
        HTML: function() {
            return '<input type="text" id="'+ this.elementID +'">';
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
    $.wcpEditorRegisterControl({
        type: 'textarea',
        getValue: function() {
            return $('#' + this.elementID).val();
        },
        setValue: function(v) {
            $('#' + this.elementID).val(v);
        },
        HTML: function() {
            return '<textarea id="'+ this.elementID +'" rows="5"></textarea>';
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
    $.wcpEditorRegisterControl({
        type: 'checkbox',
        getValue: function() {
            if ($('#' + this.elementID).get(0).checked == true) {
                return 1;
            } else {
                return 0;
            }
        },
        setValue: function(v) {
            if (parseInt(v, 10) === 1) {
                $('#' + this.elementID).get(0).checked = true;
            } else {
                $('#' + this.elementID).get(0).checked = false;
            }
        },
        HTML: function() {
            return '<input type="checkbox" id="'+ this.elementID +'">';
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
    $.wcpEditorRegisterControl({
        type: 'color',
        getValue: function() {
            return $('#' + this.elementID).val();
        },
        setValue: function(v) {
            $('#' + this.elementID).val(v);
        },
        HTML: function() {
            return '<input type="color" id="'+ this.elementID +'">';
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
    $.wcpEditorRegisterControl({
        type: 'select',
        getValue: function() {
            return $('#' + this.elementID).val();
        },
        setValue: function(v) {
            $('#' + this.elementID).val(v);
        },
        HTML: function() {
            var html = '';

            html += '<select id="'+ this.elementID +'">';

            for (var i=0; i<this.options.length; i++) {
                html += '<option value="'+ this.options[i].value +'">'+ this.options[i].title +'</option>';
            }

            html += '</select>';

            return html;
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID, function() {
                self.valueChanged();
            });
        }
    });
    $.wcpEditorRegisterControl({
        type: 'box model',
        getValue: function() {
            return {
                margin: {
                    top: parseInt($('#wcp-editor-element-option-boxmodel-margin-top').val(), 10),
                    bottom: parseInt($('#wcp-editor-element-option-boxmodel-margin-bottom').val(), 10),
                    left: parseInt($('#wcp-editor-element-option-boxmodel-margin-left').val(), 10),
                    right: parseInt($('#wcp-editor-element-option-boxmodel-margin-right').val(), 10)
                },
                padding: {
                    top: parseInt($('#wcp-editor-element-option-boxmodel-padding-top').val(), 10),
                    bottom: parseInt($('#wcp-editor-element-option-boxmodel-padding-bottom').val(), 10),
                    left: parseInt($('#wcp-editor-element-option-boxmodel-padding-left').val(), 10),
                    right: parseInt($('#wcp-editor-element-option-boxmodel-padding-right').val(), 10)
                }
            }
        },
        setValue: function(v) {
            $('#wcp-editor-element-option-boxmodel-margin-top').val(v.margin.top);
            $('#wcp-editor-element-option-boxmodel-margin-bottom').val(v.margin.bottom);
            $('#wcp-editor-element-option-boxmodel-margin-left').val(v.margin.left);
            $('#wcp-editor-element-option-boxmodel-margin-right').val(v.margin.right);

            $('#wcp-editor-element-option-boxmodel-padding-top').val(v.padding.top);
            $('#wcp-editor-element-option-boxmodel-padding-bottom').val(v.padding.bottom);
            $('#wcp-editor-element-option-boxmodel-padding-left').val(v.padding.left);
            $('#wcp-editor-element-option-boxmodel-padding-right').val(v.padding.right);
        },
        HTML: function() {
            var html = '';

            html += '<div class="wcp-editor-boxmodel-margin" id="'+ this.elementID +'">';
            html += '   <div id="wcp-editor-boxmodel-label-margin">margin</div>';
            html += '   <input type="text" class="wcp-editor-boxmodel-input" id="wcp-editor-element-option-boxmodel-margin-top">';
            html += '   <input type="text" class="wcp-editor-boxmodel-input" id="wcp-editor-element-option-boxmodel-margin-bottom">';
            html += '   <input type="text" class="wcp-editor-boxmodel-input" id="wcp-editor-element-option-boxmodel-margin-left">';
            html += '   <input type="text" class="wcp-editor-boxmodel-input" id="wcp-editor-element-option-boxmodel-margin-right">';
            html += '   <div class="wcp-editor-boxmodel-padding">';
            html += '       <div id="wcp-editor-boxmodel-label-padding">padding</div>';
            html += '       <input type="text" class="wcp-editor-boxmodel-input" id="wcp-editor-element-option-boxmodel-padding-top">';
            html += '       <input type="text" class="wcp-editor-boxmodel-input" id="wcp-editor-element-option-boxmodel-padding-bottom">';
            html += '       <input type="text" class="wcp-editor-boxmodel-input" id="wcp-editor-element-option-boxmodel-padding-left">';
            html += '       <input type="text" class="wcp-editor-boxmodel-input" id="wcp-editor-element-option-boxmodel-padding-right">';
            html += '   </div>';
            html += '</div>';

            return html;
        },
        init: function() {
            var self = this;
            $(document).on('change', '#' + this.elementID + ' input', function() {
                self.valueChanged();
            });
        }
    });
    $.wcpEditorRegisterControl({
        type: 'slider',
        getValue: function() {
            var v = 0;

            // Get the ball position
            var ball = $('#' + this.elementID).find('.wcp-editor-control-slider-ball');
            var ballPosition = ball.position().left;

            // Get the track width
            var track = $('#' + this.elementID).find('.wcp-editor-control-slider-track');
            var trackWidth = track.outerWidth();

            // Calculate value
            var progress = ballPosition / trackWidth;
            v = this.options.min + (this.options.max - this.options.min) * progress;

            if (this.options.type == 'int') v = Math.round(v);

            return v;
        },
        setValue: function(v) {
            if (this.options.type == 'int') v = Math.round(v);

            var progress = (v - this.options.min) / (this.options.max - this.options.min);

            var ball = $('#' + this.elementID).find('.wcp-editor-control-slider-ball');

            // Get the track width
            var track = $('#' + this.elementID).find('.wcp-editor-control-slider-track');
            var trackWidth = track.outerWidth();

            ball.css({
                left: trackWidth * progress
            });
        },
        HTML: function() {
            var html = '';

            html += '<div class="wcp-editor-control-slider" id="'+ this.elementID +'">';
            html += '   <div class="wcp-editor-control-slider-bubble"></div>';
            html += '   <div class="wcp-editor-control-slider-track"></div>';
            html += '   <div class="wcp-editor-control-slider-ball"></div>';
            html += '</div>';

            return html;
        },
        init: function() {
            var self = this;
            var ix = 0, iex = 0, dragging = false, ball = undefined, track = undefined, bubble = undefined;

            // Ball dragging
            $(document).on('mousedown', '#' + self.elementID + ' .wcp-editor-control-slider-ball', function(e) {
                ball = $('#' + self.elementID).find('.wcp-editor-control-slider-ball');
                track = $('#' + self.elementID).find('.wcp-editor-control-slider-track');
                bubble = $('#' + self.elementID).find('.wcp-editor-control-slider-bubble');
                ix = ball.position().left;
                iex = e.pageX;

                dragging = true;

                if ($.wcpEditorSliderStartedDragging) {
                    $.wcpEditorSliderStartedDragging();
                }

                // Show value bubble
                bubble.show();
            });
            $(document).on('mousemove.' + this.elementID, function(e) {
                if (dragging) {
                    var o = ix - iex + e.pageX;

                    if (o < 0) o = 0;
                    if (o > track.outerWidth()) o = track.outerWidth();

                    if (self.options.type == 'int') {
                        var step = track.outerWidth() / (self.options.max + 1);

                        o = o - (o % step);
                    }

                    ball.css({
                        left: o
                    });

                    self.valueChanged();

                    // Update value bubble
                    var rounded = Math.round(self.getValue() * 10)/10;

                    if (self.options.type == 'int') {
                        rounded = self.getValue();
                    }

                    bubble.html(rounded);
                    bubble.css({
                        left: o
                    });
                }
            });
            $(document).on('mouseup.' + this.elementID, function(e) {
                if (dragging) {
                    if ($.wcpEditorSliderFinishedDragging) {
                        $.wcpEditorSliderFinishedDragging();
                    }

                    dragging = false;
                    self.valueChanged();

                    // Hide value bubble
                    bubble.hide();
                }
            });

            // Click on the track
            $(document).on('mousedown', '#' + self.elementID + ' .wcp-editor-control-slider-track', function(e) {
                ball = $('#' + self.elementID).find('.wcp-editor-control-slider-ball');
                track = $('#' + self.elementID).find('.wcp-editor-control-slider-track');
                bubble = $('#' + self.elementID).find('.wcp-editor-control-slider-bubble');

                // Set the ball to the mouse position
                var o = e.pageX - track.offset().left;

                if (o < 0) o = 0;
                if (o > track.outerWidth()) o = track.outerWidth();

                ball.css({
                    left: o
                });

                // Start dragging
                ix = ball.position().left;
                iex = e.pageX;

                dragging = true;

                // Show value bubble
                bubble.show();
            });
        }
    });
    $.wcpEditorRegisterControl({
        type: 'grid system',
        getValue: function() {
            // tmp
            var res = {
                xs: {
                    use: 1,
                    class: 'col-xs-1',
                    visible: 1
                },
                sm: {
                    use: 1,
                    class: 'col-sm-1',
                    visible: 1
                },
                md: {
                    use: 1,
                    class: 'col-md-1',
                    visible: 1
                },
                lg: {
                    use: 1,
                    class: 'col-lg-1',
                    visible: 1
                },
            };

            var root = $('#' + this.elementID);

            // XS ---------
            var xsGroup = root.find('.wcp-editor-grid-system-control-res-group-xs');

            // Use
            if (xsGroup.find('.wcp-editor-grid-system-control-res-use-checkbox').get(0).checked) {
                res.xs.use = 1;
            } else {
                res.xs.use = 0;
            }

            // Class
            res.xs.class = xsGroup.find('.wcp-editor-grid-system-control-select-colspan').val();

            // Visible
            if (xsGroup.find('.wcp-editor-grid-system-control-visible').hasClass('wcp-editor-grid-system-control-visible-not')) {
                res.xs.visible = 0;
            } else {
                res.xs.visible = 1;
            }

            // SM ---------
            var smGroup = root.find('.wcp-editor-grid-system-control-res-group-sm');

            // Use
            if (smGroup.find('.wcp-editor-grid-system-control-res-use-checkbox').get(0).checked) {
                res.sm.use = 1;
            } else {
                res.sm.use = 0;
            }

            // Class
            res.sm.class = smGroup.find('.wcp-editor-grid-system-control-select-colspan').val();

            // Visible
            if (smGroup.find('.wcp-editor-grid-system-control-visible').hasClass('wcp-editor-grid-system-control-visible-not')) {
                res.sm.visible = 0;
            } else {
                res.sm.visible = 1;
            }

            // MD ---------
            var mdGroup = root.find('.wcp-editor-grid-system-control-res-group-md');

            // Use
            if (mdGroup.find('.wcp-editor-grid-system-control-res-use-checkbox').get(0).checked) {
                res.md.use = 1;
            } else {
                res.md.use = 0;
            }

            // Class
            res.md.class = mdGroup.find('.wcp-editor-grid-system-control-select-colspan').val();

            // Visible
            if (mdGroup.find('.wcp-editor-grid-system-control-visible').hasClass('wcp-editor-grid-system-control-visible-not')) {
                res.md.visible = 0;
            } else {
                res.md.visible = 1;
            }

            // LG ---------
            var lgGroup = root.find('.wcp-editor-grid-system-control-res-group-lg');

            // Use
            if (lgGroup.find('.wcp-editor-grid-system-control-res-use-checkbox').get(0).checked) {
                res.lg.use = 1;
            } else {
                res.lg.use = 0;
            }

            // Class
            res.lg.class = lgGroup.find('.wcp-editor-grid-system-control-select-colspan').val();

            // Visible
            if (lgGroup.find('.wcp-editor-grid-system-control-visible').hasClass('wcp-editor-grid-system-control-visible-not')) {
                res.lg.visible = 0;
            } else {
                res.lg.visible = 1;
            }

            return res;
        },
        setValue: function(v) {
            var root = $('#' + this.elementID);

            // XS ---------
            var xsGroup = root.find('.wcp-editor-grid-system-control-res-group-xs');

            // Use
            if (parseInt(v.xs.use, 10) == 1) {
                xsGroup.find('.wcp-editor-grid-system-control-res-use-checkbox').get(0).checked = true;
                xsGroup.find('select').removeAttr('disabled');
                xsGroup.find('.wcp-editor-grid-system-control-visible').removeClass('wcp-editor-control-disabled');
            } else {
                xsGroup.find('.wcp-editor-grid-system-control-res-use-checkbox').get(0).checked = false;
                xsGroup.find('select').attr('disabled', 'disabled');
                xsGroup.find('.wcp-editor-grid-system-control-visible').addClass('wcp-editor-control-disabled');
            }

            // Class
            xsGroup.find('.wcp-editor-grid-system-control-select-colspan').val(v.xs.class);

            // Visible
            if (parseInt(v.xs.visible, 10) == 1) {
                xsGroup.find('.wcp-editor-grid-system-control-visible').removeClass('wcp-editor-grid-system-control-visible-not');
            } else {
                xsGroup.find('.wcp-editor-grid-system-control-visible').addClass('wcp-editor-grid-system-control-visible-not');
            }

            // SM ---------
            var smGroup = root.find('.wcp-editor-grid-system-control-res-group-sm');

            // Use
            if (parseInt(v.sm.use, 10) == 1) {
                smGroup.find('.wcp-editor-grid-system-control-res-use-checkbox').get(0).checked = true;
                smGroup.find('select').removeAttr('disabled');
                smGroup.find('.wcp-editor-grid-system-control-visible').removeClass('wcp-editor-control-disabled');
            } else {
                smGroup.find('.wcp-editor-grid-system-control-res-use-checkbox').get(0).checked = false;
                smGroup.find('select').attr('disabled', 'disabled');
                smGroup.find('.wcp-editor-grid-system-control-visible').addClass('wcp-editor-control-disabled');
            }

            // Class
            smGroup.find('.wcp-editor-grid-system-control-select-colspan').val(v.sm.class);

            // Visible
            if (parseInt(v.sm.visible, 10) == 1) {
                smGroup.find('.wcp-editor-grid-system-control-visible').removeClass('wcp-editor-grid-system-control-visible-not');
            } else {
                smGroup.find('.wcp-editor-grid-system-control-visible').addClass('wcp-editor-grid-system-control-visible-not');
            }

            // MD ---------
            var mdGroup = root.find('.wcp-editor-grid-system-control-res-group-md');

            // Use
            if (parseInt(v.md.use, 10) == 1) {
                mdGroup.find('.wcp-editor-grid-system-control-res-use-checkbox').get(0).checked = true;
                mdGroup.find('select').removeAttr('disabled');
                mdGroup.find('.wcp-editor-grid-system-control-visible').removeClass('wcp-editor-control-disabled');
            } else {
                mdGroup.find('.wcp-editor-grid-system-control-res-use-checkbox').get(0).checked = false;
                mdGroup.find('select').attr('disabled', 'disabled');
                mdGroup.find('.wcp-editor-grid-system-control-visible').addClass('wcp-editor-control-disabled');
            }

            // Class
            mdGroup.find('.wcp-editor-grid-system-control-select-colspan').val(v.md.class);

            // Visible
            if (parseInt(v.md.visible, 10) == 1) {
                mdGroup.find('.wcp-editor-grid-system-control-visible').removeClass('wcp-editor-grid-system-control-visible-not');
            } else {
                mdGroup.find('.wcp-editor-grid-system-control-visible').addClass('wcp-editor-grid-system-control-visible-not');
            }

            // LG ---------
            var lgGroup = root.find('.wcp-editor-grid-system-control-res-group-lg');

            // Use
            if (parseInt(v.lg.use, 10) == 1) {
                lgGroup.find('.wcp-editor-grid-system-control-res-use-checkbox').get(0).checked = true;
                lgGroup.find('select').removeAttr('disabled');
                lgGroup.find('.wcp-editor-grid-system-control-visible').removeClass('wcp-editor-control-disabled');
            } else {
                lgGroup.find('.wcp-editor-grid-system-control-res-use-checkbox').get(0).checked = false;
                lgGroup.find('select').attr('disabled', 'disabled');
                lgGroup.find('.wcp-editor-grid-system-control-visible').addClass('wcp-editor-control-disabled');
            }

            // Class
            lgGroup.find('.wcp-editor-grid-system-control-select-colspan').val(v.lg.class);

            // Visible
            if (parseInt(v.lg.visible, 10) == 1) {
                lgGroup.find('.wcp-editor-grid-system-control-visible').removeClass('wcp-editor-grid-system-control-visible-not');
            } else {
                lgGroup.find('.wcp-editor-grid-system-control-visible').addClass('wcp-editor-grid-system-control-visible-not');
            }
        },
        HTML: function() {
            var html = '';

            html += '<div class="wcp-editor-grid-system-control" id="'+ this.elementID +'">';

            // LG
            html += '   <div class="wcp-editor-grid-system-control-res-group wcp-editor-grid-system-control-res-group-lg">';
            html += '       <div class="wcp-editor-grid-system-control-res-name">LG</div>';
            html += '       <div class="wcp-editor-grid-system-control-res-use">';
            html += '           <input type="checkbox" class="wcp-editor-grid-system-control-res-use-checkbox">';
            html += '       </div>';
            html += '       <div class="wcp-editor-grid-system-control-colspan">';
            html += '           <select class="wcp-editor-grid-system-control-select-colspan">';
            html += '               <option value="col-lg-1">1 Column</option>';
            html += '               <option value="col-lg-2">2 Columns</option>';
            html += '               <option value="col-lg-3">3 Columns</option>';
            html += '               <option value="col-lg-4">4 Columns</option>';
            html += '               <option value="col-lg-5">5 Columns</option>';
            html += '               <option value="col-lg-6">6 Column</option>';
            html += '               <option value="col-lg-7">7 Columns</option>';
            html += '               <option value="col-lg-8">8 Columns</option>';
            html += '               <option value="col-lg-9">9 Columns</option>';
            html += '               <option value="col-lg-10">10 Columns</option>';
            html += '               <option value="col-lg-11">11 Columns</option>';
            html += '               <option value="col-lg-12">12 Columns</option>';
            html += '           </select>';
            html += '       </div>';
            html += '       <div class="wcp-editor-grid-system-control-visible">';
            html += '           <i class="fa fa-eye" aria-hidden="true"></i>';
            html += '           <i class="fa fa-eye-slash" aria-hidden="true"></i>';
            html += '       </div>';
            html += '   </div>';

            // MD
            html += '   <div class="wcp-editor-grid-system-control-res-group wcp-editor-grid-system-control-res-group-md">';
            html += '       <div class="wcp-editor-grid-system-control-res-name">MD</div>';
            html += '       <div class="wcp-editor-grid-system-control-res-use">';
            html += '           <input type="checkbox" class="wcp-editor-grid-system-control-res-use-checkbox">';
            html += '       </div>';
            html += '       <div class="wcp-editor-grid-system-control-colspan">';
            html += '           <select class="wcp-editor-grid-system-control-select-colspan">';
            html += '               <option value="col-md-1">1 Column</option>';
            html += '               <option value="col-md-2">2 Columns</option>';
            html += '               <option value="col-md-3">3 Columns</option>';
            html += '               <option value="col-md-4">4 Columns</option>';
            html += '               <option value="col-md-5">5 Columns</option>';
            html += '               <option value="col-md-6">6 Column</option>';
            html += '               <option value="col-md-7">7 Columns</option>';
            html += '               <option value="col-md-8">8 Columns</option>';
            html += '               <option value="col-md-9">9 Columns</option>';
            html += '               <option value="col-md-10">10 Columns</option>';
            html += '               <option value="col-md-11">11 Columns</option>';
            html += '               <option value="col-md-12">12 Columns</option>';
            html += '           </select>';
            html += '       </div>';
            html += '       <div class="wcp-editor-grid-system-control-visible">';
            html += '           <i class="fa fa-eye" aria-hidden="true"></i>';
            html += '           <i class="fa fa-eye-slash" aria-hidden="true"></i>';
            html += '       </div>';
            html += '   </div>';

            // SM
            html += '   <div class="wcp-editor-grid-system-control-res-group wcp-editor-grid-system-control-res-group-sm">';
            html += '       <div class="wcp-editor-grid-system-control-res-name">SM</div>';
            html += '       <div class="wcp-editor-grid-system-control-res-use">';
            html += '           <input type="checkbox" class="wcp-editor-grid-system-control-res-use-checkbox">';
            html += '       </div>';
            html += '       <div class="wcp-editor-grid-system-control-colspan">';
            html += '           <select class="wcp-editor-grid-system-control-select-colspan">';
            html += '               <option value="col-sm-1">1 Column</option>';
            html += '               <option value="col-sm-2">2 Columns</option>';
            html += '               <option value="col-sm-3">3 Columns</option>';
            html += '               <option value="col-sm-4">4 Columns</option>';
            html += '               <option value="col-sm-5">5 Columns</option>';
            html += '               <option value="col-sm-6">6 Column</option>';
            html += '               <option value="col-sm-7">7 Columns</option>';
            html += '               <option value="col-sm-8">8 Columns</option>';
            html += '               <option value="col-sm-9">9 Columns</option>';
            html += '               <option value="col-sm-10">10 Columns</option>';
            html += '               <option value="col-sm-11">11 Columns</option>';
            html += '               <option value="col-sm-12">12 Columns</option>';
            html += '           </select>';
            html += '       </div>';
            html += '       <div class="wcp-editor-grid-system-control-visible">';
            html += '           <i class="fa fa-eye" aria-hidden="true"></i>';
            html += '           <i class="fa fa-eye-slash" aria-hidden="true"></i>';
            html += '       </div>';
            html += '   </div>';

            // XS
            html += '   <div class="wcp-editor-grid-system-control-res-group wcp-editor-grid-system-control-res-group-xs">';
            html += '       <div class="wcp-editor-grid-system-control-res-name">XS</div>';
            html += '       <div class="wcp-editor-grid-system-control-res-use">';
            html += '           <input type="checkbox" class="wcp-editor-grid-system-control-res-use-checkbox">';
            html += '       </div>';
            html += '       <div class="wcp-editor-grid-system-control-colspan">';
            html += '           <select class="wcp-editor-grid-system-control-select-colspan">';
            html += '               <option value="col-xs-1">1 Column</option>';
            html += '               <option value="col-xs-2">2 Columns</option>';
            html += '               <option value="col-xs-3">3 Columns</option>';
            html += '               <option value="col-xs-4">4 Columns</option>';
            html += '               <option value="col-xs-5">5 Columns</option>';
            html += '               <option value="col-xs-6">6 Column</option>';
            html += '               <option value="col-xs-7">7 Columns</option>';
            html += '               <option value="col-xs-8">8 Columns</option>';
            html += '               <option value="col-xs-9">9 Columns</option>';
            html += '               <option value="col-xs-10">10 Columns</option>';
            html += '               <option value="col-xs-11">11 Columns</option>';
            html += '               <option value="col-xs-12">12 Columns</option>';
            html += '           </select>';
            html += '       </div>';
            html += '       <div class="wcp-editor-grid-system-control-visible">';
            html += '           <i class="fa fa-eye" aria-hidden="true"></i>';
            html += '           <i class="fa fa-eye-slash" aria-hidden="true"></i>';
            html += '       </div>';
            html += '   </div>';

            // end
            html += '   <div class="wcp-editor-controls-clear"></div>';
            html += '</div>';

            return html;
        },
        init: function() {
            var self = this;
            // self.valueChanged();

            // "Use" checkboxes
            $(document).on('change', '#' + this.elementID + ' .wcp-editor-grid-system-control-res-use-checkbox', function() {
                // Enable/disable the other inputs from this resolution group

                if ($(this).get(0).checked) {
                    $(this).closest('.wcp-editor-grid-system-control-res-group').find('select').removeAttr('disabled');
                    $(this).closest('.wcp-editor-grid-system-control-res-group').find('.wcp-editor-grid-system-control-visible').removeClass('wcp-editor-control-disabled');
                } else {
                    $(this).closest('.wcp-editor-grid-system-control-res-group').find('select').attr('disabled', 'disabled');
                    $(this).closest('.wcp-editor-grid-system-control-res-group').find('.wcp-editor-grid-system-control-visible').addClass('wcp-editor-control-disabled');
                }

                self.valueChanged();
            });

            // Toggle visibility
            $(document).on('click', '#' + this.elementID + ' .wcp-editor-grid-system-control-visible', function() {
                $(this).toggleClass('wcp-editor-grid-system-control-visible-not');
                self.valueChanged();
            });

            // Select colspan
            $(document).on('change', '#' + this.elementID + ' .wcp-editor-grid-system-control-select-colspan', function() {
                self.valueChanged();
            });
        }
    });
    $.wcpEditorRegisterControl({
        type: 'switch',
        customLabel: true,
        getValue: function() {
            var v = 0;

            if ($('#' + this.elementID).hasClass('active')) {
                v = 1;
            }

            return v;
        },
        setValue: function(v) {
            if (parseInt(v, 10) == 1) {
                $('#' + this.elementID).addClass('active');
            } else {
                $('#' + this.elementID).removeClass('active');
            }
        },
        HTML: function() {
            var html = '';

            html += '<div class="wcp-editor-control-switch" id="'+ this.elementID +'">';
            html += '   <div class="wcp-editor-control-switch-ball"></div>';
            html += '</div>';

            html += '<div class="wcp-editor-control-switch-label" id="'+ this.elementID +'-label">'+ this.title +'</div>';
            html += '<div class="wcp-editor-controls-clear"></div>';

            return html;
        },
        init: function() {
            var self = this;

            $(document).on('click', '#' + this.elementID, function() {
                $(this).toggleClass('active');
                self.valueChanged();
            });
            $(document).on('click', '#' + this.elementID + '-label', function() {
                $('#' + self.elementID).toggleClass('active');
                self.valueChanged();
            });
        }
    });
    $.wcpEditorRegisterControl({
        type: 'button group',
        getValue: function() {
            var v = $('#' + this.elementID).find('.active[data-button-value]').data('button-value');

            return v;
        },
        setValue: function(v) {
            $('#' + this.elementID).find('[data-button-value]').removeClass('active');
            $('#' + this.elementID).find('[data-button-value="'+ v +'"]').addClass('active');

            $('#' + this.elementID).find('[data-button-value="'+ v +'"]').siblings().removeClass('no-border-right');
            $('#' + this.elementID).find('[data-button-value="'+ v +'"]').prev().addClass('no-border-right');
        },
        HTML: function() {
            var html = '';

            html += '<div class="wcp-editor-control-button-group" id="'+ this.elementID +'">';

            for (var i=0; i<this.options.length; i++) {
                html += '<div class="wcp-editor-control-button-group-button" data-button-value="'+ this.options[i].value +'">'+ this.options[i].title +'</div>';
            }

            html += '</div>';

            return html;
        },
        init: function() {
            var self = this;

            $(document).on('click', '#' + this.elementID + ' .wcp-editor-control-button-group-button', function() {
                $(this).siblings().removeClass('active').removeClass('no-border-right');
                $(this).prev().addClass('no-border-right');
                $(this).addClass('active');
                self.valueChanged();
            });
        }
    });
    $.wcpEditorRegisterControl({
        type: 'button',
        customLabel: true,
        getValue: function() {
            return undefined;
        },
        setValue: function() {

        },
        HTML: function() {
            return '<div id="'+ this.elementID +'" class="wcp-editor-control-button">'+ this.title +'</div>';
        },
        init: function() {
            var self = this;

            $(document).on('click', '#' + this.elementID, function() {
                self.valueChanged();
                $(document).trigger(self.options.event_name);
            });
        }
    });
    $.wcpEditorRegisterControl({
        type: 'wp media upload',
        getValue: function() {
            return $('#' + this.elementID + ' input').val();
        },
        setValue: function(v) {
            $('#' + this.elementID + ' input').val(v);
        },
        HTML: function() {
            return '<div class="wcp-editor-input-with-button" id="'+ this.elementID +'"><input type="text"><div class="wcp-editor-control-button">Choose Image</div></div>';
        },
        init: function() {
            var self = this;

            var inputSelector = '#' + this.elementID + ' input';
            var buttonSelector = '#' + this.elementID + ' .wcp-editor-control-button';

            if ($.wcpWPMedia) {
                $.wcpWPMedia(inputSelector, buttonSelector, function() {
                    self.valueChanged();
                });
            }

            $(document).on('change', inputSelector, function() {
                self.valueChanged();
            });
        }
    });
    $.wcpEditorRegisterControl({
        type: 'object',
        getValue: function() {
            return this.val;
        },
        setValue: function(v) {
            this.val = v;
        },
        HTML: function() {
            return '';
        },
        init: function() {
            var self = this;

			// Custom var
			this.val = undefined;
        }
    });
    $.wcpEditorRegisterControl({
        type: 'fullscreen button position',
        getValue: function() {
            return $('#' + this.elementID).find('.wcp-editor-control-fullscreen-button-position-selected').data('wcp-button-position');
        },
        setValue: function(v) {
            this.val = v;

            $('#' + this.elementID).find('.wcp-editor-control-fullscreen-button-position-selected').removeClass('wcp-editor-control-fullscreen-button-position-selected');
            $('#' + this.elementID).find('[data-wcp-button-position="'+ v +'"]').addClass('wcp-editor-control-fullscreen-button-position-selected');
        },
        HTML: function() {
            var html = '';

            html += '<div class="wcp-editor-control-fullscreen-button-position" id="'+ this.elementID +'">';
            html += '<div class="wcp-editor-control-fullscreen-button-position-location wcp-editor-control-fullscreen-button-position-location-0" data-wcp-button-position="0"></div>';
            html += '<div class="wcp-editor-control-fullscreen-button-position-location wcp-editor-control-fullscreen-button-position-location-1 wcp-editor-control-fullscreen-button-position-selected" data-wcp-button-position="1"></div>';
            html += '<div class="wcp-editor-control-fullscreen-button-position-location wcp-editor-control-fullscreen-button-position-location-2" data-wcp-button-position="2"></div>';
            html += '<div class="wcp-editor-control-fullscreen-button-position-location wcp-editor-control-fullscreen-button-position-location-3" data-wcp-button-position="3"></div>';
            html += '<div class="wcp-editor-control-fullscreen-button-position-location wcp-editor-control-fullscreen-button-position-location-4" data-wcp-button-position="4"></div>';
            html += '<div class="wcp-editor-control-fullscreen-button-position-location wcp-editor-control-fullscreen-button-position-location-5" data-wcp-button-position="5"></div>';
            html += '</div>';

            return html;
        },
        init: function() {
            var self = this;

			$(document).off('click.fullscreen_button_position');
			$(document).on('click.fullscreen_button_position', '.wcp-editor-control-fullscreen-button-position-location', function() {
                $('#' + self.elementID).find('.wcp-editor-control-fullscreen-button-position-selected').removeClass('wcp-editor-control-fullscreen-button-position-selected');
                $(this).addClass('wcp-editor-control-fullscreen-button-position-selected');


                self.valueChanged();
            });
        }
    });
})(jQuery, window, document);

;(function ($, window, document, undefined ) {
    $.webcraft_icon_library = [
        ['0 0 499.392 499.392','M409.81,160.113C409.79,71.684,338.136,0,249.725,0C161.276,0,89.583,71.684,89.583,160.113     c0,76.325,119.274,280.238,151.955,334.638c1.72,2.882,4.826,4.641,8.178,4.641c3.351,0,6.468-1.759,8.168-4.631     C290.545,440.361,409.81,236.438,409.81,160.113z M249.716,283.999c-68.303,0-123.915-55.573-123.915-123.895     c0-68.313,55.592-123.895,123.915-123.895s123.876,55.582,123.876,123.895S318.029,283.999,249.716,283.999z'],
        ['0 0 498.923 498.923', 'M249.462,0C151.018,0,70.951,80.106,70.951,178.511c0,92.436,133.617,192.453,172.248,315.948     c0.83,2.667,3.322,4.484,6.116,4.465c2.804-0.039,5.256-1.876,6.048-4.563c37.478-126.533,172.6-223.307,172.609-315.869     C427.963,80.106,347.886,0,249.462,0z M249.462,313.925c-77.184,0-139.987-62.812-139.987-139.987     c0-77.184,62.803-139.987,139.987-139.987c77.165,0,139.977,62.803,139.977,139.987     C389.439,251.113,326.626,313.925,249.462,313.925z'],
        ['0 0 254.019 254.019', 'M126.514,48.282c-43.428,0-78.738,35.319-78.738,78.738c0,43.389,35.309,78.718,78.738,78.718     c43.389,0,78.738-35.329,78.738-78.708C205.252,83.601,169.932,48.282,126.514,48.282z M126.514,198.898     c-39.647,0-71.879-32.232-71.879-71.869s32.222-71.928,71.879-71.928s71.879,32.29,71.879,71.928     S166.171,198.898,126.514,198.898z M193.352,127.029c0,36.882-29.926,66.808-66.828,66.808     c-36.912,0-66.838-29.936-66.838-66.808c0-36.921,29.936-66.847,66.838-66.847C163.426,60.172,193.352,90.108,193.352,127.029z      M41.308,56.733l0.02,38.836h-0.059c-0.391,12.389-13.971,17.117-13.971,17.117v24.924h0.02l-0.02,57.312     c0,0-5.491,7.093-12.604,0v-82.226h0.166c-8.285-3.527-14.411-4.748-14.802-17.117H0V56.733l6.224-0.029L9.252,94.28H16.6     l0.928-38.348h5.989l0.723,38.348h8.617l1.983-37.547L41.308,56.733L41.308,56.733z M252.1,122.857h-15.232v77.038h-17.596     V54.144h17.596C236.878,54.134,260.844,84.548,252.1,122.857z'],
        ['0 0 231.779 231.779', 'M140.501,45.881v0.322l-52.173,0.274l1.602-3.039l0,0l2.912-3.078l41.934-0.215L146.578,0     L83.55,0.342l9.028,39.042c-6.526-7.308-22.569-22.833-37.156-17.459l1.583,4.377C69.413,21.7,84.586,37.322,89.911,43.438     c-8.881,3.273-20.4,5.657-27.229-0.449l-3.087,3.517c4.055,3.635,9.194,4.885,14.606,4.866c3.166,0,6.429-0.518,9.575-1.212     c-29.643,20.351-50.336,65.548-50.14,99.792c0.225,45.441,37.283,82.069,82.665,81.825c45.451-0.215,82.069-37.254,81.845-82.714     C197.93,112.425,173.719,63.36,140.501,45.881z M139.504,176.439c-4.357,3.869-9.809,6.312-16.238,7.406l0.078,13.082     l-14.059,0.078l-0.078-13.072c-6.351-1.075-12.056-3.732-17.02-7.855c-5.95-5.09-9.008-10.991-9.164-17.537l0.264-3.586     l13.659-0.059l0.059,1.368c0.098,5.422,1.739,9.477,5.022,12.359c3.283,2.872,7.972,4.318,14.01,4.318     c6.028-0.068,10.747-1.563,14.079-4.465c3.283-2.951,4.866-6.937,4.846-12.144c-0.02-4.279-1.544-7.621-4.709-10.141     c-3.283-2.579-8.969-4.817-16.941-6.693c-8.832-2.062-15.632-5.227-20.097-9.389c-4.543-4.279-6.908-9.79-6.947-16.306     c-0.039-7.455,2.843-13.668,8.608-18.436c3.928-3.253,8.578-5.393,13.835-6.37l-0.059-11.392l14.049-0.078l0.059,11.021     c6.282,0.85,11.558,3.039,15.681,6.468c5.52,4.602,8.568,11.021,9.008,19.052l0.078,1.397l-13.776,0.068l-0.156-1.143     c-0.664-5.012-2.345-8.764-5.071-11.148c-2.667-2.345-6.605-3.576-11.714-3.527c-5.305,0.01-9.575,1.309-12.476,3.762     c-2.902,2.423-4.279,5.706-4.26,10.102c0,3.801,1.339,6.771,4.006,9.008c2.706,2.286,7.552,4.27,14.391,5.872     c10.014,2.306,17.596,5.764,22.628,10.268c5.032,4.572,7.63,10.386,7.65,17.293C148.815,164.266,145.718,171.134,139.504,176.439     z'],
        ['0 0 202.614 202.614', 'M177.91,55.377h-22.589v-1.368C155.311,24.25,131.091,0,101.302,0     C71.503,0,47.292,24.25,47.292,54.009v1.368H24.704L11.495,202.614h179.624L177.91,55.377L177.91,55.377z M101.302,6.624     c19.687,0,36.619,12.105,43.761,29.232c-9.448-14.137-25.5-23.478-43.761-23.478c-18.231,0-34.313,9.34-43.77,23.507     C64.713,18.729,81.635,6.624,101.302,6.624z M57.297,55.377c4.406-20.263,22.481-35.485,44.024-35.485     c21.582,0,39.618,15.222,44.024,35.485H57.297z'],
        ['0 0 181.352 181.352', 'M169.393,167.37l-14.919,9.848c-9.604,6.614-50.531,14.049-106.211-53.404     C-5.415,58.873,9.934,22.86,17.134,14.555L29.523,1.678c2.921-2.491,7.328-2.198,9.839,0.811l32.583,38.543l0.02,0.02     c2.384,2.824,2.306,7.22-0.83,9.868v0.029l-14.44,10.415c-5.716,5.667-0.733,14.587,5.11,23.204l27.786,32.808     c12.926,12.477,20.009,18.241,26.194,14.118l12.008-13.395c2.941-2.472,7.328-2.169,9.839,0.821l32.603,38.543v0.02     C172.607,160.316,172.519,164.703,169.393,167.37z'],
        ['0 0 264.938 264.938', 'M156.831,70.804c0,13.473-10.904,24.396-24.357,24.396c-13.434,0-24.357-10.923-24.357-24.396     c0-13.434,10.904-24.337,24.357-24.337C145.927,46.467,156.831,57.37,156.831,70.804z M203.298,70.795     c0,8.764-1.661,17.098-4.563,24.836c-9.282,27.571-70.736,169.307-70.736,169.307S70.14,110.403,65.118,92.68     c-2.237-6.868-3.478-14.196-3.478-21.866C61.64,31.743,93.354,0,132.474,0C171.593-0.01,203.307,31.733,203.298,70.795z      M177.661,71.078c0-24.953-20.214-45.197-45.187-45.197c-24.953,0-45.177,20.234-45.177,45.187s20.224,45.187,45.177,45.187     C157.446,116.255,177.661,96.031,177.661,71.078z'],
        ['0 0 202.978 202.978', 'M100.942,0.001C44.9,0.304-0.297,45.98,0.006,102.031      c0.293,56.051,45.998,101.238,102.02,100.945c56.081-0.303,101.248-45.978,100.945-102.02      C202.659,44.886,157.013-0.292,100.942,0.001z M101.948,186.436c-46.916,0.234-85.108-37.576-85.372-84.492      c-0.244-46.907,37.537-85.157,84.453-85.411c46.926-0.254,85.167,37.596,85.421,84.483      C186.695,147.951,148.855,186.182,101.948,186.436z M116.984,145.899l-0.42-75.865l-39.149,0.254l0.078,16.6l10.63-0.059      l0.313,59.237l-11.275,0.039l0.088,15.857l49.134-0.264l-0.098-15.847L116.984,145.899z M102.065,58.837      c9.575-0.039,15.349-6.448,15.3-14.323c-0.254-8.07-5.882-14.225-15.095-14.186c-9.184,0.059-15.173,6.292-15.134,14.362      C87.185,52.555,93.028,58.906,102.065,58.837z'],
        ['0 0 465.959 465.959', 'M52.334,0v361.271H165.99l66.965,104.687l66.965-104.687h113.705V0H52.334z M344.257,287.419     v0.029l-20.723,13.454c-13.278,9.057-69.837,19.013-146.25-74.507c-73.638-90.11-52.134-139.713-42.129-151.115l17.195-17.704     c4.064-3.39,10.132-2.931,13.561,1.212l44.747,53.472v0.029c3.283,3.908,3.117,9.995-1.202,13.629v0.039l-20.048,14.284     c-7.933,7.787-1.114,20.127,6.888,32.066l38.143,45.5c17.762,17.313,27.493,25.344,36.042,19.677l16.658-18.387     c4.084-3.39,10.093-2.941,13.571,1.212l44.747,53.433v0.078C348.722,277.707,348.546,283.784,344.257,287.419z'],
        ['0 0 241.772 241.772', 'M216.145,126.001l-78.523,43.389c-2.785-1.954-5.93-3.38-9.252-4.338L52.612,34.269L0,56.467      l3.166,7.533l45.969-19.501l69.114,119.333c-16.619,0.762-29.975,14.44-29.975,31.284c0,17.362,14.079,31.411,31.411,31.411      c17.342,0,31.431-14.049,31.431-31.411c0-7.591-2.804-14.489-7.308-19.892l72.28-39.921l21.66,12.418l4.025-7.074      L216.145,126.001z M119.685,210.298c-8.412,0-15.212-6.78-15.212-15.183c0-8.402,6.79-15.212,15.212-15.212      c8.393,0,15.212,6.8,15.212,15.212C134.897,203.517,128.077,210.298,119.685,210.298z M136.763,153.865l72.876-41.23      L168.457,39.73l-72.895,41.22L136.763,153.865z M118.385,51.161l-16.482-29.154L72.797,38.49L89.25,67.556L118.385,51.161z       M149.259,34.132L138.6,15.246l-18.915,10.669l10.689,18.935L149.259,34.132z'],
        ['0 0 684.234 684.234', 'M442.403,299.827c3.029,3.586,2.863,9.155-1.075,12.467v0.039l-18.944,12.31     c-12.193,8.344-64.043,17.44-134.105-68.274c-67.512-82.587-47.776-128.087-38.612-138.521l15.769-16.238     c3.683-3.097,9.272-2.697,12.418,1.124l40.986,49.007c3.019,3.625,2.872,9.164-1.065,12.516v0.039l-18.387,13.092     c-7.289,7.142-1.045,18.456,6.341,29.389l34.948,41.719c16.248,15.896,25.207,23.224,33.052,18.055l15.261-16.893     c3.742-3.097,9.291-2.716,12.418,1.124l40.996,48.988V299.827L442.403,299.827z M557.671,215.549     c0,119.02-215.559,468.685-215.559,468.685S126.563,334.569,126.563,215.549C126.563,96.48,223.102,0,342.112,0     C461.171,0,557.671,96.48,557.671,215.549z M508.889,215.549c0-91.957-74.81-166.816-166.777-166.816     s-166.777,74.859-166.777,166.816s74.81,166.757,166.777,166.757S508.889,307.506,508.889,215.549z'],
        ['0 0 200.611 200.611', 'M159.454,19.394l-6.966,6.849l19.394,19.775v102.382c0,1.68-0.352,2.843-1.055,3.566     c-2.189,2.14-14.089,2.316-17.45-1.045c-1.026-1.065-1.065-2.218-1.045-2.54V48.9h-17.117V0H39.76v176.107h-20.81v24.504h137.007     v-24.504h-20.781V58.719h7.328v89.309c-1.006,18.983,39.159,22.159,39.159,0.42V42.021L159.454,19.394z M54.434,68.508V19.56     h68.508v48.949H54.434z'],
        ['0 0 498.22 498.22', 'M269.061,484.131c-3.185,8.461-11.255,14.049-20.273,14.089     c-9.028,0.029-17.147-5.501-20.39-13.913c-44.034-114.321-132.63-261.205-132.63-330.964C95.767,68.801,164.539,0,249.12,0     c84.541,0,153.333,68.801,153.333,153.343C402.462,223.307,312.557,368.579,269.061,484.131z M249.12,29.164     c-66.32,0-120.261,53.941-120.261,120.232c0,66.33,53.941,120.3,120.261,120.3c66.3,0,120.241-53.951,120.241-120.3     C369.351,83.105,315.42,29.164,249.12,29.164z'],
        ['0 0 275.353 275.353', 'M229.784,199.712c27.269,0,45.568-29.692,45.568-57.419c0-20.117-12.418-22.843-24.562-22.843      c-3.468,0-7.21,0.234-11.167,0.479c-3.195,0.176-6.507,0.332-9.848,0.41l0.039-0.889H1.514c0,42.959,24.132,80.321,59.686,99.49      C24.787,221.333,0,226.043,0,231.445c0,7.865,51.782,14.196,115.659,14.196s115.649-6.331,115.649-14.196      c0-5.432-24.904-10.132-61.454-12.516c10.63-5.725,20.263-13.004,28.529-21.641      C208.026,199.712,219.448,199.712,229.784,199.712z M229.364,128.272c3.683-0.088,7.289-0.244,10.737-0.469      c3.83-0.205,7.464-0.42,10.698-0.42c11.509,0,16.658,2.159,16.658,14.909c0,23.419-15.466,49.515-37.664,49.515      c-9.751,0-18.3-0.205-25.285-1.358C218.559,173.196,227.537,151.731,229.364,128.272z M98.982,97.203      c-0.557-0.547-13.414-13.922,0.156-30.327c16.58-20,0.01-37-0.156-37.166l-3.595,3.595c0.557,0.537,13.414,13.932-0.166,30.327      c-16.58,20.029-0.01,37.039,0.166,37.195L98.982,97.203z M118.737,97.203c-0.557-0.547-13.414-13.922,0.166-30.327      c16.56-20,0-37-0.166-37.166l-3.605,3.595c0.557,0.537,13.414,13.932-0.156,30.327c-16.56,20.039-0.01,37.039,0.166,37.205      L118.737,97.203z M140.251,97.203c-0.557-0.547-13.414-13.922,0.156-30.327c16.57-20,0-37-0.156-37.166l-3.615,3.595      c0.547,0.537,13.424,13.932-0.166,30.327c-16.56,20.039,0,37.039,0.176,37.205L140.251,97.203z'],
        ['0 0 223.151 223.151', 'M111.575,5.462l34.489,69.827l77.087,11.226l-55.778,54.371l13.17,76.784l-68.958-36.267      l-68.958,36.267l13.18-76.784L0,86.525l77.096-11.226L111.575,5.462'],
        ['0 0 200.943 200.943', 'M140.446,52.319c-2.804-19.599-19.599-34.684-39.98-34.684c-20.361,0-37.175,15.085-39.96,34.684     H0v130.989h14.049V71.606h3.928v111.702h164.666V71.41h4.025v111.898h14.274V52.319H140.446z M82.021,52.319     c0.899-9.487,8.754-16.893,18.456-16.893s17.577,7.425,18.456,16.893H82.021L82.021,52.319z'],
        ['0 0 252.363 252.363', 'M127.09,140.367c19.658,0.811,37.136,9.604,49.476,23.106l-12.574,12.477     c-9.301-10.454-22.637-17.293-37.635-17.889c-15.818-0.655-30.297,5.716-40.527,16.267l-12.457-12.486     C86.994,147.89,106.133,139.508,127.09,140.367z M47.63,135.902l13.991,14.098c16.814-17.078,40.4-27.366,66.124-26.311     c24.064,1.006,45.421,11.597,60.643,28.001l14.069-14.03c-18.602-19.765-44.63-32.642-73.892-33.834     C97.076,102.518,68.196,115.072,47.63,135.902z M132.415,32.827C81.004,30.687,33.756,50.834,0,84.629l14.431,14.558     C44.347,69.27,86.124,51.449,131.575,53.315c41.885,1.7,79.226,19.843,106.251,47.913l14.538-14.47     C221.832,55.171,179.683,34.762,132.415,32.827z M22.462,110.617l14.812,14.89C60.722,102,93.452,87.853,129.171,89.318     c33.033,1.368,62.49,15.818,83.691,38.055l14.9-14.812c-24.826-25.891-59.188-42.666-97.741-44.259     C88.215,66.622,49.896,83.104,22.462,110.617z M120.71,171.163c-13.405,0-24.269,10.864-24.269,24.269     s10.864,24.259,24.269,24.259s24.269-10.855,24.269-24.259S134.115,171.163,120.71,171.163z'],
        ['0 0 237.522 237.522', 'M109.018,202.995c2.521,22.52-3.253,31.587-18.993,34.196     c-15.73,2.648-31.04-10.855-34.244-30.112c-1.475-8.852-4.367-25.95-6.165-33.815c-2.853-12.535-10.474-28.851-13.434-38.494     c-0.674-2.208-8.383-17.997-10.171-26.712c-2.941-14.157,6.155-28.001,20.293-30.971l24.728-5.12     c3.713-0.791,14.753-1.553,14.753-1.553c15.183-0.098,22.569,7.718,22.647,22.911c0.039,8.783-7.943,22.041-14.128,23.019     c-6.204,0.977-8.93,0.283-13.131,0.303c-6.038,0.029-9.037,9.047-9.721,13.971c-0.371,2.657-0.459,15.095,7.347,30.893     C86.615,177.28,105.657,172.903,109.018,202.995z M90.611,66.476c6.282-0.029,11.353-7.533,11.304-16.746     s-5.178-16.668-11.46-16.629c-6.302,0.039-11.363,7.533-11.304,16.746C79.19,59.051,84.319,66.506,90.611,66.476z M53.358,69.026     c3.752-0.899,5.696-6.038,4.377-11.48c-1.339-5.422-5.393-9.116-9.116-8.236c-3.732,0.909-5.676,6.048-4.367,11.47     C45.581,66.232,49.625,69.935,53.358,69.026z M69.791,64.894c4.475-0.635,7.269-6.429,6.292-12.926     c-0.967-6.468-5.335-11.167-9.76-10.542c-4.426,0.684-7.249,6.468-6.272,12.945C61.037,60.839,65.375,65.538,69.791,64.894z      M27.887,75.748c-1.446-3.634-4.621-5.755-7.083-4.768c-2.511,0.997-3.332,4.739-1.876,8.353c1.456,3.615,4.66,5.725,7.122,4.748     C28.522,83.086,29.362,79.353,27.887,75.748z M38.478,75.738c3.126-1.251,4.172-6.009,2.325-10.581     c-1.847-4.612-5.901-7.318-8.998-6.038c-3.166,1.241-4.191,6.009-2.374,10.581C31.287,74.302,35.322,76.989,38.478,75.738z      M109.018,202.995c2.521,22.52-3.253,31.587-18.993,34.196c-15.73,2.648-31.04-10.855-34.244-30.112     c-1.475-8.852-4.367-25.95-6.165-33.815c-2.853-12.535-10.474-28.851-13.434-38.494c-0.674-2.208-8.383-17.997-10.171-26.712     c-2.941-14.157,6.155-28.001,20.293-30.971l24.728-5.12c3.713-0.791,14.753-1.553,14.753-1.553     c15.183-0.098,22.569,7.718,22.647,22.911c0.039,8.783-7.943,22.041-14.128,23.019c-6.204,0.977-8.93,0.283-13.131,0.303     c-6.038,0.029-9.037,9.047-9.721,13.971c-0.371,2.657-0.459,15.095,7.347,30.893C86.615,177.28,105.657,172.903,109.018,202.995z      M90.611,66.476c6.282-0.029,11.353-7.533,11.304-16.746s-5.178-16.668-11.46-16.629c-6.302,0.039-11.363,7.533-11.304,16.746     C79.19,59.051,84.319,66.506,90.611,66.476z M53.358,69.026c3.752-0.899,5.696-6.038,4.377-11.48     c-1.339-5.422-5.393-9.116-9.116-8.236c-3.732,0.909-5.676,6.048-4.367,11.47C45.581,66.232,49.625,69.935,53.358,69.026z      M69.791,64.894c4.475-0.635,7.269-6.429,6.292-12.926c-0.967-6.468-5.335-11.167-9.76-10.542     c-4.426,0.684-7.249,6.468-6.272,12.945C61.037,60.839,65.375,65.538,69.791,64.894z M27.887,75.748     c-1.446-3.634-4.621-5.755-7.083-4.768c-2.511,0.997-3.332,4.739-1.876,8.353c1.456,3.615,4.66,5.725,7.122,4.748     C28.522,83.086,29.362,79.353,27.887,75.748z M38.478,75.738c3.126-1.251,4.172-6.009,2.325-10.581     c-1.847-4.612-5.901-7.318-8.998-6.038c-3.166,1.241-4.191,6.009-2.374,10.581C31.287,74.302,35.322,76.989,38.478,75.738z      M158.739,128.429c7.816-15.808,7.728-28.246,7.347-30.903c-0.674-4.924-3.674-13.952-9.712-13.981     c-4.211-0.02-6.927,0.674-13.141-0.303c-6.194-0.977-14.157-14.225-14.118-23.019c0.088-15.193,7.474-22.999,22.637-22.921     c0,0,11.04,0.772,14.763,1.563l24.728,5.12c14.118,2.97,23.243,16.814,20.273,30.962c-1.798,8.715-9.497,24.513-10.171,26.712     c-2.97,9.653-10.581,25.969-13.434,38.494c-1.798,7.875-4.68,24.973-6.165,33.815c-3.205,19.267-18.514,32.769-34.244,30.121     c-15.73-2.618-21.504-11.675-18.983-34.196C131.9,139.821,150.932,144.169,158.739,128.429z M158.397,16.746     C158.455,7.523,153.385,0.039,147.102,0c-6.292-0.039-11.421,7.416-11.47,16.629c-0.049,9.213,5.022,16.717,11.304,16.746     C153.219,33.395,158.358,25.94,158.397,16.746z M193.296,27.679c1.309-5.432-0.635-10.571-4.357-11.48     c-3.732-0.879-7.787,2.814-9.145,8.246c-1.309,5.442,0.635,10.581,4.387,11.48C187.912,36.834,191.957,33.121,193.296,27.679z      M177.497,21.26c0.977-6.487-1.847-12.262-6.292-12.945c-4.406-0.625-8.774,4.074-9.751,10.542     c-0.977,6.497,1.837,12.291,6.302,12.926C172.173,32.437,176.501,27.738,177.497,21.26z M211.478,50.981     c2.472,0.977,5.667-1.143,7.122-4.758c1.446-3.615,0.625-7.357-1.866-8.353c-2.462-0.987-5.637,1.124-7.093,4.768     C208.176,46.242,209.016,49.975,211.478,50.981z M208.117,36.589c1.827-4.572,0.791-9.34-2.364-10.581     c-3.087-1.29-7.142,1.417-9.008,6.028c-1.837,4.582-0.811,9.34,2.335,10.591S206.251,41.191,208.117,36.589z M158.739,128.429     c7.816-15.808,7.728-28.246,7.347-30.903c-0.674-4.924-3.674-13.952-9.712-13.981c-4.211-0.02-6.927,0.674-13.141-0.303     c-6.194-0.977-14.157-14.225-14.118-23.019c0.088-15.193,7.474-22.999,22.637-22.921c0,0,11.04,0.772,14.763,1.563l24.728,5.12     c14.118,2.97,23.243,16.814,20.273,30.962c-1.798,8.715-9.497,24.513-10.171,26.712c-2.97,9.653-10.581,25.969-13.434,38.494     c-1.798,7.875-4.68,24.973-6.165,33.815c-3.205,19.267-18.514,32.769-34.244,30.121c-15.73-2.618-21.504-11.675-18.983-34.196     C131.9,139.821,150.932,144.169,158.739,128.429z M158.397,16.746C158.455,7.523,153.385,0.039,147.102,0     c-6.292-0.039-11.421,7.416-11.47,16.629c-0.049,9.213,5.022,16.717,11.304,16.746C153.219,33.395,158.358,25.94,158.397,16.746z      M193.296,27.679c1.309-5.432-0.635-10.571-4.357-11.48c-3.732-0.879-7.787,2.814-9.145,8.246     c-1.309,5.442,0.635,10.581,4.387,11.48C187.912,36.834,191.957,33.121,193.296,27.679z M177.497,21.26     c0.977-6.487-1.847-12.262-6.292-12.945c-4.406-0.625-8.774,4.074-9.751,10.542c-0.977,6.497,1.837,12.291,6.302,12.926     C172.173,32.437,176.501,27.738,177.497,21.26z M211.478,50.981c2.472,0.977,5.667-1.143,7.122-4.758     c1.446-3.615,0.625-7.357-1.866-8.353c-2.462-0.987-5.637,1.124-7.093,4.768C208.176,46.242,209.016,49.975,211.478,50.981z      M208.117,36.589c1.827-4.572,0.791-9.34-2.364-10.581c-3.087-1.29-7.142,1.417-9.008,6.028     c-1.837,4.582-0.811,9.34,2.335,10.591S206.251,41.191,208.117,36.589z'],
        ['0 0 684.273 684.273', 'M365.634,289.891h14.431v24.445h-14.431v0.195H321.6v-0.195h-17.371v-24.445H321.6v-91.419     h-16.365v-25.569H321.6v-0.078h44.034V289.891z M343.338,155.443c14.782,0,23.761-9.848,23.761-22.002     c-0.303-12.477-8.979-22.002-23.175-22.002c-14.186,0-23.458,9.526-23.458,22.002     C320.447,145.595,329.416,155.443,343.338,155.443z M557.686,215.549c0,119.079-215.559,468.724-215.559,468.724     s-215.54-349.645-215.54-468.724C126.587,96.519,223.077,0,342.127,0C461.166,0,557.686,96.519,557.686,215.549z      M508.923,215.549c0-91.957-74.82-166.757-166.796-166.757c-91.947,0-166.757,74.8-166.747,166.757     c0,91.996,74.81,166.796,166.747,166.796C434.103,382.346,508.923,307.545,508.923,215.549z'],
        ['0 0 670.008 670.008','M330.93,172.58c-0.567-0.557-13.502-14.02,0.156-30.522c16.717-20.156,0-37.244-0.156-37.439      l-3.644,3.634c0.567,0.576,13.502,14.01-0.147,30.522c-16.707,20.156-0.029,37.263,0.147,37.429L330.93,172.58z M334.994,0c-122.85,0-222.418,99.626-222.418,222.467c0,93.08,127.774,322.894,189.639,428.676      c6.82,11.656,19.257,18.866,32.769,18.866c13.502,0,25.989-7.142,32.789-18.817C429.628,545.4,557.432,315.557,557.432,222.467      C557.432,99.626,457.835,0,334.994,0z M334.994,394.568c-94.898,0-172.101-77.194-172.101-172.082      c0-94.907,77.204-172.131,172.101-172.131c94.917,0,172.101,77.223,172.101,172.131      C507.106,317.345,429.912,394.568,334.994,394.568z M311.048,172.58c-0.547-0.557-13.502-14.02,0.166-30.522c16.687-20.156,0-37.244-0.166-37.439      l-3.644,3.634c0.557,0.586,13.493,14.02-0.166,30.522c-16.687,20.156-0.02,37.244,0.166,37.429L311.048,172.58z M352.551,172.58c-0.567-0.557-13.483-14.02,0.186-30.522c16.678-20.156,0-37.244-0.186-37.439      l-3.635,3.634c0.596,0.576,13.541,14.01-0.156,30.522c-16.687,20.156,0,37.263,0.176,37.429L352.551,172.58z M484.908,202.702c-7.806-9.096-19.521-7.943-19.462-7.933l-259.222,0.234      c0,43.243,24.318,80.858,60.116,100.154c-36.687,2.384-61.64,7.122-61.64,12.584c0,7.885,52.114,14.264,116.441,14.264      c2.882,0,14.186,0,17.059,0c64.346,0,116.46-6.39,116.46-14.264c0-5.462-24.973-10.2-61.65-12.584      c4.328-2.335,8.49-4.963,12.467-7.816c46.232-1.231,75.445-16.531,82.714-43.849      C493.183,224.802,492.089,211.075,484.908,202.702z M478.762,240.991c-6.585,24.797-34.635,33.336-60.595,35.808      c19.394-18.641,32.173-43.995,34.528-72.289l13.239,0.01c0.117,0.01,7.122-0.596,11.548,4.543      C482.377,214.758,482.807,225.798,478.762,240.991z'],
        ['0 0 206.397 206.397','M193.329,171.577l-18.131,0.001l-23.854-64.999l-64.729-0.03l-0.863-15.285l45.181-0.023      l-0.005-16.961H84.475l-2.249-34.514c-2.811,1.707-6.054,2.736-9.583,2.736c-2.648,0-5.127-0.563-7.405-1.535l5.468,82.257      l68.95,0.054l24.91,63.83l28.771,0.01L193.329,171.577z M64.914,35.334c2.271,0.98,4.771,1.544,7.397,1.544c3.521,0,6.78-1.033,9.59-2.736      c5.328-3.216,8.928-9.046,8.928-15.702C90.82,8.278,82.527,0,72.304,0C62.088,0,53.81,8.278,53.81,18.44      C53.809,25.998,58.381,32.481,64.914,35.334z M93.43,188.073c-34.247,0-61.992-27.629-61.992-61.76c0-19.511,9.104-36.88,23.313-48.205      l-11.775-14.1C24.728,78.684,13.06,101.131,13.06,126.313c0,44.237,35.969,80.084,80.37,80.084      c21.319,0,40.71-8.286,55.08-21.814l-18.153-8.749C120.033,183.494,107.275,188.073,93.43,188.073z'],
        ['0 0 653.829 653.829', 'M367.353,164.657h67.727v80.809h-67.727v67.737h-80.829v-67.737h-67.737v-80.809h67.737V96.92     h80.829V164.657z M532.899,205.965c0,113.764-206.004,447.864-206.004,447.864S120.93,319.729,120.93,205.965     C120.94,92.23,213.18,0,326.895,0C440.678,0,532.909,92.23,532.899,205.965z M486.285,205.965     c0-87.863-71.469-159.381-159.381-159.381c-87.853,0-159.361,71.508-159.361,159.381c0,87.902,71.498,159.371,159.361,159.371     C414.807,365.336,486.285,293.867,486.285,205.965z'],
        ['0 0 199.556 199.556', 'M69.012,146.777l27.073-47.893v100.672H24.362V98.884h42.07l-21.563,38.26l16.414-2.902     L69.012,146.777z M94.795,90.872H12.491l-0.117-40.009h43.848c-6.448-3.322-11.118-7.406-14.069-12.047     c-2.374-3.703-3.459-7.806-3.459-11.675c0-6.702,3.107-16.062,7.533-20.224C50.673,2.745,56.623,0,63.091,0     c6.526,0,12.594,2.237,17.772,5.745c5.207,3.41,9.633,8.109,13.317,13.385c2.14,3.029,4.006,9.702,5.589,13.033l0.655-1.309     c4.367-8.617,10.454-19.941,18.28-25.109C123.871,2.237,129.919,0,136.445,0c6.145,0,11.851,2.237,16.16,5.979     c4.289,3.752,7.23,12.682,7.23,18.974c0.039,7.63-4.465,15.31-12.936,21.367c-2.198,1.583-4.69,3.107-7.464,4.543h47.63     l0.117,40.009H104.8V50.863H94.785v40.009H94.795z M106.93,48.44c16.189-3.156,26.702-7.709,32.769-12.086     c6.399-4.641,7.806-10.982,7.845-13.737c0-2.286-1.036-5.579-3.078-7.376c-2.003-1.768-4.905-2.96-7.972-2.96h-0.039     c-3.625,0.02-7.308,1.28-10.933,3.674c-3.605,2.433-7.122,9.409-10.093,13.649C111.473,35.241,108.512,42.061,106.93,48.44z      M92.411,47.561c-0.977-3.703-2.374-7.523-4.24-11.118c-3.547-7.162-8.686-16.902-14.147-20.488     c-3.644-2.394-7.249-3.654-10.933-3.674h-0.059c-2.863,0-5.989,1.368-8.353,3.586c-2.364,2.228-3.742,6.966-3.703,9.633     c0,1.641,0.42,4.905,1.583,6.81c1.202,1.817,3.224,3.937,6.487,6.038C65.231,42.246,75.939,45.871,92.411,47.561z      M154.803,137.007l-16.394-2.765l-7.748,12.76l-26.692-47.463v100.017h71.332V98.884H133.26L154.803,137.007z'],
        ['0 0 670.624 670.624', 'M334.77,147.94c-38.641,0-70.003,31.323-70.003,69.945c0,38.641,31.362,69.974,70.003,69.974      c38.621,0,69.954-31.333,69.954-69.974C404.714,179.263,373.372,147.94,334.77,147.94z M236.746,183.62h-9.067l-0.752-40.107h-6.253l-0.967,40.107h-7.67l-3.175-39.296h-6.546v40.644      l0.078,0.02c0.352,11.353,5.315,13.717,12.359,16.629v92.592h18.436v-92.318c4.055-2.032,12.037-7.23,12.359-16.912h0.039      v-40.644h-6.761L236.746,183.62z M335.297,0C214.03,0,115.752,98.317,115.752,219.575c0,96.324,138.57,340.901,195.521,437.371      c5.022,8.5,14.176,13.678,24.035,13.678c9.868,0,18.993-5.227,24.015-13.708c56.98-96.49,195.55-341.018,195.55-437.342      C554.843,98.307,456.565,0,335.297,0z M335.297,389.419c-93.686,0-169.864-76.207-169.864-169.854      c-0.01-93.706,76.168-169.913,169.864-169.913c93.667,0,169.884,76.207,169.884,169.913      C505.161,313.212,428.974,389.419,335.297,389.419z M334.77,135.483c-45.49,0-82.441,36.951-82.441,82.421c0,45.431,36.941,82.411,82.441,82.411      c45.402,0,82.372-36.97,82.372-82.411C417.142,172.424,380.172,135.483,334.77,135.483z M334.77,293.134      c-41.523,0-75.25-33.736-75.25-75.25c0-41.504,33.707-75.24,75.25-75.24c41.494,0,75.191,33.746,75.201,75.24      C409.961,259.398,376.254,293.134,334.77,293.134z M450.263,141.589h-18.436v152.6h18.436v-80.672h15.925      C475.382,173.43,450.263,141.589,450.263,141.589z'],
        ['0 0 208.359 208.359', 'M208.359,74.434l-5.491-0.01l0.088-12.887c-6.507-25.041-58.924-56.462-97.477-14.128v-0.098     c-0.762,0.879-1.319,1.417-1.319,1.417s-0.567-0.528-1.319-1.417v0.078C64.317,5.056,11.9,36.496,5.393,61.527l0.078,12.887     L0,74.434v107.315c127.921-0.684,80.408-0.684,208.359,0V74.434z M37.654,159.776c13.326-7.933,29.056-7.885,42.275-0.234     L37.654,159.776z M20.41,154.618l-0.508-91.117c18.085-28.187,54.83-31.773,77.253-0.283l0.508,91.361     C74.722,134.462,43.145,134.276,20.41,154.618z M128.429,159.542c13.229-7.621,28.929-7.67,42.256,0.234L128.429,159.542z      M187.939,154.618c-22.725-20.341-54.322-20.146-77.243-0.039l0.518-91.361c22.423-31.499,59.178-27.894,77.243,0.283     L187.939,154.618z'],
        ['0 0 197.582 197.582', 'M32.027,0c-4.709,0-10.093,2.306-10.093,14.86v167.754c0,9.712,5.383,12.936,10.093,12.936     s10.151-3.224,10.151-12.936V14.86C42.178,2.306,36.746,0,32.027,0z M34.645,129.914h-5.168l-2.921-8.647v-13.209l2.286-3.459     h6.351l2.384,3.459v13.209h0.01L34.645,129.914z M148.888,178.784V44.913l2.804-0.879v134.75H148.888z M16.59,106.954h4.807     v2.423h-2.765l-1.446,8.148h-2.54L16.59,106.954z M165.604,12.193c-0.762-0.918-2.198-1.612-1.563-3.341     c0.42-1.172,1.466-1.192,2.804-1.27c4.543-0.254,10.669-0.127,10.669-0.127s3.722-0.508,2.081,2.677     c-1.739,3.293-2.022,5.657-0.518,7.728c0,0-3.507,3.625,0,7.787c0,0-3.605,3.566,0,7.474c0,0-3.889,3.703,0,7.523l-13.717,4.582     c0,0,1.856-2.022,2.501-5.237c0.322-1.768,0.205-4.133-0.576-6.126c-1.68-4.133-2.443-7.689-0.664-13.327     C168.223,15.593,166.601,13.258,165.604,12.193z M142.742,12.193c-0.762-0.918-2.179-1.612-1.583-3.341     c0.44-1.172,1.524-1.192,2.785-1.27c4.602-0.254,10.708-0.127,10.708-0.127s3.742-0.508,2.101,2.677     c-1.778,3.293-2.062,5.657-0.537,7.728c0,0-3.507,3.625,0,7.787c0,0-3.605,3.566,0,7.474c0,0-3.889,3.703,0,7.523l-13.717,4.582     c0,0,1.866-2.022,2.501-5.237c0.342-1.768,0.195-4.133-0.576-6.126c-1.68-4.133-2.443-7.689-0.645-13.327     C145.36,15.593,143.719,13.258,142.742,12.193z M171.75,178.784V44.913l2.804-0.879v134.75H171.75z M148.282,184.969h4.045     v12.613h-4.045V184.969z M171.144,184.969h4.045v12.613h-4.045V184.969z M140.534,180.445h19.56v2.814h-19.56V180.445z      M47.503,106.954l1.964,10.571h-2.56l-1.446-8.148h-2.765v-2.423H47.503z M182.937,180.445v2.814h-19.54v-2.814H182.937z      M73.286,106.954h4.846v2.423h-2.765l-1.446,8.148h-2.54L73.286,106.954z M104.257,106.954l1.944,10.571h-2.56l-1.466-8.148     h-2.745v-2.423H104.257z M88.781,0c-4.719,0-10.112,2.306-10.112,14.86v167.754c0,9.712,5.403,12.936,10.112,12.936     c4.69,0,10.112-3.224,10.112-12.936V14.86C98.894,2.306,93.471,0,88.781,0z M94.311,121.267l-2.97,8.647h-5.139l-2.97-8.647     v-13.209l2.306-3.459h6.351l2.423,3.459V121.267z'],
        ['0 0 305.601 305.601', 'M305.601,211.021l-9.213-1.534l-2.443,14.597C248.954,188.501,148.604,51.347,147.529,49.882     l-3.41-4.621l-2.951,4.895C114.692,94.228,40.292,209.536,11.138,219.306l-2.57-5.901L0,217.147l17.147,39.471l-0.596,0.85h0.977     l1.251,2.872l6.624-2.872h266.139l-0.967-1.212l7.259,1.212l4.445-26.487l0.459-0.85l-0.293-0.205L305.601,211.021z      M192.189,249.007h-85.401c-2.589-5.803-4.143-12.135-4.143-18.905c0-25.852,20.967-46.848,46.828-46.848     c25.891,0,46.848,20.977,46.848,46.848C196.322,236.853,194.778,243.214,192.189,249.007z M288.865,254.137L145.702,73.662     L23.448,247.649l-9.291-21.387C49.222,213.004,128.155,86.109,144.716,58.948c18.71,25.393,106.983,143.739,147.774,173.596     L288.865,254.137z'],
        ['0 0 244.899 244.899', 'M174.754,216.878V0H70.145v216.878H35.949v28.021h173v-28.021H174.754z M162.424,99.558v31.206     h-31.186V99.558H162.424z M131.472,76.989V45.793h31.196v31.196H131.472z M162.424,152.864v31.177h-31.186v-31.177H162.424z      M82.719,12.584h80.956v16.082H82.719V12.584z M82.455,130.764V99.558h31.186v31.206H82.455z M113.651,152.864v31.177H82.455     v-31.177H113.651z M82.719,45.793h31.167v31.196H82.719C82.719,76.989,82.719,45.793,82.719,45.793z M94.287,200.64h57.312v0.01     v16.228H94.287V200.64z'],
        ['0 0 236.692 236.692', 'M128.463,226.912V122.391h4.963l56.364-84.629H165.16l10.19-18.28l1.837,0.381     c5.501,0,9.946-4.436,9.946-9.926S182.668,0,177.177,0c-5.481,0-9.926,4.445-9.926,9.946c0,3.107,1.524,5.774,3.791,7.621     l-11.245,20.195H46.902l56.364,84.629h4.963v104.511c-18.524,0.537-32.32,2.482-32.32,4.826c0,2.726,18.993,4.963,42.442,4.963     c23.439,0,42.412-2.228,42.412-4.963C160.763,229.374,146.977,227.44,128.463,226.912z M159.923,47.18h12.301l-10.806,16.228     l-10.552,0.02L159.923,47.18z M75.333,63.477L64.468,47.161h90.091l-9.067,16.248L75.333,63.477z'],
        ['0 0 599.644 599.644', 'M424.934,146.074h-252.52v74.263h19.13l-0.059-1.632c0-12.662,10.268-22.97,23.048-22.97     c12.633,0,22.911,10.308,22.911,22.97l-0.068,1.632h106.847l-0.068-1.632c0-12.662,10.327-22.97,23.048-22.97     c12.652,0,22.96,10.308,22.96,22.97l-0.098,1.632h44.093v-33.375L424.934,146.074z M200.65,182.126h-21.221l0.059-29.848     l21.162,0.039C200.65,152.317,200.65,182.126,200.65,182.126z M244.059,182.126h-38.377v-29.799l38.377,0.049V182.126z      M287.536,182.126H249.12v-29.75l38.416,0.068V182.126z M330.964,214.26h-38.406v-61.826l38.406,0.176V214.26z M374.402,182.126     h-38.397v-29.613l38.397,0.088V182.126z M379.454,182.126V152.6l41.846,0.088l6.39,29.447     C427.699,182.126,379.454,182.126,379.454,182.126z M309.9,209.287h-12.125v-53.423H309.9V209.287z M299.827,0     C195.511,0,110.93,84.571,110.93,188.906c0,104.306,188.896,410.738,188.896,410.738s188.887-306.431,188.887-410.738     C488.713,84.58,404.133,0,299.827,0z M299.827,335.058c-80.604,0-146.181-65.558-146.181-146.152S219.223,42.744,299.827,42.744     s146.152,65.568,146.152,146.162C445.979,269.49,380.431,335.058,299.827,335.058z M214.543,200.552     c-10.132,0-18.241,8.148-18.241,18.124c0,10.102,8.119,18.231,18.241,18.231c9.966,0,18.075-8.129,18.075-18.231     C232.618,208.7,224.509,200.552,214.543,200.552z M214.504,226.775c-4.494,0-8.09-3.586-8.09-8.07     c0-4.436,3.595-8.031,8.09-8.031c4.416,0,8.002,3.595,8.002,8.031C222.506,223.19,218.92,226.775,214.504,226.775z      M367.202,200.552c-10.073,0-18.173,8.148-18.173,18.124c0,10.102,8.099,18.231,18.173,18.231     c9.985,0,18.133-8.129,18.133-18.231C385.345,208.7,377.197,200.552,367.202,200.552z M367.153,226.775     c-4.465,0-8.051-3.586-8.051-8.07c0-4.436,3.605-8.031,8.051-8.031c4.465,0,8.031,3.595,8.031,8.031     C375.184,223.19,371.618,226.775,367.153,226.775z M326.499,209.287h-12.643v-53.423h12.643V209.287z'],
        ['0 0 377.763 377.763', 'M188.896,54.029c-48.265,0-87.345,39.1-87.345,87.345c0,48.235,39.081,87.316,87.345,87.316     c48.226,0,87.306-39.081,87.306-87.316C276.232,93.129,237.122,54.029,188.896,54.029z M190.098,68.235     c9.418,0,15.212,6.351,15.417,14.645c0,8.109-5.989,14.665-15.808,14.665c-9.282,0-15.241-6.556-15.241-14.665     C174.456,74.585,180.621,68.235,190.098,68.235z M214.152,203.415h-9.594v0.117h-29.35v-0.117H163.64v-16.287h11.568v-60.897     h-10.923v-17.039h10.923v-0.049h29.35v78.005h9.594V203.415z M42.432,0v292.9h92.142l54.293,84.864l54.312-84.864h92.152V0     H42.432z M188.896,245.7c-57.634,0-104.365-46.711-104.365-104.336c0-57.654,46.721-104.355,104.365-104.355     c57.615,0,104.336,46.701,104.336,104.355C293.232,198.989,246.54,245.7,188.896,245.7z'],
        ['0 0 212.521 212.521', 'M113.627,206.619l-0.293-53.912l18.739-0.107l-12.985,17.049l37.713-0.195l0.195,35.339     l6.204-0.029l-0.195-35.348l37.684-0.205l-24.885-29.076l13.737-0.078l-22.95-26.829l14.216-0.068L161.94,91.117l8.735-0.039     l-14.489-16.951L143.367,90.98l-24.259-28.343l22.764-0.137l-30.219-35.3l14.001-0.088L102.401,0l-20.83,27.376l14.177-0.068     L68.606,62.91l22.364-0.107l-28.734,37.762l-7.543-8.822l8.725-0.049L48.929,74.742L35.915,91.84l8.852-0.049l-16.912,22.247     l13.962-0.078L21.24,140.983l12.945-0.059l-22.354,29.33l37.713-0.205l0.195,35.329l6.214-0.02l-0.195-35.339l37.664-0.205     l-14.46-16.902l24.435-0.137l0.293,53.922l-59.364,0.313l0.039,5.51l128.644-0.703l-0.02-5.501     C172.961,206.326,113.627,206.619,113.627,206.619z M140.427,113.402l8.647-0.039l-4.084,5.374L140.427,113.402z M152.024,91.234     l-3.976,5.237l-4.445-5.188C143.592,91.273,152.024,91.234,152.024,91.234z M141.013,105.723l-3.371,4.436l-3.762-4.387     L141.013,105.723z M78.728,106.055l-5.549,7.298l-6.185-7.22L78.728,106.055z M59.354,113.861l13.493-0.098l-6.39,8.393     L59.354,113.861z'],
        ['0 0 257.434 257.434', 'M63.086,23.194l7.758-3.283c11.353,26.751,49.076,63.213,50.766,63.76h76.471v8.422l-77.565-0.049     C118.864,91.83,77.311,56.755,63.086,23.194z M225.505,79.588l15.114-22.286l-83.427-25.793L128.712,0l8.48,79.588H225.505z      M199.81,97.379h-68.743L41.67,177.436c-14.196-3.635-25.578-12.975-30.883-26.086l-0.068,0.449     c-3.253-9.262-5.1-4.484-5.95-0.616c-0.342,2.208-0.557,4.543-0.557,6.839c0.107,20.429,14.352,37.586,33.609,42.832     l28.431,56.579h98.044c0,0,2.843-4.993,5.256-11.148v-0.244c7.093-20.723-12.828-22.55-12.867-22.55h0.117     c-14.294-0.059-21.299-0.205-21.299-0.205c0.86-12.428,4.504-16.697,7.806-17.997l39.081-18.016l26.37,70.15h44.464     L199.81,97.379z'],
        ['0 0 204.851 204.851', 'M139.518,128.595l16.834,16.336c0,0-20.644,29.877-42.725,30.473     c0.479,0,0.117-84.092,0.039-104.472c14.694-4.797,25.402-18.182,25.402-34.117c0-20.009-16.697-36.218-37.273-36.218     c-20.615,0-37.312,16.209-37.312,36.208c0,15.671,10.376,28.929,24.748,33.961l0.098,104.277     c-26.643-1.837-42.061-27.474-42.061-27.474l17.997-17.41L0,120.505l9.887,63.301l17.362-16.795     c15.036,12.105,32.017,37.244,72.876,37.244c51.332-1.309,63.184-28.939,76.344-39.804l18.993,18.514l9.389-63.907     L139.518,128.595z M82.558,36.208c0-10.298,8.608-18.661,19.218-18.661s19.257,8.363,19.257,18.661     c0,10.327-8.647,18.681-19.257,18.681S82.558,46.535,82.558,36.208z'],
        ['0 0 465.978 465.978', 'M52.344,0v361.291H166l66.974,104.687l67.004-104.687h113.656V0H52.344z M294.097,57.39     c12.535,0,22.706,10.181,22.706,22.745c0,12.535-10.171,22.716-22.706,22.716c-12.555,0-22.764-10.181-22.764-22.716     C271.332,67.57,281.552,57.39,294.097,57.39z M167.26,54.361c12.594,0,22.823,10.229,22.823,22.852     c0,12.594-10.229,22.833-22.823,22.833c-12.633,0-22.862-10.239-22.862-22.833C144.398,64.591,154.628,54.361,167.26,54.361z      M210.552,198.031c-5.305,0-9.633-4.318-9.633-9.663v-0.059h-0.02V136.05h-6.243l0.039,164.002     c0,7.152-5.823,12.965-12.975,12.965c-7.103,0-12.838-5.755-12.936-12.828l-0.098-0.098V194.377h-5.843l0.02,105.625     c0,7.201-5.823,13.024-13.014,13.024c-7.191,0-13.014-5.823-13.014-13.024l0.059-163.68h-6.009v52.007h-0.078l0.078,0.391     c0,5.364-4.309,9.663-9.633,9.663c-5.344,0-9.653-4.299-9.653-9.663l0.02-0.391h-0.039l0.02-56.178     c0,0-1.163-24.093,31.636-24.709h45.803c0,0,29.047-0.361,31.147,24.709v56.237C220.185,193.713,215.896,198.031,210.552,198.031     z M365.272,190.811c0,5.305-4.27,9.614-9.575,9.614c-5.305,0-9.594-4.309-9.594-9.614v-0.078l-18.495-52.016h-6.243l29.35,88.889     h-29.33l0.02,74.41c0,7.122-5.764,12.897-12.897,12.897c-7.083,0-12.809-5.686-12.877-12.789l-0.098-0.049v-74.478h-5.803     l0.02,74.361c0,7.142-5.823,12.945-12.975,12.945c-7.171,0-12.936-5.803-12.936-12.945v-74.419h-29.183l29.223-88.567h-5.979     l-18.485,51.753h-0.059l0.059,0.42c0,5.295-4.299,9.604-9.604,9.604c-5.286,0-9.614-4.318-9.614-9.604l0.059-0.42h-0.059     l18.514-55.944c0,0,8.09-23.976,40.722-24.572h27.132c0,0,38.152-0.322,40.263,24.572l18.475,55.944L365.272,190.811z'],
        ['0 0 417.938 417.938', 'M46.955,0v324.047h101.952l60.067,93.891l60.077-93.891h101.932V0H46.955z M306.588,215.803     c0,4.944-1.505,8.93-4.484,11.841c-4.465,4.377-10.874,4.856-14.919,4.856l-1.68-0.029c-8.49,0-14.851-2.189-18.847-6.517     c-4.299-4.68-4.006-9.995-3.957-10.591l-0.01-100.193h-8.246v131.751h23.351v27.444H124.052v-27.444h23.321V49.281h107.042     v54.889h19.218v111.614c-0.01,0.391,0.029,1.661,1.221,2.853c1.837,1.837,5.657,2.853,10.767,2.853     c2.345,0.01,6.966,0.127,8.813-1.69c0.782-0.782,1.192-2.12,1.192-4.006V100.936l-21.768-22.178l7.845-7.689l24.904,25.373     v119.343L306.588,215.803z M163.855,71.254h76.842v54.889h-76.842V71.254z'],
        ['0 0 462.314 462.314', 'M160.661,360.431h140.983l-70.492,101.883L160.661,360.431z M396.434,165.262     c0,91.107-74.146,165.253-165.272,165.253S65.88,256.369,65.88,165.262C65.88,74.136,140.026,0,231.162,0     C322.288,0,396.444,74.136,396.434,165.262z M363.978,165.272c0-73.237-59.588-132.825-132.816-132.825     c-73.237,0-132.806,59.588-132.806,132.825c0,73.227,59.569,132.806,132.806,132.806     C304.389,298.078,363.987,238.499,363.978,165.272z'],
        ['0 0 192.146 192.146', 'M108.186,144.372c0,7.054-4.729,12.32-12.037,12.32h-0.254c-7.054,0-11.92-5.266-11.92-12.32     c0-7.298,5.012-12.31,12.174-12.31C103.311,132.062,108.059,137.054,108.186,144.372z M88.44,125.301h15.447l2.951-61.298H85.46     L88.44,125.301z M190.372,177.034c-2.237,3.664-6.214,5.921-10.493,5.921H12.282c-4.426,0-8.51-2.384-10.698-6.233     c-2.159-3.849-2.11-8.549,0.147-12.349l84.111-149.22c2.208-3.722,6.204-5.96,10.522-5.96h0.332     c4.445,0.107,8.441,2.618,10.513,6.546l83.515,149.229C192.717,168.768,192.629,173.331,190.372,177.034z M179.879,170.634     L96.354,21.454L12.292,170.634H179.879z'],
        ['0 0 405.345 405.345', 'M202.174,83.476c-39.97,0-72.465,32.515-72.465,72.475c0,39.95,32.496,72.475,72.465,72.475     c39.96,0,72.465-32.525,72.465-72.475S242.134,83.476,202.174,83.476z M202.174,223.336c-37.205,0-67.395-30.17-67.395-67.375     c0-37.215,30.19-67.385,67.395-67.385c37.215,0,67.375,30.16,67.375,67.385C269.559,193.166,239.369,223.336,202.174,223.336z      M45.539,0v314.287h98.864l58.259,91.058l58.269-91.058h98.874V0H45.539z M116.226,124.247L116.226,124.247     c-0.381,12.506-14.079,17.283-14.079,17.283v25.109h0.02l-0.01,57.761c0,0-5.54,7.171-12.711,0v-82.89h0.166     c-8.363-3.556-14.538-4.778-14.929-17.274h-0.059V85.079h6.272l3.068,37.85h7.406l0.928-38.631h6.028l0.733,38.631h8.705     l1.993-37.85h6.507l0.029,39.159L116.226,124.247L116.226,124.247z M202.174,235.324c-43.77,0-79.373-35.593-79.373-79.353     c0-43.78,35.593-79.363,79.373-79.363c43.761,0,79.373,35.593,79.373,79.363C281.537,199.731,245.935,235.324,202.174,235.324z      M328.776,151.76h-15.359v77.692h-17.733V82.489h17.733C313.417,82.489,337.608,113.148,328.776,151.76z M226.551,155.951     c0,13.463-10.913,24.377-24.377,24.377s-24.377-10.913-24.377-24.377c0-13.463,10.913-24.377,24.377-24.377     S226.551,142.488,226.551,155.951z'],
        ['0 0 229.345 229.345', 'M126.367,114.545h3.332l99.646,38.573v-32.72l-22.96-11.871V84.551     c0-2.99-2.433-5.413-5.442-5.413c-2.999,0-5.422,2.423-5.422,5.413v18.387l-29.271-15.114V62.959c0-2.98-2.443-5.383-5.432-5.383     s-5.422,2.403-5.422,5.383v19.267l-25.715-13.268h-1.378l1.798-41.699c-0.02-10.063-8.158-18.221-18.231-18.221     c-10.063,0-18.231,8.148-18.231,18.221l1.798,41.699h-2.198L74.243,79.431V62.959c0-2.98-2.433-5.383-5.432-5.383     c-2.999,0-5.403,2.403-5.403,5.383V85.44L39.54,98.591V80.829c0-2.99-2.443-5.422-5.422-5.422c-2.999,0-5.422,2.433-5.422,5.422     v23.742L0,120.398v32.73l93.227-38.573h4.143l2.697,62.998c0,3.615,0.244,6.986,1.006,9.839l-30.366,16.727l-3.879,16.189     l38.895-6.722h13.668l41.289,6.722l-3.879-16.189L122.83,186.6c0.606-2.687,0.84-5.764,0.84-9.057L126.367,114.545z'],
        ['0 0 258.86 258.86', 'M222.193,84.429c-34.42-34.43-71.811,0-71.811,0v5.862h-8.774v-6.038     c12.154-4.846,20.781-16.678,20.781-30.581c0-18.231-14.772-32.965-32.974-32.965c-18.221,0-32.974,14.733-32.974,32.965     c0,13.571,8.197,25.187,19.902,30.258v6.36h-7.904v-5.862c0,0-37.371-34.43-71.791,0c0,0-21.983,14.685-36.648,0     c0,0,1.475,43.966,54.224,43.966c0,0,23.253,4.416,54.215-9.868v-8.813h7.904v8.041h5.735l1.553,31.05     c-17.977-0.879-31.773-5.305-31.753-10.61c0.029-4.533,10.063-8.266,24.103-9.751l0.01-1.798     c-17.332,1.544-29.926,6.038-29.965,11.49c-0.029,5.032,10.542,9.389,25.686,11.431c-11.372,1.837-19.11,5.247-19.11,9.223     c0,4.279,8.813,7.933,21.494,9.653c-10.435,1.553-17.577,4.67-17.616,8.256c-0.029,3.908,8.09,7.298,19.745,8.891     c-9.321,1.426-15.701,4.221-15.701,7.445c0,3.361,6.839,6.204,16.687,7.582c-7.249,1.192-12.183,3.429-12.183,5.94     c0,2.951,6.331,5.442,15.29,6.468c-5.579,0.987-9.399,2.648-9.399,4.67c0,2.736,7.113,5.051,16.424,5.471l0.752,14.987h4.797     l0.518-14.987c9.399-0.401,16.619-2.667,16.619-5.471c0-2.13-4.045-3.869-10.093-4.807c8.344-1.094,14.177-3.478,14.177-6.312     c0-2.462-4.367-4.602-11.158-5.852c10.298-1.348,17.459-4.279,17.459-7.728c0-3.175-5.96-5.921-15.056-7.386     c11.245-1.475,19.081-4.699,19.101-8.51c0.02-3.713-7.406-6.908-18.173-8.588c12.994-1.7,22.061-5.403,22.061-9.741     c0-4.035-7.533-7.513-18.983-9.311c14.049-1.964,23.761-6.028,23.8-10.796c0.02-5.608-13.229-10.376-31.274-12.017v1.925     c14.313,1.544,24.611,5.481,24.572,10.053c-0.02,5.168-13.16,9.399-30.415,10.2l1.084-31.098h4.524v-8.021h8.764v8.813     c30.971,14.284,54.215,9.868,54.215,9.868c52.739,0,54.224-43.966,54.224-43.966C244.176,99.113,222.193,84.429,222.193,84.429z      M97.692,158.848c0-3.889,8.608-7.23,20.713-8.578l5.325,0.322l0.86,17.303C109.318,167.124,97.692,163.391,97.692,158.848z      M101.053,176.786c0.02-3.507,7.865-6.448,18.817-7.591v-0.078l4.787,0.322l0.782,15.632     C111.605,184.339,101.014,180.89,101.053,176.786z M104.541,193.063c0-3.078,6.878-5.725,16.531-6.751v-0.156l4.445,0.274     l0.684,13.795C113.949,199.658,104.541,196.708,104.541,193.063z M108.341,206.605c0-2.482,5.462-4.582,13.141-5.491l4.778,0.303     l0.557,11.07C116.421,212.184,108.341,209.663,108.341,206.605z M113.549,217.733c0-1.954,4.25-3.634,10.268-4.328l3.048,0.137     l0.44,8.891C119.479,222.012,113.549,220.078,113.549,217.733z M147.021,217.733c0,2.306-5.862,4.279-13.581,4.68l0.313-8.93     l2.325-0.176C142.469,213.932,147.021,215.691,147.021,217.733z M150.334,206.605c0,2.843-7.093,5.247-16.541,5.843l0.381-10.982     l3.771-0.205C145.175,202.208,150.334,204.231,150.334,206.605z M155.824,193.063c0,3.322-7.865,6.087-18.544,6.986l-0.401-0.059     l-0.039,0.098l-2.628,0.166l0.489-13.727l4.524-0.205C148.878,187.338,155.824,189.908,155.824,193.063z M159.215,177.128     c0,4.162-10.63,7.464-24.484,7.972l0.557-15.671l4.748-0.264v0.088C151.232,170.484,159.273,173.562,159.215,177.128z      M141.863,150.319c12.027,1.339,20.654,4.641,20.654,8.529c0,4.602-11.763,8.344-27.181,9.067l0.606-17.264L141.863,150.319z      M130.49,64.439c-6.331,0-11.431-5.11-11.431-11.421c0-6.321,5.1-11.441,11.431-11.441c6.292,0,11.402,5.12,11.402,11.441     C141.892,59.329,136.782,64.439,130.49,64.439z'],
        ['0 0 412.692 412.692', 'M103.705,125.498h41.025v31.773h-41.025V125.498z M75.645,157.27h22.686v-31.831l-22.637-0.029     L75.645,157.27z M113.104,187.812c-4.787,0-8.627,3.84-8.627,8.588c0,4.787,3.84,8.608,8.627,8.608     c4.729,0,8.549-3.82,8.549-8.608C121.653,191.652,117.853,187.812,113.104,187.812z M276.256,187.812     c-4.778,0-8.608,3.84-8.608,8.588c0,4.787,3.83,8.608,8.608,8.608c4.719,0,8.568-3.82,8.568-8.608     C284.834,191.652,280.995,187.812,276.256,187.812z M150.114,157.27h41.044v-31.694l-41.044-0.068V157.27z M196.551,191.622     h41.035v-65.87l-41.035-0.186V191.622z M219.306,129.22h13.493v57.116h-13.493V129.22z M202.12,129.22h12.955v57.116H202.12     V129.22z M242.94,157.27h41.044v-31.538l-41.044-0.088V157.27z M289.378,125.742v31.528h51.538l-6.81-31.44L289.378,125.742z      M46.364,0v319.973h100.662l59.324,92.719l59.324-92.719h100.652V0H46.364z M113.153,215.833     c-10.835,0-19.491-8.686-19.491-19.472c0-10.669,8.656-19.364,19.491-19.364c10.649,0,19.335,8.695,19.335,19.364     C132.498,207.137,123.822,215.833,113.153,215.833z M276.286,215.833c-10.786,0-19.404-8.686-19.404-19.472     c0-10.669,8.627-19.364,19.404-19.364c10.708,0,19.364,8.695,19.364,19.364C295.689,207.137,286.994,215.833,276.286,215.833z      M347.832,198.119H300.74l0.088-1.739c0-13.551-10.972-24.533-24.543-24.533c-13.61,0-24.601,10.982-24.601,24.533l0.059,1.739     H137.569l0.068-1.739c0-13.551-10.962-24.533-24.484-24.533c-13.668,0-24.64,10.982-24.64,24.533l0.049,1.739h-20.39v-79.353     h269.803l9.868,43.692L347.832,198.119L347.832,198.119z'],
        ['0 0 245.827 245.827', 'M223.336,148.384l-0.137-23.527l22.628-12.662L122.576,47.195L0,113.495l49.144,28.216     l0.098,16.766l0.01,1.339l0.449-0.215c-0.518,0.703-0.85,1.426-0.84,2.149c0.039,8.246,33.326,14.772,74.41,14.548     c41.064-0.215,74.302-7.122,74.273-15.349c0-0.723-0.381-1.426-0.889-2.149l0.449,0.215v-1.339l-0.088-16.834l21.309-13.258     l0.117,20.83c-2.345,1.006-3.976,3.312-3.957,6.009c0.02,3.537,2.892,6.399,6.458,6.37c3.586-0.02,6.429-2.912,6.409-6.439     C227.332,151.657,225.691,149.371,223.336,148.384z M123.241,170.621c-36.452,0.205-66.017-3.801-66.046-8.91     c-0.029-5.11,29.496-9.399,65.949-9.585c36.462-0.205,66.017,3.781,66.037,8.881     C189.209,166.098,159.703,170.426,123.241,170.621z M195.335,127.183c-4.934-5.188-22.618-18.886-72.426-18.602     c-49.877,0.264-67.336,14.128-72.211,19.394l-0.029-4.963c0,0,14.147-21.524,72.202-21.827     c58.025-0.313,72.436,21.045,72.436,21.045L195.335,127.183z M215.755,162.199l-2.511,36.433     c7.767-12.203,14.255-7.66,14.255-7.66l-0.156-28.832C218.998,165.414,215.755,162.199,215.755,162.199z'],
        ['0 0 620.269 620.269', 'M363.382,236.643l-13.502,13.229c-9.809-11.177-23.956-18.524-39.979-19.257     c-16.824-0.791-32.29,5.882-43.243,17.127l-13.229-13.424c14.597-14.772,35.046-23.595,57.37-22.54     C331.707,212.765,350.299,222.193,363.382,236.643z M226.199,206.571l14.821,15.085c17.977-18.075,43.165-28.929,70.57-27.64     c25.647,1.192,48.333,12.633,64.473,30.151l15.046-14.841c-19.726-21.162-47.356-34.997-78.542-36.482     C279.016,171.3,248.221,184.461,226.199,206.571z M308.425,244.537c-14.274,0-25.852,11.558-25.852,25.823     c0,14.284,11.578,25.862,25.852,25.862c14.255,0,25.813-11.578,25.813-25.862C334.247,256.096,322.689,244.537,308.425,244.537z      M199.507,179.468l15.71,15.955c25.1-24.894,60.047-39.765,98.063-38.006c35.202,1.651,66.496,17.176,88.967,40.976     l15.974-15.681c-26.301-27.708-62.783-45.773-103.867-47.698C269.823,132.991,228.934,150.343,199.507,179.468z M505.538,195.413     c0,107.931-195.403,424.856-195.403,424.856S114.731,303.334,114.731,195.413C114.731,87.511,202.223,0,310.134,0     S505.538,87.511,505.538,195.413z M461.328,195.413c0-83.379-67.854-151.184-151.193-151.184     c-83.359,0-151.203,67.805-151.203,151.184c0,83.32,67.844,151.203,151.203,151.203     C393.464,346.616,461.328,278.733,461.328,195.413z M317.12,97.233c-54.752-2.56-105.205,18.632-141.404,54.43l15.339,15.574     c31.988-31.675,76.588-50.404,125.009-48.147c44.62,2.032,84.287,21.573,112.884,51.655l15.574-15.378     C412.184,121.57,367.397,99.578,317.12,97.233z'],
        ['0 0 620.249 620.249', 'M310.129,0C202.218,0,114.726,87.492,114.726,195.394c0,107.931,195.403,424.856,195.403,424.856     s195.394-316.934,195.394-424.856C505.533,87.502,418.06,0,310.129,0z M310.129,346.597     c-83.369,0-151.193-67.805-151.193-151.193c0-83.359,67.824-151.184,151.193-151.184c83.359,0,151.193,67.834,151.193,151.193     C461.323,278.782,393.488,346.597,310.129,346.597z M324.159,208.173l56.941-85.46h-30.815l16.238-29.125l1.837,0.352     c5.54,0,10.044-4.494,10.044-10.024c0-5.54-4.504-10.024-10.044-10.024c-5.52,0-10.005,4.494-10.005,10.024     c0,3.146,1.524,5.852,3.83,7.67l-17.313,31.118H236.814l56.921,85.46h4.973v105.508c-18.71,0.547-32.613,2.521-32.613,4.885     c0,2.765,19.159,5.012,42.852,5.012c23.673,0,42.832-2.237,42.832-5.012c0-2.355-13.893-4.328-32.603-4.885V208.173H324.159     L324.159,208.173z M344.97,132.21h18.358l-10.288,15.447l-16.678,0.01L344.97,132.21z M264.874,147.725l-10.327-15.505h84.991     l-8.608,15.466L264.874,147.725z'],
        ['0 0 684.234 684.234', 'M342.127,48.734c92.006,0,166.816,74.859,166.816,166.816s-74.8,166.767-166.816,166.767     c-91.947,0-166.767-74.8-166.767-166.757S250.18,48.734,342.127,48.734 M342.127,0c-119.02,0-215.559,96.48-215.559,215.549     c0,119.02,215.559,468.685,215.559,468.685s215.54-349.664,215.54-468.685C557.666,96.48,461.206,0,342.127,0z M307.101,256.056     l-8.822-14.313l-18.71,3.341l24.592-43.643h-47.991v114.78h81.786v-114.78L307.101,256.056z M441.675,146.679h-54.293     c3.166-1.622,6.009-3.361,8.51-5.149c9.653-6.927,14.802-15.681,14.763-24.367c0-7.152-3.371-17.362-8.256-21.621     c-4.953-4.289-11.441-6.829-18.436-6.829c-7.445,0-14.352,2.54-20.224,6.526c-8.93,5.93-15.877,18.837-20.859,28.666     l-0.723,1.485c-1.827-3.801-3.957-11.412-6.38-14.88c-4.201-5.989-9.233-11.333-15.202-15.261     c-5.901-3.986-12.818-6.526-20.244-6.526c-7.376,0-14.167,3.126-19.237,7.904c-5.071,4.729-8.598,15.398-8.617,23.028     c0,4.426,1.26,9.106,3.937,13.317c3.39,5.286,8.734,9.946,16.082,13.717H242.52l0.117,45.627h93.842v-45.627h11.412v45.627     h93.911L441.675,146.679z M295.728,132.425c-3.742-2.384-6.038-4.807-7.406-6.927c-1.319-2.12-1.798-5.862-1.798-7.709     c-0.039-3.068,1.495-8.451,4.221-10.991c2.677-2.54,6.263-4.103,9.506-4.103h0.088c4.201,0.039,8.314,1.446,12.467,4.201     c6.224,4.084,12.047,15.193,16.121,23.36c2.12,4.103,3.722,8.451,4.807,12.691C314.966,140.993,302.773,136.87,295.728,132.425z      M360.006,122.459c3.4-4.826,7.386-12.809,11.509-15.574c4.143-2.745,8.324-4.162,12.457-4.201h0.059     c3.478,0,6.8,1.358,9.096,3.4c2.316,2.022,3.498,5.803,3.498,8.412c-0.039,3.126-1.641,10.327-8.93,15.652     c-6.927,5.002-18.905,10.171-37.342,13.776C352.122,136.636,355.502,128.888,360.006,122.459z M404.9,244.889l-18.69-3.146     l-8.832,14.538l-30.424-54.117v114.057h81.327v-114.78h-47.932L404.9,244.889z'],
        ['0 0 624.138 624.138', 'M312.069,0C203.473,0,115.444,88.029,115.444,196.576c0,108.625,196.625,427.562,196.625,427.562      S508.693,305.2,508.693,196.576C508.703,88.029,420.693,0,312.069,0z M312.069,348.726      c-83.857,0-152.121-68.225-152.121-152.161c0-83.877,68.264-152.112,152.121-152.112c83.906,0,152.141,68.235,152.141,152.112      C464.21,280.492,395.975,348.726,312.069,348.726z M315.791,106.251h-7.474c-37.078,0-67.18,2.101-67.18,39.198v57.878      c0,38.407,2.931,55.573,9.858,62.969l-3.195,56.247l10.952,0.616l2.501-44.024h1.778l-3.224,43.702h104.99l-2.061-43.702h0.186      l2.521,44.024l10.913-0.616l-3.332-58.855c6.653-8.549,9.995-25.871,9.995-60.35v-57.888      C383.02,108.351,352.928,106.251,315.791,106.251z M289.197,230.42h-29.389v-13.551h29.389V230.42z M364.359,230.42h-29.428      v-13.551h29.428V230.42z M364.808,197.729H256.613v-61.308h108.195V197.729z M300.042,93.354h-7.22v8.637h39.286v-8.637h-6.751V61.347h14.118v-4.162h-54.762v4.162h15.329      L300.042,93.354z M301.087,61.347h23.214v32.007h-23.214C301.087,93.354,301.087,61.347,301.087,61.347z'],
        ['0 0 602.194 602.194', 'M301.087,42.901c80.946,0,146.816,65.851,146.816,146.797s-65.87,146.777-146.816,146.777     c-80.926,0-146.777-65.841-146.777-146.777C154.31,108.752,220.151,42.901,301.087,42.901 M301.087,0     C196.312,0,111.39,84.932,111.39,189.707c0,104.765,189.698,412.487,189.698,412.487s189.717-307.721,189.717-412.487     C490.804,84.922,405.892,0,301.087,0z M403.889,197.944l-9.409,64.122l-19.081-18.524c-13.229,10.884-25.1,38.612-76.618,39.911     c-40.976,0-58.054-25.178-73.12-37.351l-17.43,16.883l-9.907-63.535l65.47,9.643l-18.046,17.498c0,0,15.476,25.744,42.207,27.542     l-0.107-104.638c-14.44-5.022-24.846-18.319-24.846-34.059c0-20.068,16.746-36.325,37.43-36.325     c20.664,0,37.439,16.258,37.439,36.325c0,15.984-10.747,29.428-25.5,34.244c0.078,20.439,0.42,104.844-0.039,104.844     c22.129-0.616,42.852-30.571,42.852-30.571l-16.893-16.385C338.302,207.557,403.889,197.944,403.889,197.944z M319.758,114.868     c0-10.327-8.666-18.71-19.325-18.71c-10.64,0-19.277,8.383-19.277,18.71c0,10.347,8.637,18.749,19.277,18.749     C311.102,133.607,319.758,125.214,319.758,114.868z'],
        ['0 0 656.467 656.467', 'M328.238,46.77c88.254,0,160.025,71.801,160.025,160.006c0,88.244-71.781,160.016-160.025,160.016     c-88.234,0-159.996-71.781-159.996-160.016C168.242,118.571,240.004,46.77,328.238,46.77 M328.238,0     C214.035,0,121.433,92.582,121.433,206.786c0,114.243,206.805,449.682,206.805,449.682s206.795-335.449,206.795-449.691     C535.044,92.572,442.471,0,328.238,0z M414.089,146.689h-25.315v-1.573c0-33.306-27.151-60.448-60.507-60.448     s-60.458,27.142-60.458,60.448v1.573h-25.344L227.655,311.6h201.226L414.089,146.689z M328.258,92.064     c22.071,0,41.035,13.502,49.017,32.711c-10.513-15.818-28.568-26.292-49.017-26.292c-20.439,0-38.446,10.493-49.027,26.35     C287.262,105.615,306.197,92.064,328.258,92.064z M278.958,146.689c4.953-22.735,25.158-39.784,49.31-39.784     c24.162,0,44.405,17.039,49.31,39.784H278.958z'],
        ['0 0 640.962 640.962', 'M443.79,240.268v34.156c0,0-7.64-5.383-16.932,8.989l3.205-43.155     C430.063,240.258,433.913,244.078,443.79,240.268z M443.859,231.103c0,4.182-3.39,7.591-7.591,7.591s-7.611-3.41-7.611-7.591     c0-3.175,1.944-5.95,4.709-7.074V199.35l-25.324,15.583v21.436l-0.508-0.215c0.586,0.821,1.036,1.671,1.036,2.55     c0,9.751-39.462,17.664-88.078,17.664c-48.607,0-88-7.924-88-17.664c0-0.87,0.401-1.729,1.016-2.55l-0.528,0.215v-21.416     l-58.005-33.697l145.517-77.722l145.546,77.722l-26.887,14.87v27.904C441.895,225.153,443.839,227.918,443.859,231.103z      M320.481,176.215c16.062,0,29.203,1.231,40.087,3.117l-40.087-11.861c-68.723,0-85.606,25.354-85.606,25.354v5.882     C240.659,192.492,261.498,176.215,320.481,176.215z M398.613,238.705c0-6.058-34.987-10.991-78.142-10.991     s-78.103,4.934-78.103,10.991c0,5.999,34.948,10.952,78.103,10.952S398.623,244.704,398.613,238.705z M406.136,192.814     l-15.456-4.572c8.432,3.976,13.151,8.002,15.456,10.454V192.814z M522.401,201.91c0,111.526-201.891,439.052-201.891,439.052     S118.561,313.437,118.561,201.91C118.561,90.433,208.984,0,320.5,0C432.007,0,522.401,90.433,522.401,201.91z M476.725,201.91     c0-86.114-70.101-156.225-156.215-156.225c-86.173,0-156.254,70.101-156.254,156.225c0,86.153,70.081,156.225,156.254,156.225     C406.605,358.135,476.725,288.064,476.725,201.91z'],
        ['0 0 684.234 684.234', 'M342.112,0C223.053,0,126.563,96.5,126.563,215.549c0,119.04,215.549,468.685,215.549,468.685     s215.559-349.645,215.559-468.685C557.681,96.5,461.181,0,342.112,0z M342.112,382.326c-91.957,0-166.767-74.8-166.767-166.777     s74.81-166.796,166.767-166.796c91.986,0,166.826,74.82,166.826,166.796S434.098,382.326,342.112,382.326z M455.045,168.76     v-14.851l-1.114-4.143c-0.313-0.498-5.256-9.145-15.193-18.055c-9.878-8.813-25.227-17.997-45.421-17.997     c-20.185,0-35.358,9.194-45.089,18.094c-2.98,2.745-5.51,5.462-7.601,7.924c-2.091-2.501-4.739-5.208-7.787-8.012     c-9.897-8.813-25.266-17.997-45.47-17.997c-20.166,0-35.329,9.194-45.089,18.094c-9.712,8.91-14.489,17.596-14.763,18.114     l-1.036,3.986v14.851h-7.455v123.944h246.237V168.76H455.045L455.045,168.76z M263.101,267.556     c6.585-3.889,14.558-6.722,24.24-6.732c9.672-0.01,17.801,2.833,24.543,6.732H263.101z M332.43,261.879     c-9.897-8.744-25.08-17.704-45.06-17.704h-0.029c-19.579,0-34.45,8.705-44.151,17.303V156.264h-0.01     c1.72-2.638,5.442-7.806,11.07-12.789c7.738-6.79,18.612-13.072,33.111-13.072c14.997,0,26.34,6.722,34.323,13.795     c3.976,3.547,7.083,7.122,9.018,9.77l1.729,2.384C332.43,156.352,332.43,261.879,332.43,261.879z M369.039,267.556     c6.614-3.889,14.558-6.722,24.25-6.732c9.633-0.01,17.801,2.833,24.543,6.732H369.039z M438.368,261.879     c-9.887-8.744-25.109-17.704-45.031-17.704c-19.628-0.039-34.498,8.705-44.171,17.303V156.264h-0.01     c1.69-2.599,5.403-7.806,11.05-12.789c7.797-6.79,18.612-13.072,33.121-13.072c14.9,0,26.292,6.722,34.401,13.795     c3.898,3.547,6.937,7.122,8.959,9.77l1.7,2.384v105.528H438.368z'],
        ['0 0 631.934 631.934', 'M216.429,165.155c-2.657,1.065-6.058-1.231-7.621-5.129c-1.495-3.889-0.616-7.914,2.042-8.93     c2.667-1.084,6.067,1.251,7.611,5.129C219.995,160.123,219.067,164.119,216.429,165.155z M229.794,156.274     c3.361-1.319,4.514-6.419,2.55-11.333c-1.934-4.953-6.282-7.875-9.624-6.507c-3.361,1.309-4.514,6.399-2.579,11.353     C222.095,154.711,226.394,157.622,229.794,156.274z M272.558,248.533c-8.285-16.951-7.572-30.307-7.699-33.209l-0.186-4.66     v-0.547c0-6.448,6.312-12.037,12.76-12.037c4.543,0,3.879,2.462,10.552,1.426c6.644-1.006,16.697-14.518,16.697-23.966     c0-16.248-7.855-24.689-24.113-24.689c0,0-11.841,0.762-15.847,1.593l-26.506,5.344c-15.212,3.107-25.041,17.918-21.963,33.131     c1.514,7.455,11.04,24.621,11.881,28.255l14.489,40.81c1.954,8.441,3.449,27.737,4.983,37.224     c3.332,20.693,19.667,35.241,36.531,32.515c16.873-2.677,21.924-12.301,20.527-36.57     C299.68,261.108,280.853,265.455,272.558,248.533z M245.798,149.161c4.035-0.938,6.145-6.419,4.758-12.262     c-1.378-5.823-5.725-9.799-9.741-8.862c-4.016,0.938-6.126,6.439-4.729,12.262C237.454,146.142,241.792,150.148,245.798,149.161z      M285.768,146.679c6.771,0,12.222-8.002,12.222-17.879c0-9.868-5.462-17.879-12.222-17.879c-6.732,0-12.213,8.021-12.213,17.879     C273.555,138.668,279.036,146.679,285.768,146.679z M263.433,144.862c4.758-0.703,7.845-6.878,6.81-13.815     c-0.967-6.976-5.628-12.017-10.376-11.372c-4.758,0.664-7.797,6.878-6.829,13.815     C254.063,140.466,258.704,145.536,263.433,144.862z M386.195,113.989c3.986,0.948,8.353-3.009,9.692-8.842     c1.397-5.862-0.703-11.353-4.709-12.32c-3.986-0.938-8.344,3.029-9.731,8.901C380.069,107.55,382.219,113.051,386.195,113.989z      M393.796,122.616l-26.536-5.393l-15.828-1.573c-16.277,0-24.103,8.412-24.103,24.689c0,9.467,10.044,22.95,16.697,23.966     c6.624,1.036,5.999-1.387,10.552-1.387c6.439,0,12.74,5.549,12.74,11.998v0.576l-0.147,4.641     c-0.186,2.892,0.537,16.218-7.728,33.17c-8.314,16.922-27.122,12.594-32.124,44.64c-1.397,24.25,3.635,33.893,20.537,36.589     c16.854,2.697,33.189-11.841,36.521-32.505c1.534-9.536,2.999-28.812,4.953-37.293l14.479-40.79     c0.85-3.595,10.405-20.762,11.92-28.255C418.837,140.466,408.979,125.683,393.796,122.616z M421.172,115.903     c-2.697-1.055-6.106,1.241-7.65,5.129c-1.524,3.898-0.616,7.894,2.061,8.949c2.648,1.016,6.048-1.251,7.552-5.139     C424.699,120.964,423.82,116.959,421.172,115.903z M402.208,121.111c3.371,1.309,7.66-1.593,9.624-6.556     c1.944-4.895,0.762-9.985-2.56-11.353c-3.38-1.319-7.709,1.622-9.672,6.556C397.655,114.672,398.838,119.743,402.208,121.111z      M515.034,199.057c0,109.953-199.038,432.877-199.038,432.877S116.9,309.011,116.9,199.057C116.9,89.123,206.043,0,315.996,0     C425.94,0,515.034,89.114,515.034,199.057z M470.023,199.048c0-84.922-69.095-154.027-154.027-154.027     c-84.912,0-154.046,69.095-154.046,154.027c0,84.922,69.134,154.056,154.046,154.056     C400.919,353.084,470.023,283.97,470.023,199.048z M346.235,111.478c6.741,0,12.213-8.021,12.213-17.87     c0-9.926-5.471-17.879-12.213-17.879c-6.771,0-12.232,7.963-12.232,17.879C333.983,103.466,339.474,111.478,346.235,111.478z      M368.54,109.641c4.758,0.664,9.389-4.426,10.386-11.353c0.987-6.947-2.061-13.112-6.8-13.776     c-4.739-0.703-9.379,4.387-10.386,11.333C360.754,102.811,363.773,108.996,368.54,109.641z'],
        ['0 0 406.38 406.38', 'M240.815,130.51c0,20.693-14.567,32.525-38.446,32.525c-6.595,0-12.066-0.459-16.375-1.602     v-59.588c3.4-0.909,9.985-1.593,18.641-1.593C226.238,100.252,240.815,110.022,240.815,130.51z M310.525,163.631     c0,59.197-48.186,107.374-107.364,107.374c-59.207,0-107.364-48.167-107.364-107.374c0-59.197,48.167-107.355,107.364-107.355     C262.358,56.276,310.525,104.433,310.525,163.631z M260.59,129.367c0-13.639-5.237-24.787-13.424-32.066     c-9.096-8.197-23.419-12.74-42.969-12.74c-15.906,0-28.441,1.358-37.996,2.951v151.477h19.804v-61.405     c4.543,1.133,9.985,1.358,15.906,1.358c19.335,0,36.169-5.686,46.848-16.824C256.486,154.154,260.59,143.231,260.59,129.367z      M360.734,0v315.088h-99.157L203.18,406.38l-58.416-91.292H45.646V0H360.734z M320.911,163.631     c0-64.933-52.818-117.74-117.74-117.74c-64.933,0-117.76,52.808-117.76,117.74s52.818,117.76,117.76,117.76     C268.093,281.391,320.921,228.573,320.911,163.631z'],
        ['0 0 425.305 425.305', 'M47.781,0v329.743h103.74l61.132,95.562l61.142-95.562h103.73V0H47.781z M267.16,179.732     l12.858,75.045l-67.375-35.427l-67.385,35.427l12.867-75.045l-54.518-53.14l75.338-10.952l33.697-68.274l33.688,68.274     l75.338,10.952L267.16,179.732z'],
        ['0 0 444.406 444.406', 'M222.208,0c-66.672,0-120.906,54.234-120.906,120.916c0,48.704,28.959,90.736,70.55,109.875     l46.076,213.615h8.559l46.076-213.615c41.582-19.15,70.541-61.171,70.541-109.875C343.104,54.234,288.889,0,222.208,0z      M222.208,215.823c-52.329,0-94.917-42.578-94.917-94.917c0-52.349,42.578-94.907,94.917-94.907s94.907,42.569,94.907,94.907     S274.537,215.823,222.208,215.823z'],
        ['0 0 633.136 633.136', 'M411.158,185.741c0,12.965-10.493,23.468-23.487,23.468c-12.936,0-23.419-10.503-23.419-23.468     c0-12.985,10.483-23.468,23.419-23.468C400.655,162.273,411.158,172.766,411.158,185.741z M516.041,199.448     c0,110.188-199.487,433.688-199.487,433.688s-199.458-323.5-199.458-433.688C117.095,89.299,206.414,0,316.553,0     C426.702,0,516.05,89.299,516.041,199.448z M428.412,305.493H204.714c28.158,29.643,67.824,48.274,111.839,48.274     C360.597,353.778,400.293,335.146,428.412,305.493z M439.306,292.665c19.716-25.92,31.558-58.162,31.558-93.227     c0-85.088-69.192-154.339-154.32-154.339c-85.098,0-154.339,69.251-154.339,154.349c0,35.065,11.92,67.307,31.655,93.237h130.344     l1.593-4.817c1.876-6.468,6.009-28.031,6.927-34.811c1.798-13.62,1.524-27.62-1.319-41.406     c-2.843-13.766-8.373-27.308-16.248-39.784c-4.455-7.113-9.809-13.825-15.662-20.195c-3.976,2.56-9.438,6.321-11.49,7.875     c-5.54,4.221-10.464,9.379-14.421,15.359c-3.908,5.999-6.829,12.838-8.481,20.166c-1.651,7.328-2.042,15.075-1.466,22.882     c-2.374-7.445-3.889-15.329-3.967-23.448c-0.147-8.099,1.163-16.453,4.025-24.416c2.853-7.963,7.201-15.505,12.643-22.227     l0.899-1.026c-3.634-0.723-7.328-1.397-9.057-1.612c-6.937-0.909-14.069-0.791-21.084,0.684     c-7.015,1.407-13.893,4.221-20.244,8.246c-6.36,3.986-12.154,9.204-17.254,15.095c3.605-6.927,8.099-13.522,13.756-19.355     c5.637-5.833,12.486-10.835,20.107-14.431c7.689-3.634,16.111-5.862,24.709-6.78c4.279-0.479,8.637-0.606,13.004-0.42     c2.198,0.078,4.397,0.283,6.595,0.557l2.11,0.293l0.948-2.706c0.782-2.091,1.641-4.113,2.589-6.106     c1.876-3.957,3.996-7.758,6.399-11.333c4.826-7.162,10.708-13.59,17.528-18.641c6.722-5.12,14.313-8.842,22.071-11.118     c7.816-2.316,15.759-3.205,23.546-3.166c-7.601,1.778-14.87,4.445-21.397,8.246c-6.487,3.722-12.135,8.539-16.717,14.079     c-4.533,5.51-7.933,11.754-10.386,18.309c-0.41,1.114-1.065,3.146-1.749,5.442c3.253-0.918,6.526-1.729,9.878-2.257     c8.52-1.378,17.235-1.426,25.559,0.059c8.344,1.466,16.258,4.465,23.224,8.578c7.025,4.133,13.082,9.34,18.378,15.075     c-6.478-4.357-13.453-7.855-20.605-10.044c-7.171-2.189-14.558-3.058-21.709-2.609c-7.122,0.42-14.089,2.169-20.498,4.895     c-2.794,1.153-10.601,4.963-14.577,7.132c12.594,15.232,33.297,48.343,39.511,61.64c7.132,15.046,11.548,31.587,13.317,48.45     c0.918,8.451,1.221,17.01,0.84,25.588c-0.195,4.309-0.528,8.627-1.065,13.004l-0.195,1.055h74.537L439.306,292.665     L439.306,292.665z'],
        ['0 0 684.234 684.234', 'M342.122,0C223.063,0,126.563,96.49,126.563,215.549c0,119.049,215.559,468.685,215.559,468.685     s215.549-349.635,215.549-468.685C557.681,96.49,461.162,0,342.122,0z M342.122,382.326c-91.976,0-166.777-74.81-166.777-166.777     s74.8-166.786,166.777-166.786c91.957,0,166.777,74.82,166.777,166.786S434.079,382.326,342.122,382.326z M417.088,276.72     V141.394h26.165V276.72H417.088z M447.552,135.698H236.653l103.915-68.508L447.552,135.698z M240.971,276.72V141.394h26.174     V276.72H240.971z M296.016,276.72V141.394h26.155V276.72H296.016z M360.05,276.72V141.394h26.155V276.72H360.05z      M232.872,286.647h218.5v24.347h-218.5V286.647z'],
        ['0 0 465.978 465.978', 'M52.358,0v361.291h113.637l66.984,104.687l66.974-104.687H413.62V0H52.358z M346.538,218.49     h-71.127v71.146h-84.873V218.49h-71.127v-84.854h71.127V62.49h84.873v71.146h71.127V218.49z'],
        ['0 0 420.299 420.299', 'M331.849,139.1c-2.9,0-6.1,0.2-9.6,0.4c-3.1,0.2-6.301,0.3-9.6,0.4      c-1.6,21-9.701,40.2-22.201,55.6c6.301,1,13.9,1.2,22.602,1.2c19.799,0,33.699-23.3,33.699-44.3      C346.749,141,342.149,139.1,331.849,139.1z M47.249,0v325.9h102.5l60.4,94.399L270.55,325.9h102.5V0H47.249z M222.448,75.2      c13.101-15.8,0.701-28.8,0.201-29.3l3.5-3.5c0.199,0.2,16.199,16.6,0.199,35.9c-13.1,15.8-0.699,28.8-0.199,29.3l-3.5,3.5      C222.448,110.9,206.449,94.5,222.448,75.2z M201.749,75.2c13.1-15.8,0.7-28.8,0.1-29.3l3.5-3.5c0.2,0.2,16.099,16.6,0.2,35.9      c-13.1,15.8-0.7,28.8-0.2,29.3l-3.5,3.5C201.649,110.9,185.649,94.5,201.749,75.2z M182.649,75.2c13.1-15.8,0.7-28.8,0.2-29.3      l3.5-3.5c0.2,0.2,16.2,16.6,0.2,35.9c-13.1,15.8-0.7,28.8-0.2,29.3l-3.5,3.5C182.549,110.9,166.649,94.5,182.649,75.2z       M312.55,206.6c-10,0-21,0-30.301-2.3c-8,8.299-17.301,15.4-27.6,20.9c35.299,2.3,59.4,6.8,59.4,12.101      c0,7.6-50,13.699-111.701,13.699c-61.7,0-111.7-6.1-111.7-13.699c0-5.201,24-9.801,59.1-12.101c-34.3-18.5-57.7-54.6-57.7-96.1      c0,0,237.399,0,240.8,0c11.701,0,23.701,2.6,23.701,22C356.55,177.9,338.948,206.6,312.55,206.6z M157.949,229.1L157.949,229.1L157.949,229.1L157.949,229.1z M202.349,238.4c-15.8,0-30.8-3.4-44.4-9.301l0,0c-27,1.601-45.3,4.701-45.3,8.201      c0,5.199,40.2,9.399,89.7,9.399s89.701-4.2,89.701-9.399c0-3.5-18.301-6.5-45.301-8.201      C233.249,235.1,218.249,238.4,202.349,238.4z'],
        ['0 0 684.263 684.263', 'M480.291,282.27H411.92l-2.345-4.465h63.301c0,0-30.297-56.178-52.954-75.856     c-1.475-1.299-4.084,46.613-6.048-3.38c-1.974-49.984-6.507-5.139-7.162-2.999c0,0-2.081,19.081-6.136,1.045     c-0.703-19.482-13.033,10.532-13.033,10.532l-7.591,14.518l-4.084-7.787l32.31-68.372L480.291,282.27z M557.681,215.54     c0,119.079-215.549,468.724-215.549,468.724S126.582,334.618,126.582,215.54C126.582,96.5,223.082,0,342.132,0     S557.681,96.5,557.681,215.54z M508.918,215.53c0-91.918-74.8-166.757-166.786-166.757c-91.976,0-166.796,74.839-166.786,166.757     c0,91.976,74.82,166.796,166.786,166.796C434.118,382.326,508.918,307.506,508.918,215.53z M403.078,284.273l2.345,4.494H206.873     l93.784-198.53l68.714,130.168l4.123,7.767L403.078,284.273z M394.656,282.26c0,0-11.031-20.459-26.204-44.503l-4.191-6.566     c-14.352-22.217-31.548-46.086-46.516-59.08c-2.149-1.847-5.901,67.688-8.774-4.885c-2.882-72.543-9.389-7.416-10.366-4.348     c0,0-3.068,27.747-8.959,1.485c-1.026-28.226-18.925,15.32-18.925,15.32l-53.58,102.567v0.01H394.656z'],
        ['0 0 291.014 291.014', 'M0,180.171l3.166-2.638c0.147,0.156,13.659,16.16,33.219,17.01     c1.68,0.088,3.322,0.049,5.002-0.137l35.993-20.771l23.917-13.805l38.905-22.491l6.517-5.843l-25.803-44.65     c-3.302-5.706-1.339-12.955,4.328-16.267c5.686-3.293,12.994-1.348,16.297,4.357l23.321,40.321l6.624,11.49l32.798,56.784     l-0.117,0.078l0.156-0.049c0,0,1.749,3.527,4.768,1.27c2.97-2.257,6.39-5.286,9.653-8.647     c15.652-15.808,30.571-22.755,44.386-20.644c18.143,2.726,27.366,20.068,27.747,20.801l-3.683,1.876     c-0.098-0.147-8.686-16.16-24.709-18.583c-12.418-1.856-26.145,4.69-40.781,19.472c-2.56,2.628-5.09,4.934-7.65,7.025     c-11.05,9.233-21.641,13.981-31.694,14.04c-1.563,0-3.068-0.117-4.543-0.342l-0.459-0.02c-2.364-0.381-4.563-0.987-6.605-1.749     c-12.936-4.924-19.941-16.814-21.006-18.788c-1.661-1.778-15.994-16.433-35.515-16.961c-12.994-0.391-25.588,5.589-37.498,17.596     c-12.936,13.121-26.516,19.433-40.566,18.847l-1.925-0.215C13.913,196.683,0.557,180.865,0,180.171z M227.674,155.98     c12.31-7.122,16.502-22.823,9.428-35.153c-7.122-12.281-22.843-16.472-35.153-9.379c-12.252,7.122-16.502,22.843-9.409,35.153     C199.663,158.872,215.422,163.073,227.674,155.98z M263.257,177.474c-13.815-2.14-28.714,4.885-44.386,20.635     c-14.616,14.831-28.314,21.377-40.761,19.491c-16.082-2.403-24.631-18.456-24.689-18.612l-0.303-0.42     c-0.625-0.703-16.14-17.899-38.602-18.485c-14.177-0.381-27.865,5.921-40.585,18.808c-12.076,12.242-24.689,18.133-37.42,17.557     c-19.56-0.83-33.052-16.854-33.199-17.039l-3.185,2.697c0.576,0.703,14.772,17.567,36.198,18.524     c14.03,0.616,27.61-5.725,40.566-18.788c11.89-12.008,24.484-18.045,37.459-17.606c19.54,0.508,33.893,15.212,35.515,16.912     c1.26,2.286,10.435,17.928,27.63,20.547c1.641,0.244,3.283,0.352,5.012,0.342c12.408-0.059,25.598-7.122,39.354-20.967     c14.616-14.821,28.324-21.377,40.781-19.491c16.023,2.394,24.611,18.446,24.67,18.602l3.703-1.954     C290.623,197.523,281.43,180.21,263.257,177.474z'],
        ['0 0 270.565 270.565', 'M270.565,227.068h-67.649l-2.316-4.397h62.637c0,0-29.985-55.563-52.407-75.084     c-1.436-1.28-4.025,46.125-5.989-3.332c-1.954-49.466-6.439-5.09-7.083-2.98c0,0-2.071,18.895-6.067,1.055     c-0.723-19.296-12.897,10.415-12.897,10.415l-7.533,14.372l-4.035-7.689l31.958-67.649L270.565,227.068z M194.153,229.071     l2.335,4.426H0L92.797,37.068l67.991,128.81l4.064,7.67L194.153,229.071z M185.809,227.049c0,0-10.933-20.224-25.93-44.044     l-4.143-6.507c-14.196-21.944-31.186-45.588-46.017-58.416c-2.14-1.817-5.862,66.955-8.686-4.846     c-2.863-71.791-9.291-7.337-10.268-4.299c0,0-3.029,27.454-8.852,1.485c-1.016-27.952-18.72,15.134-18.72,15.134L10.161,227.049     H136.89H185.809L185.809,227.049z'],
        ['0 0 212.14 212.14', 'M212.14,66.427h-66.437V0.01H66.437v66.418H0v79.265h66.437v66.437h79.265v-66.437h66.437     L212.14,66.427L212.14,66.427z'],
        ['0 0 249.149 249.149', 'M50.658,138.165C22.677,138.165,0,160.832,0,188.823s22.677,50.658,50.658,50.658     s50.668-22.667,50.668-50.658S78.64,138.165,50.658,138.165z M50.658,230.297c-22.862,0-41.445-18.622-41.445-41.465     s18.593-41.435,41.445-41.435S92.113,166,92.113,188.833C92.113,211.685,73.52,230.297,50.658,230.297z M198.471,138.165     c-27.972,0-50.658,22.667-50.658,50.658s22.677,50.658,50.658,50.658s50.678-22.667,50.678-50.658     S226.463,138.165,198.471,138.165z M198.471,230.297c-22.843,0-41.425-18.622-41.425-41.465s18.583-41.435,41.425-41.435     c22.862,0,41.465,18.602,41.465,41.435C239.945,211.685,221.333,230.297,198.471,230.297z M140.847,58.45     c13.473,0,24.386-10.894,24.386-24.396c0-13.463-10.913-24.386-24.386-24.386c-13.483,0-24.406,10.923-24.406,24.386     C116.441,47.547,127.364,58.45,140.847,58.45z M119.763,168.286v41.787h23.106v-57.107h-0.039l0.039-0.029l-40.556-31.284     l21.172-29.418l60.341,30.346l8.588-17.117l-57.605-28.969l6.048-8.383L115.62,49.94l-53.795,74.771l22.129,15.935     L119.763,168.286z M146.201,211.861h-22.862c-3.81,0-6.908,3.097-6.908,6.888c0,3.84,3.097,6.927,6.908,6.927h22.862     c3.81,0,6.908-3.087,6.908-6.927C153.108,214.968,150.011,211.861,146.201,211.861z'],
        ['0 0 624.138 624.138', 'M312.064,0C203.478,0,115.439,88.029,115.439,196.566c0,108.634,196.625,427.572,196.625,427.572      S508.698,305.2,508.698,196.566C508.698,88.029,420.698,0,312.064,0z M312.074,348.678      c-83.701,0-151.809-68.108-151.809-151.809c0-83.721,68.118-151.809,151.809-151.809c83.701,0,151.809,68.088,151.809,151.809      C463.883,280.57,395.775,348.678,312.074,348.678z M372.658,122.41l20.078,20.498v106.006c0,1.729-0.352,2.97-1.094,3.703      c-1.7,1.671-5.921,1.563-8.109,1.544c-4.719,0-8.275-0.938-9.956-2.609c-1.075-1.133-1.133-2.276-1.075-2.638V145.888H354.74      V95.2h-98.806v182.409H234.42v25.344h141.882v-25.344H354.74V156.01h7.591v92.475c-0.039,0.547-0.274,5.452,3.664,9.78      c3.722,3.996,9.565,6.028,17.42,6.028l1.514,0.02c3.742,0,9.682-0.449,13.805-4.484c2.745-2.697,4.133-6.36,4.133-10.933      V138.746l-22.989-23.448L372.658,122.41z M342.039,166.151h-70.922v-50.668h70.922V166.151z'],
        ['0 0 394.793 394.793', 'M44.337,0v306.109h96.305l56.745,88.684l56.745-88.684h96.324V0H44.337z M305.757,239.144     c-2.55,4.221-7.113,6.8-12.027,6.8H101.229c-5.061,0-9.731-2.716-12.222-7.122c-2.521-4.426-2.443-9.829,0.147-14.177     l96.549-171.339c2.56-4.26,7.142-6.859,12.095-6.859l0.391,0.01c5.071,0.127,9.702,3.009,12.056,7.523l95.943,171.359     C308.473,229.667,308.327,234.914,305.757,239.144z M101.229,231.846H293.73L197.797,60.497L101.229,231.846z M197.553,215.794     h-0.303c-8.09,0-13.678-6.067-13.678-14.137c0-8.383,5.755-14.147,13.981-14.147c8.246,0,13.678,5.764,13.844,14.147     C211.397,209.726,205.955,215.794,197.553,215.794z M206.414,179.751h-17.704l-3.429-70.384h24.543L206.414,179.751z'],
        ['0 0 658.265 658.265', 'M330.163,280.296c1.505,0.01,2.931-0.059,4.387-0.107c-0.244,6.888-0.283,8.06-0.488,14.108     c-1.368,0.059-2.736,0.117-4.162,0.117c-1.407,0-2.755-0.059-4.094-0.117l-0.703-14.186     C326.763,280.199,328.434,280.286,330.163,280.296z M536.489,207.362c0,114.555-207.372,450.903-207.372,450.903     S121.775,321.917,121.775,207.362C121.775,92.856,214.611,0,329.118,0C443.663,0,536.489,92.856,536.489,207.362z      M489.573,207.362c0-88.449-71.957-160.426-160.455-160.426c-88.469,0-160.475,71.977-160.465,160.426     c0,88.479,72.006,160.465,160.465,160.465C417.606,367.827,489.573,295.85,489.573,207.362z M424.787,174.964     c-35.505-35.505-74.038,0-74.038,0h0.02v6.048h-9.067v-6.272c-3.898,1.553-8.119,2.462-12.564,2.462     c-4.797,0-9.34-1.016-13.483-2.804v6.605h-8.168v19.99h8.168v8.314h5.921l1.602,32.027c1.856,0.088,3.703,0.186,5.628,0.195     c2.433,0.02,4.807-0.049,7.113-0.156c0.44-12.574,1.094-31.235,1.114-32.066h4.66v-8.314h9.057v9.076     c31.929,14.724,55.915,10.19,55.915,10.19c54.361,0,55.915-45.304,55.915-45.304     C447.444,190.069,424.787,174.964,424.787,174.964z M303.344,181.012h4.123v-6.048h0.01c0,0-38.524-35.505-74.038,0     c0,0-22.657,15.105-37.762,0c0,0,1.514,45.304,55.895,45.304c0,0,23.976,4.533,55.895-10.19v-9.076h-4.123L303.344,181.012     L303.344,181.012z M315.645,170.802v3.595c-12.066-5.227-20.498-17.215-20.498-31.177c0-18.778,15.183-34.02,33.981-34.02     c18.778,0,33.99,15.232,33.99,34.02c0,14.304-8.881,26.506-21.416,31.509v-3.937L315.645,170.802L315.645,170.802z      M318.458,142.527c0,6.517,5.266,11.763,11.773,11.763c6.478,0,11.754-5.256,11.754-11.763c0-6.497-5.276-11.763-11.754-11.763     C323.725,130.764,318.458,136.03,318.458,142.527z M324.223,262.563l0.801,16.111c1.573,0.078,3.156,0.156,4.807,0.156     c1.632,0.01,3.214-0.049,4.778-0.107c0.274-7.933,0.283-8.197,0.567-16.14c-1.641,0.059-3.253,0.147-4.944,0.147     C328.17,262.729,326.196,262.651,324.223,262.563z M326.499,308.063l0.459,9.145c0.997,0.049,2.022,0.088,3.068,0.088     c1.114,0,2.189-0.039,3.244-0.098c0.068-2.071,0.215-6.224,0.322-9.184c-1.407,0.068-2.843,0.127-4.318,0.127     C328.317,308.141,327.418,308.092,326.499,308.063z M341.985,242.876c12.408,1.368,21.279,4.729,21.279,8.783     c0,4.699-12.135,8.598-28.04,9.34c-0.029,0.782-0.029,0.811-0.059,1.593c1.68-0.059,3.322-0.137,4.924-0.264v0.088     c11.529,1.27,19.814,4.406,19.785,8.09c-0.02,4.27-10.991,7.66-25.275,8.217c-0.029,0.723-0.029,0.752-0.049,1.466     c1.593-0.049,3.146-0.117,4.66-0.225c9.975,1.055,17.127,3.752,17.127,6.947c0,3.459-8.129,6.302-19.189,7.191     c-0.117-0.01-0.225-0.029-0.352-0.039l-0.029,0.068c-0.889,0.068-1.788,0.127-2.716,0.166c-0.02,0.547-0.029,0.743-0.049,1.28     c1.378-0.049,2.716-0.117,4.025-0.205c7.435,0.967,12.633,3.078,12.633,5.53c0,2.96-7.298,5.413-17.059,6.009     c-0.01,0.371-0.029,0.743-0.039,1.094c0.87-0.039,1.7-0.107,2.53-0.176c6.497,0.664,11.187,2.452,11.187,4.572     c0,2.364-6.048,4.357-14.04,4.797c-0.01,0.186-0.02,0.645-0.029,0.821c9.692-0.42,17.137-2.775,17.137-5.618     c0-2.179-4.035-4.035-10.181-5.002c8.49-1.163,14.401-3.625,14.401-6.487c0.01-2.57-4.543-4.768-11.568-6.028     c10.63-1.378,18.065-4.397,18.065-7.972c0.01-3.283-6.136-6.116-15.476-7.591c11.597-1.563,19.638-4.866,19.658-8.783     c0.01-3.801-7.64-7.113-18.768-8.842c13.395-1.749,22.735-5.569,22.735-10.034c0.01-4.182-7.709-7.748-19.482-9.624     c14.421-2.032,24.406-6.204,24.445-11.138c0.02-5.813-13.649-10.747-32.261-12.398v1.964     c14.753,1.612,25.373,5.657,25.354,10.376c-0.039,5.354-13.561,9.692-31.382,10.532c-0.029,0.733-0.039,1.104-0.068,1.856     C337.96,243.16,339.982,243.043,341.985,242.876z M325.874,295.577l0.567,11.412c0.86,0.029,1.71,0.078,2.599,0.078     c1.573,0,3.107-0.049,4.582-0.147c0.137-3.771,0.225-6.556,0.391-11.333c-1.26,0.049-2.511,0.107-3.81,0.107     C328.727,295.694,327.301,295.626,325.874,295.577z M329.86,261.156c1.837,0,3.615-0.068,5.364-0.156     c0.303-8.676,0.371-10.552,0.616-17.762c-2.179,0.078-4.348,0.166-6.614,0.147c-2.052-0.01-3.996-0.117-5.97-0.205l0.889,17.801     C326.001,261.078,327.896,261.156,329.86,261.156z M326.998,318.019l0.772,15.456h4.934c0,0,0.42-12.125,0.537-15.456     c-0.987,0.039-1.983,0.088-3.009,0.088C329.108,318.117,328.053,318.068,326.998,318.019z M312.733,312.411     c0-2.052,4.357-3.732,10.483-4.494c1.065,0.078,2.159,0.117,3.273,0.147l-0.059-1.075c-10.718-0.371-19.042-2.911-19.042-6.077     c0-2.55,5.667-4.739,13.581-5.657c1.583,0.137,3.205,0.254,4.895,0.313l-0.059-1.26c-12.643-0.557-22.344-3.615-22.344-7.396     c0-3.175,7.093-5.872,17.059-6.937v-0.176c1.495,0.137,3.009,0.244,4.572,0.313l-0.068-1.446     c-14.255-0.723-25.158-4.289-25.129-8.52c0-3.634,8.08-6.683,19.384-7.816v-0.088c1.622,0.137,3.253,0.254,4.944,0.322     l-0.078-1.573c-15.72-0.782-27.737-4.66-27.737-9.33c0-4.055,8.881-7.435,21.318-8.813c1.807,0.147,3.644,0.254,5.53,0.332     l-0.088-1.837c-18.544-0.899-32.779-5.501-32.75-10.982c0.02-4.621,10.376-8.5,24.865-10.005V218.5     c-17.85,1.583-30.854,6.204-30.883,11.841c-0.029,5.149,10.786,9.663,26.311,11.763c-11.617,1.905-19.531,5.442-19.531,9.545     c0,4.387,9.096,8.148,22.178,9.946c-10.767,1.622-18.143,4.768-18.143,8.529c-0.039,4.006,8.344,7.494,20.371,9.145     c-9.653,1.475-16.267,4.328-16.267,7.64c0,3.488,7.113,6.439,17.332,7.855c-7.523,1.221-12.672,3.507-12.672,6.145     c0,2.999,6.419,5.569,15.544,6.663c-5.667,1.006-9.477,2.755-9.477,4.826c0,2.824,7.347,5.168,16.941,5.608l-0.039-0.811     C318.888,316.788,312.733,314.795,312.733,312.411z'],
        ['0 0 465.959 465.959', 'M242.383,204.587h33.385v33.385h-33.385V204.587z M242.383,147.51h33.385v33.404h-33.385V147.51z       M190.152,147.51h33.394v33.404h-33.394V147.51z M242.647,89.944h33.394v33.385h-33.394V89.944z M190.445,89.944h33.385v33.385      h-33.385V89.944z M52.334,0v361.291H166.01l66.965,104.668l66.974-104.668h113.676V0H52.334z M325.586,303.139H140.373v-23.683      h62.461v-2.706h-25.852V71.615h100.164V54.4H176.972V40.917h112.015v235.842h-24.767v2.697h61.366V303.139L325.586,303.139z       M190.152,204.587h33.394v33.385h-33.394V204.587z M202.814,255.783h61.396v20.977h-61.396V255.783z'],
        ['0 0 438.973 438.973', 'M49.32,0v340.344h107.061l63.105,98.63l63.096-98.63h107.071V0H49.32z'],
        ['0 0 722.982 722.982', 'M361.491,0C235.903,0,134.074,101.829,134.074,227.417s227.417,495.565,227.417,495.565      s227.417-368.845,227.417-495.565C588.908,101.829,487.08,0,361.491,0z M361.491,393.736      c-102.96,0-186.686-83.725-186.686-186.685S258.532,21.497,361.491,21.497s185.554,83.726,185.554,185.554      S463.32,393.736,361.491,393.736z M482.554,186.686v-31.68c0-4.526-3.395-6.789-6.789-6.789c-3.394,0-6.788,3.394-6.788,6.789      v24.891l-38.469-20.366V126.72c0-4.526-3.395-6.789-6.789-6.789c-3.394,0-6.788,3.394-6.788,6.789v26.022l-33.943-18.103h-2.263      l2.263-55.44c0-13.577-11.313-23.76-23.76-23.76c-13.577,0-23.76,11.314-23.76,23.76l2.263,55.44h-3.394l-24.892,13.577V126.72      c0-4.526-3.394-6.789-6.789-6.789c-3.395,0-6.789,3.394-6.789,6.789v29.417l-31.68,16.971v-23.76      c0-4.526-3.394-6.789-6.789-6.789c-4.525,0-6.789,3.394-6.789,6.789v31.68l-38.468,21.497v44.125l123.326-50.914h2.263      l3.395,83.726c0,4.526,0,9.051,1.131,13.577l-40.731,22.628l-5.657,21.497l53.177-11.314h18.103l54.309,9.051l-4.525-21.497      l-45.257-23.76c1.131-3.394,1.131-7.92,1.131-12.446l3.395-83.726h4.525l132.377,53.177v-42.994L482.554,186.686z'],
        ['0 0 420.557 420.557', 'M47.244,0v326.069H149.83l60.458,94.487l60.458-94.487h102.567V0H47.244z M330.95,247.4     L330.95,247.4h-16.707V116.021h-4.69V247.4H117.208V116.9h-4.69v130.5H96.192V94.36h70.668     c3.273-22.891,22.891-40.507,46.682-40.507c23.8,0,43.399,17.616,46.682,40.507h70.697L330.95,247.4L330.95,247.4z      M235.114,94.37h-43.096c1.036-11.07,10.22-19.755,21.543-19.755S234.069,83.31,235.114,94.37z'],
        ['0 0 235.793 235.793', 'M15.701,235.793h94.321V0H57.624L15.701,235.793z M178.159,0h-52.397v235.793h94.331L178.159,0z'],
        ['0 0 684.253 684.253', 'M365.121,160.25c0,13.434-10.874,24.289-24.289,24.289c-13.405,0-24.269-10.855-24.269-24.289     c0-13.395,10.864-24.269,24.269-24.269C354.247,135.981,365.121,146.855,365.121,160.25z M557.681,215.549     c0,119.079-215.559,468.704-215.559,468.704S126.572,334.628,126.572,215.549C126.572,96.519,223.072,0,342.122,0     C461.181,0,557.681,96.519,557.681,215.549z M508.899,215.549c0-91.957-74.81-166.757-166.777-166.757     c-91.976,0-166.786,74.8-166.786,166.757c0,91.976,74.81,166.796,166.786,166.796     C434.088,382.346,508.899,307.526,508.899,215.549z M411.47,160.24c0,8.735-1.661,17.02-4.543,24.748     c-9.282,27.532-70.57,168.838-70.57,168.838s-57.683-154.105-62.695-171.74c-2.228-6.868-3.459-14.216-3.459-21.846     c0-38.993,31.626-70.629,70.629-70.629C379.844,89.612,411.47,121.248,411.47,160.24z M385.902,160.504     c0-24.885-20.166-45.05-45.07-45.05c-24.885,0-45.05,20.166-45.05,45.05s20.166,45.07,45.05,45.07     C365.736,205.574,385.902,185.389,385.902,160.504z'],
        ['0 0 684.253 684.253', 'M276.496,111.536l-1.768-4.924c16.463-5.989,34.518,11.636,41.797,19.902l-9.926-44.083h71.097     l-13.581,45.207h-47.297l-3.263,3.42C307.565,124.149,290.545,106.456,276.496,111.536z M557.671,215.569     c0,119.059-215.52,468.685-215.52,468.685S126.582,334.628,126.582,215.569C126.582,96.539,223.102,0,342.141,0     C461.152,0,557.671,96.539,557.671,215.569z M508.908,215.569c0-91.976-74.82-166.777-166.757-166.777     c-91.976,0-166.835,74.8-166.835,166.777c0,91.918,74.859,166.796,166.835,166.796     C434.079,382.365,508.908,307.487,508.908,215.569z M434.919,250.878c0,51.215-41.484,92.758-92.758,92.758     c-51.235,0-92.817-41.543-92.817-92.758c0-38.602,23.673-89.495,57.195-112.318c-3.527,0.84-7.191,1.358-10.786,1.358     c-6.077,0-11.89-1.466-16.463-5.589l3.498-3.908c7.66,6.908,20.713,4.309,30.756,0.625l-1.847,3.459h58.875v-0.362     C407.914,154.075,434.919,209.541,434.919,250.878z M379.239,258.382c0-7.748-2.921-14.372-8.588-19.521     c-5.628-5.11-14.177-9.067-25.441-11.734c-7.699-1.876-13.16-4.064-16.238-6.683c-2.98-2.54-4.436-5.94-4.436-10.229     c0-4.924,1.602-8.608,4.875-11.333c3.273-2.804,8.031-4.162,14.079-4.162c5.735,0,10.22,1.358,13.18,4.025     c3.029,2.706,4.934,6.947,5.657,12.613l0.156,1.339h15.554l-0.098-1.602c-0.44-9.086-3.81-16.316-9.995-21.563     c-4.66-3.908-10.62-6.39-17.655-7.367v-12.437h-15.857v12.809c-5.989,1.143-11.245,3.527-15.622,7.152     c-6.536,5.305-9.858,12.33-9.858,20.723c0,7.367,2.599,13.61,7.709,18.417c5.032,4.739,12.682,8.383,22.628,10.728     c8.979,2.159,15.388,4.748,19.071,7.67c3.508,2.902,5.266,6.644,5.266,11.451c0,5.911-1.847,10.395-5.569,13.659     c-3.762,3.263-9.106,4.944-15.886,4.944c-6.78,0-12.086-1.68-15.73-4.944c-3.722-3.263-5.54-7.865-5.676-13.952l-0.029-1.524     h-15.398l-0.244,4.025c0.039,7.386,3.468,14.059,10.151,19.843c5.53,4.651,12.008,7.67,19.198,8.93v14.753h15.847v-14.772     c7.21-1.182,13.366-3.937,18.358-8.246C375.702,275.431,379.239,267.702,379.239,258.382z'],
        ['0 0 465.978 465.978', 'M321.145,231.201c0,6.468-37.469,11.753-83.701,11.753c-46.213,0-83.652-5.286-83.652-11.753     c0-6.487,37.439-11.744,83.652-11.744C283.696,219.457,321.145,224.714,321.145,231.201z M237.454,154.906     c-73.618,0-91.693,27.171-91.693,27.171v6.302c6.204-6.653,28.509-24.093,91.693-24.093s85.528,17.44,91.732,24.083v-6.282     C329.186,182.077,311.082,154.906,237.454,154.906z M413.62,0v361.291H299.983l-66.994,104.687l-66.965-104.687H52.358V0H413.62z      M369.547,232.872c-10.571,4.103-14.714,0-14.714,0l-3.4,46.223c9.926-15.408,18.114-9.604,18.114-9.604V232.872z      M364.554,215.491v-29.897l28.812-15.916L237.454,86.417L81.571,169.678l62.158,36.111v22.921l0.576-0.244     c-0.684,0.909-1.104,1.788-1.104,2.736c0,10.444,42.168,18.944,94.263,18.944s94.321-8.51,94.321-18.944     c0-0.948-0.459-1.827-1.085-2.736l0.547,0.244V205.73l27.102-16.678v26.438c-2.96,1.202-5.041,4.152-5.041,7.552     c0,4.494,3.644,8.148,8.148,8.148c4.524,0,8.148-3.644,8.148-8.148C369.605,219.643,367.544,216.692,364.554,215.491z'],
        ['0 0 684.253 684.253', 'M379.542,284.751l21.123,10.181c-16.717,15.73-39.286,25.383-64.073,25.383     c-51.665,0-93.53-41.689-93.53-93.159c0-29.291,13.571-55.436,34.811-72.495l13.708,16.394     c-16.531,13.151-27.132,33.375-27.132,56.1c0,39.677,32.29,71.83,72.143,71.83C352.693,298.987,367.534,293.662,379.542,284.751z      M302.875,123.466c2.638,1.143,5.53,1.817,8.608,1.817c4.084,0,7.875-1.202,11.148-3.185c6.185-3.781,10.376-10.493,10.376-18.26     c0-11.841-9.643-21.455-21.524-21.455c-11.91,0-21.543,9.614-21.543,21.446C289.939,112.621,295.264,120.144,302.875,123.466z      M452.818,279.554l-21.104,0.244l-27.747-75.562l-75.269-0.098l-0.899-14.294l51.938-0.362l0.459-19.404h-53.492l-3.166-43.643     c-3.273,1.983-7.044,3.205-11.158,3.205c-3.087,0-5.97-0.684-8.617-1.837c1.368,13.375,1.817,30.092,2.618,40.478     c1.378,18.514,2.853,36.961,3.762,55.24l80.33,0.479l28.861,73.872l40.331-0.264     C459.667,297.609,462.949,279.554,452.818,279.554z M557.691,215.588c0,119.02-215.569,468.665-215.569,468.665     S126.563,334.609,126.563,215.588C126.563,96.539,223.092,0,342.122,0C461.181,0,557.701,96.539,557.691,215.588z      M508.918,215.588c0-91.976-74.82-166.816-166.796-166.816s-166.777,74.839-166.777,166.816     c0,91.937,74.8,166.757,166.777,166.757C434.098,382.346,508.918,307.526,508.918,215.588z'],
        ['0 0 206.395 206.395', 'M162.976,80.961c10.913,0,19.745,8.832,19.745,19.765c0,10.874-8.822,19.716-19.745,19.716     c-10.884,0-19.726-8.842-19.726-19.716C143.25,89.793,152.082,80.961,162.976,80.961z M143.709,190.621l0.166-0.889     c0.469-3.674,0.733-7.289,0.928-10.933c0.303-7.22,0.059-14.431-0.703-21.514c-1.505-14.186-5.198-28.07-11.206-40.751     c-5.237-11.177-22.618-39.032-33.219-51.85c3.322-1.798,9.897-5.041,12.242-5.979c5.413-2.316,11.255-3.762,17.235-4.113     c6.028-0.371,12.222,0.352,18.26,2.169c6.018,1.856,11.871,4.787,17.332,8.451c-4.445-4.836-9.555-9.194-15.456-12.691     c-5.872-3.429-12.516-5.97-19.54-7.201c-7.005-1.251-14.343-1.192-21.485-0.039c-2.833,0.44-5.589,1.124-8.324,1.895l1.456-4.553     c2.062-5.53,4.924-10.776,8.764-15.408c3.859-4.67,8.588-8.705,14.059-11.841c5.471-3.195,11.597-5.403,17.977-6.927     c-6.546-0.02-13.229,0.713-19.775,2.667c-6.536,1.915-12.897,5.041-18.563,9.36c-5.745,4.23-10.679,9.643-14.753,15.652     c-2.022,3.029-3.791,6.224-5.393,9.565c-0.791,1.671-1.524,3.4-2.169,5.12l-0.811,2.286l-1.749-0.254     c-1.856-0.234-3.713-0.391-5.559-0.489c-3.674-0.137-7.328-0.029-10.923,0.361c-7.23,0.772-14.323,2.657-20.781,5.696     C35.3,61.459,29.565,65.68,24.816,70.575c-4.758,4.885-8.549,10.444-11.568,16.258c4.27-4.944,9.155-9.35,14.499-12.701     c5.325-3.361,11.138-5.745,17.039-6.917c5.882-1.26,11.89-1.358,17.723-0.596c1.456,0.186,4.553,0.752,7.611,1.358l-0.752,0.86     c-4.572,5.647-8.236,11.988-10.64,18.7c-2.423,6.693-3.507,13.708-3.4,20.537c0.068,6.849,1.348,13.454,3.341,19.716     c-0.489-6.556-0.166-13.072,1.251-19.237c1.378-6.165,3.84-11.89,7.132-16.941c3.332-5.041,7.464-9.379,12.125-12.926     c1.729-1.309,6.321-4.475,9.682-6.634c4.924,5.374,9.409,11.021,13.17,17c6.614,10.493,11.265,21.856,13.659,33.443     c2.403,11.607,2.618,23.37,1.104,34.821c-0.752,5.716-4.24,23.82-5.813,29.252l-1.329,4.055H0v7.328h206.395v-7.328H143.709z'],
        ['0 0 628.007 628.007', 'M314.008,44.738c84.404,0,153.059,68.704,153.059,153.108s-68.674,153.05-153.059,153.05     c-84.444,0-153.118-68.655-153.118-153.05S229.565,44.738,314.008,44.738 M314.008,0C204.729,0,116.162,88.557,116.162,197.836     c0,109.24,197.846,430.171,197.846,430.171s197.836-320.93,197.836-430.171C511.854,88.557,423.268,0,314.008,0z      M364.686,127.882c-10.669-9.614-27.532-14.997-50.492-14.997c-18.72,0-33.394,1.632-44.64,3.507v177.983h23.263v-72.182     c5.354,1.368,11.744,1.612,18.7,1.612c22.735,0,42.5-6.693,55.045-19.775c9.125-9.35,13.952-22.198,13.952-38.475     C380.484,149.503,374.3,136.411,364.686,127.882z M312.054,205.095c-7.758,0-14.186-0.557-19.257-1.876v-70.003     c4.025-1.084,11.744-1.895,21.905-1.895c25.393,0,42.5,11.49,42.5,35.554C357.212,191.202,340.104,205.095,312.054,205.095z'],
        ['0 0 465.978 465.978', 'M232.984,76.295c-28.236,0-51.108,22.891-51.108,51.118c0,28.206,22.882,51.088,51.108,51.088      s51.108-22.882,51.108-51.088C284.111,99.177,261.22,76.295,232.984,76.295z M232.984,154.671      c-15.222,0-27.552-12.33-27.552-27.552c0-15.212,12.34-27.552,27.552-27.552c15.212,0,27.562,12.34,27.562,27.552      C260.546,142.342,248.206,154.671,232.984,154.671z M52.353,0v361.291H166.01l66.974,104.687l66.974-104.687h113.666V0H52.353z       M307.941,155.16c-10.493,31.196-80.008,191.515-80.008,191.515s-65.441-174.798-71.117-194.817      c-2.53-7.787-3.928-16.082-3.928-24.728c0-44.23,35.866-80.106,80.106-80.106c44.249,0,80.106,35.876,80.106,80.106      C313.1,136.997,311.224,146.425,307.941,155.16z'],
        ['0 0 379.422 379.422', 'M335.617,43.797c-58.396-58.396-153.05-58.396-211.446,0     C65.765,102.193,0.012,379.422,0.012,379.422s277.209-65.763,335.605-124.159C394.013,196.857,394.003,102.203,335.617,43.797z      M311.69,231.355c-45.119,45.109-118.502,45.119-163.611,0.01c-45.119-45.119-45.128-118.512,0-163.631     c45.119-45.119,118.512-45.099,163.611,0C356.818,112.843,356.828,186.227,311.69,231.355z'],
        ['0 0 393.806 393.806', 'M44.249,0v305.327h96.05l56.608,88.479l56.599-88.469h96.051V0H44.249z M239.31,242.769     l3.889,16.258l-41.543-6.751H187.9l-39.12,6.751l3.908-16.258l30.561-16.873c-0.762-2.863-0.997-6.263-0.997-9.926l-2.726-63.369     h-4.172l-93.823,38.817v-32.925l28.871-15.935v-23.898c0-3.019,2.433-5.462,5.462-5.462c2.99,0,5.442,2.433,5.442,5.462v17.889     l24.015-13.248v-22.608c0-3.019,2.423-5.462,5.452-5.462c3.009,0,5.462,2.423,5.462,5.462v16.59l19.11-10.552h2.208     l-1.807-41.973c0-10.132,8.236-18.339,18.358-18.339c10.132,0,18.329,8.207,18.329,18.339l-1.807,41.973h1.407l25.852,13.356     v-19.384c0-3.019,2.472-5.462,5.462-5.462c3.019,0,5.462,2.423,5.462,5.462v25.031l29.467,15.193V122.43     c0-3.009,2.443-5.462,5.462-5.462s5.471,2.433,5.471,5.462v24.142l23.097,11.92v32.925L212.042,152.6h-3.371l-2.697,63.369     c0,3.351-0.234,6.429-0.86,9.135L239.31,242.769z'],
        ['0 0 229.472 229.472', 'M9.79,169.625c0,0-4.123,23.82,6.526,23.82h197.416c8.676,0,6.517-23.82,6.517-23.82H9.79z       M6.517,120.793h216.458v17.713H6.517V120.793z M111.136,149.361c1.651-0.098,2.863,0.684,3.449,1.485      c1.221-0.225,3.156-0.645,6.165-1.466c7.074-1.837,10.073-3.762,12.398-5.325h-24.943l1.856,3.38L111.136,149.361z       M88.508,146.137c1.944,0.156,3.674-0.84,5.295-2.081h-9.897C85.254,145.473,85.821,146.059,88.508,146.137z M184.031,144.056      h-7.328l4.66,1.739L184.031,144.056z M34.244,153.807c5.686-2.022,10.669-5.149,15.476-8.168l2.579-1.583H15.662      C17.811,147.974,24.22,157.373,34.244,153.807z M8.989,145.619l2.921-1.563H0v17.713h29.154      C18.827,161.34,11.656,151.736,8.989,145.619z M206.307,144.056l9.497,5.686l-3.068,6.351l-17.918-10.689l-12.731,8.305      l-16.062-6.048h-21.729c-3.967,0-5.12,0.791-7.474,2.374c-2.628,1.807-6.214,4.211-14.567,6.399      c-8.93,2.306-11.363,2.648-13.024,0.264l-0.44-0.625c-2.394-0.997-3.547-3.38-4.436-5.208c-0.664-1.358-1.397-2.863-2.648-4.426      l-2.032,1.847c-2.638,2.218-6.321,5.286-11.353,5.09c-5.168-0.166-7.152-2.237-8.901-4.074      c-1.426-1.524-2.941-3.107-7.894-4.162c-5.735-1.28-11.705,2.482-18.602,6.82c-4.856,3.048-10.376,6.478-16.678,8.754      c-1.944,0.674-3.771,0.997-5.53,1.055h198.754v-17.713L206.307,144.056L206.307,144.056z M29.838,161.848l0.879-0.078h-1.563      L29.838,161.848z M128.575,36.321c-2.599-0.215-17.733-0.293-20.371-0.293c-46.105,0-81.434,33.932-99.255,77.78l210.01-0.606      C202.663,70.379,172.248,39.652,128.575,36.321z'],
        ['0 0 639.623 639.623', 'M304.394,205.437c0,4.514-3.644,8.187-8.158,8.187c-4.484,0-8.158-3.674-8.158-8.187v-44.259     h-5.315l0.039,138.727c0,6.067-4.866,10.991-10.982,10.991c-5.97,0-10.864-4.836-10.952-10.855l-0.049-0.088v-89.475h-4.934     v89.387c0,6.097-4.944,11.021-11.011,11.021c-6.087,0-11.011-4.924-11.011-11.021l0.039-138.482h-5.071v43.985h-0.068     l0.068,0.352c0,4.543-3.664,8.158-8.197,8.158c-4.494,0-8.148-3.625-8.148-8.158l0.02-0.352h-0.02v-47.522     c0,0-0.948-20.39,26.76-20.908h38.758c0,0,24.591-0.303,26.379,20.908v47.522L304.394,205.437L304.394,205.437z M259.618,130.705     c10.669,0,19.316-8.666,19.316-19.316c0-10.708-8.647-19.374-19.316-19.374c-10.649,0-19.345,8.666-19.345,19.374     C240.263,122.039,248.958,130.705,259.618,130.705z M366.923,133.079c10.591,0,19.208-8.617,19.208-19.247     c0-10.591-8.608-19.218-19.208-19.218c-10.591,0-19.277,8.617-19.277,19.218C347.657,124.472,356.333,133.079,366.923,133.079z      M377.456,139.313h-22.96c-27.659,0.489-34.45,20.781-34.45,20.781l-15.652,47.346h0.039l-0.039,0.322     c0,4.494,3.654,8.178,8.129,8.178c4.485,0,8.109-3.674,8.109-8.178l-0.02-0.322h0.02l15.642-43.809h5.081l-24.738,74.937h24.728     l-0.029,62.988c0,6.009,4.895,10.913,10.972,10.913c6.067,0,11.011-4.905,11.011-10.913l-0.078-62.959h4.944v63.037l0.078,0.059     c0.068,5.989,4.895,10.776,10.904,10.776c6.018,0,10.884-4.866,10.884-10.894l-0.02-62.979h24.846l-24.846-75.191h5.266     l15.632,44.024v0.059c0,4.475,3.605,8.139,8.109,8.139c4.484,0,8.129-3.654,8.129-8.139v-0.059l-15.632-47.336     C409.746,139.039,377.456,139.313,377.456,139.313z M521.321,201.451c0,111.321-201.471,438.172-201.471,438.172     S118.302,312.763,118.302,201.451C118.302,90.208,208.51,0,319.851,0C431.123-0.01,521.321,90.198,521.321,201.451z      M475.724,201.441c0-85.968-69.945-155.893-155.883-155.893c-86.017,0-155.961,69.935-155.961,155.893     c0,85.997,69.945,155.912,155.961,155.912C405.789,357.354,475.724,287.438,475.724,201.441z'],
        ['0 0 639.653 639.653', 'M319.865,0C208.534,0,118.317,90.227,118.317,201.5c0,111.302,201.549,438.153,201.549,438.153     S521.336,312.792,521.336,201.5C521.336,90.227,431.138,0,319.865,0z M319.865,357.422c-86.017,0-155.942-69.906-155.942-155.903     c0-85.968,69.925-155.922,155.942-155.922c85.929,0,155.863,69.964,155.863,155.922     C475.729,287.516,405.794,357.422,319.865,357.422z M439.716,163.767c-1.084-3.263-3.889-5.657-7.308-6.136l-72.211-10.503     l-32.3-65.411c-1.495-3.107-4.651-5.032-8.08-5.032c-3.429,0-6.585,1.925-8.099,5.032l-32.3,65.411l-72.202,10.503     c-3.41,0.479-6.233,2.872-7.269,6.136c-1.075,3.244-0.195,6.849,2.257,9.243l52.27,50.942l-12.34,71.928     c-0.576,3.371,0.83,6.78,3.576,8.813c1.583,1.163,3.449,1.729,5.325,1.729c1.426,0,2.882-0.342,4.211-1.036l64.571-33.951     l64.591,33.951c1.329,0.694,2.765,1.036,4.191,1.036c1.856,0,3.713-0.567,5.305-1.729c2.784-2.032,4.162-5.442,3.576-8.813     l-12.33-71.928L437.4,173.01C439.882,170.616,440.771,167.011,439.716,163.767z M375.506,220.796l13.112,76.588l-68.782-36.14     l-68.782,36.14l13.131-76.588l-55.661-54.244l76.911-11.187l34.401-69.681l34.401,69.681l76.901,11.187L375.506,220.796z'],
        ['0 0 511.048 511.048', 'M255.539,511.048c-24.689,0-136.479-267.146-136.479-374.578C119.059,61.23,180.299,0,255.539,0     c75.25,0,136.45,61.23,136.45,136.47C391.999,243.902,280.218,511.048,255.539,511.048z M255.539,31.333     c-57.976,0-105.137,47.17-105.137,105.137s47.161,105.137,105.137,105.137c57.966,0,105.117-47.161,105.117-105.137     C360.666,78.493,313.485,31.333,255.539,31.333z'],
        ['0 0 406.38 406.38', 'M196.605,286.676H45.646v28.402h99.128l58.416,91.302l58.426-91.302h99.118v-28.402H246.013     C246.013,286.676,196.605,286.676,196.605,286.676z M45.646,0v272.099h156.88l1.817-5.481c2.149-7.367,6.859-31.9,7.875-39.638     c2.062-15.466,1.759-31.421-1.534-47.131c-3.234-15.691-9.467-31.089-18.436-45.285c-5.11-8.119-11.177-15.759-17.85-22.999     c-4.514,2.912-10.767,7.191-13.072,8.959c-6.302,4.836-11.939,10.679-16.414,17.498c-4.484,6.82-7.767,14.597-9.653,22.94     c-1.905,8.334-2.355,17.186-1.7,26.047c-2.697-8.461-4.436-17.42-4.533-26.663c-0.156-9.233,1.358-18.729,4.602-27.806     c3.234-9.076,8.217-17.664,14.382-25.324l1.026-1.172c-4.133-0.83-8.344-1.563-10.337-1.837     c-7.875-1.036-15.984-0.889-23.976,0.772c-7.972,1.641-15.798,4.826-23.028,9.389c-7.249,4.553-13.815,10.493-19.628,17.225     c4.084-7.894,9.184-15.447,15.642-22.081c6.429-6.624,14.196-12.281,22.921-16.385c8.695-4.123,18.29-6.702,28.07-7.748     c4.895-0.518,9.829-0.664,14.831-0.459c2.491,0.107,4.983,0.313,7.503,0.616l2.374,0.361l1.094-3.078     c0.899-2.374,1.895-4.68,2.941-6.937c2.149-4.504,4.563-8.822,7.308-12.916c5.481-8.168,12.203-15.447,19.912-21.24     c7.689-5.813,16.316-10.053,25.158-12.662c8.862-2.638,17.938-3.644,26.819-3.586c-8.666,2.013-16.961,5.071-24.367,9.36     c-7.396,4.279-13.864,9.741-19.032,16.033c-5.168,6.302-9.096,13.414-11.851,20.869c-0.469,1.27-1.221,3.576-2.013,6.165     c3.732-1.055,7.484-1.964,11.275-2.57c9.712-1.563,19.628-1.622,29.105,0.068c9.506,1.671,18.505,5.08,26.448,9.77     c7.972,4.69,14.88,10.63,20.908,17.166c-7.376-4.963-15.29-8.959-23.478-11.431c-8.158-2.511-16.541-3.507-24.67-2.99     c-8.168,0.498-16.033,2.491-23.37,5.569c-3.166,1.329-12.056,5.676-16.58,8.139c14.372,17.352,37.859,55.035,44.982,70.16     c8.099,17.117,13.16,35.954,15.232,55.182c1.016,9.614,1.299,19.335,0.899,29.115c-0.225,4.905-0.616,9.829-1.241,14.772     l-0.166,1.221h112.005V0H45.646z M317.325,109.191c-14.772,0-26.731-11.959-26.731-26.712s11.968-26.702,26.731-26.702     c14.733,0,26.692,11.959,26.692,26.702S332.049,109.191,317.325,109.191z'],
        ['0 0 651.299 651.299', 'M374.725,127.422c-3.449-24.064-24.064-42.578-49.066-42.578     c-25.012,0-45.646,18.505-49.056,42.578h-74.302v160.827h17.176V151.086h4.895v137.163h202.164V150.158h4.924v138.082h17.537     V127.422C448.998,127.422,374.725,127.422,374.725,127.422z M302.992,127.422c1.085-11.646,10.728-20.762,22.667-20.762     c11.88,0,21.563,9.125,22.657,20.762H302.992z M325.649,0C212.335,0,120.476,91.869,120.476,205.193     c0,113.305,205.173,446.106,205.173,446.106s205.173-332.801,205.173-446.106C530.823,91.879,438.964,0,325.649,0z      M325.649,363.948c-87.541,0-158.765-71.215-158.765-158.746c0-87.56,71.225-158.765,158.765-158.765     c87.531,0,158.736,71.215,158.736,158.765C484.385,292.734,413.18,363.948,325.649,363.948z'],
        ['0 0 433.17 433.17', 'M48.665,0v335.869H154.31l62.265,97.301l62.285-97.301h105.645V0H48.665z M212.618,268.963     h-76.266V161.921h44.757l-22.95,40.693l17.44-3.126l8.266,13.405l28.754-50.971C212.618,161.921,212.618,268.963,212.618,268.963     z M296.915,268.963H221.04V162.595l28.373,50.463l8.226-13.581l17.459,2.96l-22.921-40.527h44.738V268.963z M221.939,153.401     v-42.569H211.28v42.569h-87.541l-0.107-42.569h46.623c-6.868-3.537-11.851-7.836-14.968-12.789     c-2.511-3.947-3.703-8.295-3.703-12.447c0.059-7.113,3.332-17.059,8.06-21.485c4.709-4.465,11.04-7.347,17.958-7.367     c6.908,0,13.346,2.374,18.876,6.067c5.53,3.693,10.259,8.666,14.177,14.264c2.257,3.224,4.24,10.327,5.921,13.874l0.694-1.358     c4.651-9.184,11.148-21.221,19.433-26.78c5.51-3.693,11.968-6.067,18.915-6.067c6.487,0,12.555,2.364,17.137,6.38     c4.592,3.976,7.748,13.512,7.748,20.166c0.029,8.119-4.758,16.287-13.756,22.735c-2.345,1.7-5.002,3.293-7.943,4.817h50.629     l0.127,42.569C309.529,153.401,221.949,153.401,221.939,153.401z M259.017,95.406c-6.439,4.699-17.625,9.497-34.84,12.877     c1.641-6.82,4.826-14.04,9.028-20.019c3.146-4.533,6.888-11.988,10.737-14.558c3.849-2.56,7.748-3.869,11.626-3.889h0.059     c3.244,0,6.37,1.26,8.471,3.146c2.14,1.915,3.263,5.403,3.263,7.865C267.351,83.74,265.827,90.442,259.017,95.406z      M204.226,95.474c1.974,3.869,3.478,7.924,4.485,11.871c-17.518-1.827-28.842-5.686-35.427-9.839     c-3.517-2.218-5.657-4.455-6.956-6.439c-1.231-1.993-1.651-5.491-1.651-7.201c-0.039-2.872,1.387-7.885,3.937-10.249     c2.491-2.355,5.843-3.81,8.871-3.81h0.088c3.859,0.02,7.748,1.329,11.617,3.889C194.964,77.516,200.425,87.892,204.226,95.474z'],
        ['0 0 212.511 212.511', 'M95.904,61.899h35.388v10.386H95.904V61.899z M78.327,82.006l-35.3,61.171l35.309,61.073h70.57     l35.261-61.073l-35.261-61.171H78.327z M95.347,148.756H76.833v-5.569h18.495L95.347,148.756L95.347,148.756z M74.361,134.218     l16.873-32.632h44.777l16.863,32.632H74.361z M120.046,10.293V8.261H92.465v2.032H0v7.982h92.455v2.091h12.828l18.28,18.27     l-12.535,12.506l5.168,5.247l17.762-17.762l-18.231-18.27h4.318v-2.101h92.465v-7.963H120.046z'],
        ['0 0 465.978 465.978', 'M52.349,0v361.291h113.647l66.974,104.687l66.984-104.687H413.63V0H52.349z M194.055,35.134     c13.532,0,24.504,10.933,24.504,24.406c0,8.813-4.748,16.492-11.812,20.762c-3.713,2.257-8.012,3.625-12.691,3.625     c-3.468,0-6.78-0.752-9.77-2.062c-8.647-3.762-14.704-12.32-14.704-22.325C169.581,46.066,180.533,35.134,194.055,35.134z      M222.603,305.699c-58.738,0-106.329-47.424-106.329-105.938c0-33.306,15.437-63.018,39.579-82.441l15.574,18.651     c-18.788,14.968-30.835,37.967-30.835,63.78c0,45.119,36.716,81.698,82.021,81.698c18.319,0,35.212-6.067,48.861-16.179     l24.025,11.578C276.457,294.727,250.81,305.699,222.603,305.699z M362.561,279.876l-45.842,0.303l-32.808-84.014l-91.351-0.537     c-1.016-20.791-2.687-41.758-4.27-62.832c-0.909-11.783-1.426-30.776-2.98-45.998c3.009,1.299,6.302,2.052,9.799,2.052     c4.66,0,8.969-1.368,12.672-3.625l3.625,49.623h60.8l-0.518,22.071l-59.041,0.41l1.006,16.267l85.577,0.098l31.548,85.919     l23.986-0.264C366.293,259.359,362.561,279.876,362.561,279.876z'],
        ['0 0 684.214 684.214', 'M285.22,103.603h49.476v222.613h-89.065L285.22,103.603z M349.567,103.603v222.613h89.065     l-39.579-222.613H349.567z M557.652,215.549c0,119.059-215.549,468.665-215.549,468.665s-215.54-349.606-215.54-468.665     C126.563,96.519,223.063,0,342.112,0S557.671,96.519,557.652,215.549z M508.908,215.549c0-91.957-74.83-166.777-166.796-166.777     s-166.786,74.82-166.786,166.777s74.82,166.796,166.786,166.796S508.908,307.506,508.908,215.549z'],
        ['0 0 653.898 653.898', 'M326.944,85.45c-67.004,0-121.306,54.303-121.306,121.316     c0,66.994,54.303,121.277,121.306,121.277s121.287-54.283,121.287-121.277C448.231,139.762,393.948,85.45,326.944,85.45z      M304.658,236.243c-0.703-2.208-11.998-36.892-13.766-42.305l-0.059-0.186l-0.147-0.401l33.453-23.654l2.697-1.915l2.697,1.915     c8.187,5.813,31.753,22.413,33.424,23.654l-0.107,0.401l-0.068,0.186c-1.778,5.413-13.082,40.097-13.805,42.305H304.658z      M309.162,239.848l-20.244,28.539l-2.784-4.397l16.375-24.142L309.162,239.848L309.162,239.848z M324.15,165.272v-33.043     l2.697,1.036l2.697-1.036v33.043l-2.697-1.915L324.15,165.272z M350.597,239.848l17.147,24.093L367.558,264l-3.302,4.69     l-20.263-28.832L350.597,239.848L350.597,239.848z M365.038,198.745l2.042-6.37l27.669-8.383l3.488,4.279L365.038,198.745z      M397.729,141.853l-0.576,7.767c-10.044-12.711-23.448-22.725-38.875-28.558l7.259-2.843     C377.905,123.808,388.809,131.858,397.729,141.853z M299.236,99.49l3.234-6.331c7.699-1.622,15.671-2.521,23.878-2.521     c8.187,0,16.14,0.899,23.869,2.521l3.527,6.39l8.832,15.955l-1.788,0.674l-7.758,3.048c-7.904,3.078-18.524,7.201-23.478,9.086     l-2.706,1.104l-2.697-1.114c-5.051-1.915-15.935-6.165-23.947-9.282l-7.806-3.058l-1.339-0.459L299.236,99.49z M287.551,117.985     l7.298,2.843c-15.144,5.667-28.373,15.3-38.446,27.61l-0.508-7.64C264.708,131.174,275.504,123.368,287.551,117.985z      M258.836,183.767l27.767,8.627l2.052,6.37l-32.877-10.796L258.836,183.767z M231.011,212.599l-13.805-13.317l-5.061-4.924     c1.573-16.336,6.585-31.665,14.294-45.304l7.025-1.163c7.611-1.368,17.068-2.99,19.11-3.332v0.059l0.557,8.168     c0.703,9.975,1.798,25.49,2.032,29.252l0.049,0.821l-3.048,3.918c-4.074,5.051-11.187,13.952-15.994,20.009l-4.846,6.106     L231.011,212.599z M231.587,218.168l0.078,0.098l4.768-6.018c1.153,15.447,6.224,29.828,14.235,42.129l-7.21-1.514     C237.234,242.202,233.287,230.898,231.587,218.168z M288.186,307.799l-6.419,3.302c-14.958-6.331-28.246-15.769-39.227-27.474     l1.124-6.888l2.951-18.583l0.195-1.055l7.005,1.915c9.731,2.589,26.116,7.044,29.438,7.982l0.567,0.107l2.472,3.957     c3.175,5.012,8.764,13.786,12.867,20.351l4.367,6.82l0.86,1.319L288.186,307.799z M326.338,301.009     c-6.097,0-12.086-0.616-17.879-1.7l-4.064-6.429c7.015,1.768,14.382,2.697,21.944,2.697c7.982,0,15.759-1.036,23.136-3.048     l-4.133,6.566C339.186,300.335,332.845,301.009,326.338,301.009z M371.74,310.73l-6.458-3.253     c-6.722-3.312-14.255-7.093-15.935-7.953l1.016-1.573l4.387-7.025l15.075-23.859l28.734-7.767l8.119-2.208l0.215-0.039     l3.263,18.251l1.26,6.868C400.474,294.375,386.962,304.126,371.74,310.73z M409.385,252.666l-7.572,2.042     c8.324-12.672,13.522-27.591,14.518-43.643l4.866,6.126C419.614,229.97,415.51,241.968,409.385,252.666z M422.369,212.882     l-0.684-0.879l-5.149-6.429l-14.978-18.808l-3.058-3.918l0.049-0.821l1.935-27.952l0.596-8.246l0.098-1.28     c1.886,0.342,10.513,1.837,17.938,3.097l7.025,1.221c7.943,13.932,13.033,29.652,14.47,46.408l-5.071,4.924L422.369,212.882z      M326.934,0C213.19,0,120.96,92.221,120.96,205.975c0,113.793,205.975,447.923,205.975,447.923s206.004-334.13,206.004-447.923     C532.938,92.221,440.698,0,326.934,0z M326.934,365.365c-87.883,0-159.371-71.508-159.371-159.4     c0-87.853,71.488-159.371,159.371-159.371c87.863,0,159.41,71.518,159.41,159.371     C486.344,293.867,414.797,365.365,326.934,365.365z'],
        ['0 0 443.145 443.145', 'M220.405,160.27l32.769-58.836l6.38-0.01l-32.779,58.846H220.405z M223.668,165.868l1.055-1.905     h-4.465L223.668,165.868z M263.951,82.118H156.967l12.897,19.364l83.31-0.049L263.951,82.118z M272.06,101.414l12.858-19.296     h-14.606l-10.757,19.306L272.06,101.414z M226.785,160.27l-2.052,3.693h5.94l44.943-62.539h-3.547l-39.188,58.855L226.785,160.27     L226.785,160.27L226.785,160.27z M270.311,82.118l6.214-11.158h-6.38l-6.204,11.158H270.311z M223.668,165.868h-14.733v5.579     h24.035v-5.579H223.668z M393.357,0v343.597H285.259l-63.692,99.548l-63.692-99.548H49.789V0H393.357z M271.317,301.243     c0-2.775-16.345-5.1-38.348-5.735v5.725h-24.035v-5.725c-22.012,0.625-38.367,2.941-38.367,5.735     c0,3.244,22.55,5.901,50.375,5.901C248.778,307.154,271.317,304.497,271.317,301.243z M305.767,70.961h-29.232l12.086-21.7     l2.198,0.449c6.526,0,11.773-5.276,11.773-11.793s-5.266-11.783-11.773-11.783c-6.526,0-11.812,5.266-11.812,11.783     c0,3.703,1.817,6.888,4.504,9.037l-13.366,24.005H136.128l66.906,100.486h5.901v124.062c3.859-0.117,7.875-0.176,12.017-0.176     c4.152,0,8.168,0.059,12.027,0.176V171.437h5.891L305.767,70.961z M220.405,160.27h-11.392l-39.149-58.787l-3.586,0.01     l45.412,62.47h8.568l-1.456-0.811L220.405,160.27z M197.699,112.963c-1.886,0-3.42,1.534-3.42,3.42c0,1.886,1.534,3.42,3.42,3.42     c1.886,0,3.42-1.534,3.42-3.42C201.119,114.497,199.585,112.963,197.699,112.963z M219.555,123.231     c0-3.42,2.794-6.204,6.185-6.204c3.429,0,6.224,2.784,6.224,6.204c0,3.42-2.794,6.204-6.224,6.204     C222.34,129.435,219.555,126.651,219.555,123.231z M222.34,123.221c0,1.895,1.524,3.429,3.39,3.429     c1.905,0,3.429-1.534,3.429-3.429c0-1.876-1.524-3.42-3.429-3.42C223.854,119.802,222.34,121.345,222.34,123.221z'],
        ['0 0 434.772 434.772', 'M252.217,200.875c5.784,5.295,8.754,12.008,8.754,19.941c0,9.526-3.644,17.45-10.806,23.527     c-5.09,4.397-11.392,7.181-18.768,8.383v15.095h-16.199v-15.056c-7.328-1.299-13.883-4.357-19.56-9.145     c-6.82-5.911-10.327-12.731-10.405-20.283l0.283-4.103h15.74l0.059,1.534c0.068,6.253,1.964,10.923,5.716,14.274     c3.742,3.351,9.174,5.071,16.082,5.071c6.966,0,12.408-1.7,16.258-5.071c3.81-3.351,5.676-7.933,5.676-13.952     c0-4.924-1.759-8.754-5.364-11.705c-3.781-2.98-10.308-5.628-19.482-7.826c-10.2-2.423-17.967-6.116-23.106-10.962     c-5.237-4.924-7.865-11.265-7.865-18.808c0-8.588,3.371-15.73,10.024-21.172c4.524-3.703,9.878-6.155,15.955-7.269v-13.082     h16.189v12.721c7.21,1.006,13.278,3.537,18.045,7.533c6.312,5.335,9.751,12.75,10.22,22.012l0.117,1.612h-15.857l-0.205-1.358     c-0.752-5.755-2.657-10.112-5.735-12.858c-3.058-2.716-7.611-4.143-13.493-4.143c-6.145,0-11.021,1.436-14.362,4.26     c-3.361,2.765-5.002,6.556-5.002,11.587c0,4.387,1.495,7.845,4.572,10.415c3.107,2.667,8.666,4.953,16.551,6.829     C237.757,191.622,246.491,195.648,252.217,200.875z M385.931,0v337.08H279.886l-62.51,97.692l-62.49-97.692H48.841V0H385.931z      M317.853,213.156c0-42.217-27.581-98.874-65.743-119.216v0.361h-60.096l1.866-3.498l3.341-3.517h48.353l13.854-46.154h-72.602     l10.112,45.011c-7.435-8.441-25.852-26.438-42.696-20.341l1.837,5.032c14.294-5.188,31.704,12.887,37.791,19.96     c-10.239,3.722-23.566,6.399-31.352-0.655l-3.634,3.996c4.69,4.201,10.649,5.725,16.844,5.725c3.664,0,7.396-0.537,11.021-1.368     c-34.254,23.282-58.416,75.24-58.416,114.663c0,52.339,42.442,94.771,94.771,94.771     C275.44,307.926,317.853,265.494,317.853,213.156z'],
        ['0 0 450.492 450.492', 'M246.233,94.096c0-11.402-9.536-20.644-21.309-20.644c-11.734,0-21.231,9.252-21.231,20.644     s9.506,20.644,21.231,20.644C236.716,114.731,246.233,105.488,246.233,94.096z M50.605,0v349.293H160.49l64.757,101.199     l64.766-101.199h109.875V0H50.605z M328.585,256.33l-21.016-20.4c-14.577,11.988-27.65,42.549-84.483,43.985     c-45.119,0-63.955-27.767-80.565-41.181l-19.189,18.612l-10.962-70.042l72.172,10.63l-19.882,19.296     c0,0,17.068,28.373,46.516,30.336l-0.068-115.317c-15.906-5.53-27.376-20.185-27.376-37.547c0-22.1,18.446-40.028,41.23-40.028     c22.804,0,41.269,17.918,41.269,40.028c0,17.645-11.812,32.437-28.138,37.752c0.117,22.51,0.459,115.542-0.02,115.542     c24.425-0.674,47.249-33.678,47.249-33.678l-18.622-18.055L339,185.643L328.585,256.33z'],
        ['0 0 478.347 478.347', 'M305.958,0H172.39C125.962,0,88.19,37.781,88.19,84.209v133.568     c0,35.495,22.11,65.861,53.247,78.23l97.731,182.341l97.741-182.341c31.147-12.369,53.247-42.735,53.247-78.23V84.209     C390.157,37.781,352.395,0,305.958,0z M361.13,217.777c0,30.405-24.748,55.162-55.162,55.162H172.399     c-30.424,0-55.162-24.748-55.162-55.162V84.209c0-30.415,24.748-55.172,55.162-55.172h133.558     c30.424,0,55.162,24.758,55.162,55.172L361.13,217.777L361.13,217.777z'],
        ['0 0 684.224 684.224', 'M342.107,48.734c91.937,0,166.777,74.8,166.777,166.757c0,91.996-74.839,166.796-166.777,166.796     c-91.957,0-166.777-74.8-166.777-166.796C175.34,123.544,250.16,48.734,342.107,48.734 M342.107,0     C223.058,0,126.558,96.5,126.558,215.501c0,119.079,215.559,468.724,215.559,468.724s215.549-349.645,215.549-468.724     C557.676,96.5,461.157,0,342.107,0z M450.722,237.61l-89.514,49.457c-3.166-2.237-6.771-3.84-10.571-4.944l-86.368-149.132     l-59.979,25.324l3.595,8.568l52.427-22.208l78.787,136.04c-18.954,0.899-34.196,16.453-34.196,35.681     c0,19.785,16.072,35.798,35.808,35.798c19.765,0,35.856-16.013,35.856-35.798c0-8.666-3.205-16.502-8.344-22.686l82.402-45.509     l24.719,14.128l4.592-8.012L450.722,237.61z M340.72,333.71c-9.565,0-17.332-7.728-17.332-17.303     c0-9.565,7.767-17.342,17.332-17.342c9.585,0,17.362,7.787,17.362,17.342C358.091,325.982,350.314,333.71,340.72,333.71z      M360.211,269.324l83.095-46.965l-46.965-83.105l-83.085,46.965L360.211,269.324z M339.245,152.278l-18.788-33.238     l-33.179,18.798l18.759,33.17L339.245,152.278z M374.456,132.855l-12.164-21.524l-21.573,12.154l12.193,21.582L374.456,132.855z'],
        ['0 0 407.455 407.455', 'M45.783,0v315.908h99.372l58.572,91.546l58.562-91.546h99.382V0H45.783z M219.887,42.666     c13.356,0,24.22,10.845,24.22,24.21s-10.855,24.22-24.22,24.22c-13.375,0-24.23-10.855-24.23-24.22     S206.492,42.666,219.887,42.666z M194.837,82.665l25.051,18.026l-5.989,8.334l57.175,28.783l-8.549,16.971l-59.852-30.141     l-21.016,29.203l40.243,31.05l-0.039,0.029h0.039v56.686h-22.931v-41.474l-35.544-27.415l-21.973-15.818L194.837,82.665z      M130.373,270.751c-27.777,0-50.277-22.51-50.277-50.277c0-27.786,22.501-50.277,50.277-50.277     c27.767,0,50.277,22.491,50.277,50.277C180.65,248.24,158.14,270.751,130.373,270.751z M225.193,257.033h-22.677     c-3.771,0-6.859-3.078-6.859-6.859c0-3.781,3.078-6.849,6.859-6.849h22.677c3.781,0,6.849,3.068,6.849,6.849     C232.041,253.966,228.974,257.033,225.193,257.033z M277.082,270.751c-27.767,0-50.277-22.51-50.277-50.277     c0-27.786,22.51-50.277,50.277-50.277c27.767,0,50.277,22.491,50.277,50.277C327.359,248.24,304.849,270.751,277.082,270.751z      M318.204,220.474c0,22.686-18.446,41.123-41.123,41.123c-22.686,0-41.123-18.446-41.123-41.123s18.456-41.123,41.123-41.123     C299.758,179.341,318.224,197.787,318.204,220.474z M171.505,220.474c0,22.686-18.446,41.123-41.123,41.123     S89.25,243.15,89.25,220.474s18.466-41.123,41.132-41.123C153.069,179.341,171.515,197.787,171.505,220.474z'],
        ['0 0 684.234 684.234', 'M342.112,48.753c91.986,0,166.796,74.82,166.796,166.796s-74.81,166.777-166.796,166.777     c-91.957,0-166.767-74.8-166.767-166.777S250.146,48.753,342.112,48.753 M342.112,0c-119.02,0-215.549,96.5-215.549,215.549     c0,119.04,215.549,468.685,215.549,468.685s215.559-349.645,215.559-468.685C557.671,96.5,461.132,0,342.112,0z M212.853,238.607     l43.927,78.337h170.704l43.878-78.337C471.362,238.607,212.853,238.607,212.853,238.607z M350.485,73.657v148.155h96.93     L350.485,73.657z M329.636,106.876l-75.201,114.936h75.201V106.876z'],
        ['0 0 428.441 428.441', 'M48.118,0v332.186H152.62l61.581,96.256l61.581-96.256h104.541V0H48.118z M207.137,294.551     c-15.593,0-28.275-12.672-28.275-28.294c0-15.622,12.682-28.294,28.275-28.294c15.671,0,28.314,12.672,28.314,28.294     C235.451,281.879,222.809,294.551,207.137,294.551z M257.717,243.814c-10.757-12.242-26.252-20.302-43.78-21.113     c-18.427-0.85-35.358,6.487-47.336,18.749l-14.44-14.685c15.945-16.17,38.338-25.813,62.754-24.67     c22.901,1.055,43.223,11.402,57.546,27.22L257.717,243.814z M286.354,215.676c-17.684-19.189-42.53-31.714-70.56-33.023     c-30.024-1.397-57.585,10.464-77.272,30.258l-16.209-16.521c24.093-24.181,57.83-38.612,94.546-36.902     c34.127,1.593,64.385,16.746,85.968,39.94L286.354,215.676z M315.019,187.45c-24.591-26.067-58.826-43.067-97.35-44.855     c-41.64-1.934-79.91,14.323-107.374,41.592l-17.176-17.459c32.173-31.89,76.95-50.903,125.693-48.646     c44.962,2.081,84.893,21.875,113.695,52.182L315.019,187.45z M344.281,157.153c-31.313-32.896-74.742-54.283-123.593-56.53     c-53.003-2.482-101.834,18.045-136.831,52.739l-16.775-17.068c39.598-39.188,94.81-62.373,154.72-59.598     c55.094,2.57,104.13,26.614,139.498,63.653L344.281,157.153z'],
        ['0 0 640.923 640.923', 'M307.008,146.65h27.073l-3.742,77.604h-19.55L307.008,146.65z M320.53,232.764     c-9.057,0-15.378,6.36-15.378,15.603c0,8.871,6.136,15.535,15.066,15.535h0.303c9.272,0,15.261-6.673,15.261-15.535     C335.625,239.125,329.636,232.764,320.53,232.764z M522.381,201.92c0,111.517-201.92,439.003-201.92,439.003     s-201.92-327.476-201.92-439.003C118.541,90.433,208.954,0,320.461,0C431.949,0.01,522.381,90.433,522.381,201.92z      M476.637,201.92c0-86.153-70.052-156.215-156.176-156.215c-86.144,0-156.235,70.062-156.235,156.215     c0,86.095,70.091,156.235,156.235,156.235C406.585,358.155,476.637,288.024,476.637,201.92z M439.765,289.646     c-2.804,4.66-7.845,7.484-13.268,7.484H214.436c-5.598,0-10.767-2.98-13.502-7.865c-2.755-4.856-2.697-10.816,0.176-15.603     l106.378-188.75c2.814-4.719,7.875-7.582,13.356-7.582l0.371,0.02c5.628,0.098,10.747,3.322,13.336,8.295l105.694,188.769     C442.774,279.212,442.569,285.005,439.765,289.646z M426.507,281.625L320.833,92.856L214.436,281.625     C214.436,281.625,426.507,281.625,426.507,281.625z'],
        ['0 0 656.448 656.448', 'M308.229,157.231h44.982v13.16h-44.982V157.231z M328.229,0     C214.006,0,121.424,92.602,121.424,206.795c0,114.223,206.805,449.652,206.805,449.652s206.795-335.429,206.795-449.652     C535.034,92.592,442.422,0,328.229,0z M216.136,92.504h0.303c28.881-28.236,68.293-45.715,111.79-45.715     c43.477,0,82.919,17.479,111.771,45.715h0.156l0.811,0.899l-0.967-0.899H338.917v-3.498h-35.085v2.941h-38.641v0.557h-48.753     C214.68,94.263,216.136,92.504,216.136,92.504z M328.229,366.821c-88.234,0-160.016-71.781-160.016-160.016     c0-40.683,15.505-77.692,40.605-105.967h56.384v0.479h38.641v3.078h16.326l23.214,23.233l-15.925,15.945l6.575,6.644     l22.559-22.589l-23.194-23.233h5.52v-3.556h108.859l-3.058-3.38l3.107,3.38h-0.059c25.09,28.265,40.439,65.304,40.439,105.967     C488.225,295.039,416.473,366.821,328.229,366.821z M285.855,182.829l-44.904,77.751l44.904,77.692h89.749l44.865-77.692     l-44.865-77.751C375.604,182.829,285.855,182.829,285.855,182.829z M307.496,267.663H283.97v-7.083h23.527V267.663z      M280.804,249.198l21.475-41.504h56.941l21.397,41.504H280.804z'],
        ['0 0 232.891 232.891', 'M47.419,0h21.973v222.574H47.419V0z M77.619,75.582h1.299v-0.42L77.619,75.582z M78.909,0v75.162      l119.616-36.687L78.909,0z'],
        ['0 0 420.019 420.019', 'M160.016,83.984c8.158-19.609,27.503-33.443,50.023-33.443s41.855,13.825,50.004,33.394     c-10.786-16.15-29.174-26.819-50.004-26.819C189.18,57.126,170.792,67.815,160.016,83.984z M372.839,0v325.659h-102.43     l-60.399,94.36l-60.38-94.36H47.18V0H372.839z M312.733,274.61l-15.114-168.33h-25.823v-1.563     c0-34.029-27.718-61.738-61.738-61.738c-34.059,0-61.757,27.708-61.757,61.738v1.563h-25.842l-15.105,168.33H312.733z      M210.049,65.714c-24.67,0-45.294,17.42-50.336,40.575h100.672C255.353,83.125,234.699,65.714,210.049,65.714z'],
        ['0 0 411.627 411.627', 'M194.939,112.005l1.622,2.257v100.242c-9.389-8.295-23.839-16.834-42.744-16.834h-0.049     c-18.622,0-32.72,8.256-41.953,16.453v-99.949c1.641-2.491,5.178-7.396,10.542-12.135c7.367-6.478,17.655-12.437,31.47-12.437     c14.157,0,24.963,6.399,32.544,13.131C190.142,106.075,193.073,109.475,194.939,112.005z M130.72,219.848h46.34     c-6.39-3.703-14.128-6.399-23.263-6.399C144.574,213.468,136.992,216.155,130.72,219.848z M231.333,219.848h46.34     c-6.39-3.703-14.128-6.399-23.302-6.399C245.187,213.468,237.605,216.155,231.333,219.848z M365.399,0v319.152H264.942     l-59.158,92.475l-59.168-92.475H46.228V0H365.399z M322.713,243.736v-117.74h-9.692v-14.108l-1.045-3.918     c-0.322-0.469-5.002-8.666-14.46-17.117c-9.389-8.383-23.966-17.117-43.145-17.117c-19.159,0-33.58,8.754-42.803,17.195     c-2.833,2.628-5.217,5.188-7.201,7.523c-2.032-2.374-4.514-4.953-7.435-7.591c-9.37-8.383-23.966-17.117-43.116-17.117     c-19.218,0-33.639,8.754-42.871,17.195c-9.233,8.471-13.756,16.707-14.01,17.195l-0.997,3.771v14.108h-7.064v117.711h233.839     V243.736z M287.003,102.724c-7.65-6.732-18.436-13.131-32.632-13.131c-13.747,0-24.044,5.96-31.431,12.437     c-5.354,4.739-8.91,9.663-10.552,12.135v99.949c9.213-8.187,23.37-16.482,41.982-16.453c18.935,0,33.355,8.51,42.784,16.834     V114.252l-1.622-2.257C293.637,109.475,290.775,106.075,287.003,102.724z'],
        ['0 0 624.138 624.138', 'M312.069,329.899c-85.45,0-154.984-69.505-154.984-154.965S226.619,19.951,312.069,19.951     c85.46,0,154.984,69.515,154.984,154.974S397.528,329.899,312.069,329.899z M239.428,59.95l7.181-3.029     c10.454,24.689,45.304,58.377,46.858,58.855h70.599v7.787l-71.615-0.059C290.926,123.329,252.559,90.921,239.428,59.95z      M307.848,112.015l-7.845-73.462l26.301,29.086l76.999,23.79l-13.913,20.576L307.848,112.015L307.848,112.015z M365.648,128.419     l49.31,147.784h-41.044l-24.347-64.757l-36.091,16.639c-3.039,1.192-6.419,5.1-7.201,16.59c0,0,6.458,0.156,19.648,0.195h-0.098     c0.039,0,18.436,1.671,11.89,20.82v0.215c-2.247,5.676-4.846,10.288-4.846,10.288h-90.511l-26.243-52.212     c-17.791-4.856-30.942-20.713-31.05-39.55c-0.02-2.14,0.195-4.299,0.498-6.331c0.772-3.556,2.482-7.982,5.491,0.576l0.078-0.41     c4.905,12.105,15.408,20.732,28.509,24.064l82.538-73.921L365.648,128.419L365.648,128.419z M312.069,0     C203.473,0,115.444,88.029,115.444,196.576c0,108.625,196.625,427.562,196.625,427.562S508.693,305.2,508.693,196.576     C508.693,88.029,420.684,0,312.069,0z'],
        ['0 0 684.253 684.253', 'M342.156,0c-119.04,0-215.588,96.519-215.588,215.549c0,119.059,215.579,468.704,215.579,468.704     s215.54-349.645,215.54-468.704C557.696,96.519,461.196,0,342.156,0z M342.156,382.355c-91.957,0-166.796-74.82-166.796-166.796     c0-91.957,74.839-166.796,166.796-166.796c91.976,0,166.796,74.839,166.796,166.796     C508.972,307.535,434.132,382.355,342.156,382.355z M467.38,300.374v10.425H224.836v-10.425h15.027v-52.661h62.451v-6.282     h-65.196l73.022-34.391l4.699-10.874v-32.818h-5.628l31.05-44.357V88.733h-13.278v-8.93h13.278V65.929h8.92v13.874h13.287v8.93     h-13.287v28.47l31.02,46.144h-5.608v32.857l3.937,9.106l73.784,36.12h-65.216v6.282h65.206v52.661H467.38z'],
        ['0 0 648.7 648.7', 'M410.845,193.566v107.55H236.907v-107.55c0-22.256,18.055-40.331,40.331-40.331h0.83     c2.57,0,5.071,0.293,7.503,0.762c4.006-16.824,18.495-29.408,36.208-30.708v-21.533h-20.81v-6.732h20.801v-14.88h6.732v14.89     h20.781v6.732h-20.781v21.533c17.616,1.299,32.017,13.766,36.101,30.454c1.68-0.215,3.322-0.508,5.061-0.508h0.84     C392.79,153.245,410.845,171.31,410.845,193.566z M528.712,204.382c0,112.836-204.353,444.318-204.353,444.318     S119.987,317.218,119.987,204.382C119.987,91.517,211.495,0,324.36,0C437.205-0.01,528.712,91.517,528.712,204.382z      M482.48,204.392c0-87.199-70.951-158.159-158.12-158.159c-87.199,0-158.13,70.951-158.13,158.159     c0,87.16,70.931,158.091,158.13,158.091C411.539,362.493,482.48,291.551,482.48,204.392z'],
        ['0 0 436.277 436.277', 'M48.997,0v338.272h106.417l62.715,98.004l62.734-98.004H387.28V0H48.997z M190.743,66.007     c7.552,0,13.688,8.969,13.688,20.029c0,11.04-6.126,20.019-13.688,20.019c-7.552,0-13.688-8.979-13.688-20.019     C177.055,74.966,183.181,66.007,190.743,66.007z M161.726,75.846c5.305-0.752,10.522,4.924,11.627,12.721     c1.124,7.777-2.286,14.704-7.611,15.447c-5.325,0.772-10.522-4.934-11.626-12.711C152.981,83.525,156.401,76.598,161.726,75.846z      M140.387,85.186c4.485-1.065,9.34,3.39,10.894,9.926c1.534,6.536-0.86,12.701-5.305,13.756c-4.504,1.055-9.36-3.41-10.894-9.946     C133.529,92.416,135.923,86.231,140.387,85.186z M120.105,96.832c3.791-1.505,8.627,1.759,10.796,7.298     c2.218,5.52,0.938,11.206-2.872,12.691c-3.791,1.505-8.608-1.759-10.796-7.279C115.053,104.003,116.333,98.327,120.105,96.832z      M104.56,121.033c-1.72-4.357-0.713-8.842,2.267-10.014c2.98-1.172,6.79,1.397,8.51,5.755c1.729,4.357,0.694,8.832-2.267,10.014     C110.09,127.95,106.28,125.39,104.56,121.033z M188.916,311.062c-18.905,3.039-37.215-13.278-40.917-36.433     c-1.72-10.63-3.39-32.251-5.549-41.719l-16.258-45.695c-0.928-4.045-11.626-23.263-13.307-31.646     c-3.449-17.029,7.552-33.619,24.572-37.058l29.731-6.009c4.465-0.918,17.733-1.778,17.733-1.778     c18.221,0,26.995,9.438,26.995,27.669c0,10.571-11.275,25.686-18.69,26.839c-7.445,1.153-6.732-1.563-11.793-1.563     c-7.249,0-14.323,6.214-14.323,13.454v0.616l0.195,5.207c0.195,3.224-0.606,18.182,8.666,37.146     c9.262,18.974,30.375,14.118,35.954,49.994C213.468,297.247,207.802,308.024,188.916,311.062z M318.273,64.727     c2.159-5.54,6.986-8.822,10.776-7.298c3.791,1.475,5.071,7.171,2.872,12.691c-2.159,5.53-7.025,8.793-10.796,7.298     C317.354,75.924,316.045,70.228,318.273,64.727z M297.873,55.709c1.563-6.556,6.409-11.001,10.894-9.946     c4.465,1.045,6.839,7.21,5.305,13.747c-1.544,6.546-6.39,11.001-10.894,9.936C298.713,68.42,296.339,62.246,297.873,55.709z      M275.792,49.144c1.124-7.797,6.341-13.473,11.646-12.721c5.305,0.752,8.695,7.689,7.601,15.447     c-1.094,7.777-6.302,13.483-11.617,12.721C278.078,63.848,274.688,56.921,275.792,49.144z M258.431,26.585     c7.572,0,13.698,8.969,13.698,20.029c0,11.05-6.106,20.029-13.698,20.029c-7.543,0-13.678-8.979-13.678-20.029     C244.733,35.554,250.859,26.585,258.431,26.585z M336.309,116.167c-1.7,8.383-12.398,27.62-13.327,31.655l-16.238,45.695     c-2.179,9.458-3.859,31.089-5.54,41.728c-3.713,23.126-22.032,39.423-40.937,36.433c-18.886-3.058-24.572-13.835-22.999-40.986     c5.628-35.886,26.712-31.02,35.974-49.984c9.272-18.974,8.451-33.922,8.647-37.136l0.205-5.208v-0.635     c0-7.24-7.054-13.444-14.304-13.444c-5.081,0-4.357,2.697-11.793,1.544c-7.464-1.133-18.72-16.258-18.72-26.829     c0-18.221,8.793-27.669,27.014-27.669c0,0,13.248,0.87,17.733,1.788l29.692,6.018C328.727,82.548,339.738,99.148,336.309,116.167     z M344.603,81.61c-1.729,4.357-5.53,6.917-8.51,5.735c-2.99-1.163-3.986-5.657-2.267-10.005c1.729-4.357,5.53-6.937,8.51-5.745     C345.317,72.778,346.323,77.262,344.603,81.61z'],
        ['0 0 431.587 431.587', 'M48.484,0v334.628h105.283l62.031,96.959l62.041-96.959h105.264V0H48.484z M212.008,67.951     c3.078,0,20.576,0.127,23.605,0.352c50.6,3.849,85.821,39.471,104.697,89.084l-243.306,0.694     C117.647,107.267,158.604,67.951,212.008,67.951z M94.209,166.171H344.98v20.547H94.209V166.171z M299.861,193.107l-3.087,2.032     l-5.374-2.032H299.861z M240.908,193.117c-2.706,1.847-6.185,4.045-14.333,6.194c-3.507,0.918-5.745,1.417-7.171,1.68     c-0.664-0.909-2.071-1.827-3.986-1.729l-1.231-2.228c-0.537-1.104-1.28-2.462-2.169-3.918     C212.017,193.117,240.908,193.117,240.908,193.117z M195.34,193.098c-1.905,1.436-3.889,2.579-6.165,2.423     c-3.087-0.107-3.742-0.782-5.315-2.423H195.34z M147.231,193.088L147.231,193.088l-2.96,1.856     c-5.579,3.498-11.382,7.103-17.938,9.458c-11.597,4.143-19.071-6.771-21.543-11.314H147.231z M334.281,250.351H105.542     c-12.301,0-7.552-27.591-7.552-27.591h243.834C341.814,222.76,344.315,250.351,334.281,250.351z M352.532,213.654     L352.532,213.654H122.239l-1.016,0.078l-0.801-0.078H86.656v-20.547h13.786l-3.371,1.847c3.097,7.064,11.412,18.202,23.36,18.7     h1.817c2.013-0.098,4.152-0.459,6.39-1.241c7.318-2.628,13.708-6.614,19.335-10.141c7.992-5.032,14.899-9.36,21.524-7.914     c5.764,1.251,7.513,3.078,9.174,4.836c2.022,2.13,4.309,4.524,10.288,4.729c5.843,0.225,10.112-3.341,13.17-5.911l2.364-2.11     c1.426,1.788,2.276,3.556,3.048,5.11c1.045,2.14,2.394,4.875,5.139,6.038l0.508,0.752c1.925,2.755,4.768,2.364,15.105-0.313     c9.672-2.521,13.844-5.354,16.873-7.425c2.716-1.837,4.045-2.745,8.647-2.745h25.168l18.641,6.995l14.753-9.614l20.762,12.379     l3.547-7.386l-11.001-6.585h26.848V213.654z'],
        ['0 0 684.263 684.263', 'M342.132,0C223.141,0,126.582,96.5,126.582,215.54c0,119.079,215.549,468.724,215.549,468.724     S557.681,334.618,557.681,215.54C557.691,96.5,461.191,0,342.132,0z M342.132,382.336c-47.239,0-89.856-19.824-120.232-51.518     c12.32-2.745,24.357-9.926,35.964-21.563c14.714-14.694,30.248-22.002,46.213-21.387c24.044,0.743,41.592,18.915,43.594,21.064     c2.794,3.263,23.869,24.846,33.844,25.471c2.022,0.303,4.094,0.479,6.175,0.479c15.251-0.039,31.538-8.588,48.567-25.627     c18.114-18.094,35.016-26.086,50.277-23.722c2.169,0.362,4.133,0.899,6.057,1.602     C465.734,343.294,408.491,382.336,342.132,382.336z M494.829,282.446c-2.325-0.86-4.817-1.524-7.474-1.944     c-16.971-2.687-35.417,5.784-54.723,25.109c-18.124,18.114-35.055,26.106-50.297,23.741     c-9.672-1.866-30.288-23.048-30.288-23.048l-0.352-0.557c-0.801-0.899-19.745-22.1-47.385-22.999     c-17.41-0.557-34.323,7.132-50.092,22.862c-11.841,11.851-24.074,18.759-36.394,20.762c-6.185-6.976-11.802-14.391-16.785-22.276     l4.397,0.801l2.364,0.225c17.303,0.86,34.059-6.829,50.053-22.862c14.714-14.694,30.248-22.002,46.213-21.406     c24.044,0.762,43.594,21.084,43.594,21.084s13.033,15.417,25.725,23.282c2.54,0.938,5.207,1.7,8.119,2.179l0.567,0.059     c1.856,0.264,3.732,0.401,5.608,0.401c12.349,0,25.461-5.764,39.081-17c3.117-2.599,6.282-5.403,9.487-8.588     c18.114-18.114,35.016-26.067,50.277-23.702c5.852,0.899,10.816,3.263,15.017,6.185     C499.666,270.78,497.37,276.681,494.829,282.446z M487.365,253.506c-16.971-2.648-35.417,5.784-54.723,25.129     c-4.074,4.064-8.285,7.787-12.008,10.552c-3.722,2.784-5.862-1.563-5.862-1.563l-0.195,0.059l0.176-0.098l-40.019-70.091     l-8.06-14.177l-28.421-49.789c-3.996-7.064-12.945-9.487-20-5.491c-7.044,4.025-9.458,12.994-5.491,20l31.499,55.153l-8.06,7.122     l-48.04,27.425l-29.506,16.814c0,0-34.088,22.784-43.819,24.982c-4.69,0.596-4.69,0.596-6.741,0.498     c-3.644-0.156-7.318-0.997-10.825-2.159c-13.883-24.308-21.924-52.378-21.924-82.323c0-91.957,74.82-166.796,166.777-166.796     c91.967,0,166.826,74.839,166.826,166.777c0,15.232-2.237,29.916-6.067,43.907C498.493,256.672,493.335,254.454,487.365,253.506z      M455.524,210.625c8.686,15.193,3.4,34.538-11.783,43.223c-15.163,8.608-34.528,3.361-43.174-11.832     c-8.666-15.154-3.371-34.498,11.802-43.184C427.572,190.166,446.887,195.491,455.524,210.625z'],
        ['0 0 648.719 648.719', 'M324.369,46.213c87.248,0,158.14,70.922,158.14,158.111c0,87.228-70.892,158.15-158.14,158.15     c-87.169,0-158.15-70.922-158.15-158.15C166.22,117.134,237.2,46.213,324.369,46.213 M324.369,0     C211.534,0,119.997,91.498,119.997,204.323c0,112.904,204.372,444.396,204.372,444.396s204.353-331.502,204.353-444.396     C528.722,91.498,437.264,0,324.369,0z M324.282,342.952c88.41-48.294,89.123-165.692,89.123-165.692H235.373     C235.373,177.26,234.035,295.235,324.282,342.952z M300.354,196.81c6.087-1.026,14.157-1.876,24.367-1.876     c12.564,0,21.778,2.931,27.601,8.178c5.266,4.67,8.617,11.851,8.617,20.576c0,8.901-2.628,15.945-7.591,21.025     c-6.839,7.162-17.664,10.816-30.073,10.816c-3.82,0-7.308-0.127-10.229-0.889v39.462h-12.691V196.81L300.354,196.81z      M348.218,224.411c0-13.131-9.35-19.394-23.204-19.394c-5.579,0-9.78,0.44-11.988,1.026v38.27     c2.765,0.684,6.282,0.987,10.503,0.987C338.888,245.3,348.218,237.698,348.218,224.411z M235.285,110.481v56.55h178.208v-56.55     c0,0-28.138,9.047-90.052,9.047C265.338,119.518,235.285,110.481,235.285,110.481z'],
        ['0 0 220.327 220.327', 'M196.859,113.109v107.218H23.468V113.109c0-22.217,17.997-40.214,40.214-40.214h0.83     c2.56,0,5.041,0.293,7.464,0.743c3.986-16.766,18.436-29.31,36.091-30.61V21.573H87.326V14.88h20.732V0h6.712v14.88h20.732v6.693     H114.77v21.465c17.577,1.299,31.948,13.717,36.032,30.356c1.661-0.205,3.302-0.508,5.022-0.508h0.84     C178.872,72.895,196.869,90.892,196.859,113.109z'],
        ['0 0 184.434 184.434', 'M91.743,0.021C40.801,0.294-0.253,41.788,0.001,92.71c0.274,50.922,41.797,91.976,92.719,91.703     c50.922-0.264,91.986-41.748,91.713-92.699C184.169,40.811,142.675-0.243,91.743,0.021z M73.795,117.468l5.041-0.039     l-15.271,21.787l-2.11-3.332L73.795,117.468z M38.066,78.221l2.276-3.205l21.143,6.429l1.593,4.846L38.066,78.221z      M75.398,114.713c-0.528-1.651-9.243-27.982-10.62-32.085l-0.059-0.117l-0.107-0.342c1.28-0.918,19.11-13.639,25.305-18.104     l2.052-1.475l2.062,1.456l25.51,17.821l-0.068,0.342l-0.068,0.117c-1.28,4.113-9.78,30.561-10.308,32.202h-0.694l-4.729,0.039     L75.398,114.713z M89.779,35.594l2.061,0.782l2.032-0.811l0.147,25.119l-2.052-1.446l-2.052,1.475L89.779,35.594z      M110.355,117.272l13.121,18.231l-0.176,0.059l-2.482,3.556l-15.515-21.817L110.355,117.272z M121.132,85.979l1.563-4.856     l20.967-6.478l2.706,3.224L121.132,85.979z M145.743,42.619l-0.371,5.891c-7.709-9.624-17.918-17.156-29.682-21.563l5.52-2.189     C130.609,28.931,138.943,35.047,145.743,42.619z M70.737,10.807l2.403-4.817c5.852-1.27,11.929-1.983,18.124-1.993     c6.233-0.049,12.301,0.586,18.163,1.788l2.697,4.866l6.8,12.076l-1.329,0.528l-5.901,2.345l-17.831,7.025l-2.032,0.811     l-2.052-0.791l-18.212-6.986l-5.979-2.286L64.562,23L70.737,10.807z M61.905,24.905l5.589,2.169     c-11.49,4.348-21.485,11.705-29.096,21.123l-0.44-5.813C44.622,35.017,52.799,29.067,61.905,24.905z M19.346,97.058L8.775,86.985     l-3.849-3.703C6.068,70.854,9.82,59.189,15.614,48.793l5.305-0.928l14.518-2.628v0.049l0.479,6.224l1.661,22.237l0.039,0.616     l-2.306,2.951l-12.056,15.3l-3.674,4.651L19.346,97.058z M19.815,101.269l0.02,0.078l3.625-4.572     c0.938,11.744,4.866,22.647,10.991,31.968l-5.442-1.163C24.192,119.539,21.144,110.961,19.815,101.269z M63.195,169.162     l-4.885,2.53c-11.353-4.709-21.524-11.851-29.897-20.703l0.821-5.237l2.149-14.147l0.166-0.801l5.344,1.387l22.383,5.95     l0.459,0.107l1.895,2.999l9.868,15.437l3.341,5.178l0.645,0.967L63.195,169.162z M92.144,163.876     c-4.641,0.02-9.155-0.401-13.581-1.231l-3.107-4.866c5.325,1.309,10.913,2.003,16.639,1.964     c6.097-0.049,12.017-0.86,17.586-2.394l-3.136,4.983C101.933,163.31,97.097,163.837,92.144,163.876z M126.72,171.057     l-4.944-2.423l-12.125-5.979l0.733-1.192l3.332-5.364l11.372-18.192c0.674-0.176,13.639-3.752,21.797-6.038l6.155-1.69     l0.186-0.049l2.589,13.883l0.987,5.178C148.478,158.532,138.249,165.977,126.72,171.057z M155.132,126.789l-5.823,1.593     c6.292-9.682,10.2-21.045,10.884-33.209l3.762,4.612C162.743,109.486,159.704,118.631,155.132,126.789z M164.785,96.482     l-0.508-0.625l-3.957-4.905l-11.49-14.235l-2.335-2.931l0.049-0.625l1.339-21.26l0.42-6.282l0.068-0.967     c1.417,0.264,8.031,1.368,13.639,2.276l5.335,0.928c6.087,10.542,10.005,22.471,11.197,35.202l-3.84,3.742L164.785,96.482z'],
        ['0 0 426.341 426.341', 'M47.898,0v330.554h103.984l61.288,95.787l61.269-95.787h104.003V0H47.898z M227.708,59.539     l81.737,25.256l-14.772,21.827h-86.515l-8.324-77.956C199.824,28.675,227.708,59.539,227.708,59.539z M143.118,48.167     c11.118,26.223,48.069,61.943,49.72,62.47h74.918v8.256l-75.992-0.039c-1.612-0.234-42.324-34.606-56.266-67.453     C135.517,51.411,143.118,48.167,143.118,48.167z M278.21,280.863l-25.832-68.723l-38.27,17.664     c-3.234,1.26-6.82,5.432-7.65,17.596c0,0,6.868,0.176,20.85,0.225h-0.127c0.059,0,19.579,1.759,12.633,22.081v0.264     c-2.374,6.009-5.149,10.894-5.149,10.894h-96.05l-27.825-55.416c-18.886-5.129-32.847-21.963-32.955-41.963     c-0.02-2.257,0.205-4.553,0.528-6.722c0.84-3.762,2.648-8.461,5.843,0.616l0.059-0.449c5.207,12.858,16.355,22.012,30.258,25.549     l87.58-78.435h67.355l52.319,156.811L278.21,280.863L278.21,280.863z'],
        ['0 0 617.719 617.719', 'M267.082,236.633h-56.354v-14.372h10.542v-4.289h-26.448v4.289h12.271v14.372h-12.271v15.574     h111.976l-0.107-2.237c0-20.498,16.629-37.107,37.107-37.107c20.508,0,37.088,16.609,37.088,37.107l-0.117,2.237h18.085v-74.605     h-30.962v-17.137h30.962v-20.996h-131.77V236.633L267.082,236.633z M321.267,160.553h35.71v17.127h-35.71V160.553z      M276.022,160.153h35.71v17.108h-35.71V160.153z M343.797,222.271c-15.3,0-27.708,12.408-27.708,27.708     c0,15.29,12.398,27.689,27.708,27.689c15.29,0,27.698-12.379,27.698-27.689C371.486,234.679,359.098,222.271,343.797,222.271z      M343.797,259.877c-5.452,0-9.917-4.426-9.917-9.907c0-5.462,4.465-9.907,9.917-9.907c5.432,0,9.907,4.445,9.907,9.907     C353.695,255.451,349.23,259.877,343.797,259.877z M266.281,115.962v18.729h133.363v-18.729     C399.644,115.962,339.332,73.872,266.281,115.962z M308.859,0C201.407,0,114.267,87.121,114.267,194.602     c0,107.443,194.592,423.117,194.592,423.117s194.592-315.674,194.592-423.117C503.452,87.13,416.351,0,308.859,0z      M308.859,345.16c-83.017,0-150.578-67.541-150.578-150.548c0-83.027,67.561-150.568,150.578-150.568     c83.037,0,150.539,67.541,150.539,150.568C459.398,277.619,391.886,345.16,308.859,345.16z'],
        ['0 0 252.891 252.891', 'M110.637,204.011l16.521-0.039v-0.156h-0.068l0.078-0.518v-3.078c-0.176-2.648,0-13.942,0-13.942      c-1.641-19.032-9.37-49.163-40.077-69.407c-0.576-0.371-14.997-9.389-20.078-30.678C62.08,65.226,68.02,40.39,84.678,12.34      C62.451,26.262,47.6,50.981,47.6,79.216c0,24.308,11.07,46.047,28.373,60.477c0,0,5.442,4.211,7.083,5.295      C113.617,168.731,110.637,204.011,110.637,204.011z M162.634,114.252c0.176-0.029,16.619-9.477,17.704-30.112      c1.202-21.543-3.224-47.854-21.016-76.569c-8.852-4.103-18.641-6.556-28.929-7.103v167.382      C134.985,150.079,139.381,129.601,162.634,114.252z M75.68,83.721c1.143,20.537,17.557,30.004,17.723,30.063      c23.243,15.378,27.669,35.827,32.271,53.599V0c-10.298,0.508-20.039,2.999-28.89,7.083      C78.962,35.827,74.566,62.128,75.68,83.721z M159.322,7.513v0.068l0.42,0.166L159.322,7.513z M169.893,12.008      c18.104,29.271,25.627,51.87,20.459,73.608c-5.002,21.221-19.472,30.356-20.097,30.688      c-29.867,19.658-37.938,48.802-39.862,67.844v19.814h17.274c0,0-0.42-39.335,24.543-60.614      c22.589-15.193,33.082-37.703,33.082-64.131C205.271,49.75,193.762,25.529,169.893,12.008z M129.953,204.245h0.44v-0.274h-0.42      L129.953,204.245z M108.234,209.521h43.467v43.37h-43.467C108.234,252.891,108.234,209.521,108.234,209.521z'],
        ['0 0 626.131 626.131', 'M227.327,215.344h5.012v2.55h-2.882l-1.514,8.5h-2.648L227.327,215.344z M254.586,215.344v2.55     h2.892l1.514,8.5h2.648l-2.042-11.05H254.586L254.586,215.344z M254.029,119.264v174.984c0,10.151-5.696,13.522-10.601,13.522     c-4.905,0-10.532-3.371-10.532-13.522V119.255c0-13.092,5.628-15.505,10.532-15.505     C248.333,103.749,254.029,106.172,254.029,119.264z M249.232,230.293L249.232,230.293l-0.01-13.795l-2.491-3.615h-6.644     l-2.384,3.615v13.795l3.078,8.998h5.374L249.232,230.293z M368.291,290.291V149.708l-2.921,0.948v139.635H368.291     L368.291,290.291z M389.219,150.636v139.635h2.902V149.698L389.219,150.636z M360.026,125.214     c-1.866,5.833-1.075,9.565,0.674,13.903c0.801,2.052,0.957,4.563,0.596,6.37c-0.645,3.371-2.579,5.462-2.579,5.462l14.313-4.768     c-4.064-3.976,0-7.845,0-7.845c-3.801-4.084,0-7.826,0-7.826c-3.683-4.309,0-8.08,0-8.08c-1.602-2.159-1.319-4.651,0.547-8.08     c1.729-3.322-2.189-2.794-2.189-2.794s-6.36-0.147-11.148,0.127c-1.329,0.088-2.482,0.107-2.931,1.319     c-0.616,1.788,0.87,2.521,1.641,3.459C359.977,117.613,361.696,120.036,360.026,125.214z M383.865,125.205     c-1.856,5.833-1.084,9.565,0.684,13.903c0.801,2.052,0.957,4.563,0.596,6.37c-0.674,3.371-2.599,5.462-2.599,5.462l14.313-4.768     c-4.045-3.976,0-7.836,0-7.836c-3.771-4.084,0-7.826,0-7.826c-3.664-4.309,0-8.08,0-8.08c-1.563-2.159-1.29-4.651,0.537-8.08     c1.72-3.312-2.14-2.785-2.14-2.785s-6.39-0.147-11.167,0.127c-1.378,0.088-2.462,0.107-2.911,1.319     c-0.655,1.788,0.84,2.521,1.622,3.459C383.826,117.603,385.545,120.026,383.865,125.205z M380.494,294.971h20.39v-2.951h-20.39     V294.971z M356.655,294.971h20.381v-2.951h-20.381V294.971z M388.574,309.919h4.24v-13.19h-4.24V309.919z M510.301,197.279     c0,108.908-197.211,428.852-197.211,428.852S115.83,306.187,115.83,197.279C115.83,88.322,204.152,0,313.1,0     C422.008,0.01,510.301,88.322,510.301,197.279z M465.69,197.289c0-84.18-68.469-152.63-152.6-152.63     c-84.17,0-152.63,68.45-152.63,152.63c0,84.141,68.46,152.571,152.63,152.571C397.221,349.86,465.719,281.439,465.69,197.289z      M313.227,119.264v174.984c0,10.151-5.667,13.522-10.571,13.522s-10.562-3.371-10.562-13.522V119.255     c0-13.092,5.647-15.505,10.562-15.505C307.55,103.759,313.207,106.172,313.227,119.264z M308.429,230.293L308.429,230.293     l-0.01-13.795l-2.53-3.615h-6.624l-2.413,3.615v13.795l3.107,8.998h5.354L308.429,230.293z M284.493,226.394h2.648l1.514-8.5     h2.902v-2.55h-5.061L284.493,226.394z M313.783,215.344v2.55h2.853l1.534,8.5h2.657l-2.022-11.05H313.783L313.783,215.344z      M364.735,309.919h4.24v-13.19h-4.24V309.919z'],
        ['0 0 465.978 465.978', 'M52.344,0v361.291H166l66.974,104.687l67.004-104.687h113.656V0H52.344z M243.096,43.272     l97.282,148.663h-97.282V43.272z M222.208,76.618v115.327h-75.475L222.208,76.618z M320.369,287.38h-171.3l-44.063-78.591     h259.427L320.369,287.38z'],
        ['0 0 196.234 196.234', 'M112.567,168.653V59.754h21.045v108.898C133.612,168.653,112.567,168.653,112.567,168.653z      M179.522,168.653V59.754h-21.064v108.898C158.457,168.653,179.522,168.653,179.522,168.653z M96.876,0L13.243,55.143H183     L96.876,0z M10.185,176.615v19.618h175.863v-19.618H10.185z M37.786,168.653V59.754H16.731v108.898     C16.731,168.653,37.786,168.653,37.786,168.653z M82.074,168.653V59.754H61.01v108.898     C61.01,168.653,82.074,168.653,82.074,168.653z'],
        ['0 0 368.579 368.579', 'M243.497,128.077l-27.571,8.705l1.7-5.305l22.979-6.937L243.497,128.077z M162.082,70.57     l19.863,7.738l2.247,0.889l2.247-0.889l19.501-7.582l6.448-2.511l1.446-0.576l-7.328-13.229l-2.941-5.315     c-6.399-1.348-13.014-2.091-19.814-2.091c-6.8,0-13.444,0.733-19.833,2.091l-2.687,5.247l-6.751,13.287l1.055,0.401     L162.082,70.57z M242.598,95.992l0.459-6.458c-7.396-8.295-16.463-15.007-26.702-19.638l-6.048,2.355     C223.116,77.106,234.225,85.411,242.598,95.992z M157.646,72.084l-6.097-2.374c-10.005,4.465-18.954,10.943-26.292,18.925     l0.44,6.37C134.052,84.756,145.043,76.774,157.646,72.084z M202.589,167.92c0.606-1.807,9.995-30.639,11.451-35.124l0.059-0.156     l0.107-0.352c-1.426-0.997-20.967-14.802-27.777-19.618l-2.247-1.593l-2.247,1.593l-27.777,19.618l0.107,0.352l0.059,0.156     l11.431,35.124h36.052C201.808,167.92,202.589,167.92,202.589,167.92z M150.397,190.968l2.286,3.644l16.814-23.693h-5.53     L150.397,190.968z M217.987,190.968l0.166-0.039l-14.225-20.009h-5.51l16.824,23.947L217.987,190.968z M186.439,108.976V81.522     l-2.247,0.899l-2.247-0.899v27.454l2.247-1.583L186.439,108.976z M150.729,131.477l-23.028-7.152l-2.53,3.478l27.317,8.979     L150.729,131.477z M250.688,185.233l-0.186,0.039l-6.741,1.837c-8.92,2.423-23.126,6.263-23.869,6.448L207.367,213.4     l-3.664,5.803l-0.84,1.299c1.397,0.703,7.67,3.849,13.239,6.614l5.354,2.677c12.652-5.471,23.898-13.6,33.004-23.683     l-1.045-5.667L250.688,185.233z M246.418,183.269l6.321-1.72c5.071-8.881,8.5-18.837,9.819-29.447l-4.045-5.071     C257.693,160.348,253.365,172.736,246.418,183.269z M245.832,92.817l-0.469,6.859c-0.606,8.275-1.436,20.224-1.641,23.214     l-0.029,0.684l2.53,3.234l12.467,15.622l4.279,5.374l0.547,0.703l10.903-10.522l4.23-4.084     c-1.221-13.922-5.452-26.975-12.027-38.563l-5.833-0.997l-14.899-2.57L245.832,92.817z M327.178,0v285.758h-89.934     l-52.964,82.822l-52.974-82.822H41.401V0H327.178z M285.02,143.426c0-55.651-45.119-100.76-100.75-100.76     c-55.67,0-100.779,45.119-100.779,100.76c0,55.661,45.119,100.76,100.779,100.76C239.911,244.186,285.02,199.077,285.02,143.426z      M120.911,182.976c-6.653-10.2-10.864-22.149-11.812-34.987l-3.976,4.993l-0.049-0.078c1.426,10.581,4.69,19.97,9.868,28.812     L120.911,182.976z M122.132,126.817l2.57-3.234l-0.059-0.684c-0.195-3.117-1.104-16.023-1.69-24.289l-0.459-6.79v-0.049     l-15.877,2.755l-5.794,0.997c-6.409,11.324-10.581,24.054-11.881,37.625l4.182,4.055l11.47,11.089l0.254,0.225l4.045-5.061     L122.132,126.817z M183.772,217.191c-6.292,0-12.398-0.782-18.202-2.237l3.371,5.335c4.817,0.918,9.751,1.426,14.841,1.426     c5.403,0,10.689-0.557,15.789-1.612l3.439-5.413C196.844,216.341,190.425,217.191,183.772,217.191z M161.242,213.742     c-3.42-5.481-8.06-12.76-10.708-16.941l-2.071-3.253l-0.469-0.117l-24.455-6.624l-5.823-1.573l-0.156,0.879l-2.443,15.456     l-0.948,5.725c9.116,9.702,20.166,17.537,32.574,22.784l5.344-2.726l13.444-6.849l-0.723-1.075L161.242,213.742z'],
        ['0 0 638.353 638.353', 'M319.186,0C208.109,0,118.077,90.061,118.077,201.09c0,111.067,201.099,437.264,201.099,437.264     S520.276,312.167,520.276,201.09C520.286,90.061,430.234,0,319.186,0z M319.186,356.718c-85.821,0-155.59-69.837-155.59-155.629     S233.365,45.5,319.186,45.5c85.792,0,155.58,69.798,155.58,155.59C474.757,286.881,404.978,356.718,319.186,356.718z      M277.302,220.474c-1.573-1.036-6.829-5.08-6.829-5.08c-16.687-13.932-27.386-34.928-27.386-58.367     c0-27.249,14.333-51.088,35.798-64.551c-16.101,27.073-21.817,51.069-17.039,71.293c4.875,20.508,18.827,29.252,19.374,29.584     c29.604,19.531,37.058,48.597,38.641,66.935c0,0-0.166,10.943,0,13.444v3.009l-0.068,0.498h0.068v0.147l-15.916,0.039     C303.955,277.434,306.808,243.414,277.302,220.474z M322.987,242.564V81.083c9.926,0.498,19.364,2.882,27.904,6.839     c17.195,27.718,21.475,53.081,20.302,73.892c-1.055,19.892-16.922,29.008-17.088,29.037     C331.663,205.652,327.423,225.407,322.987,242.564z M290.56,87.453c8.559-3.957,17.948-6.351,27.884-6.839v161.481     c-4.416-17.147-8.695-36.892-31.138-51.704c-0.166-0.068-16.004-9.203-17.098-29.037     C269.095,140.534,273.374,115.171,290.56,87.453z M351.32,88.078l-0.42-0.166v-0.059L351.32,88.078z M395.228,157.036     c0,25.51-10.132,47.209-31.929,61.894c-24.064,20.508-23.644,58.465-23.644,58.465h-16.668h-0.01v-19.12     c1.847-18.397,9.653-46.506,38.465-65.48c0.596-0.332,14.558-9.116,19.384-29.584c4.983-20.977-2.286-42.774-19.745-71.049     C384.138,105.234,395.228,128.605,395.228,157.036z M322.987,277.404L322.987,277.404l0.01,0.264h-0.44l0.02-0.264H322.987z      M301.6,282.739h41.963v41.875H301.6C301.6,324.614,301.6,282.739,301.6,282.739z'],
        ['0 0 185.623 185.623', 'M98.728,111.673L98.141,5.305l70.208,105.987L98.728,111.673z M0,124.267l31.812,56.051     l122.606-0.655l31.206-56.393L0,124.267z M83.349,29.232l-53.54,82.841l54-0.274L83.349,29.232z'],
        ['0 0 431.587 431.587', 'M243.683,205.007c-14.411-22.315-31.665-46.291-46.672-59.305     c-2.179-1.886-5.95,67.951-8.832-4.905s-9.418-7.474-10.386-4.357c0,0-3.087,27.835-9.018,1.514     c-1.006-28.373-18.954,15.368-18.954,15.368L96.016,256.271h178.188c0,0-11.07-20.556-26.292-44.689L243.683,205.007z M48.484,0     v334.618h105.274l62.041,96.969l62.041-96.969h105.264V0H48.484z M216.385,262.817H85.67l94.165-199.341l68.977,130.695     l4.123,7.797l29.731,56.335l2.364,4.504L216.385,262.817L216.385,262.817z M291.556,256.281l-2.384-4.494h63.565     c0,0-30.385-56.403-53.169-76.158c-1.475-1.29-4.084,46.799-6.067-3.38c-1.993-50.18-6.507-5.149-7.161-3.009     c0,0-2.12,19.169-6.204,1.045c-0.703-19.56-13.063,10.571-13.063,10.571l-7.621,14.577l-4.123-7.797l32.427-68.635     l72.436,137.281H291.556L291.556,256.281z'],
        ['0 0 203.6 203.6', 'M150.133,53.12c-20.146-22.491-66.974-22.423-90.462-5.794     c-25.158,17.811-13.649,51.547-9.536,76.569c3.947,23.986,3.039,47.805,2.931,71.928c-0.01,2.443-0.01,4.885-0.01,7.328     c0,0.107,7.972,0.42,8.412,0.449l81.503-0.449c5.784-0.694,7.044,1.124,8.344-4.719c1.417-6.224-0.616-15.056-0.762-21.485     c-0.401-14.597-0.42-29.271,1.358-43.77C154.793,108.937,168.852,74.048,150.133,53.12z M59.29,107.755l-0.254-46.819     l82.744-0.498l0.244,46.838L59.29,107.755z M119.279,122.049l22.481-0.137l0.107,10.376l-22.53,0.147L119.279,122.049z      M61.869,122.371l22.423-0.137l0.068,10.366l-22.442,0.117L61.869,122.371z M91.942,3.322l0.147,24.474l-5.52,0.029l0.02,6.566     l30.033-0.166l-0.039-6.536l-5.139,0.01l-0.137-24.484l10.767-0.059V0L80.218,0.234l0.02,3.126L91.942,3.322z M110.505,3.234     l0.137,24.494l-17.713,0.068L92.782,3.312L110.505,3.234z'],
        ['0 0 465.959 465.959', 'M196.825,173.801h-15.593l8.168,9.653L196.825,173.801z M180.401,195.149l8.559-11.128h-17.967     L180.401,195.149z M290.286,184.021h-11.49l6.018,7.103L290.286,184.021z M294.39,154.593h-11.216l5.882,6.947L294.39,154.593z      M52.334,0v361.291H165.99l66.974,104.668l67.004-104.668h113.656V0H52.334z M250.033,258.665l17.362-22.589h-24.933v71.723     h78.923v7.298H150.348v-7.298h78.884v-71.723h-32.447l19.11,22.589h-50.111v47.014h-8.236v-47.014h-50.131l29.877-38.836H120.09     l27.552-35.808h-18.534l22.647-29.428h-11.744l17.42-22.628l19.12,22.628h-11.587l9.975,11.793l38.436-49.994h-29.692L220,69.222     h-18.837l27.894-36.286l30.717,36.286h-18.583l39.901,47.17h-30.248l32.036,37.869l17.195-22.296l19.14,22.628h-11.607     l24.904,29.428h-18.896l30.317,35.808h-18.26l32.847,38.836h-50.092v47.014h-8.266v-47.014H250.033z M275.113,179.664     l4.514-5.862h-9.467L275.113,179.664z M284.815,191.124l-22.071,28.705h17.176l-12.496,16.248h55.436L284.815,191.124z      M299.421,173.801l-10.386-12.262l-9.428,12.262H299.421z M278.797,184.021l-3.693-4.357l-3.351,4.357H278.797z M283.174,154.593     l-0.264-0.332l-0.264,0.332H283.174z M189.878,184.021l-0.479-0.567l-0.44,0.567H189.878z M181.222,173.801l-6.282-7.416     l-5.696,7.416H181.222z M201.29,219.829l-20.889-24.679l-31.489,40.927h47.893l-13.756-16.248H201.29z M229.242,307.799h13.239     v3.644h-13.239V307.799z M196.825,173.801h-15.593l8.168,9.653L196.825,173.801z M180.401,195.149l8.559-11.128h-17.967     L180.401,195.149z M290.286,184.021h-11.49l6.018,7.103L290.286,184.021z M294.39,154.593h-11.216l5.882,6.947L294.39,154.593z      M52.334,0v361.291H165.99l66.974,104.668l67.004-104.668h113.656V0H52.334z M250.033,258.665l17.362-22.589h-24.933v71.723     h78.923v7.298H150.348v-7.298h78.884v-71.723h-32.447l19.11,22.589h-50.111v47.014h-8.236v-47.014h-50.131l29.877-38.836H120.09     l27.552-35.808h-18.534l22.647-29.428h-11.744l17.42-22.628l19.12,22.628h-11.587l9.975,11.793l38.436-49.994h-29.692L220,69.222     h-18.837l27.894-36.286l30.717,36.286h-18.583l39.901,47.17h-30.248l32.036,37.869l17.195-22.296l19.14,22.628h-11.607     l24.904,29.428h-18.896l30.317,35.808h-18.26l32.847,38.836h-50.092v47.014h-8.266v-47.014H250.033z M275.113,179.664     l4.514-5.862h-9.467L275.113,179.664z M284.815,191.124l-22.071,28.705h17.176l-12.496,16.248h55.436L284.815,191.124z      M299.421,173.801l-10.386-12.262l-9.428,12.262H299.421z M278.797,184.021l-3.693-4.357l-3.351,4.357H278.797z M283.174,154.593     l-0.264-0.332l-0.264,0.332H283.174z M189.878,184.021l-0.479-0.567l-0.44,0.567H189.878z M181.222,173.801l-6.282-7.416     l-5.696,7.416H181.222z M201.29,219.829l-20.889-24.679l-31.489,40.927h47.893l-13.756-16.248H201.29z M229.242,307.799h13.239     v3.644h-13.239V307.799z'],
        ['0 0 581.52 581.52', 'M190.264,206.6h17.225l-5.921,49.544h-17.235L190.264,206.6z M391.305,199.204H190.264v-28.842     h42.92l8.168-48.274h-10.835V98.2h120.534v23.888h-10.845l8.187,48.274h42.92v28.842H391.305z M336.387,170.362l-8.178-48.274     H253.35l-8.197,48.274H336.387z M473.951,183.191c0,101.151-183.181,398.33-183.181,398.33s-183.2-297.179-183.2-398.33     C107.57,82.001,189.619,0,290.77,0C391.969,0,473.951,81.991,473.951,183.191z M432.545,183.191     c0-78.152-63.584-141.775-141.775-141.775c-78.142,0-141.736,63.633-141.736,141.785s63.584,141.736,141.736,141.736     C368.96,324.917,432.545,261.342,432.545,183.191z M391.305,206.6H374.07l5.921,49.544h17.264L391.305,206.6z'],
        ['0 0 203.542 203.542', 'M15.798,150.626h-3.595v-14.264h3.605L15.798,150.626L15.798,150.626z M71.791,54.077h130.949     v20.85h-30.747v17.039h30.747v74.136h-17.967l0.117-2.198c0-20.4-16.502-36.873-36.863-36.873s-36.863,16.482-36.863,36.873     l0.127,2.198H94.683v-15.476H71.801L71.791,54.077L71.791,54.077z M125.635,92.053h35.495v-17h-35.495     C125.635,75.053,125.635,92.053,125.635,92.053z M80.643,91.663h35.505V74.633H80.643V91.663z M175.541,163.913     c0,15.202-12.32,27.493-27.513,27.493c-15.212,0-27.523-12.301-27.523-27.493c0-15.222,12.32-27.542,27.523-27.542     C163.211,136.371,175.541,148.711,175.541,163.913z M157.866,163.913c0-5.462-4.426-9.887-9.868-9.887     c-5.422,0-9.848,4.426-9.848,9.887c0,5.413,4.426,9.848,9.848,9.848C153.44,173.761,157.866,169.326,157.866,163.913z      M26.282,136.371v-4.27H0v4.27h12.203h3.605H26.282z M15.798,158.373v-7.748h-3.595v7.748H15.798z M71.01,30.716v18.612h132.532     V30.716C203.542,30.716,143.582-11.09,71.01,30.716z M71.791,150.626H15.798v7.748h-3.595v-7.748H0v15.486h94.663v-0.01H71.791     V150.626z'],
        ['0 0 419.013 419.013', 'M47.078,0v324.877h102.215l60.214,94.136l60.243-94.136h102.186V0H47.078z M249.906,184.207     l-8.451-19.521l-3.879-1.915v1.739H178.75v-0.313l-4.621,2.179l4.621-10.718v8.539l31.47-14.831l27.356,13.395v-7.103     l-9.409-21.758h-40.038l-9.389,21.748v-32.31h-5.53l30.551-43.643v4.055h8.783v-5.813l-3.703-5.501l-5.08,7.249V49.886h-13.072     v-8.783h13.072V27.415h8.783v13.688h13.092v8.783h-13.092v28.05l30.551,45.392h-5.53v32.329l3.889,9.018l72.67,35.593h-64.229     v6.145H166.43v-6.145h-64.249l71.908-33.883l-7.679,17.811L249.906,184.207L249.906,184.207z M328.966,268.552L328.966,268.552     H90.076v-10.259h14.802v-51.87h61.532v51.87h29.066v-47.063h25.324v47.063h29.086v-51.87h64.229v51.87h14.831L328.966,268.552     L328.966,268.552z M212.535,49.886h-8.783v-8.783h8.783V49.886z M166.41,191.095h83.467v9.174H166.41V191.095z'],
        ['0 0 415.828 415.828', 'M195.34,72.758v-4.23h1.055v4.23H195.34z M219.179,68.528V37.097h-22.784v31.431H219.179z      M219.179,72.758h1.055v-4.23h-1.055V72.758z M196.395,35.065h-1.055v2.032h1.055V35.065z M155.868,203.063h28.871v-13.278     h-28.871V203.063z M369.122,0v322.406H267.649l-59.774,93.422l-59.764-93.422H46.706V0H369.122z M180.313,37.097h15.027v31.431     h-7.074v8.471h38.573v-8.471h-6.605V37.097h13.825v-4.064h-53.746C180.313,33.033,180.313,37.097,180.313,37.097z      M276.823,176.498h-0.02v-56.814c0-36.443-29.525-38.485-65.968-38.485h-7.328c-36.433,0-65.988,2.042-65.988,38.485v56.814     c0,37.713,2.872,54.566,9.682,61.826l-3.146,55.211l10.737,0.606l2.472-43.223h-9.731v-9.731h3.41     c2.003,1.084,4.25,1.72,6.771,2.022l-0.44,7.709h1.739l-3.166,42.93h103.095l-2.052-42.93h0.195l2.443,43.223l10.767-0.606     l-3.283-57.8c-1.954,2.511-4.201,4.27-6.732,5.452h5.159v9.712h-8.363l-0.479-8.412c1.28-0.332,2.521-0.762,3.683-1.299h-3.752     l0.068,1.299c-8.764,2.228-20.361,0-34.752,0h-34.821c-12.301,0-21.924,1.641-29.291,0.703l0.117-2.003h98.688l-1.505-26.536     h-95.669l-1.505,26.536h-6.878c-1.358-0.723-2.609-1.641-3.742-2.863l1.964-34.43h116.021l1.827,31.831     C273.54,227.313,276.823,210.303,276.823,176.498z M152.722,170.968h106.251v-60.155H152.722V170.968z M229.643,203.063h28.871     v-13.278h-28.871V203.063z M159.405,246.052l-0.361,4.846h97.868l-0.215-4.846H159.405z M219.179,35.065v2.032h1.055v-2.032     H219.179z'],
        ['0 0 465.959 465.959', 'M224.328,71.127c-17.743,29.066-102.255,164.93-139.811,179.146l9.956,22.901L225.363,86.857      l153.323,193.254l3.869-23.136C338.873,225.046,244.347,98.307,224.328,71.127z M229.418,204.255      c-27.698,0-50.14,22.452-50.14,50.14c0,7.22,1.661,14.02,4.416,20.214h91.458c2.745-6.204,4.406-12.994,4.406-20.214      C279.559,226.707,257.126,204.255,229.418,204.255z M52.344,0v361.271H166l66.974,104.687l66.974-104.687h113.666V0H52.344z       M393.488,254.425l-0.479,0.87l-4.758,28.402l-7.767-1.319l1.026,1.309h-97.878v-9.077h-8.49      c-1.426,3.185-3.039,6.272-5.061,9.077h-81.346c-2.022-2.804-3.635-5.891-5.051-9.077h-11.197v9.077H96.515l-7.074,3.058      l-1.339-3.058h-1.016l0.635-0.909l-18.368-42.256l9.174-4.006l2.736,6.292c31.196-10.415,110.882-133.91,139.235-181.1      l3.156-5.247l3.615,4.953c1.163,1.583,108.595,148.448,156.772,186.532l2.618-15.652l9.907,1.661l-3.4,20.283L393.488,254.425z       M378.364,282.035l2.12,0.342l-1.798-2.257L378.364,282.035z M94.473,273.184l-6.741,9.594l0.391,0.909h8.402l2.11-0.928      L94.473,273.184z M382.556,256.985c2.511,1.837,4.885,3.42,7.035,4.602l3.439-6.292l0.195-1.055      c-2.726-1.495-5.794-3.644-9.135-6.282L382.556,256.985z M82.533,251.005l1.983-0.733l-3.244-7.464l-0.889,0.332L82.533,251.005      z'],
        ['0 0 417.919 417.919', 'M46.946,0v324.037h101.942l60.067,93.882l60.067-93.882h101.952V0H46.946z M306.754,291.532     h-198.51V168.76c0-25.412,20.615-46.027,46.037-46.027h0.957c2.931,0,5.774,0.342,8.549,0.86     c4.563-19.198,21.113-33.57,41.328-35.055V63.985h-23.742v-7.67h23.742V39.286h7.67v17.029h23.751v7.67h-23.751v24.552     c20.117,1.475,36.579,15.72,41.24,34.782c1.895-0.244,3.781-0.576,5.755-0.576h0.957c25.422,0,46.027,20.615,46.027,46.027     v122.762H306.754z'],
        ['0 0 437.879 437.879', 'M49.193,0v339.503H155.99l62.949,98.376l62.939-98.376h106.807V0H49.193z M181.94,289.822     c-13.366,0-24.191-4.641-24.191-10.366c0-4.025,5.364-7.464,13.141-9.184V55.504H193v214.768     c7.767,1.729,13.141,5.159,13.141,9.184C206.131,285.181,195.296,289.822,181.94,289.822z M202.565,131.135v0.391h-1.299     L202.565,131.135V55.504l120.339,38.709L202.565,131.135z M202.565,131.545v-0.41l-1.299,0.401L202.565,131.545L202.565,131.545z     '],
        ['0 0 465.978 465.978', 'M52.353,0v361.291H166.01l66.965,104.687l66.974-104.687h113.676V0H52.353z M231.245,40.321     l121.199,77.614h-238.9L231.245,40.321z M347.569,124.394v153.274h-29.623V124.394H347.569z M282.949,124.394v153.274h-29.633     V124.394H282.949z M210.386,124.394v153.274h-29.613V124.394H210.386z M148.062,124.394v153.274h-29.623V124.394H148.062z      M356.753,316.514H109.245v-27.61h247.517v27.61H356.753z'],
        ['0 0 410.933 410.933', 'M46.452,203.571l-0.508-0.586l0.508-0.41V203.571z M365.018,0v318.615H264.806l-59.07,92.318     l-59.07-92.318H46.423V203.561c2.443,2.843,17.078,18.72,38.788,19.794c15.3,0.762,30.121-6.038,44.298-20.205     c13.014-13.014,26.751-19.462,40.908-18.935c21.26,0.645,36.794,16.727,38.563,18.641c2.491,2.892,21.123,22.002,29.955,22.52     c1.798,0.264,3.605,0.42,5.462,0.42c13.493,0,27.894-7.601,42.969-22.647c16.033-16.013,30.981-23.087,44.503-20.977     c17.459,2.726,26.692,20.234,26.78,20.41l4.025-2.081c-0.401-0.811-10.317-19.706-30.092-22.804     c-15.026-2.374-31.323,5.12-48.421,22.237c-16.033,16.013-31.001,23.077-44.513,20.977c-8.578-1.641-26.79-20.4-26.79-20.4     l-0.313-0.459c-0.703-0.801-17.489-19.589-41.934-20.371c-15.398-0.508-30.366,6.312-44.298,20.254     c-13.229,13.219-26.975,19.579-40.839,18.896c-21.289-1.016-35.915-18.554-36.071-18.729l-2.98,2.462v-22.882     c2.413,2.775,16.17,17.635,36.707,19.599l2.081,0.205c15.3,0.762,30.121-6.048,44.298-20.234     c13.014-12.994,26.751-19.452,40.908-18.935c21.26,0.664,38.563,18.651,38.563,18.651s11.509,13.639,22.774,20.596     c2.237,0.85,4.602,1.534,7.191,1.934l0.498,0.029c1.641,0.244,3.283,0.391,4.963,0.391c10.952,0,22.54-5.12,34.596-15.066     c2.765-2.296,5.559-4.778,8.383-7.611c16.023-16.013,30.981-23.067,44.493-20.986c17.479,2.736,26.702,20.254,26.79,20.41     l4.025-2.062c-0.401-0.811-10.317-19.706-30.092-22.804c-15.017-2.374-31.313,5.129-48.411,22.247     c-3.605,3.595-7.328,6.878-10.62,9.331c-3.253,2.491-5.159-1.358-5.159-1.358l-0.166,0.039l0.166-0.088l-35.417-62.031     l-7.122-12.525l-25.168-44.073c-3.547-6.224-11.46-8.383-17.694-4.846c-6.233,3.556-8.373,11.48-4.846,17.694l27.835,48.782     l-7.132,6.312l-42.53,24.24l-26.096,14.89c0,0-30.18,20.156-38.758,22.11c-4.191,0.518-4.191,0.518-5.989,0.43     c-17.264-0.83-34.879-16.727-39.032-21.045v5.745l-0.508-0.576l-0.039-5.764c0,0,0.518,0.557,0.537,0.576V0H365.018z      M304.443,115.884c-7.66-13.385-24.758-18.085-38.192-10.425c-13.405,7.67-18.114,24.787-10.464,38.201     c7.67,13.434,24.806,18.094,38.221,10.435C307.433,146.435,312.103,129.318,304.443,115.884z'],
        ['0 0 401.134 401.134', 'M209.78,250.321c0,9.487-7.689,17.196-17.186,17.196s-17.186-7.689-17.186-17.196     s7.689-17.186,17.186-17.186C202.081,233.136,209.78,240.835,209.78,250.321z M356.069,0v311.014h-97.848l-57.683,90.12     l-57.654-90.12H45.065V0H356.069z M247.727,74.722l-82.372,46.545l46.535,82.392l82.382-46.555L247.727,74.722z M192.594,59.08     l12.076,21.358l21.377-12.056l-12.086-21.367L192.594,59.08z M139.591,73.276l18.612,32.906l32.906-18.583l-18.593-32.925     L139.591,73.276z M330.588,188.769l-28.959-16.551l-88.752,49.027c-3.156-2.208-6.683-3.781-10.464-4.866L116.768,68.508     L57.326,93.647l3.547,8.441l51.997-21.993l78.122,134.877c-18.827,0.86-33.922,16.287-33.922,35.348     c0,19.618,15.925,35.524,35.515,35.524c19.628,0,35.544-15.916,35.544-35.524c0-8.588-3.166-16.345-8.256-22.491l81.679-45.119     l24.494,13.991L330.588,188.769z'],
        ['0 0 424.24 424.24', 'M200.743,219.428v0.098c-12.467,1.28-21.397,4.631-21.406,8.647     c-0.039,4.67,12.008,8.608,27.767,9.418l-0.889-17.801L200.743,219.428z M202.619,255.89c-8.754,1.016-14.987,3.41-14.987,6.263     c0,3.478,9.194,6.302,21.016,6.702l-0.625-12.594L202.619,255.89z M202.13,238.822v0.156     c-10.982,1.192-18.827,4.191-18.827,7.718c0,4.123,10.708,7.533,24.65,8.158l-0.782-15.691L202.13,238.822z M216.609,268.777     c10.767-0.645,18.817-3.361,18.817-6.624c0-2.726-5.725-5.041-13.903-6.116l-4.484,0.234     C217.039,256.262,216.609,268.777,216.609,268.777z M212.858,74.195c7.191,0,13.014,5.823,13.014,13.014     s-5.823,13.014-13.014,13.014s-13.014-5.823-13.014-13.014S205.657,74.195,212.858,74.195z M220.097,254.679l0.039-0.088     l0.44,0.049c12.174-1.006,21.152-4.152,21.152-7.943c0-3.537-7.894-6.507-18.866-7.699l-5.208,0.244l-0.547,15.613     C217.088,254.855,220.097,254.679,220.097,254.679z M205.237,269.852c-6.839,0.83-11.685,2.716-11.685,4.944     c0,2.657,6.771,4.856,15.671,5.315l-0.508-10.112L205.237,269.852z M47.664,0v328.932h103.486l60.976,95.308l60.985-95.308     h103.466V0H47.664z M297.262,173.069c0,0-26.487,5.012-61.728-11.255v-10.014H225.53v9.174h-5.149l-1.241,35.407     c19.677-0.928,34.616-5.716,34.655-11.617c0.039-5.217-11.675-9.682-27.992-11.47v-2.169     c20.566,1.837,35.661,7.269,35.622,13.668c-0.039,5.442-10.952,10.093-26.868,12.349c12.926,2.081,21.397,6.009,21.397,10.581     c0,4.934-10.337,9.164-25.119,11.099c12.291,1.895,20.723,5.559,20.713,9.78c-0.039,4.328-8.93,7.972-21.729,9.692     c10.337,1.641,17.137,4.768,17.137,8.393c0,3.918-8.207,7.259-19.931,8.793c7.738,1.387,12.76,3.84,12.76,6.663     c0,3.156-6.536,5.862-15.945,7.142c6.8,1.055,11.285,3.117,11.285,5.501c0,3.175-8.226,5.784-18.935,6.243l-0.586,17.059h-5.471     l-0.85-17.059c-10.581-0.498-18.7-3.078-18.7-6.243c0-2.257,4.24-4.211,10.552-5.315c-10.112-1.202-17.235-4.016-17.235-7.337     c0-2.921,5.628-5.432,13.913-6.79c-11.265-1.583-19.081-4.846-19.081-8.666c0-3.674,7.289-6.829,17.928-8.471     c-13.287-1.827-22.55-5.667-22.51-10.112c0.029-4.123,8.168-7.611,20.039-9.389c-14.431-1.983-24.455-6.126-24.455-10.991     c0-4.524,8.764-8.412,21.641-10.522c-17.225-2.316-29.174-7.298-29.144-13.014c0.039-6.224,14.401-11.333,34.117-13.082v2.042     c-16.004,1.651-27.425,5.93-27.454,11.079c-0.039,6.067,15.691,11.118,36.169,12.105l-1.759-35.368h-6.566v-9.174h-9.008v10.014     c-35.261,16.267-61.728,11.255-61.728,11.255c-60.077,0-61.747-50.053-61.747-50.053c16.678,16.697,41.709,0,41.709,0     c39.217-39.208,81.766,0,81.766,0v6.673h9.008v-7.269c-13.327-5.764-22.657-19.013-22.657-34.44     c0-20.752,16.795-37.566,37.547-37.566c20.732,0,37.557,16.805,37.557,37.566c0,15.818-9.829,29.281-23.673,34.811v6.898h9.985     v-6.673c0,0,42.559-39.208,81.766,0c0,0,25.031,16.697,41.728,0C359,123.016,357.319,173.069,297.262,173.069z M249.33,207.723     c0-4.416-9.663-8.129-23.224-9.663c-2.276,0.186-4.641,0.303-7.035,0.391l-0.684,19.589     C235.915,217.23,249.33,212.941,249.33,207.723z M245.617,228.573c0.039-4.084-9.135-7.572-21.856-8.949v-0.098l-5.422,0.283     l-0.625,17.831C233.473,237.024,245.578,233.263,245.617,228.573z M175.506,207.723c0,5.178,13.258,9.448,30.629,10.308     l-0.967-19.628l-6.243-0.391C185.237,199.546,175.506,203.298,175.506,207.723z M231.724,274.805     c0-2.325-5.208-4.27-12.418-5.022l-2.726,0.195l-0.352,10.151C225.031,279.632,231.724,277.443,231.724,274.805z      M235.515,129.679h7.728v22.11h-7.728V129.679z M223.195,129.679h2.316v22.11h-2.316V129.679z M183.166,129.679h4.572v22.11     h-4.572V129.679z M196.747,129.679h6.458v22.11h-6.458V129.679z M203.205,159.176l0.088,1.788h17.078l0.059-1.788H203.205z      M205.042,196.331l0.107,2.071c2.159,0.098,4.348,0.166,6.595,0.176c2.491,0.02,4.914-0.039,7.308-0.127l0.068-2.081     c-2.55,0.117-5.168,0.186-7.865,0.176C211.265,196.556,205.042,196.331,205.042,196.331z M206.116,218.031l0.088,1.739     c2.179,0.098,4.357,0.195,6.634,0.195l5.462-0.166l0.059-1.768l-5.95,0.166C210.269,218.217,208.188,218.138,206.116,218.031z      M199.336,197.953v-1.807c-2.814,0.264-5.432,0.645-7.972,1.045c2.413,0.332,4.934,0.596,7.552,0.811L199.336,197.953z      M224.943,197.924l1.163,0.147c2.941-0.234,5.745-0.547,8.432-0.928c-2.785-0.449-5.706-0.84-8.871-1.104L224.943,197.924z      M207.103,237.581l0.078,1.583l5.598,0.186l4.866-0.107l0.049-1.602l-5.276,0.117L207.103,237.581z M200.762,217.943     c-2.316,0.195-4.484,0.479-6.585,0.782c2.101,0.283,4.299,0.528,6.575,0.703L200.762,217.943z M223.742,219.526     c2.443-0.186,4.817-0.401,7.093-0.694c-2.247-0.352-4.602-0.655-7.083-0.889L223.742,219.526z M217.039,256.271l0.049-1.417     l-4.592,0.137l-4.543-0.137l0.068,1.397l4.807,0.147L217.039,256.271z M202.13,237.552c-1.925,0.176-3.732,0.42-5.481,0.684     l5.481,0.586V237.552z M222.413,238.939l0.44,0.049c2.443-0.176,4.748-0.401,6.976-0.703c-2.159-0.342-4.397-0.635-6.829-0.84     L222.413,238.939z M208.657,268.855l0.059,1.143l3.097,0.098l4.758-0.137l0.049-1.182l-5.071,0.156L208.657,268.855z      M220.097,254.679l-0.43,1.114l1.866,0.234l5.481-0.547c-1.993-0.361-4.133-0.655-6.458-0.86     C220.557,254.62,220.097,254.679,220.097,254.679z M203.048,255.842v-1.163c-1.856,0.176-3.586,0.42-5.247,0.684l4.817,0.557     L203.048,255.842z M212.623,280.228l-3.41-0.098l0.049,0.918l3.586,0.107l3.332-0.107l0.039-0.918L212.623,280.228z      M219.091,269.744l0.205,0.029l4.533-0.469l-4.357-0.537L219.091,269.744z M205.862,269.754v-0.928     c-1.69,0.166-3.253,0.381-4.739,0.645l4.123,0.361L205.862,269.754z M225.51,122.782v-4.367h-28.763v3.996     c4.572,1.974,9.585,3.097,14.89,3.097C216.541,125.508,221.211,124.501,225.51,122.782z'],
        ['0 0 200.679 200.679', 'M99.617,116.411c-3.644,0-6.683-0.274-9.067-0.889V82.489c1.876-0.508,5.52-0.879,10.337-0.879     c11.968,0,20.039,5.413,20.039,16.766C120.925,109.826,112.855,116.402,99.617,116.411z M99.538,7.797     C49.349,7.797,23.4,0,23.4,0v48.841h153.88V0C177.28,0,152.962,7.797,99.538,7.797z M23.507,57.634h153.675     c0,0-0.606,101.346-76.95,143.045C22.364,159.498,23.507,57.624,23.507,57.634z M79.598,158.521h10.972v-34.029     c2.511,0.616,5.52,0.743,8.832,0.743c10.718,0,20.039-3.136,25.94-9.321c4.289-4.426,6.585-10.483,6.585-18.143     c0-7.572-2.902-13.756-7.455-17.791c-5.032-4.543-12.945-7.054-23.82-7.054c-8.822,0-15.749,0.743-21.035,1.632v83.965     L79.598,158.521L79.598,158.521z'],
        ['0 0 684.234 684.234', 'M342.137,48.753c91.976,0,166.728,74.82,166.728,166.796s-74.752,166.777-166.728,166.777     c-92.006,0-166.796-74.8-166.796-166.777S250.131,48.753,342.137,48.753 M342.137,0C223.058,0,126.538,96.5,126.538,215.549     c0,119.04,215.598,468.685,215.598,468.685s215.559-349.645,215.559-468.685C557.705,96.5,461.176,0,342.137,0z M405.75,175.365     c-15.925,0-28.881,12.897-28.881,28.832l3.283,98.464c0,15.955,9.672,28.871,25.598,28.871c15.935,0,25.647-12.916,25.647-28.871     l3.234-98.464C434.631,188.271,421.685,175.365,405.75,175.365z M278.484,175.365c-15.935,0-28.861,12.897-28.861,28.832     l3.205,98.464c0,15.955,9.721,28.871,25.656,28.871c15.945,0,25.617-12.916,25.617-28.871l3.253-98.464     C307.355,188.271,294.429,175.365,278.484,175.365z M288.557,150.636l98.395,3.283c15.955,0,28.871-12.936,28.871-28.89     s-12.916-28.871-28.871-28.871l-98.395,6.507c-16.004,0-28.91,12.916-28.91,28.871     C259.647,147.471,272.553,150.636,288.557,150.636z'],
        ['0 0 465.978 465.978', 'M52.344,0v361.291H166l66.984,104.687l66.965-104.687h113.686V0H52.344z M226.135,311.434H125.151     l44.884-252.432h56.1V311.434z M242.979,311.434V59.002h56.11l44.894,252.432H242.979z'],
        ['0 0 230.478 230.478', 'M223.59,107.149l-46.486,0.264l-9.125-52.261l11.695-0.059l-0.127-25.842L49.076,29.946     l0.137,25.852l11.714-0.059l-8.568,52.319l-46.457,0.264l0.176,31.206l217.679-1.163L223.59,107.149z M73.921,55.661l81.044-0.44     l9.145,52.251l-98.786,0.537L73.921,55.661z M0,201.226l18.641-0.107l6.126-53.668l-18.661,0.078L0,201.226z M223.815,146.338     l-18.7,0.127l6.702,53.609l18.661-0.117L223.815,146.338z'],
        ['0 0 465.959 465.959', 'M140.715,185.809l-3.039,4.543v17.43l3.918,11.382h6.732l3.957-11.382v-17.41l-3.195-4.563     L140.715,185.809L140.715,185.809z M215.505,185.809l-3.029,4.543v17.43l3.889,11.382h6.771l3.937-11.382v-17.41l-3.185-4.563     L215.505,185.809L215.505,185.809z M52.334,0v361.271H165.99l66.974,104.687l67.004-104.687h113.656V0H52.334z M319.02,59.549     c0.557-1.524,1.983-1.583,3.683-1.671c6.028-0.342,14.059-0.166,14.059-0.166s4.944-0.664,2.765,3.527     c-2.286,4.367-2.667,7.523-0.664,10.21c0,0-4.641,4.787,0,10.22c0,0-4.768,4.729,0,9.887c0,0-5.129,4.895,0,9.936l-18.094,6.028     c0,0,2.443-2.667,3.263-6.917c0.459-2.325,0.254-5.462-0.723-8.031c-2.208-5.52-3.244-10.229-0.84-17.606     c2.101-6.536-0.098-9.624-1.368-11.06C320.056,62.754,318.18,61.806,319.02,59.549z M332.884,105.938v177.651h-3.703V107.13     L332.884,105.938z M288.879,59.549c0.537-1.524,1.964-1.583,3.644-1.671c6.067-0.342,14.098-0.166,14.098-0.166     s4.944-0.664,2.745,3.527c-2.267,4.367-2.667,7.523-0.664,10.21c0,0-4.641,4.787,0,10.22c0,0-4.787,4.729,0,9.887     c0,0-5.129,4.895,0,9.936l-18.094,6.028c0,0,2.462-2.667,3.263-6.917c0.459-2.325,0.274-5.462-0.743-8.031     c-2.208-5.52-3.205-10.229-0.84-17.606c2.101-6.536-0.088-9.624-1.368-11.06C289.925,62.754,288.02,61.806,288.879,59.549z      M302.763,105.938v177.651h-3.722V107.13L302.763,105.938z M130.896,192.091h-3.644l-1.886,10.796h-3.361l2.56-14.01h6.331     V192.091L130.896,192.091z M158.321,288.659c0,12.838-7.171,17.108-13.356,17.108c-6.204,0-13.356-4.27-13.356-17.108V67.483     c0-16.56,7.152-19.599,13.356-19.599c6.185,0,13.356,3.039,13.356,19.599V288.659z M164.574,202.887l-1.925-10.796h-3.625v-3.214     h6.331l2.54,14.01H164.574L164.574,202.887z M205.716,192.091h-3.664l-1.886,10.796h-3.361l2.56-14.01h6.351     C205.716,188.877,205.716,192.091,205.716,192.091z M233.121,288.659c0,12.838-7.152,17.108-13.375,17.108     c-6.165,0-13.336-4.27-13.336-17.108V67.483c0-16.56,7.171-19.599,13.336-19.599c6.224,0,13.375,3.039,13.375,19.599V288.659z      M239.384,202.887l-1.915-10.796h-3.644v-3.214h6.321l2.56,14.01H239.384L239.384,202.887z M303.574,308.473h-5.344v-16.678     h5.344V308.473z M313.764,289.558H288v-3.732h25.764V289.558z M333.724,308.473h-5.364v-16.678h5.364V308.473z M343.934,289.558     h-25.803v-3.732h25.803V289.558z'],
        ['0 0 212.911 212.911', 'M106.465,0C47.776,0,0.01,47.727,0.01,106.456c0,58.68,47.766,106.456,106.456,106.456     c58.699,0,106.436-47.776,106.436-106.456C212.902,47.727,165.165,0,106.465,0z M106.465,203.513     c-53.531,0-97.086-43.555-97.086-97.057c0-53.531,43.555-97.086,97.086-97.086c53.511,0,97.057,43.555,97.057,97.086     C203.522,159.957,159.977,203.513,106.465,203.513z M107.374,34.948c-14.391,0-25.715,1.221-34.323,2.667v136.948h17.87v-55.514     c4.123,1.016,9.067,1.241,14.411,1.241c17.479,0,32.691-5.159,42.363-15.271c6.986-7.181,10.689-17.049,10.689-29.565     c-0.01-12.349-4.719-22.423-12.125-29.017C138.013,39.061,125.058,34.948,107.374,34.948z M105.742,105.889     c-5.989,0-10.913-0.401-14.831-1.426V50.561c3.078-0.801,9.067-1.426,16.873-1.426c19.54,0,32.711,8.852,32.711,27.366     C140.495,95.181,127.325,105.889,105.742,105.889z'],
        ['0 0 381.173 381.173', 'M235.959,80.643l8.959,52.818h-99.792l8.989-52.818H235.959z M338.351,0v295.528h-92.973     l-54.801,85.645l-54.791-85.645H42.823V0H338.351z M103.945,173.078H85.108l-6.478,54.166h18.876L103.945,173.078z      M304.985,164.989V133.46H258.05l-8.969-52.818h11.832V54.527h-131.77v26.116h11.841l-8.959,52.818H85.108v31.528H304.985z      M311.463,227.234l-6.478-54.166h-18.866l6.468,54.166H311.463z'],
        ['0 0 477.253 477.253', 'M367.632,257.639h-0.137V0H109.67v257.639h-0.049l0.059,0.098v0.107h0.059l128.888,219.409     L367.632,257.639z M149.464,39.794h178.247v178.247H149.464V39.794z'],
        ['0 0 434.753 434.753', 'M48.841,0v337.08h106.045l62.49,97.672l62.51-97.672h106.026V0H48.841z M217.24,315.537     c-101.375-53.628-99.88-186.249-99.88-186.249h200.064C317.423,129.289,316.641,261.235,217.24,315.537z M317.56,117.838H117.232     V54.254c0,0,33.795,10.171,99.118,10.171c69.554,0,101.209-10.171,101.209-10.171S317.56,117.838,317.56,117.838z      M204.656,216.302c3.273,0.83,7.201,0.997,11.46,0.997c13.952,0,26.096-4.123,33.815-12.164     c5.589-5.735,8.549-13.61,8.549-23.614c0-9.858-3.771-17.899-9.672-23.146c-6.585-5.901-16.902-9.184-31.02-9.184     c-11.499,0-20.508,0.977-27.405,2.13v109.299h14.274L204.656,216.302L204.656,216.302z M204.646,161.647     c2.462-0.635,7.21-1.143,13.444-1.143c15.603,0,26.096,7.054,26.096,21.836c0,14.929-10.493,23.458-27.738,23.458     c-4.748,0-8.705-0.332-11.802-1.153C204.646,204.646,204.646,161.647,204.646,161.647z'],
        ['0 0 434.469 434.469', 'M259.329,233.321c-6.859,0-12.447,5.559-12.447,12.428c0,6.859,5.589,12.428,12.447,12.428     c6.839,0,12.428-5.569,12.428-12.428C271.757,238.881,266.169,233.321,259.329,233.321z M48.802,0v336.865h105.977l62.441,97.604     l62.451-97.604h105.996V0H48.802z M259.329,280.511c-19.208,0-34.762-15.574-34.762-34.752s15.564-34.733,34.762-34.733     c19.169,0,34.743,15.564,34.743,34.733C294.072,264.938,278.499,280.511,259.329,280.511z M328.414,133.05v115.493h-22.696     l0.147-2.804c0-25.705-20.82-46.545-46.535-46.545c-25.715,0-46.565,20.83-46.565,46.545l0.127,2.804H72.436v-19.54h15.388     v-18.006H72.426v-5.374h33.179v5.374H92.377v18.006h70.697V107.101h165.34V133.05L328.414,133.05z M329.43,101.102H162.097     V77.595c91.634-52.788,167.334,0,167.334,0S329.43,101.102,329.43,101.102z'],
        ['0 0 465.959 465.959', 'M52.344,0v361.271H166l66.974,104.687l66.974-104.687h113.666V0H52.344z M233.834,43.673     c10.669,0.518,20.801,3.097,30.033,7.347l-0.02-0.049l0.44,0.244l-0.42-0.195c18.456,29.828,23.067,57.107,21.817,79.49     c-1.192,21.358-18.212,31.167-18.358,31.245c-24.162,15.925-28.724,37.166-33.512,55.602L233.834,43.673L233.834,43.673z      M228.959,43.165v173.694c-4.768-18.436-9.331-39.667-33.492-55.582c-0.156-0.098-17.176-9.907-18.358-31.255     c-1.241-22.393,3.38-49.662,21.827-79.5C208.158,46.271,218.27,43.702,228.959,43.165z M184.69,193.625     c-1.68-1.114-7.308-5.442-7.308-5.442c-17.997-14.997-29.447-37.576-29.447-62.832c0-29.281,15.378-54.938,38.485-69.397     c-17.293,29.115-23.468,54.899-18.319,76.657c5.247,22.061,20.244,31.489,20.84,31.851c31.831,20.977,39.862,52.3,41.562,71.977     c0,0-0.176,11.793,0,14.47v3.244l-0.078,0.518l0.078,0.02v0.176l-17.117,0.02C213.385,254.894,216.482,218.285,184.69,193.625z      M255.964,305.621h-45.148v-45.04h45.148V305.621z M277.253,191.954c-25.891,22.051-25.451,62.891-25.451,62.891l-17.938,0.02     v0.244h-0.459l0.039-0.244h0.42v-20.605c2.003-19.745,10.395-49.984,41.406-70.414c0.596-0.352,15.613-9.78,20.84-31.841     c5.364-22.55-2.462-45.998-21.26-76.393c24.787,14.059,36.736,39.198,36.736,69.739     C311.566,152.825,300.652,176.156,277.253,191.954z'],
        ['0 0 409.536 409.536', 'M46.008,0v43.868h108.136V43.36h35.534v-2.726h32.251v3.234h139.987v7.66H221.91v3.273h-5.08     l21.338,21.348L217.425,96.91l-6.058-6.106l14.645-14.655l-21.348-21.348h-14.997v-2.833h-35.534v-0.449H46.008V317.53h99.89     l58.875,92.006l58.875-92.006h99.88V0H46.008z M193.703,103.349h41.347v12.115h-41.347V103.349z M255.636,269.784h-82.499     l-41.298-71.439l41.298-71.469h82.499l41.25,71.469L255.636,269.784z M171.398,198.354h21.651v6.517h-21.651V198.354z      M240.571,149.767l19.677,38.133h-91.742l19.716-38.133H240.571z'],
        ['0 0 465.959 465.959', 'M52.334,0v361.291H165.99l66.974,104.668l66.975-104.668h113.686V0H52.334z M197.597,274.63     c0,17.987-10.933,32.554-28.929,32.554s-28.91-14.567-28.91-32.554l-3.664-111.126c0-17.987,14.577-32.583,32.574-32.583     s32.593,14.597,32.593,32.583L197.597,274.63z M180.04,103.056c-18.016,0-32.593-3.566-32.593-21.573S162.024,48.9,180.04,48.9     l111.087-7.347c18.016,0,32.574,14.597,32.574,32.583c0,17.997-14.558,32.583-32.574,32.583L180.04,103.056z M341.277,274.63     c0,17.987-10.933,32.554-28.929,32.554s-28.91-14.567-28.91-32.554l-3.683-111.126c0-17.987,14.597-32.583,32.593-32.583     s32.593,14.597,32.593,32.583L341.277,274.63z']
    ];
})(jQuery, window, document);

;(function ($, window, document, undefined) {

    var tours = [];

    // API

    $.wcpTourRegister = function(options) {
        var t = new WCPTour(options);
        tours[options.name] = t;
    }
    $.wcpTourStart = function(tourName) {
        tours[tourName].start();
    }
    $.wcpTourRestart = function(tourName) {
        tours[tourName].restart();
    }
    $.wcpTourIsFinished = function(tourName) {
        return tours[tourName].isFinished();
    }

    // API Events

    $.wcpTourEventStepWillChange = function(stepName) {

    }
    $.wcpTourEventStepDidChange = function(stepName) {

    }
    $.wcpTourEventStarted = function() {

    }
    $.wcpTourEventFinished = function() {

    }
    $.wcpTourCoordinatesForTipForStep = function(stepName) {
        return undefined;
    }
    $.wcpTourCoordinatesForHighlightRect = function(stepName) {
        return undefined;
    }

    function WCPTour(options) {
        this.id = Math.floor(Math.random() * 99999) + 1;
        this.options = options;
        this.currentStep = -1;
        this.reachedStep = -1;

        // DOM
        this.root = undefined;

        this.init();
    }
    WCPTour.prototype.init = function() {
        if (!localStorage[this.options.name]) {
            localStorage[this.options.name] = -1;
        }
    };
    WCPTour.prototype.start = function() {
        if (localStorage[this.options.name] == 'finished') {
            // Tour finished
            return;
        } else if (localStorage[this.options.name] >= 0) {
            // Tour is still active
            this.reachedStep = -1;
            this.currentStep = -1;
            this.drawContent();
            this.presentStep(localStorage[this.options.name]);

            // Send event
            $.wcpTourEventStarted();
        } else {
            // Tour has not started yet
            this.reachedStep = -1;
            this.drawContent();
            this.presentWelcomeScreen();

            // Send event
            $.wcpTourEventStarted();
        }
    };
    WCPTour.prototype.restart = function() {
        localStorage[this.options.name] = -1;
        this.start();
    };
    WCPTour.prototype.drawContent = function() {
        if (this.root) this.root.remove();

        var html = '';

        html += '<div id="wcp-tour-'+ this.id +'" class="wcp-tour-root">';
        html += '   <div class="wcp-tour-background">';
        html += '       <div class="wcp-tour-highlight-rect" id="wcp-tour-highlight-rect-1"></div>';
        html += '       <div class="wcp-tour-highlight-rect" id="wcp-tour-highlight-rect-2"></div>';
        html += '       <div class="wcp-tour-highlight-rect" id="wcp-tour-highlight-rect-3"></div>';
        html += '       <div class="wcp-tour-highlight-rect" id="wcp-tour-highlight-rect-4"></div>';
        html += '   </div>';

        // welcome screen

        html += '   <div class="wcp-tour-welcome-screen wcp-tour-centered-content">';
        html += '       <img class="wcp-tour-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAFD9JREFUeJzt3XmUVNWdB/DvvbV1VXdVvW5omoaW1rAKIcYFoyYScSQH4zajROKCxyST6GhyNKtZJ4tG0RAnzsQkY5wzY5w5yZhJOGcMQjQR4wQMisSWIDvI0g10A13V1VXdXcu98wdK6HpVgND13qu6389/3Pse74fH96233XsBIiIiIiIiIiIiqmnC7QIqIRaLNeW0niz8/iZRKES1EA1ayuAxdxIioJV6jwQKGlgHIQoOlVv1hNbNWuuI23WMJAH0Cq3f1D5fSufzh4JSbk4mk71u1zXSqj8AWlsj9ZnMRQDmaK0v1lKeKYHRbpdFtUcBPUKpN4QQLwJ4Pm1Zf8LOnYNu13UqqjUAAmHLmieAhQK4GkDI7YLIQEoNKCGWCK1/lunr+x2AqrtqrKoAiMfjVk6IOzRwlwTGuF0P0RFKdUKI76fr6h7D/v1pt8s5UdURAIcv8+9RWt8tpYy5XQ5ROQo4ILR+KJNMPgIg63Y9x+P1ABDhePwaqfUjkHLCieygpQ86HIEKhaGDIWjpB/x+6GPsI/uTCBzqHtZ2xpw5aJ4+41Rqr3nd6/+CN194YVhbQEo0R6rzjixbUDgwMDSsbdy55yIYjSLV2Ynknj3IDwyc0N+ltN4ogTvSyeSKStQ6UvxuF1BOU1NTbFCpxwSwAOLYOVWIWijEmlCIWlDhehxv+2J+ACgKgObpMzDpQx96h1WbRStlC4ApTTH86uqL3SnoFP3lQALz//f/hrW1XXDhkf8PtFLo3bED+zs60LnmFXSvX1/275JCTAPwfH08/pO0ZX3Wqw8LPRkAkXj8nEGlnhLAxHLbaH8AuTHjkW9qgQ5W5y8OVRchJZomTkTTxIk489pr0d/djR0rVmDLM0sxmEiU2UncXt/be6GMRj+SSqW2OFvx8Um3CygWtqyrBLCy3MmvA0FkJ0xGZuYFyI2dwJOfXNMwZgxmLliAq3/6OM771KcQtqzSG0p5Vl6IVxosy3OXRp4KgEg8fqsElkCIOlunEMi1tGFgxizkRre+48t8okrxB4OYcsWVuPLHP8HUq66CkPbTSkoZ11o/G7asq10osSzPBEAkHr9VCPHvAHzFfTpUh4Gp70V2/Lugpa2byBMCkQjO/ftPYu6iB1HfXOIttRB1ElgStqxrnK+uNE8EQNiyrhJCPF6qr2CNxsC0c6AiUafLIjopo6dOxeU/+AHGzzq/VLeUWv+iobHxA07XVYrrARCJx8+RWj+FEr/8ueZxGDzjTGifJ59VEpUVbGjA7K9+FZPnzbN3ClFX0PrpaDQ62fnKhnM1AJqammIQ4qlS9/y5sROQPW0S7/WpagkpMev2f8CM+fNtfRKwlM/332hvtz/vcpCbASDees9ve9qfax6H7LjTXSiJaIQJgbNuXlj6SgA4O5JILHa6pKO5FgBhy7paAAuK2wvWKGTbyr7+J6o+QuC8227H+FmzSnSJOxssa7YLVQFwKwBaWyNSqUeKm3WoDkPtU3nZTzVHSIkL77ob9c3Ntr6CUo8CCDhflUsBUJ/J3AMp24c1CsEHflTTgtEoLvril2w/cFLKd9db1h1u1OR4AMTjcUtpfXdxe27MeL7qo5rXPHUqJl9+ub1D6y+78UDQ8QDICXFH8ZBeHQgi19pebheimvLemxeirvizYSHGNiSTH3e6FqcDIKCBu4obc63t/MKPjBGor8f0a6+ztWvgi3D4nHT0YGHLmlc8k4/2B5AbNdbJMohcN2nePIRitrltTq+Pxx19I+BoAAhgYXFbbsx4PvUn4/hDIUwp9SxACNs5UknOBUBra+StCTyHyTe1OFYCkZecMedSW5tSaj4cfCXoWAC8NXX3sMH7hajF8fxkrIbWVjRPnTqsTUoZq2tsPM+pGpy8BZhT3FCINTl4eCLvGXe+fcSg1Np2rlSKYwGgtbbNhlKIlplBhcgQLe95j61NAB906vjOBYCUZw7/s+/wBJ5EBmuaOAn+YNGqdUpNd+r4jgRALBZrKl6uS4cjfPpPxpM+H6Ljxxc1yja0tDjy6+hIAOS0tk18oEJhJw5N5Hm2AAAQGRx0ZLIQRwJA+P22p318+k90WP0Y+/yBAhjlxLGdCYBCwTbKR0uO+iMCAH+d/WpYAY6MjHMkALQQDbZGPwOACACCkYitTQhRQwEgZdDW5sSBiaqADJT48E9rR+6RXZ8VmIjcwwAgMhgDgMhgfBJHVeHx17fip+u2IZsv4G8nteGrF7wbAR9/v04VA4A8TQP4zqp1+PnGN4+0/XzTTuzsz+CHfzMLET9nkjoVjFDyrLxS+MILrw47+d+2qrMHH1+2CsmhrPOF1RAGAHnSYEHhzt+9gqXbu8pu81pPAjctXYXuzJCDldUWBgB5Tn82j48vfwl/2NN93G23JlK4cekfsasv7UBltYcBQJ5ycGAINz+zEmv3H7L11VmWfTptAHtSGdywdCU2HupzosSawgAgz+jsL38iN7S04EOLHsTcBxahocTgmYMDQ1j4zCqs7bYHB5XHACBP2JpI4YbflL6Ut9rbMffBh9DQ2orouHGY++BDiE+YYNsulc3hE8v+hBdP4NaBDmMAkOs6unvLPswbPW0aLrv/AYQbG4+0hZuaMPeBRbYJNQFgoFDAHcd5eEh/xQAgV63q6sHHlr9U8nXeuHPOxaXfuRfBBvtg0mBDA+bcex/GnX2OrS+vFL74h7UlXx/ScAwAcs2zb+7Fbc+9jEy+YOs7ffZszP7a1+APlR8U5w+FMPvrX0f7xbb5ZqG0xrdXrcOPXts8ojXXGgYAueKXm3bhsyteRa6gbH1TrrgSF33u85AnMGeE9Ptx0ec+j8kf/nDJ/n9euwkPrF7P4edl8FNgctzjr2/F4jUbSvbNvPFGzFzw0Xf09wkpMeu221EXi2PdL35u639i/Xb0DeVw38VnwceJaIdhAJCjFq/ZgMdf32prF1LivNtuw+R5JdbLO0Ezb7gBoVgMa376GKCH/+Yv2bobfdkcHp5zLkIcRHQE/0uQI5TW+MbKjpInv/T78f7Pff6UTv63TbniirK3D7/ftQ+ffPZPSOfyp3ycWsEAoIrLFRQ++8Ja/HLTLlufPxTCB7/+DUwo8SDvZB3rAeLLew/ilmUvoXeQg4gABgBVWCZfwG2/exm/3WF/Lx+MRnHpvfeh9eyzR/y4x3qFuP5AAjctXYm96YERP261YQDQSZMlxuIPHHV5nRzK4mPLX8Kqzh7bdpGmUZj7wCKMLvExz0gZPW0a5j6wCOEm+yK025P9uPE3K7Ej2X+kbVui37adbdmuGsMAoJMWbR1na9ue7Mcjr27Eys5u3LR0FTq6e+37jR+PuQ89iPhpp1W8xviECZi76EE0tLba+vamB3DT0lV47s29eGrTTnx71eu2bUrtV0v4FoBO2uipUxGKxTDUN3zwzo87tgAdpfdpmjQJc/7xmwjF4w5UeNjbA4lWfOtb6N2xfVjfocEhfOb5NSX3Czc2YtRkR1bocg2vAOikSb8f06+97oS3b5k5E5fd911HT/631VkWLrv/foyZMeOE95l+3XwIWdunSG3/66jipl1zDcbPmnXc7U674EJc8s1vwR92b1HYQCSCOd/+DsbPOv+42552wYWYcsUVDlTlLgYAnRIhJS7+8lcwY/5H4Cuxwo0vEMDMBQvwgXvuKdnvNF8ggIu/8hXMmD+/5Io8/mAQMxd8FO//0pdq/tcf4DMAGgHS78dZCxdi2jXXYM/Lq5HctQtaa8Tb2tD2vgtKzuLjJunz4ayFt2DKlVdhz+rV6NuzG0JKWO3taDv/fQhGHVmWzxMYADRiQrEYJl421+0yTli4sRGT581zuwxX1f41DhGVxQAgMhgDgMhgDAAigzEAiAzGACAyGAOAyGAMACKDMQCIDMYAIDIYA4DIYAwAIoMxAIgMxgAgMhgDgMhgDAAigzEAiAzGACAyGAOAyGAMACKDMQCIDMYAIDIYA4DIYAwAIoMxAIgMxgAgMhgDgMhgDAAigzEAiAzGACAyGAOAyGAMACKD+d0ugI6vMRTCB8a24F2xGBr8AbfLqWoaGslsDhsSvVi1bz8GCwW3S3IVA8Dj2urrccOkiQhKn9ul1AQBASsYxIVjWjDNsvDk5i1I5XJul+Ua3gJ4WEBKXHfGGTz5K6QxGMKV7RPcLsNVDAAPm2ZZaAjwkr+S3hWNuV2CqxgAHjY2EnG7BKpxDAAigzEAPGxfJuN2CVTjGAAetjGRMPoJtRM2JhJul+AqBoCH5ZTCr3bsMP5ddaXsHxjAM7t3u12Gq/gdgMd1ptP4t40b8f6xYzEpFuNbgVOkodE7lMW6Q4ewursbOaXcLslVDIAqkMhmsXTXLrfLoBrEWwAigzEAiAzGACAyGAOAyGAMACKDMQCIDMYAIDIYA4DIYAwAIoMxAIgMxgAgMhgDgMhgDAAigzEAiAzGACAyGAOAyGAMACKDMQCIDMYAIDIY5wSsAlwdeORwdeDhGAAex9WBRxZXBx6OtwAextWBK4urAzMAPI2rA1ceVwcmz+LqwFRpDAAigzEAPIyrA1OlMQA8jKsDVx5XBybP4urAlcXVgfkdgOdxdeCRxdWBh2MAVAGuDkyVwlsAIoMxAIgMxgAgMhgDgMhgDAAigzEAiAzGACAyGAOAyGAMACKDMQCIDMYAIDIYA4DIYAwAIoMxAIgMxgAgMhgDgMhgDAAigzEAiAzGACAyGAOAyGAMACKDMQCIDMYAIDIYA4DIYAwAIoMxAIgMxgAgMhgDgMhgDAAigzEAiAzGACAyGAOAyGAMACKDMQCIDMYAIDIYA4DIYAwAIoMxAIgMxgAgMhgDgMhgDAAigzEAiAzGACAyGAOAyGAMACKDMQCIDMYAIDIYA4DIYAwAIoMxAIgMxgAgMhgDgMhgDAAigzEAiAzGACAyGAOAyGAMACKDMQCIDMYAIDIYA4DIYAwAIoMxAIgMxgAgMhgDgMhgDAAigzEAiAzGACAyGAOAyGAMACKDMQCIDMYAIDIYA4DIYAwAIoMxAIgMxgAgMhgDgMhgDAAigzEAiAzmSAAIpbK2NicOTFQFVC5nbxTCds5UgjMBoHW/rTGfd+LQRJ6XzWRsbVrrlBPHdiQAtM9n+8cIxQAgAoD84ICtTQI1FACFwsHiNpEdcuLQRJ6X7u62tWnAds5UgiMBEBRis+3AQ/bUIzJR3549trb6YHCLE8d2JACSyWRCAcNiTgxkAK2dODyRZ6l8HqnOzqJG1dXT02N/blYBTr4GXH/0H4QqQA6kHTw8kfcc3LYNhaK3AErKDU4d37EAkFq/WNzmS/U6dXgiT9rf0WFrE4DtXKkUxwJACPF8cZsvecipwxN5UteaV2xtssS5UimOBUB/IrEaSg275vf1JyGyg06VQOQpqc5OHNi0aXijUun+3t6XnarByWcAQxDi18WN/kP2VyBEJtixYoWtTQmxBIAjXwECzo8F+FlxQ6CnC9DK4TKI3JUfHMTm5cts7ULrJ52sw9EASCeTK6DU7qPbRC6LwIF9TpZB5Loty5cjmyr62E+prkxf3++drMPpK4ACpFxc3BjYuxOiwE+DyQzZVApv/Op/7B1CPAyg4GQtjg8HTofDjyug5+g2kc8hsHen06UQuaLjP5/EUF/fsDYFHIoEg//qdC3Ozwewd29Gar2ouDnQ0wWZ7iu1B1HN6NnwBrb89re2dgEsdurrv6O5MiFIOpn8F6X1G8MatUbdjo28FaCaNZRKYeX3vmf7BF4DWzOJxMNu1OTWjEA5CdxZ3Ciygwi9uYljBKjmqEIBLz38MDIHSwzyU+rTAFwZHuvalGDpZPIFrfWjxe2+5EGEdm91oySiytAar/z4R+ha+6q9T6knMn199nsCh7g6J2DGsr4A4LXidv+BvQh27nChIqIRpjX+/MR/YNtzz9m6lNYb0uGw7UrYSe5OCrpz56AsFK5XQKK4K7B/9+ErAd4OUJVShQJWP/pDbFiypESnSkspr8f+/a4OiXV9VuBUKrXFJ8SV0No2KMDf04W67esh8iUmTSTysKG+Prx4770lf/kB5DVwbbq39y9O11XM9QAAgP7e3pVKiOtR4iMIX/IQwhvXQqYdmSKN6JT1bHgDy+6+C11/Xltuk1szfX3POllTOX63C3jbQCLxdNiy/k5q/RSEqDu6T2SHEN78GnKjW5Ebdzq0zzNlEx2R7e9Hx5M/O/yev/Stax7ArelE4r8cLq0sT51JA4nE0w2NjXMLWj8tAWtYp9YI9HTBnziAXEsbcqPHAdITFzBkuPzgILYsW4Y3lvwaQ8lk6Y2USmvgWq/88r/NUwEAAP29vX+MxWKzClI+BeDs4n6RyyK4ZzsC+3YjP7oV+VEtUKGwC5WS6VKdndixYgU2L19mH9hzFKX1BunzXZ/xwD1/Mc8FAAD09fVtRXv7RZFEYrEQouRrEpHPIbBvFwL7dkHVR5GPj0YhZkGFGwDBdYdo5Kl8Hge3bcP+jg50rXnFPplHyZ3UEwPh8J1uP+0vx/NnSoNlzS4o9SMp5YwT2kFIqLowVF0EOlgH7fMB0gd9jNsF2Z9EoGhikvZLLsGYM6efUu1UvVQuh2wmg/zgANLd3ejbswepzk7bBJ7laGALlPqMmx/5nAjPB8BbAvXx+KeVEPdIoMXtYojKUcBBIcTiTG/vP8Glz3vfiWoJgMPa2sL1/f2fgFJfgJTtbpdDdIRSXRDi+5Fg8DE3RvWdrOoKgL+S9fH4ByHELUqp66SUUbcLIgMplVZCLBFaP/nWTD6OTuYxEqo1AI4WiDY2zipofakGZkulzoSUbW4XRTVIqS4l5QYBvCiFeP6t2Xsdm8CzEmohAGyam5sb0tnsJAGMUkBUCBGF1qFj7aO19gshZgIQWoh1Qmt+f2wyIbJa65QEUho4WB8MbqmmS3siIiIiIiIiIiIiAMD/A8Oh+BmC1xJEAAAAAElFTkSuQmCC">';
        html += '       <div class="wcp-tour-title">' + this.options.welcomeScreen.title + '</div>';
        html += '       <div class="wcp-tour-text">' + this.options.welcomeScreen.text + '</div>';
        html += '       <div class="wcp-tour-begin">' + this.options.welcomeScreen.startButtonTitle + '</div>';
        html += '       <div class="wcp-tour-skip">' + this.options.welcomeScreen.cancelButtonTitle + '</div>';
        html += '   </div>';

        // step
        html += '   <div class="wcp-tour-step wcp-tour-centered-content">';
        html += '       <div class="wcp-tour-step-nav"></div>';
        html += '       <div class="wcp-tour-step-title"></div>';
        html += '       <div class="wcp-tour-step-text"></div>';
        html += '       <div class="wcp-tour-step-click-anywhere">Click anywhere to continue</div>';
        html += '       <div class="wcp-tour-step-skip">Or skip this guide</div>';
        html += '   </div>';

        html += '</div>';

        $('body').append(html);

        if (!$('body').hasClass('wcp-tour-active')) {
            $('body').addClass('wcp-tour-active');
        }

        this.root = $('#wcp-tour-' + this.id);

        this.events();
    };
    WCPTour.prototype.events = function() {
        var self = this;

        this.root.find('.wcp-tour-begin').on('click', function() {
            // go to step 0
            self.presentStep(0);
        });
        this.root.find('.wcp-tour-skip').on('click', function() {
            // end tour
            self.endTour();
        });
        this.root.find('.wcp-tour-step-skip').on('click', function() {
            // end tour
            self.endTour();
        });
        $(document).off('click.' + this.id);
        $(document).on('click.' + this.id, function(e) {
            if ($(e.target).hasClass('wcp-tour-step') || $(e.target).hasClass('wcp-tour-step-title') || $(e.target).hasClass('wcp-tour-step-text') || $(e.target).hasClass('wcp-tour-step-click-anywhere')) {
                self.nextStep();
            }
        });
        $(document).off('click.' + this.id, '.wcp-tour-step-circle');
        $(document).on('click.' + this.id, '.wcp-tour-step-circle', function() {
            i = $(this).data('wcp-tour-circle-index');
            self.presentStep(i);
        });
        var visibleContainer = undefined;
        $(document).off('mouseover.' + this.id, '.wcp-tour-tip-media-button');
        $(document).on('mouseover.' + this.id, '.wcp-tour-tip-media-button', function() {
            visibleContainer = $(this).siblings('.wcp-tour-tip-media-container');
            visibleContainer.show();
            self.limitMediaContainer(visibleContainer);

            if (visibleContainer.find('video').length > 0) {
                visibleContainer.find('video').get(0).play();
            }
        });
        $(document).off('mousemove.' + this.id);
        $(document).on('mousemove.' + this.id, function(e) {
            if (visibleContainer && $(e.target).closest('.wcp-tour-tip-media-button').length == 0 && $(e.target).closest('.wcp-tour-tip-media-container').length == 0) {
                visibleContainer.hide();

                if (visibleContainer.find('video').length > 0) {
                    visibleContainer.find('video').get(0).pause();
                }

                visibleContainer = undefined;
            }
        });
        $(window).off('resize.wcp-tour');
        $(window).on('resize.wcp-tour', function() {
            $('.wcp-tour-highlight-rect').addClass('wcp-tour-highlight-rect-no-transition');
            self.updateHighlightRect();
            setTimeout(function() {
                $('.wcp-tour-highlight-rect').removeClass('wcp-tour-highlight-rect-no-transition');
            }, 10);
        });
    };
    WCPTour.prototype.nextStep = function() {
        if (parseInt(this.currentStep, 10) == this.options.steps.length - 1) {
            // done
            this.endTour();
        } else {
            // next step
            this.presentStep(parseInt(this.currentStep, 10) + 1);
        }
    };
    WCPTour.prototype.presentStep = function(stepIndex) {
        // is the step different?
        if (parseInt(this.currentStep, 10) == parseInt(stepIndex, 10)) return;

        if (this.currentStep == -1) {
            var self = this;

            // Hide welcome screen
            this.root.find('.wcp-tour-welcome-screen').css({ opacity: 0 });
            setTimeout(function() {
                self.root.find('.wcp-tour-welcome-screen').hide();
            }, 330);

            // Show step screen
            this.root.find('.wcp-tour-step').css({ display: 'flex' });
            setTimeout(function() {
                self.root.find('.wcp-tour-step').css({ opacity: 1 });
            }, 10);
        }


        localStorage[this.options.name] = stepIndex;
        this.currentStep = stepIndex;

        $.wcpTourEventStepWillChange(this.options.steps[this.currentStep].title);

        // Update navigation
        this.updateNav();

        // Set step content
        this.updateStep();

        // Update tip
        this.updateTip();

        // Send event
        $.wcpTourEventStepDidChange(this.options.steps[this.currentStep].title);
    };
    WCPTour.prototype.presentWelcomeScreen = function(stepIndex) {
        // Set current step to welcome screen
        localStorage[this.options.name] = -1;
        this.currentStep = -1;

        // Set the initial position of the highlight rects
        $('.wcp-tour-highlight-rect').addClass('wcp-tour-highlight-rect-no-transition');
        var rect = $.wcpTourCoordinatesForHighlightRect(this.options.steps[0].title);

        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        $('#wcp-tour-highlight-rect-1').css({
            left: 0,
            top: 0,
            width: '100%',
            height: rect.y + rect.height/2
        });
        $('#wcp-tour-highlight-rect-2').css({
            left: rect.x + rect.width/2,
            top: rect.y + rect.height/2,
            width: windowWidth - rect.x - rect.width/2,
            height: 0
        });
        $('#wcp-tour-highlight-rect-3').css({
            left: 0,
            top: rect.y + rect.height/2,
            width: '100%',
            height: windowHeight - rect.y - rect.height/2
        });
        $('#wcp-tour-highlight-rect-4').css({
            left: 0,
            top: rect.y + rect.height/2,
            width: rect.x + rect.width/2,
            height: 0
        });

        setTimeout(function() {
            $('.wcp-tour-highlight-rect').removeClass('wcp-tour-highlight-rect-no-transition');
        }, 50);
    };
    WCPTour.prototype.endTour = function(stepIndex) {
        // Set current step to welcome screen
        localStorage[this.options.name] = 'finished';
        this.currentStep = -1;

        // Send event
        $.wcpTourEventFinished();

        // Fade out root
        this.root.addClass('wcp-tour-hidden');
        var self = this;
        setTimeout(function() {
            self.root.remove();
            $('body').removeClass('wcp-tour-active');
        }, 330);
    };
    WCPTour.prototype.isFinished = function() {
        if (localStorage[this.options.name] == 'finished') {
            return true;
        }

        return false;
    };

    WCPTour.prototype.updateNav = function() {
        // does the number of circles need to be updated?
        while (parseInt(this.currentStep, 10) > this.reachedStep) {
            // this.reachedStep = parseInt(this.currentStep, 10);
            this.reachedStep++;

            // Add a new circle
            var html = '<div class="wcp-tour-step-circle" data-wcp-tour-circle-index="'+ this.reachedStep +'"><div class="wcp-tour-step-circle-inner">'+ (this.reachedStep + 1) +'</div></div>';
            this.root.find('.wcp-tour-step-nav').append(html);

            // Present the circle
            var self = this;
            setTimeout(presentCircle.bind(null, this.reachedStep), 10);
        }

        function presentCircle(index) {
            $('.wcp-tour-step-circle[data-wcp-tour-circle-index="'+ index +'"]').addClass('wcp-tour-circle-presented');
        }

        // set the currently active circle
        $('.wcp-tour-step-circle').removeClass('wcp-tour-circle-active');
        $('.wcp-tour-step-circle[data-wcp-tour-circle-index="'+ parseInt(this.currentStep, 10) +'"]').addClass('wcp-tour-circle-active');
    };
    WCPTour.prototype.updateStep = function() {
        this.root.find('.wcp-tour-step-title').html(this.options.steps[this.currentStep].title);
        this.root.find('.wcp-tour-step-text').html(this.options.steps[this.currentStep].text);
    };
    WCPTour.prototype.updateTip = function() {
        if (this.root.find('.wcp-tour-tip[data-wcp-tip-index='+ parseInt(this.currentStep, 10) +']').length == 0) {
            // Add HTML
            var html = '';

            html += '   <div class="wcp-tour-tip" data-wcp-tip-index="'+ parseInt(this.currentStep, 10) +'">';

            if (this.options.steps[this.currentStep].tip.position == 'bottom-left' || this.options.steps[this.currentStep].tip.position == 'bottom-right') {
                html += '       <div class="wcp-tour-tip-arrow"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAADTCAYAAABKv9f/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDQ0OUMxRjMxREE5MTFFNkIxNDlGNTZEN0E0QkIzQkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDQ0OUMxRjQxREE5MTFFNkIxNDlGNTZEN0E0QkIzQkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNDQ5QzFGMTFEQTkxMUU2QjE0OUY1NkQ3QTRCQjNCRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNDQ5QzFGMjFEQTkxMUU2QjE0OUY1NkQ3QTRCQjNCRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvBYhb8AAAxKSURBVHja7J15dFXVFcZPBhpCVMYoSLWggoBKmyjiUJXBgcG21tah2tF21dVWsdS2/9jVyipW/9GuWHWxSieg0uLQ1laFEhkFIbVIEEiEVghiVQg1GIGQSPK6d+9O+7i5956XlzfcffJ9a31L4Bxfbs7v7TOfcwsSiYRxXCXk08XDyCeTB5NPJPcj9yE/SH7VxV++2KHf5UPkceQK8rnkc8hjBGyB5f/9HQDHB+Ip5L3kU8mXiicK2BIDqQXMIBdINbufPAL4dAEuJ/9Q/jyLPJA8iTyVfJ1EbKfSgcudjX3kt8mN5IPkw+Q28huuAi6IQSerrwD9gfydOz5vpth2BukYuY5cS95Krif/g9wgMHuV8gW4UDpAd5I/Ty5LE6aRqFxHfom8QcC2oHLuWkUXSDVm0+ckMvYIqGLp3LBLySfIEGSQDEnOIB8hbyafT55AvkjypKN3yKvEayQ6E0BpB3wP+Uzy++Q/C8C3pJ3q1GzyQym0dW1SVXaOQ3vS1nNbuZq8krxCqlwA7WYVPZy8U9o/v46Sm2RCYAj5APldaTs5/0kyfMmUWsnryS+QqyXy24GqZ4B5+PHFPD0DR/rfkqL0JbShmQVcSf/dlMOfyVVujYB8Uf58BCiyB5ir1+/JGDSTVW1ChiZ10imrlS/S62hD8zNM4vnbx8njA/J1CJimpN52m0Tee9Im75dJBJ402E3eJe03FKNxMEfwXInoID1MvjuphwwpneiYTl5kvGU1v5aSbyY3o/j0AmbxVOEfZHLCr23kmcbhOVxXVBiRxvA+LkMov7i93kiuRBHqBdw5yfEV8ncCer68bMdThVehGHVW0X5xlfx74801J+sD8peMtysCUhbByXpOqux/+f6dpzAXG2/JD1IMmLXFeNtjtgakVZHnmPSX/aA8V9HJ6k9+nnxJQNoj5LuMNzkCKQXM4mVAnq06NSBtIfmrJr0JEW7jefsOr1QdMt4GO3xZ8gC4M5LrpUft19PkW4x9m8wwqQk+KR7gS+dp0GVSY/B//w1suQPcCWiHCd6h8Sz5BpP6nDR/xpXkacabTTvNl86RXCOwudO3GQizD5h1ofGW/4oC0paTP23SWxLk7T2fEZ8VkM67Tp4S1xisUmUNsJGx8G+kkP09ad4/9Qlz/Paf7mp8EuxzAtL3SrPwpPE23wG2yfyuSt6v9e3Oz/al8azXtdJx6qkY9pfJtxpvY59fPM26QL5wuwA4cyqW9vFS6WX7q+x10rYeyuDPmy61B9cQ/g0L/MutJf9aqvHDANxz8YmEjdJhKjddd1Qy5BnG272ZSfE2Xd5Xdofxdof6xV+qJeSfyYQNAPdAo6XTw1XlWONNZybrRYm8bERUoXyBZkmPPGhmjZsLnnnj7cFu79hkwFnyFPIH5GXktkRXrSL3y+LPZ48hP0o+lAjWbvJ3yQOy/Bx5c7Z/wNelIH8ZAnk5uW8OftFy8gPk90NAN5N/Qh4MwN33Q+QO8n0S0X49xzs7c/QLDxaQzb0FdC5+SBH5GfJh8vfJxwIK9mlycQ5/8UHkH0dU3Rzp90s+AE7BJ5A3kd8m30FuDyjUxfJlyGUBDCcvlBomSO+S78rxl08lYPYwcgN5O/mbIQU6n1yYh4KYQF6XCFc9eQYA2z2O3EReTb4zpDB/Si7IU4HcRH4jAvRS8lgAjvYV5FbyEhmiBGlOHgvlRPK8iGqbRwM/IvcB4HDfIAX4MPnekIKcnefCmUx+PSKaa8kVABzuWVJQ95AfDCnE2/JcQGXkqpBOYUKGfXNzOMxTBdhI4bBuJ/8ioAC5YK+PQUFNlhFAmLZJ/wKAfS5Iau9uJj8VUHitMu2Z72cdKtOrYeJx/hcAOHgiZIl0Xj4l05dBEw8TYvKs90V0wDqHen0B+HhzG/Ys+Sj5WnJNQME1kkfH5HmnkQ9YOmCjAPh487e+Wqq6mTK54FeDTJjE4Xn5y7YrAnKTDAkBOMm8fLhSquTrQiYdtpD7x+R5TyG/HAH5qEyeALAP8gqBfKvMBwetJZfE5HnLZEUsTB0yoQPAPshLpbrmyf6WgIJ7Ik/z1mGdr/mJaFXl43njPAtTIhBbZY22PWTeOk7PPM8CeUGuIcd9LpUj4xGB+9uQQrs7Rs/L4/pfWSDPz+ViioYVkQKppttDhk8JmduOy/NyhC6yQH4sV88Th/uiUxXvkFwse539m935fku+OHx9TJ6V94PznWM3ReSpSjokkDUVKtoAypeTnif7qv1bXUtkC+yomDwrPx/fg10dkYfPUM/Vui8627rGePeF+I+a/tN4d1HH5YjpADkEcLblTNdCAO4qPlrKt9QO9f374xI9cdEoOQQwMCSdz09PyVbzUmj0ik8TzpT2N/lYzOyYPSffSP9ZE37bAZ+n+qPJ0ltkNANmvWK8A+YJOWDGHbHGGD7nSjkzFSY+w/UXk/5rDpysopN1vsCO+y/DzcctEel8tvlGANYrvtOk1lId3ya1EQArFZ+dXmOCr7tg8THXChkR9Po2WKO4t3x/RDpfI8UTOsUArFdzZHwcpgmSB1W0YvHBeL5poE9IOl8ZdbGM9RHBCsUXyFVZ2DzaU0aI4PyK29vXjPdisjB9gzwPgPWK338Rddc2X+XIc9kHUEXrFC+arIpI59uDHkAE69Y48qsRY+OEdLhqEME6VSeRHBqIJs21Y0RwfDRaQBdF5LnceHeMIYIVaqexv9jkXkSw+1E8yXhz2YhgpVG82JJnDiJYfxS/ZqLfXjPZeC/URgQrjeJqS56U31EFwPHUY5Z0fnnJhwFYr/hlJnsj0rkTdjsA6xVvnP+5Jc/XTPhSIwAr0HzjvfgzTLwf/HoA1qt9xntBd5S+BcC6tciSfhl5JADrFQ+XDlry3AjAesXnlp4BYLf1hCW90gS/9g+AFVXTTelGMQDHXzxU+hMAu60nLekfNd4iBQAr1Wpz/DnoIE0DYL1qMd77maM0FYB1a4UlfZIJ2AkCwO4APol8AQDr1cvk9yx5rgRgveIlRNtmu6kA7HY1fQm5FID1yhbBfOPfRADWq7oUxsMVAKxXPG253ZKnEoB16xVEsNvabEkfk9zRAmD3APNs1nkArFd8M09Hqu0wAOvTEfKOVNthANapnZb00QCsWw2W9JEArFu7Lel8MK0YgN2NYO5JnwbA7gJmjQBgd6vo/7XDAKxTzca+VxqAlWuPJf10ANYt28u/BgOwbtmq6IEADMAQAEMADOUFMG/AKwVgdwGzBgGwXh1KIU8ZAOtVewp5igAYgCEAhgAYyrg6ABgRXAjAqKKhmKokhTxtAKxXpSnkOQLAetUvhTwtAOw2YEQwAEMADMWyk8XXPbQDsF6VWdL/u5wIwHpVbklvBGDdOhmAe3cE7wdgRDCENhjKh/j0/kBU0W5HbwEi2F0NSyHPWwCsVyNSyLMHgN0FzLs93gRgvfqIJZ3hHgNgdyO4ofMPAOxmBO8BYEQwFFP1FwOwozo7hTw7AFivxqWQpx6A9WqsJX2fSTr9D8DuAa5L/gsAuwe4HoD1is8jjQRgt3vQRQDcu3vQ2wFYryos6e+IAdhRwF3eigbAuvQxAHZX/KqccgDuvdUzADsOmF/UsQuA3QVcS04AsF5dYEn/e9A/ArAODZdOVpQ2ArBeXZxCHgBWrIss6XyKYS8Auwt4Y1gCAMdffJKw0pJnAwDrFU9PliKCe2/1zNclbQJgvbrMks5wWwDYXcBroxIBON46y9gPewOwYl1uSef3NqwHYHcBbyUfBGB3Aa+1fQAAx1e8wDASgN3VFZb0BADr1lRL+jYjl50BsJuAV6byIQAcT51p7PdwrABgvZpiSed7sNYAsLvVM++/agZgneJLRidnonoG4HjqXGO/7BuAFesqSzovDa4HYL262pLOkxutAKxTfEWDbf55eXc+EIDjJV7cLwXg3ls98/7nbQDsLuDq7n4gAMdHPDQan8nqGYDjF71Rb1JJIIJ1a7olnbfHNgKwTnHk2iY4lqXzwQAcD/HhbtsFK0sB2N3qma8HrgFgvZpmSX/BeGvAAKxQ/JLJC7NRPQNwPMSdK9sNsn8FYL2aYUnfYuRFkwCsc3h0jSXP8z35AQCcX/HlZkOz1f4CcPyrZz5YtgGA3R3/8tzzMQDWqUHkidmsnlnFKOe8abwMf/qShxjvJP8Q8/8VpUQmABckEgkUdXzUx3jrwgPIh03SSybT1X8EGABF4u6wyXDEhgAAAABJRU5ErkJggg=="></div>';
                html += '       <div class="wcp-tour-clear"></div>';
            }

            html += '       <div class="wcp-tour-tip-media-button"></div>';
            html += '       <div class="wcp-tour-tip-title-wrap">';
            html += '           <div class="wcp-tour-tip-title"></div>';
            html += '           <div class="wcp-tour-tip-subtitle"></div>';
            html += '       </div>';

            if (this.options.steps[this.currentStep].tip.position == 'top-left' || this.options.steps[this.currentStep].tip.position == 'top-right') {
                html += '       <div class="wcp-tour-clear"></div>';
                html += '       <div class="wcp-tour-tip-arrow"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAADTCAYAAABKv9f/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDQ0OUMxRjMxREE5MTFFNkIxNDlGNTZEN0E0QkIzQkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDQ0OUMxRjQxREE5MTFFNkIxNDlGNTZEN0E0QkIzQkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNDQ5QzFGMTFEQTkxMUU2QjE0OUY1NkQ3QTRCQjNCRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNDQ5QzFGMjFEQTkxMUU2QjE0OUY1NkQ3QTRCQjNCRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvBYhb8AAAxKSURBVHja7J15dFXVFcZPBhpCVMYoSLWggoBKmyjiUJXBgcG21tah2tF21dVWsdS2/9jVyipW/9GuWHWxSieg0uLQ1laFEhkFIbVIEEiEVghiVQg1GIGQSPK6d+9O+7i5956XlzfcffJ9a31L4Bxfbs7v7TOfcwsSiYRxXCXk08XDyCeTB5NPJPcj9yE/SH7VxV++2KHf5UPkceQK8rnkc8hjBGyB5f/9HQDHB+Ip5L3kU8mXiicK2BIDqQXMIBdINbufPAL4dAEuJ/9Q/jyLPJA8iTyVfJ1EbKfSgcudjX3kt8mN5IPkw+Q28huuAi6IQSerrwD9gfydOz5vpth2BukYuY5cS95Krif/g9wgMHuV8gW4UDpAd5I/Ty5LE6aRqFxHfom8QcC2oHLuWkUXSDVm0+ckMvYIqGLp3LBLySfIEGSQDEnOIB8hbyafT55AvkjypKN3yKvEayQ6E0BpB3wP+Uzy++Q/C8C3pJ3q1GzyQym0dW1SVXaOQ3vS1nNbuZq8krxCqlwA7WYVPZy8U9o/v46Sm2RCYAj5APldaTs5/0kyfMmUWsnryS+QqyXy24GqZ4B5+PHFPD0DR/rfkqL0JbShmQVcSf/dlMOfyVVujYB8Uf58BCiyB5ir1+/JGDSTVW1ChiZ10imrlS/S62hD8zNM4vnbx8njA/J1CJimpN52m0Tee9Im75dJBJ402E3eJe03FKNxMEfwXInoID1MvjuphwwpneiYTl5kvGU1v5aSbyY3o/j0AmbxVOEfZHLCr23kmcbhOVxXVBiRxvA+LkMov7i93kiuRBHqBdw5yfEV8ncCer68bMdThVehGHVW0X5xlfx74801J+sD8peMtysCUhbByXpOqux/+f6dpzAXG2/JD1IMmLXFeNtjtgakVZHnmPSX/aA8V9HJ6k9+nnxJQNoj5LuMNzkCKQXM4mVAnq06NSBtIfmrJr0JEW7jefsOr1QdMt4GO3xZ8gC4M5LrpUft19PkW4x9m8wwqQk+KR7gS+dp0GVSY/B//w1suQPcCWiHCd6h8Sz5BpP6nDR/xpXkacabTTvNl86RXCOwudO3GQizD5h1ofGW/4oC0paTP23SWxLk7T2fEZ8VkM67Tp4S1xisUmUNsJGx8G+kkP09ad4/9Qlz/Paf7mp8EuxzAtL3SrPwpPE23wG2yfyuSt6v9e3Oz/al8azXtdJx6qkY9pfJtxpvY59fPM26QL5wuwA4cyqW9vFS6WX7q+x10rYeyuDPmy61B9cQ/g0L/MutJf9aqvHDANxz8YmEjdJhKjddd1Qy5BnG272ZSfE2Xd5Xdofxdof6xV+qJeSfyYQNAPdAo6XTw1XlWONNZybrRYm8bERUoXyBZkmPPGhmjZsLnnnj7cFu79hkwFnyFPIH5GXktkRXrSL3y+LPZ48hP0o+lAjWbvJ3yQOy/Bx5c7Z/wNelIH8ZAnk5uW8OftFy8gPk90NAN5N/Qh4MwN33Q+QO8n0S0X49xzs7c/QLDxaQzb0FdC5+SBH5GfJh8vfJxwIK9mlycQ5/8UHkH0dU3Rzp90s+AE7BJ5A3kd8m30FuDyjUxfJlyGUBDCcvlBomSO+S78rxl08lYPYwcgN5O/mbIQU6n1yYh4KYQF6XCFc9eQYA2z2O3EReTb4zpDB/Si7IU4HcRH4jAvRS8lgAjvYV5FbyEhmiBGlOHgvlRPK8iGqbRwM/IvcB4HDfIAX4MPnekIKcnefCmUx+PSKaa8kVABzuWVJQ95AfDCnE2/JcQGXkqpBOYUKGfXNzOMxTBdhI4bBuJ/8ioAC5YK+PQUFNlhFAmLZJ/wKAfS5Iau9uJj8VUHitMu2Z72cdKtOrYeJx/hcAOHgiZIl0Xj4l05dBEw8TYvKs90V0wDqHen0B+HhzG/Ys+Sj5WnJNQME1kkfH5HmnkQ9YOmCjAPh487e+Wqq6mTK54FeDTJjE4Xn5y7YrAnKTDAkBOMm8fLhSquTrQiYdtpD7x+R5TyG/HAH5qEyeALAP8gqBfKvMBwetJZfE5HnLZEUsTB0yoQPAPshLpbrmyf6WgIJ7Ik/z1mGdr/mJaFXl43njPAtTIhBbZY22PWTeOk7PPM8CeUGuIcd9LpUj4xGB+9uQQrs7Rs/L4/pfWSDPz+ViioYVkQKppttDhk8JmduOy/NyhC6yQH4sV88Th/uiUxXvkFwse539m935fku+OHx9TJ6V94PznWM3ReSpSjokkDUVKtoAypeTnif7qv1bXUtkC+yomDwrPx/fg10dkYfPUM/Vui8627rGePeF+I+a/tN4d1HH5YjpADkEcLblTNdCAO4qPlrKt9QO9f374xI9cdEoOQQwMCSdz09PyVbzUmj0ik8TzpT2N/lYzOyYPSffSP9ZE37bAZ+n+qPJ0ltkNANmvWK8A+YJOWDGHbHGGD7nSjkzFSY+w/UXk/5rDpysopN1vsCO+y/DzcctEel8tvlGANYrvtOk1lId3ya1EQArFZ+dXmOCr7tg8THXChkR9Po2WKO4t3x/RDpfI8UTOsUArFdzZHwcpgmSB1W0YvHBeL5poE9IOl8ZdbGM9RHBCsUXyFVZ2DzaU0aI4PyK29vXjPdisjB9gzwPgPWK338Rddc2X+XIc9kHUEXrFC+arIpI59uDHkAE69Y48qsRY+OEdLhqEME6VSeRHBqIJs21Y0RwfDRaQBdF5LnceHeMIYIVaqexv9jkXkSw+1E8yXhz2YhgpVG82JJnDiJYfxS/ZqLfXjPZeC/URgQrjeJqS56U31EFwPHUY5Z0fnnJhwFYr/hlJnsj0rkTdjsA6xVvnP+5Jc/XTPhSIwAr0HzjvfgzTLwf/HoA1qt9xntBd5S+BcC6tciSfhl5JADrFQ+XDlry3AjAesXnlp4BYLf1hCW90gS/9g+AFVXTTelGMQDHXzxU+hMAu60nLekfNd4iBQAr1Wpz/DnoIE0DYL1qMd77maM0FYB1a4UlfZIJ2AkCwO4APol8AQDr1cvk9yx5rgRgveIlRNtmu6kA7HY1fQm5FID1yhbBfOPfRADWq7oUxsMVAKxXPG253ZKnEoB16xVEsNvabEkfk9zRAmD3APNs1nkArFd8M09Hqu0wAOvTEfKOVNthANapnZb00QCsWw2W9JEArFu7Lel8MK0YgN2NYO5JnwbA7gJmjQBgd6vo/7XDAKxTzca+VxqAlWuPJf10ANYt28u/BgOwbtmq6IEADMAQAEMADOUFMG/AKwVgdwGzBgGwXh1KIU8ZAOtVewp5igAYgCEAhgAYyrg6ABgRXAjAqKKhmKokhTxtAKxXpSnkOQLAetUvhTwtAOw2YEQwAEMADMWyk8XXPbQDsF6VWdL/u5wIwHpVbklvBGDdOhmAe3cE7wdgRDCENhjKh/j0/kBU0W5HbwEi2F0NSyHPWwCsVyNSyLMHgN0FzLs93gRgvfqIJZ3hHgNgdyO4ofMPAOxmBO8BYEQwFFP1FwOwozo7hTw7AFivxqWQpx6A9WqsJX2fSTr9D8DuAa5L/gsAuwe4HoD1is8jjQRgt3vQRQDcu3vQ2wFYryos6e+IAdhRwF3eigbAuvQxAHZX/KqccgDuvdUzADsOmF/UsQuA3QVcS04AsF5dYEn/e9A/ArAODZdOVpQ2ArBeXZxCHgBWrIss6XyKYS8Auwt4Y1gCAMdffJKw0pJnAwDrFU9PliKCe2/1zNclbQJgvbrMks5wWwDYXcBroxIBON46y9gPewOwYl1uSef3NqwHYHcBbyUfBGB3Aa+1fQAAx1e8wDASgN3VFZb0BADr1lRL+jYjl50BsJuAV6byIQAcT51p7PdwrABgvZpiSed7sNYAsLvVM++/agZgneJLRidnonoG4HjqXGO/7BuAFesqSzovDa4HYL262pLOkxutAKxTfEWDbf55eXc+EIDjJV7cLwXg3ls98/7nbQDsLuDq7n4gAMdHPDQan8nqGYDjF71Rb1JJIIJ1a7olnbfHNgKwTnHk2iY4lqXzwQAcD/HhbtsFK0sB2N3qma8HrgFgvZpmSX/BeGvAAKxQ/JLJC7NRPQNwPMSdK9sNsn8FYL2aYUnfYuRFkwCsc3h0jSXP8z35AQCcX/HlZkOz1f4CcPyrZz5YtgGA3R3/8tzzMQDWqUHkidmsnlnFKOe8abwMf/qShxjvJP8Q8/8VpUQmABckEgkUdXzUx3jrwgPIh03SSybT1X8EGABF4u6wyXDEhgAAAABJRU5ErkJggg=="></div>';
            }

            if (this.options.steps[this.currentStep].tip.media != undefined) {
                html += '       <div class="wcp-tour-tip-media-container">';

                if (this.options.steps[this.currentStep].tip.media.type == 'video') {
                    html += '<video loop>';
                    html += '   <source src="'+ this.options.steps[this.currentStep].tip.media.url_mp4 +'" type="video/mp4">';
                    html += '   <source src="'+ this.options.steps[this.currentStep].tip.media.url_webm +'" type="video/webm">';
                    html += '   <source src="'+ this.options.steps[this.currentStep].tip.media.url_ogv +'" type="video/ogv">';
                    html += '</video>';
                }
                if (this.options.steps[this.currentStep].tip.media.type == 'image') {
                    html += '<img src="'+ this.options.steps[this.currentStep].tip.media.url +'">';
                }
            }

            html += '       </div>';
            html += '   </div>';

            this.root.append(html);
        }

        var tip = this.root.find('.wcp-tour-tip[data-wcp-tip-index='+ parseInt(this.currentStep, 10) +']');

        tip.find('.wcp-tour-tip-title').html(this.options.steps[this.currentStep].tip.title);
        tip.find('.wcp-tour-tip-subtitle').html(this.options.steps[this.currentStep].tip.subtitle);

        // Set media
        if (this.options.steps[this.currentStep].tip.media != undefined) {
            tip.find('.wcp-tour-tip-media-button').show();

            if (this.options.steps[this.currentStep].tip.media.type == 'video') {
                tip.find('.wcp-tour-tip-media-button').html('<i class="fa fa-play" aria-hidden="true"></i>');
            }
            if (this.options.steps[this.currentStep].tip.media.type == 'image') {
                tip.find('.wcp-tour-tip-media-button').html('<i class="fa fa-camera" aria-hidden="true"></i>');
            }
        } else {
            tip.find('.wcp-tour-tip-media-button').hide();
        }

        // Position tip
        var c = this.options.steps[this.currentStep].tip.coordinates;

        if (c == undefined) {
            c = $.wcpTourCoordinatesForTipForStep(this.options.steps[parseInt(this.currentStep, 10)].title);
        }

        var x, y;
        if (this.options.steps[this.currentStep].tip.position == 'bottom-right') {
            x = c.x;
            y = c.y;
        }
        if (this.options.steps[this.currentStep].tip.position == 'bottom-left') {
            x = c.x - tip.width();
            y = c.y;
        }
        if (this.options.steps[this.currentStep].tip.position == 'top-right') {
            x = c.x;
            y = c.y - tip.height();
        }
        if (this.options.steps[this.currentStep].tip.position == 'top-left') {
            x = c.x - tip.width();
            y = c.y - tip.height();
        }

        tip.css({
            left: x,
            top: y
        });

        // position arrow
        if (this.options.steps[this.currentStep].tip.position == 'bottom-left') {
            tip.find('.wcp-tour-tip-arrow').css({
                transform: 'scaleX(-1)',
                float: 'right'
            });
        }
        if (this.options.steps[this.currentStep].tip.position == 'bottom-right') {
            tip.find('.wcp-tour-tip-arrow').css({
                transform: 'scaleX(1)',
            });
        }
        if (this.options.steps[this.currentStep].tip.position == 'top-left') {
            tip.find('.wcp-tour-tip-arrow').css({
                transform: 'scale(-1, -1)',
                float: 'right'
            });
        }
        if (this.options.steps[this.currentStep].tip.position == 'top-right') {
            tip.find('.wcp-tour-tip-arrow').css({
                transform: 'scaleY(-1)',
            });
        }

        // Apply extra arrow styles
        if (this.options.steps[this.currentStep].tip.arrowStyle) {
            tip.find('.wcp-tour-tip-arrow').attr('style', tip.find('.wcp-tour-tip-arrow').attr('style') + ' ' + this.options.steps[this.currentStep].tip.arrowStyle);
        }

        // Highlight rect
        this.updateHighlightRect();

        // If this is the first step, blink the media button
        if (this.currentStep == 0 && this.options.steps[this.currentStep].tip.media) {
            setTimeout(function() {
                $('.wcp-tour-tip-media-button').addClass('wcp-tour-tip-media-button-blink');
            }, 1000);
        }

        // Update tip classes
        for (var i=0; i<=parseInt(this.reachedStep, 10); i++) {
            var t = this.root.find('.wcp-tour-tip[data-wcp-tip-index='+ i +']');
            if (i == parseInt(this.currentStep, 10)) {
                t.addClass('wcp-tour-tip-visible');
                var animatedTip = t;
                setTimeout(function() {
                    animatedTip.addClass('wcp-tour-tip-animated');
                }, 10);
            } else {
                t.removeClass('wcp-tour-tip-animated');
                t.removeClass('wcp-tour-tip-visible');
            }
        }
    };
    WCPTour.prototype.updateHighlightRect = function() {
        if (this.currentStep >= 0 && this.options.steps[this.currentStep].tip.highlightRect) {
            var rect = $.wcpTourCoordinatesForHighlightRect(this.options.steps[this.currentStep].title);

            var windowWidth = $(window).width();
            var windowHeight = $(window).height();

            $('#wcp-tour-highlight-rect-1').css({
                left: 0,
                top: 0,
                width: '100%',
                height: rect.y
            });
            $('#wcp-tour-highlight-rect-2').css({
                left: rect.x + rect.width,
                top: rect.y,
                width: windowWidth - rect.x - rect.width,
                height: rect.height
            });
            $('#wcp-tour-highlight-rect-3').css({
                left: 0,
                top: rect.y + rect.height,
                width: '100%',
                height: windowHeight - rect.y - rect.height
            });
            $('#wcp-tour-highlight-rect-4').css({
                left: 0,
                top: rect.y,
                width: rect.x,
                height: rect.height
            });
        } else {
            // Set the initial position of the highlight rects
            $('.wcp-tour-highlight-rect').addClass('wcp-tour-highlight-rect-no-transition');
            var rect = $.wcpTourCoordinatesForHighlightRect(this.options.steps[0].title);

            var windowWidth = $(window).width();
            var windowHeight = $(window).height();

            $('#wcp-tour-highlight-rect-1').css({
                left: 0,
                top: 0,
                width: '100%',
                height: rect.y + rect.height/2
            });
            $('#wcp-tour-highlight-rect-2').css({
                left: rect.x + rect.width/2,
                top: rect.y + rect.height/2,
                width: windowWidth - rect.x - rect.width/2,
                height: 0
            });
            $('#wcp-tour-highlight-rect-3').css({
                left: 0,
                top: rect.y + rect.height/2,
                width: '100%',
                height: windowHeight - rect.y - rect.height/2
            });
            $('#wcp-tour-highlight-rect-4').css({
                left: 0,
                top: rect.y + rect.height/2,
                width: rect.x + rect.width/2,
                height: 0
            });

            setTimeout(function() {
                $('.wcp-tour-highlight-rect').removeClass('wcp-tour-highlight-rect-no-transition');
            }, 50);
        }
    };
    WCPTour.prototype.limitMediaContainer = function(container) {
        var dx = 0, dy = 0;

        container.css({ transform: 'translate('+ dx +'px, '+ dy +'px)' });

        if (container.offset().left < 0) {
            dx = container.offset().left;
        }
        if (container.offset().left + container.width() > $(window).width()) {
            dx = $(window).width() - (container.offset().left + container.width());
        }
        if (container.offset().top < 0) {
            dy = container.offset().left;
        }
        if (container.offset().top + container.height() > $(window).height()) {
            dy = $(window).height() - (container.offset().top + container.height());
        }

        container.css({ transform: 'translate('+ dx +'px, '+ dy +'px)' });
    }
})(jQuery, window, document);

;(function ($, window, document, undefined) {
    $.wcpValidatePurchaseCode = function(code, cb) {
        // var username = 'nickys';
        // var apiKey = 'fyyd39viwu1ljcgt0z1lu5c1b8ebp1zt';
        // url: 'http://marketplace.envato.com/api/edge/' + username + '/'+ apiKey +'/verify-purchase:'+ code +'.json',

        var data = {
            action: 'wcp_validate_purchase_code',
            code: code
        };

        $.ajax({
			type: 'POST',
			url: ajaxurl,
			data: data,
		}).done(function(res) {
            if (res == 'success') {
                cb(true);
            } else {
                console.log(res);
                cb(false);
            }
		});
	}
})(jQuery, window, document);
;(function ($, window, document, undefined) {
    $.wcpWPMedia = function(inputSelector, buttonSelector, callback)  {
        var clicked_button = false;
        $(document).on('click', buttonSelector, function(e) {
            e.preventDefault();
            var selected_img;
            clicked_button = $(this);

            // configuration of the media manager new instance
            wp.media.frames.gk_frame = wp.media({
                title: 'Select Media',
                multiple: false,
                library: {
                    type: 'image'
                },
                button: {
                    text: 'Use Selected Media'
                }
            });

            // Function used for the image selection and media manager closing
            var gk_media_set_image = function() {
                var selection = wp.media.frames.gk_frame.state().get('selection');

                // no selection
                if (!selection) {
                    return;
                }

                // iterate through selected elements
                selection.each(function(attachment) {
                    var url = attachment.attributes.url;
                    clicked_button.prev(inputSelector).val(url);
                    callback(url);
                });
            };

            // closing event for media manger
            wp.media.frames.gk_frame.on('close', gk_media_set_image);
            // image selection event
            wp.media.frames.gk_frame.on('select', gk_media_set_image);
            // showing media manager
            wp.media.frames.gk_frame.open();
        });
    };
})(jQuery, window, document);

;(function ( $, window, document, undefined ) {

    // Variable to hold the currently fullscreen image map
    var fullscreenMap = undefined;

    // API

    /*
        HTML API
        ---------------------------------------
        data-imp-highlight-shape-on-mouseover
        data-imp-highlight-shape-on-click
        data-imp-unhighlight-shape-on-mouseover
        data-imp-unhighlight-shape-on-click

        data-imp-open-tooltip-on-mouseover
        data-imp-open-tooltip-on-click
        data-imp-close-tooltip-on-mouseover
        data-imp-close-tooltip-on-click

        data-trigger-shape-on-mouseover
        data-trigger-shape-on-click
        data-untrigger-shape-on-mouseover
        data-untrigger-shape-on-click

        EXAMPLE
        ---------------------------------------
        <div data-imp-highlight-shape-on-mouseover="myshape1" data-imp-image-map-name="map1">Click</div>
    */

    // Events (called by the plugin, need implementation)
    $.imageMapProInitialized = function(imageMapName) {
        
    }
    // $.imageMapProEventHighlightedShape = function(imageMapName, shapeName) {

    // }
    // $.imageMapProEventUnhighlightedShape = function(imageMapName, shapeName) {

    // }
    // $.imageMapProEventClickedShape = function(imageMapName, shapeName) {

    // }
    // $.imageMapProEventOpenedTooltip = function(imageMapName, shapeName) {

    // }
    // $.imageMapProEventClosedTooltip = function(imageMapName) {

    // }
    // // Actions (called by a third party, implemented here)
    $.imageMapProHighlightShape = function(imageMapName, shapeName) {
        var i = $('[data-shape-title="' + shapeName + '"]').data('index');

        if (instances[imageMapName].highlightedShapeIndex == i) return;

        if (instances[imageMapName].highlightedShape) {
            instances[imageMapName].unhighlightShape();
        }

        instances[imageMapName].manuallyHighlightedShape = true;
        instances[imageMapName].highlightShape(i, false);
    }
    // $.imageMapProUnhighlightShape = function(imageMapName) {
    //     if (instances[imageMapName].highlightedShape) {
    //         instances[imageMapName].unhighlightShape();
    //     }
    // }
    $.imageMapProOpenTooltip = function(imageMapName, shapeName) {
        var i = $('[data-shape-title="' + shapeName + '"]').data('index');

        instances[imageMapName].manuallyShownTooltip = true;
        instances[imageMapName].showTooltip(i);
        instances[imageMapName].updateTooltipPosition(i);
    }
    // $.imageMapProHideTooltip = function(imageMapName) {
    //     instances[imageMapName].hideTooltip();
    // }
    // $.imageMapProReInitMap = function(imageMapName) {
    //     instances[imageMapName].init();
    // }
    // $.imageMapProIsMobile = function() {
    //     return isMobile();
    // }

    "use strict";

    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.

    // window and document are passed through as local variable rather than global
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = "imageMapPro";
    var default_settings = $.imageMapProEditorDefaults;
	var default_spot_settings = $.imageMapProShapeDefaults;

    var instances = new Array();
    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    var mutationObserver;


    // The actual plugin constructor
    function Plugin ( element, options ) {
        this.element = element;
        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.settings = $.extend(true, {}, default_settings, options);

        this.root = $(element);
        this.wrap = undefined;
        this.ui = undefined;
        this.shapeContainer = undefined;
        this.shapeSvgContainer = undefined;
        this.fullscreenTooltipsContainer = undefined;

        // Cache
        this.visibleTooltip = undefined;
        this.visibleTooltipIndex = undefined;
        this.highlightedShape = undefined;
        this.highlightedShapeIndex = undefined;
        this.clickedShape = undefined;
        this.clickedShapeIndex = undefined;
        this.bodyOverflow = undefined;

        // Mutations observer
        this.initTimeout = undefined;

        // Flags
        this.touch = false;
        this.fullscreenTooltipVisible = false;

        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
        init: function () {
            var self = this;
            
            self.parseSettings();

            instances[this.settings.general.name] = this;

            this.id = Math.random()*100;

            // Fill out any missing properties
            for (var i=0; i<self.settings.spots.length; i++) {
                var s = self.settings.spots[i];
                var d = $.extend(true, {}, default_spot_settings);
                s = $.extend(true, d, s);
                self.settings.spots[i] = $.extend(true, {}, s);

                // Support for image maps created before 3.1.0
                if (!self.settings.spots[i].title || self.settings.spots[i].title.length == 0) {
                    self.settings.spots[i].title = self.settings.spots[i].id;
                }
            }

            var img = new Image();
            img.src = self.settings.image.url;

            self.loadImage(img, function() {
                // Image loading
            }, function() {
                // Image loaded
                var html = '';

                self.root.addClass('imp-initialized');
                self.root.attr('data-image-map-pro-id', self.settings.id);
                self.root.html('<div class="imp-wrap"></div>');
                self.wrap = self.root.find('.imp-wrap');

                html += '<img src="'+ self.settings.image.url +'">';
                self.wrap.html(html);

                self.centerImageMap();
                self.adjustSize();
                self.drawShapes();
                self.addTooltips();
                self.initFullscreen();
                self.events();
                self.animateShapesLoop();

                $.imageMapProInitialized(self.settings.general.name);
            });

            $(window).on('resize', function() {
                if (self.visibleTooltip) {
                    self.updateTooltipPosition(self.highlightedShapeIndex);
                }
            });
        },
        parseSettings: function() {
            // If there is a value for the old image URL in the settings, use that instead
            // This happens when the user updates from an older version using the old format and the
            // image map has not been saved yet.
            if (this.settings.general.image_url) {
                this.settings.image.url = this.settings.general.image_url;
            }
        },
        loadImage: function(image, cbLoading, cbComplete) {
            if (!image.complete || image.naturalWidth === undefined || image.naturalHeight === undefined) {
                cbLoading();
                $(image).on('load', function() {
                    $(image).off('load');
                    cbComplete();
                });
            } else {
                cbComplete();
            }
        },

        centerImageMap: function() {
            var self = this;

            if (parseInt(self.settings.general.center_image_map, 10) == 1) {
                self.wrap.css({
                    margin: '0 auto'
                });
            }
        },
        adjustSize: function() {
            var self = this;

            // If the image map is in fullscreen mode, adjust according to the window and return
            if (parseInt(self.settings.runtime.is_fullscreen, 10) == 1) {
                var screenRatio = $(window).width() / $(window).height();
                var imageRatio = self.settings.general.width / self.settings.general.height;
                
                if (imageRatio < screenRatio) {
                    self.settings.general.width = $(window).height() * imageRatio;
                    self.settings.general.height = $(window).height();
                } else {
                    self.settings.general.width = $(window).width();
                    self.settings.general.height = $(window).width() / imageRatio;
                }

                self.wrap.css({
                    width: self.settings.general.width,
                    height: self.settings.general.height,
                });
                
                return;
            }

            // If the image map is responsive, fit the map to its parent element
            if (parseInt(self.settings.general.responsive, 10) == 1) {
                if (parseInt(self.settings.general.preserve_quality, 10) == 1) {
                    var width = self.settings.general.naturalWidth || self.settings.general.width;
                    self.wrap.css({
                        'max-width': self.settings.general.naturalWidth
                    });
                }
            } else {
                self.wrap.css({
                    width: self.settings.general.width,
                    height: self.settings.general.height,
                });
            }
        },
        drawShapes: function() {
            var self = this;

            // Make sure spot coordinates are numbers
            for (var i=0; i<self.settings.spots.length; i++) {
                var s = self.settings.spots[i];

                s.x = parseFloat(s.x);
                s.y = parseFloat(s.y);
                s.width = parseFloat(s.width);
                s.height = parseFloat(s.height);
                s.default_style.stroke_width = parseInt(s.default_style.stroke_width);
                s.mouseover_style.stroke_width = parseInt(s.mouseover_style.stroke_width);

                if (s.type == 'poly') {
                    for (var j=0; j<s.points.length; j++) {
                        s.points[j].x = parseFloat(s.points[j].x);
                        s.points[j].y = parseFloat(s.points[j].y);
                    }
                }
            }
            self.settings.general.width = parseInt(self.settings.general.width);
            self.settings.general.height = parseInt(self.settings.general.height);

            self.wrap.prepend('<div class="imp-shape-container"></div>');
            self.shapeContainer = self.wrap.find('.imp-shape-container');

            var html = '';
            var hasPolygons = false;

            // If the image map is responsive, use natural width and height
            // Otherwise, use the width/height set from the editor
            var imageMapWidth = self.settings.general.width;
            var imageMapHeight = self.settings.general.height;
            if (parseInt(self.settings.general.responsive, 10) == 1) {
                imageMapWidth = self.settings.general.naturalWidth;
                imageMapHeight = self.settings.general.naturalHeight;
            }
            var svgHtml = '<svg class="hs-poly-svg" viewBox="0 0 '+ imageMapWidth +' '+ imageMapHeight +'" preserveAspectRatio="none">';

            for (var i=0; i<self.settings.spots.length; i++) {
                var s = self.settings.spots[i];
                if (s.type == 'spot') {
                    if (parseInt(s.default_style.use_icon, 10) == 1) {
                        var style = '';

                        var wrapperWidth = (s.width < 44) ? 44 : s.width;
                        var wrapperHeight = (s.height < 44) ? 44 : s.height;

                        style += 'left: '+ s.x +'%;';
                        style += 'top: '+ s.y +'%;';
                        style += 'width: '+ wrapperWidth +'px;';
                        style += 'height: '+ wrapperHeight +'px;';

                        // If the icon is a pin, center it on the bottom edge
                        var marginTop = -wrapperHeight/2;
                        var marginLeft = -wrapperWidth/2;

                        if (parseInt(s.default_style.icon_is_pin, 10) == 1) {
                            marginTop = -wrapperHeight;

                            if (s.height < 44) {
                                marginTop = -wrapperHeight/2 -s.height/2;
                            }
                        }

                        style += 'margin-left: '+ marginLeft +'px;';
                        style += 'margin-top: '+ marginTop +'px;';

                        style += 'background-image: url('+ s.default_style.icon_url +')';
                        style += 'background-position: center;';
                        style += 'background-repeat: no-repeat;';

                        // Page load animations
                        if (self.settings.general.pageload_animation == 'fade') {
                            style += 'opacity: 0;';
                        }
                        if (self.settings.general.pageload_animation == 'grow') {
                            style += 'opacity: ' + s.default_style.opacity + ';';
                            style += 'transform: scale(0, 0);-moz-transform: scale(0, 0);-webkit-transform: scale(0, 0);';
                            if (parseInt(s.default_style.icon_is_pin, 10) == 1) {
                                style += 'transform-origin: 50% 100%;-moz-transform-origin: 50% 100%;-webkit-transform-origin: 50% 100%;';
                            }
                        }
                        if (self.settings.general.pageload_animation == 'none') {
                            style += 'opacity: ' + s.default_style.opacity + ';';
                        }

                        html += '<div class="imp-shape imp-shape-spot" id="'+ s.id +'" data-shape-title="'+ s.title +'" style="'+ style +'" data-index='+ i +'>';

                        // Icon
                        if (s.default_style.icon_type == 'library') {
                            html += '   <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="'+ s.default_style.icon_svg_viewbox +'" xml:space="preserve" width="'+ s.width +'px" height="'+ s.height +'px">';
                            html += '       <path style="fill:'+ s.default_style.icon_fill +'" d="'+ s.default_style.icon_svg_path +'"></path>';
                            html += '   </svg>';
                        } else {
                            html += '<img src="'+ s.default_style.icon_url +'" style="width: '+ s.width +'px; height: '+ s.height +'px">';
                        }

                        // Shadow
                        if (parseInt(s.default_style.icon_shadow, 10) == 1) {
                            var shadowStyle = '';

                            shadowStyle += 'width: ' + s.width + 'px;';
                            shadowStyle += 'height: ' + s.height + 'px;';
                            shadowStyle += 'top: '+ s.height/2 +'px;';

                            html += '<div style="'+ shadowStyle +'" class="imp-shape-icon-shadow"></div>';
                        }

                        html += '</div>';
                    } else {
                        var style = '';
                        var color_bg = hexToRgb(s.default_style.background_color) || { r: 0, b: 0, g: 0 };
                        var color_border = hexToRgb(s.default_style.border_color) || { r: 0, b: 0, g: 0 };

                        style += 'left: '+ s.x +'%;';
                        style += 'top: '+ s.y +'%;';
                        style += 'width: '+ s.width +'px;';
                        style += 'height: '+ s.height +'px;';
                        style += 'margin-left: -'+ s.width/2 +'px;';
                        style += 'margin-top: -'+ s.height/2 +'px;';

                        style += 'border-radius: ' + s.default_style.border_radius + 'px;';
                        style += 'background: rgba('+ color_bg.r +', '+ color_bg.g +', '+ color_bg.b +', '+ s.default_style.background_opacity +');';
                        style += 'border-width: ' + s.default_style.border_width + 'px;';
                        style += 'border-style: ' + s.default_style.border_style + ';';
                        style += 'border-color: rgba('+ color_border.r +', '+ color_border.g +', '+ color_border.b +', '+ s.default_style.border_opacity +');';

                        if (self.settings.general.pageload_animation == 'fade') {
                            style += 'opacity: 0;';
                        }
                        if (self.settings.general.pageload_animation == 'grow') {
                            style += 'opacity: ' + s.default_style.opacity + ';';
                            style += 'transform: scale(0, 0);-moz-transform: scale(0, 0);-webkit-transform: scale(0, 0);';
                        }
                        if (self.settings.general.pageload_animation == 'none') {
                            style += 'opacity: ' + s.default_style.opacity + ';';
                        }

                        html += '<div class="imp-shape imp-shape-spot" id="'+ s.id +'" data-shape-title="'+ s.title +'" style="'+ style +'" data-index='+ i +'></div>';
                    }
                }
                if (s.type == 'rect') {
                    var style = '';
                    var color_bg = hexToRgb(s.default_style.background_color) || { r: 0, b: 0, g: 0 };
                    var color_border = hexToRgb(s.default_style.border_color) || { r: 0, b: 0, g: 0 };

                    style += 'left: '+ s.x +'%;';
                    style += 'top: '+ s.y +'%;';
                    style += 'width: '+ s.width +'%;';
                    style += 'height: '+ s.height +'%;';

                    style += 'border-radius: ' + s.default_style.border_radius + 'px;';
                    style += 'background: rgba('+ color_bg.r +', '+ color_bg.g +', '+ color_bg.b +', '+ s.default_style.background_opacity +');';
                    style += 'border-width: ' + s.default_style.border_width + 'px;';
                    style += 'border-style: ' + s.default_style.border_style + ';';
                    style += 'border-color: rgba('+ color_border.r +', '+ color_border.g +', '+ color_border.b +', '+ s.default_style.border_opacity +');';

                    if (self.settings.general.pageload_animation == 'fade') {
                        style += 'opacity: 0;';
                    }
                    if (self.settings.general.pageload_animation == 'grow') {
                        style += 'opacity: ' + s.default_style.opacity + ';';
                        style += 'transform: scale(0, 0);-moz-transform: scale(0, 0);-webkit-transform: scale(0, 0);';
                    }
                    if (self.settings.general.pageload_animation == 'none') {
                        style += 'opacity: ' + s.default_style.opacity + ';';
                    }

                    html += '<div class="imp-shape imp-shape-rect" id="'+ s.id +'" data-shape-title="'+ s.title +'" style="'+ style +'" data-index='+ i +'></div>';
                }
                if (s.type == 'oval') {
                    var style = '';
                    var color_bg = hexToRgb(s.default_style.background_color) || { r: 0, b: 0, g: 0 };
                    var color_border = hexToRgb(s.default_style.border_color) || { r: 0, b: 0, g: 0 };

                    style += 'left: '+ s.x +'%;';
                    style += 'top: '+ s.y +'%;';
                    style += 'width: '+ s.width +'%;';
                    style += 'height: '+ s.height +'%;';

                    style += 'border-radius: 50% 50%;';
                    style += 'background: rgba('+ color_bg.r +', '+ color_bg.g +', '+ color_bg.b +', '+ s.default_style.background_opacity +');';
                    style += 'border-width: ' + s.default_style.border_width + 'px;';
                    style += 'border-style: ' + s.default_style.border_style + ';';
                    style += 'border-color: rgba('+ color_border.r +', '+ color_border.g +', '+ color_border.b +', '+ s.default_style.border_opacity +');';

                    if (self.settings.general.pageload_animation == 'fade') {
                        style += 'opacity: 0;';
                    }
                    if (self.settings.general.pageload_animation == 'grow') {
                        style += 'opacity: ' + s.default_style.opacity + ';';
                        style += 'transform: scale(0, 0);-moz-transform: scale(0, 0);-webkit-transform: scale(0, 0);';
                    }
                    if (self.settings.general.pageload_animation == 'none') {
                        style += 'opacity: ' + s.default_style.opacity + ';';
                    }

                    html += '<div class="imp-shape imp-shape-oval" id="'+ s.id +'" data-shape-title="'+ s.title +'" style="'+ style +'" data-index='+ i +'></div>';
                }
                if (s.type == 'poly') {
                    hasPolygons = true;
                    var c_fill = hexToRgb(s.default_style.fill) || { r: 0, b: 0, g: 0 };
                    var c_stroke = hexToRgb(s.default_style.stroke_color) || { r: 0, b: 0, g: 0 };

                    var svgStyle = '';
                    svgStyle += 'width: 100%;';
                    svgStyle += 'height: 100%;';
                    svgStyle += 'fill: rgba('+ c_fill.r +', '+ c_fill.g +', '+ c_fill.b +', '+ s.default_style.fill_opacity +');';
                    svgStyle += 'stroke: rgba('+ c_stroke.r +', '+ c_stroke.g +', '+ c_stroke.b +', '+ s.default_style.stroke_opacity +');';
                    svgStyle += 'stroke-width: ' + s.default_style.stroke_width + 'px;';
                    svgStyle += 'stroke-dasharray: ' + s.default_style.stroke_dasharray + ';';
                    svgStyle += 'stroke-linecap: ' + s.default_style.stroke_linecap + ';';

                    if (self.settings.general.pageload_animation == 'fade') {
                        svgStyle += 'opacity: 0;';
                    }
                    if (self.settings.general.pageload_animation == 'grow') {
                        svgStyle += 'opacity: ' + s.default_style.opacity + ';';
                        svgStyle += 'transform: scale(0, 0);-moz-transform: scale(0, 0);-webkit-transform: scale(0, 0);';
                        var originX = s.x + s.width/2;
                        var originY = s.y + s.height/2;
                        svgStyle += 'transform-origin: '+ originX +'% '+ originY +'%;-moz-transform-origin: '+ originX +'% '+ originY +'%;-webkit-transform-origin: '+ originX +'% '+ originY +'%;';
                    }
                    if (self.settings.general.pageload_animation == 'none') {
                        svgStyle += 'opacity: ' + s.default_style.opacity + ';';
                    }

                    var shapeWidthPx = imageMapWidth * (s.width/100);
                    var shapeHeightPx = imageMapHeight * (s.height/100);

                    svgHtml += '           <polygon class="imp-shape imp-shape-poly" style="'+ svgStyle +'" data-index='+ i +' id="'+ s.id +'" data-shape-title="'+ s.title +'" points="';

                    s.vs = new Array();
                    for (var j=0; j<s.points.length; j++) {
                        var x = (imageMapWidth * (s.x/100)) + (s.points[j].x / 100) * (shapeWidthPx);
                        var y = (imageMapHeight * (s.y/100)) + (s.points[j].y / 100) * (shapeHeightPx);

                        svgHtml += x + ',' + y + ' ';

                        // Cache an array of coordinates for later use in mouse events
                        s.vs.push([ x, y ]);
                    }

                    svgHtml += '           "></polygon>';
                }
            }
            svgHtml += '</svg>';

            if (hasPolygons) {
                self.shapeContainer.html(html + svgHtml);
            } else {
                self.shapeContainer.html(html);
            }
        },
        addTooltips: function() {
            var self = this;

            if (self.settings.tooltips.fullscreen_tooltips == 'always' || (self.settings.tooltips.fullscreen_tooltips == 'mobile-only' && isMobile())) {
                // Fullscreen tooltips
                if (!self.fullscreenTooltipsContainer) {
                    $('.imp-fullscreen-tooltips-container[data-image-map-id="'+ self.settings.id +'"]').remove();
                    $('body').prepend('<div class="imp-fullscreen-tooltips-container" data-image-map-id="'+ self.settings.id +'"></div>');
                    self.fullscreenTooltipsContainer = $('.imp-fullscreen-tooltips-container[data-image-map-id="'+ self.settings.id +'"]');
                }

                var html = '';

                for (var i=0; i<self.settings.spots.length; i++) {
                    var s = self.settings.spots[i];

                    // Fix new lines
                    s.tooltip_content.plain_text = s.tooltip_content.plain_text.replace(/\n/g, '<br>');

                    var style = '';
                    var color_bg = hexToRgb(s.tooltip_style.background_color) || { r: 0, b: 0, g: 0 };

                    style += 'padding: '+ s.tooltip_style.padding +'px;';
                    style += 'background: rgba('+ color_bg.r +', '+ color_bg.g +', '+ color_bg.b +', '+ s.tooltip_style.background_opacity +');';

                    if (self.settings.tooltips.tooltip_animation == 'none') {
                        style += 'opacity: 0;';
                    }
                    if (self.settings.tooltips.tooltip_animation == 'fade') {
                        style += 'opacity: 0;';
                        style += 'transition-property: opacity;-moz-transition-property: opacity;-webkit-transition-property: opacity;';
                    }
                    if (self.settings.tooltips.tooltip_animation == 'grow') {
                        style += 'transform: scale(0, 0);-moz-transform: scale(0, 0);-webkit-transform: scale(0, 0);';
                        style += 'transition-property: transform;-moz-transition-property: -moz-transform;-webkit-transition-property: -webkit-transform;';
                        style += 'transform-origin: 50% 50%;-moz-transform-origin: 50% 50%;-webkit-transform-origin: 50% 50%;';
                    }

                    html += '<div class="imp-fullscreen-tooltip" style="'+ style +'" data-index="'+ i +'">';
                    html += '   <div class="imp-tooltip-close-button" data-index="'+ i +'"><i class="fa fa-times" aria-hidden="true"></i></div>';

                    if (s.tooltip_content.content_type == 'plain-text') {
                        var style = '';
                        style += 'color: ' + s.tooltip_content.plain_text_color + ';';

                        html += '<div class="imp-tooltip-plain-text" style="'+ style +'">' + s.tooltip_content.plain_text + '</div>';
                    } else {
						if (s.tooltip_content.squares_json) {
							html += $.squaresRendererRenderObject(s.tooltip_content.squares_json);
						} else {
							html += $.squaresRendererRenderObject(s.tooltip_content.squares_settings);
						}
                    }

                    html += '</div>';
                }

                self.fullscreenTooltipsContainer.html(html);
            } else {
                // Regular tooltips
                var html = '';

                for (var i=0; i<self.settings.spots.length; i++) {
                    var s = self.settings.spots[i];

                    // Fix new lines
                    s.tooltip_content.plain_text = s.tooltip_content.plain_text.replace(/\n/g, '<br>');

                    var style = '';
                    var color_bg = hexToRgb(s.tooltip_style.background_color) || { r: 0, b: 0, g: 0 };
                    var tooltipBufferPolyClass = (s.type == 'poly') ? 'imp-tooltip-buffer-large' : '';

                    style += 'border-radius: '+ s.tooltip_style.border_radius +'px;';
                    style += 'padding: '+ s.tooltip_style.padding +'px;';
                    style += 'background: rgba('+ color_bg.r +', '+ color_bg.g +', '+ color_bg.b +', '+ s.tooltip_style.background_opacity +');';

                    if (self.settings.tooltips.tooltip_animation == 'none') {
                        style += 'opacity: 0;';
                    }
                    if (self.settings.tooltips.tooltip_animation == 'fade') {
                        style += 'opacity: 0;';
                        style += 'transition-property: opacity;-moz-transition-property: opacity;-webkit-transition-property: opacity;';
                    }
                    if (self.settings.tooltips.tooltip_animation == 'grow') {
                        style += 'transform: scale(0, 0);-moz-transform: scale(0, 0);-webkit-transform: scale(0, 0);';
                        style += 'transition-property: transform;-moz-transition-property: -moz-transform;-webkit-transition-property: -webkit-transform;';

                        if (s.tooltip_style.position == 'top') {
                            style += 'transform-origin: 50% 100%;-moz-transform-origin: 50% 100%;-webkit-transform-origin: 50% 100%;';
                        }
                        if (s.tooltip_style.position == 'bottom') {
                            style += 'transform-origin: 50% 0%;-moz-transform-origin: 50% 0%;-webkit-transform-origin: 50% 0%;';
                        }
                        if (s.tooltip_style.position == 'left') {
                            style += 'transform-origin: 100% 50%;-moz-transform-origin: 100% 50%;-webkit-transform-origin: 100% 50%;';
                        }
                        if (s.tooltip_style.position == 'right') {
                            style += 'transform-origin: 0% 50%;-moz-transform-origin: 0% 50%;-webkit-transform-origin: 0% 50%;';
                        }
                    }

                    html += '<div class="imp-tooltip" style="'+ style +'" data-index="'+ i +'">';

                    if (s.tooltip_style.position == 'top') {
                        html += '   <div class="hs-arrow hs-arrow-bottom" style="border-top-color: rgba('+ color_bg.r +', '+ color_bg.g +', '+ color_bg.b +', '+ s.tooltip_style.background_opacity +');"></div>';
                        if (parseInt(self.settings.tooltips.sticky_tooltips, 10) == 0) {
                            html += '   <div class="imp-tooltip-buffer imp-tooltip-buffer-bottom '+ tooltipBufferPolyClass +'"></div>';
                        }
                    }
                    if (s.tooltip_style.position == 'bottom') {
                        html += '   <div class="hs-arrow hs-arrow-top" style="border-bottom-color: rgba('+ color_bg.r +', '+ color_bg.g +', '+ color_bg.b +', '+ s.tooltip_style.background_opacity +');"></div>';
                        if (parseInt(self.settings.tooltips.sticky_tooltips, 10) == 0) {
                            html += '   <div class="imp-tooltip-buffer imp-tooltip-buffer-top '+ tooltipBufferPolyClass +'"></div>';
                        }
                    }
                    if (s.tooltip_style.position == 'left') {
                        html += '   <div class="hs-arrow hs-arrow-right" style="border-left-color: rgba('+ color_bg.r +', '+ color_bg.g +', '+ color_bg.b +', '+ s.tooltip_style.background_opacity +');"></div>';
                        if (parseInt(self.settings.tooltips.sticky_tooltips, 10) == 0) {
                            html += '   <div class="imp-tooltip-buffer imp-tooltip-buffer-right '+ tooltipBufferPolyClass +'"></div>';
                        }
                    }
                    if (s.tooltip_style.position == 'right') {
                        html += '   <div class="hs-arrow hs-arrow-left" style="border-right-color: rgba('+ color_bg.r +', '+ color_bg.g +', '+ color_bg.b +', '+ s.tooltip_style.background_opacity +');"></div>';
                        if (parseInt(self.settings.tooltips.sticky_tooltips, 10) == 0) {
                            html += '   <div class="imp-tooltip-buffer imp-tooltip-buffer-left '+ tooltipBufferPolyClass +'"></div>';
                        }
                    }

                    if (s.tooltip_content.content_type == 'plain-text') {
                        var style = '';
                        style += 'color: ' + s.tooltip_content.plain_text_color + ';';

                        html += '<div class="imp-tooltip-plain-text" style="'+ style +'">' + s.tooltip_content.plain_text + '</div>';
                    } else {
						if (s.tooltip_content.squares_json) {
							html += $.squaresRendererRenderObject(s.tooltip_content.squares_json);
						} else {
							html += $.squaresRendererRenderObject(s.tooltip_content.squares_settings);
						}
                    }

                    html += '</div>';
                }
                
                self.wrap.prepend(html);
            }
        },
        initFullscreen: function() {
            var self = this;

            if (parseInt(self.settings.fullscreen.enable_fullscreen_mode, 10) == 1) {
                // Button style
                var style = '';
                style += 'background: ' + self.settings.fullscreen.fullscreen_button_color + '; ';
                style += 'color: ' + self.settings.fullscreen.fullscreen_button_text_color + '; ';

                // Button content
                var icon = '<i class="fa fa-arrows-alt" aria-hidden="true"></i>';
                if (parseInt(self.settings.runtime.is_fullscreen, 10) == 1) {
                    icon = '<i class="fa fa-times" aria-hidden="true"></i>';
                }

                var text = 'Go Fullscreen';
                if (parseInt(self.settings.runtime.is_fullscreen, 10) == 1) {
                    text = 'Close Fullscreen';
                }

                var buttonContent = '';
                if (self.settings.fullscreen.fullscreen_button_type == 'icon') {
                    buttonContent += icon;
                }
                if (self.settings.fullscreen.fullscreen_button_type == 'text') {
                    buttonContent += text;
                }
                if (self.settings.fullscreen.fullscreen_button_type == 'icon_and_text') {
                    buttonContent += icon + ' ' + text;
                }

                // Button classes
                var classes = '';
                if (self.settings.fullscreen.fullscreen_button_type == 'icon') {
                    classes += 'imp-fullscreen-button-icon-only';
                }

                // Button html
                var html = '';
                html += '<div style="'+ style +'" class="'+ classes +' imp-fullscreen-button imp-fullscreen-button-position-'+ self.settings.fullscreen.fullscreen_button_position +'">';
                html += buttonContent;
                html += '</div>';
                
                // Append
                self.wrap.append('<div class="imp-ui"></div>');
                self.ui = self.wrap.find('.imp-ui');
                self.ui.append(html);

                // Correct the button's position
                var btn = self.ui.find('.imp-fullscreen-button');

                if (parseInt(self.settings.fullscreen.fullscreen_button_position, 10) == 1 || parseInt(self.settings.fullscreen.fullscreen_button_position, 10) == 4) {
                    btn.css({ "margin-left" : - btn.outerWidth()/2 });
                }

                // Start in fullscreen mode
                if (parseInt(self.settings.fullscreen.start_in_fullscreen_mode, 10) == 1 && self.settings.runtime.is_fullscreen == 0) {
                    self.toggleFullscreen();
                }
            }
        },
        measureTooltipSize: function(i) {
            // Size needs to be calculated just before
            // the tooltip displays, and for the specific tooltip only.
            // No calculations needed if in fullscreen mode

            // 1. Does size need to be calculated?
            if (this.settings.tooltips.fullscreen_tooltips == 'always' || (this.settings.tooltips.fullscreen_tooltips == 'mobile' && isMobile())) return;

            var s = this.settings.spots[i];
            var t = this.wrap.find('.imp-tooltip[data-index="'+ i +'"]');

            // 2. If the tooltip has manual width, set it
            if (parseInt(s.tooltip_style.auto_width, 10) == 0) {
                t.css({
                    width: s.tooltip_style.width
                });
            }

            // 3. Measure width/height
            t.data('imp-measured-width', t.outerWidth());
            t.data('imp-measured-height', t.outerHeight());
        },
        animateShapesLoop: function() {
            if (this.settings.general.pageload_animation == 'none') return;

            var interval = 750 / this.settings.spots.length;
            var shapesRandomOrderArray = shuffle(this.settings.spots.slice());

            for (var i=0; i<shapesRandomOrderArray.length; i++) {
                this.animateShape(shapesRandomOrderArray[i], interval * i);
            }
        },
        animateShape: function(shape, delay) {
            var self = this;
            var spotEl = $('#' + shape.id);

            setTimeout(function() {
                if (self.settings.general.pageload_animation == 'fade') {
                    spotEl.css({
                        opacity: shape.default_style.opacity
                    });
                }
                if (self.settings.general.pageload_animation == 'grow') {
                    spotEl.css({
                        transform: 'scale(1, 1)',
                        '-moz-transform': 'scale(1, 1)',
                        '-webkit-transform': 'scale(1, 1)'
                    });
                }
            }, delay);
        },
        events: function() {
            // to do - complete rewrite
            // events will search for the first shape, which is within the event
            // coordinates.
            var self = this;

            // Mouse events
            this.wrap.off('mousemove');
            this.wrap.on('mousemove', function(e) {
                if (self.touch) return;
                self.handleEventMove(e);
            });
            this.wrap.off('mouseup');
            this.wrap.on('mouseup', function(e) {
                if (self.touch) return;
                self.handleEventEnd(e);
            });

            // Touch events
            this.wrap.off('touchstart');
            this.wrap.on('touchstart', function(e) {
                self.touch = true;
                self.handleEventMove(e);
            });
            this.wrap.off('touchmove');
            this.wrap.on('touchmove', function(e) {
                self.handleEventMove(e);
            });
            this.wrap.off('touchend');
            this.wrap.on('touchend', function(e) {
                self.handleEventEnd(e);
            });

            // Hide tooltips when mouse leaves the image map container
            $(document).off('mousemove.' + this.settings.id);
            $(document).on('mousemove.' + this.settings.id, function(e) {
                if (self.touch) return;

                if (self.manuallyHighlightedShape || self.manuallyShownTooltip) return;

                if ($(e.target).closest('.imp-wrap').length == 0 && $(e.target).closest('.imp-fullscreen-tooltips-container').length == 0) {
                    if (self.visibleTooltip) {
                        self.hideTooltip();
                    }
                    if (self.clickedShape) {
                        self.unclickShape();
                    }
                    if (self.highlightedShape) {
                        self.unhighlightShape();
                    }
                }
            });
            $(document).off('touchstart.' + this.settings.id);
            $(document).on('touchstart.' + this.settings.id, function(e) {
                if (self.manuallyHighlightedShape || self.manuallyShownTooltip) return;

                if ($(e.target).closest('.imp-wrap').length == 0 && $(e.target).closest('.imp-fullscreen-tooltips-container').length == 0) {
                    if (self.visibleTooltip) {
                        self.hideTooltip();
                    }
                    if (self.clickedShape) {
                        self.unclickShape();
                    }
                    if (self.highlightedShape) {
                        self.unhighlightShape();
                    }
                }
            });

            // Tooltips close button
            $(document).off('click.' + this.settings.id, '.imp-tooltip-close-button');
            $(document).on('click.' + this.settings.id, '.imp-tooltip-close-button', function() {
                self.hideTooltip();

                if (self.clickedShape) {
                    self.unclickShape();
                }
                if (self.highlightedShape) {
                    self.unhighlightShape();
                }
            });

            if (parseInt(this.settings.general.late_initialization, 10) == 1) {
                if (!mutationObserver) {
                    mutationObserver = new MutationObserver(function(mutations, observer) {
                        clearTimeout(self.initTimeout);
                        self.initTimeout = setTimeout(function() {
                            for (var i=0; i<mutations.length; i++) {
                                // Check if the mutation is not in an image map
                                if ($(mutations[i].target).closest('.imp-initialized').length == 0 && !$(mutations[i].target).hasClass('imp-initialized')) {
                                    self.init();
                                    break;
                                }
                            }
                        }, 50);
                    });

                    mutationObserver.observe(document, {
                        subtree: true,
                        attributes: true
                    });
                }
            } else {
                if (mutationObserver) {
                    mutationObserver.disconnect();
                    mutationObserver = undefined;
                }
            }

            // Fullscreen button
            $(document).off('click.' + this.settings.id, '[data-image-map-pro-id="' + this.settings.id + '"] .imp-fullscreen-button');
            $(document).on('click.' + this.settings.id, '[data-image-map-pro-id="' + this.settings.id + '"] .imp-fullscreen-button', function() {
                self.toggleFullscreen();
            });

            /*

            HTML API
            ---------------------------------------
            data-imp-highlight-shape-on-mouseover
            data-imp-highlight-shape-on-click
            data-imp-unhighlight-shape-on-mouseover
            data-imp-unhighlight-shape-on-click

            data-imp-open-tooltip-on-mouseover
            data-imp-open-tooltip-on-click
            data-imp-close-tooltip-on-mouseover
            data-imp-close-tooltip-on-click

            data-trigger-shape-on-mouseover
            data-trigger-shape-on-click
            data-untrigger-shape-on-mouseover
            data-untrigger-shape-on-click

            */

            // HTML API - SHAPE

            // [data-imp-highlight-shape-on-mouseover]
            $(document).on('mouseover', '[data-imp-highlight-shape-on-mouseover]', function() {
                var shapeName = $(this).data('imp-highlight-shape-on-mouseover');
                var mapName = $(this).data('imp-image-map-name');
                
                if (!mapName || mapName == self.settings.general.name) {
                    var i = $('[data-shape-title="' + shapeName + '"]').data('index');
                    
                    self.manuallyHighlightedShape = true;
                    self.highlightShape(i, true);
                }
            });
            $(document).on('mouseout', '[data-imp-highlight-shape-on-mouseover]', function() {
                var shapeName = $(this).data('imp-highlight-shape-on-mouseover');
                var mapName = $(this).data('imp-image-map-name');
                
                if (!mapName || mapName == self.settings.general.name) {
                    self.unhighlightShape();
                }
            });

            // [data-imp-highlight-shape-on-click]
            $(document).on('click', '[data-imp-highlight-shape-on-click]', function() {
                var shapeName = $(this).data('imp-highlight-shape-on-click');
                var mapName = $(this).data('imp-image-map-name');
                
                if (!mapName || mapName == self.settings.general.name) {
                    var i = $('[data-shape-title="' + shapeName + '"]').data('index');
                    
                    if (self.highlightedShape) self.unhighlightShape();

                    self.manuallyHighlightedShape = true;
                    self.highlightShape(i, true);
                }
            });

            // [data-imp-unhighlight-shape-on-mouseover]
            $(document).on('mouseover', '[data-imp-unhighlight-shape-on-mouseover]', function() {
                var shapeName = $(this).data('imp-unhighlight-shape-on-mouseover');
                var mapName = $(this).data('imp-image-map-name');
                
                if (!mapName || mapName == self.settings.general.name) {
                    if (self.highlightedShape) self.unhighlightShape();
                }
            });

            // [data-imp-unhighlight-shape-on-click]
            $(document).on('mouseover', '[data-imp-unhighlight-shape-on-click]', function() {
                var shapeName = $(this).data('imp-unhighlight-shape-on-click');
                var mapName = $(this).data('imp-image-map-name');
                
                if (!mapName || mapName == self.settings.general.name) {
                    if (self.highlightedShape) self.unhighlightShape();
                }
            });

            // HTML API - TOOLTIP

            // [data-imp-open-tooltip-on-mouseover]
            $(document).on('mouseover', '[data-imp-open-tooltip-on-mouseover]', function() {
                var shapeName = $(this).data('imp-open-tooltip-on-mouseover');
                var mapName = $(this).data('imp-image-map-name');
                
                if (!mapName || mapName == self.settings.general.name) {
                    var i = $('[data-shape-title="' + shapeName + '"]').data('index');
                    
                    self.manuallyShownTooltip = true;
                    self.showTooltip(i);
                    self.updateTooltipPosition(i);
                }
            });
            $(document).on('mouseout', '[data-imp-open-tooltip-on-mouseover]', function() {
                var shapeName = $(this).data('imp-open-tooltip-on-mouseover');
                var mapName = $(this).data('imp-image-map-name');
                
                if (!mapName || mapName == self.settings.general.name) {
                    self.hideTooltip();
                }
            });

            // [data-imp-open-tooltip-on-click]
            $(document).on('click', '[data-imp-open-tooltip-on-click]', function() {
                var shapeName = $(this).data('imp-open-tooltip-on-click');
                var mapName = $(this).data('imp-image-map-name');
                
                if (!mapName || mapName == self.settings.general.name) {
                    var i = $('[data-shape-title="' + shapeName + '"]').data('index');
                    
                    self.manuallyShownTooltip = true;
                    self.showTooltip(i);
                    self.updateTooltipPosition(i);
                }
            });

            // [data-imp-close-tooltip-on-mouseover]
            $(document).on('mouseover', '[data-imp-close-tooltip-on-mouseover]', function() {
                var shapeName = $(this).data('imp-close-tooltip-on-mouseover');
                var mapName = $(this).data('imp-image-map-name');
                
                if (!mapName || mapName == self.settings.general.name) {
                    self.hideTooltip();
                }
            });

            // [data-imp-close-tooltip-on-click]
            $(document).on('click', '[data-imp-close-tooltip-on-click]', function() {
                var shapeName = $(this).data('imp-close-tooltip-on-click');
                var mapName = $(this).data('imp-image-map-name');
                
                if (!mapName || mapName == self.settings.general.name) {
                    self.hideTooltip();
                }
            });

            // HTML API - TRIGGER

            // [data-imp-trigger-shape-on-mouseover]
            $(document).on('mouseover', '[data-imp-trigger-shape-on-mouseover]', function() {
                var shapeName = $(this).data('imp-trigger-shape-on-mouseover');
                var mapName = $(this).data('imp-image-map-name');
                
                if (!mapName || mapName == self.settings.general.name) {
                    var i = $('[data-shape-title="' + shapeName + '"]').data('index');
                    
                    self.manuallyHighlightedShape = true;
                    self.manuallyShownTooltip = true;
                    self.highlightShape(i, true);
                    self.showTooltip(i);
                    self.updateTooltipPosition(i);
                }
            });
            $(document).on('mouseout', '[data-imp-trigger-shape-on-mouseover]', function() {
                var shapeName = $(this).data('imp-trigger-shape-on-mouseover');
                var mapName = $(this).data('imp-image-map-name');
                
                if (!mapName || mapName == self.settings.general.name) {
                    self.unhighlightShape();
                    self.hideTooltip();
                }
            });

            // [data-imp-trigger-shape-on-click]
            $(document).on('click', '[data-imp-trigger-shape-on-click]', function() {
                var shapeName = $(this).data('imp-trigger-shape-on-click');
                var mapName = $(this).data('imp-image-map-name');
                
                if (!mapName || mapName == self.settings.general.name) {
                    var i = $('[data-shape-title="' + shapeName + '"]').data('index');
                    
                    if (self.highlightedShape) self.unhighlightShape();

                    self.manuallyHighlightedShape = true;
                    self.manuallyShownTooltip = true;
                    self.highlightShape(i, true);
                    self.showTooltip(i);
                    self.updateTooltipPosition(i);
                }
            });

            // [data-imp-untrigger-shape-on-mouseover]
            $(document).on('mouseover', '[data-imp-untrigger-shape-on-mouseover]', function() {
                var shapeName = $(this).data('imp-untrigger-shape-on-mouseover');
                var mapName = $(this).data('imp-image-map-name');
                
                if (!mapName || mapName == self.settings.general.name) {
                    if (self.highlightedShape) self.unhighlightShape();

                    self.hideTooltip();
                }
            });

            // [data-imp-untrigger-shape-on-click]
            $(document).on('mouseover', '[data-imp-untrigger-shape-on-click]', function() {
                var shapeName = $(this).data('imp-untrigger-shape-on-click');
                var mapName = $(this).data('imp-image-map-name');
                
                if (!mapName || mapName == self.settings.general.name) {
                    if (self.highlightedShape) self.unhighlightShape();

                    self.hideTooltip();
                }
            });
        },
        disableEvents: function() {
            this.wrap.off('mousemove');
            this.wrap.off('mouseup');

            // Touch events
            this.wrap.off('touchstart');
            this.wrap.off('touchmove');
            this.wrap.off('touchend');

            // Hide tooltips when mouse leaves the image map container
            $(document).off('mousemove.' + this.settings.id);
            $(document).off('touchstart.' + this.settings.id);

            // Tooltips close button
            $(document).off('click.' + this.settings.id, '.imp-tooltip-close-button');

            // Fullscreen button
            $(document).off('click.' + this.settings.id, '.imp-fullscreen-button');
        },
        handleEventMove: function(e) {
            // If there is a visible fullscreen tooltip, return
            if (this.fullscreenTooltipVisible) return;

            // If the mouse is over a tooltip AND sticky tooltips are OFF, return
            if (($(e.target).closest('.imp-tooltip').length != 0 || $(e.target).hasClass('imp-tooltip')) && parseInt(this.settings.tooltips.sticky_tooltips, 10) == 0) return;

            // If there is a manually highlightedShape / visible tooltip, remove the flags
            if (this.manuallyHighlightedShape || this.manuallyShownTooltip) {
                this.manuallyHighlightedShape = false;
                this.manuallyShownTooltip = false;
            }

            // Get event data
            var c = this.getEventRelativeCoordinates(e);
            var i = this.matchShapeToCoords(c);

            // Highlight logic
            if (i != -1 && i != this.highlightedShapeIndex) {
                if (this.highlightedShape) {
                    this.unhighlightShape();
                }
                
                this.highlightShape(i, true);
            } else if (i == -1 && this.highlightedShape && this.highlightedShapeIndex != this.clickedShapeIndex) {
                this.unhighlightShape();
            }

            // Tooltips logic
            // If there is a highlighted shape and the visible tooltip doesn't belong to it,
            // then hide the current visible tooltip. Decide to show a new one or not
            if (this.highlightedShape && this.visibleTooltipIndex != this.highlightedShapeIndex) {
                if (this.visibleTooltip) {
                    this.hideTooltip();
                }

                if (this.highlightedShape.actions.mouseover == 'show-tooltip') {
                    if (this.clickedShape) {
                        this.unclickShape();
                    }

                    this.showTooltip(this.highlightedShapeIndex);
                    this.updateTooltipPosition(i, e);
                }
            } else if (this.visibleTooltip && !this.highlightedShape && !this.clickedShape) {
                if (this.visibleTooltip) {
                    this.hideTooltip();
                }
            }

            // If there is a shape active and sticky tooltips is on,
            // update the position of the visible tooltip
            if (this.visibleTooltip && this.highlightedShape && parseInt(this.settings.tooltips.sticky_tooltips, 10) == 1 && this.highlightedShape.actions.mouseover == 'show-tooltip') {
                this.updateTooltipPosition(this.highlightedShapeIndex, e);
            }
        },
        handleEventEnd: function(e) {
			// Did the user click on a tooltip?
			if ($(e.target).closest('.imp-tooltip').length != 0 && !$(e.target).hasClass('imp-tooltip-buffer')) {
				return;
			}

            // If there is a visible fullscreen tooltip, return
            if (this.fullscreenTooltipVisible) return;

            // If there is a manually highlightedShape / visible tooltip, remove the flags
            if (this.manuallyHighlightedShape || this.manuallyShownTooltip) {
                this.manuallyHighlightedShape = false;
                this.manuallyShownTooltip = false;
            }

            // Get event data
            var c = this.getEventRelativeCoordinates(e);
            var i = this.matchShapeToCoords(c);

            // Click logic
            if (i != -1 && i != this.clickedShapeIndex) {
                if (this.clickedShape) {
                    this.unclickShape();
                }

                this.clickShape(i, e);
            } else if (i == -1 && this.clickedShape) {
                this.unclickShape();
            }
        },

        getEventRelativeCoordinates: function(e) {
            var x, y;

            if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                x = touch.pageX;
                y = touch.pageY;
            } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
                x = e.pageX;
                y = e.pageY;
            }

            // Make coordinates relative to the container
            x -= this.wrap.offset().left;
            y -= this.wrap.offset().top;

            // Take window scroll into account
            // x += $(window).scrollLeft();
            // y += $(window).scrollTop();

            // Convert coordinates to %
            x = (x / this.wrap.width()) * 100;
            y = (y / this.wrap.height()) * 100;

            return { x: x, y: y };
        },
        getEventCoordinates: function(e) {
            var x, y;

            if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                x = touch.pageX;
                y = touch.pageY;
            } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
                x = e.pageX;
                y = e.pageY;
            }

            return { x: x, y: y };
        },
        matchShapeToCoords: function(c) {
            for (var i=this.settings.spots.length - 1; i>=0; i--) {
                var s = this.settings.spots[i];

                if (s.type == 'poly') {
                    var x = (c.x / 100) * this.wrap.width();
                    var y = (c.y / 100) * this.wrap.height();

                    x = (x * this.settings.general.width) / this.wrap.width();
                    y = (y * this.settings.general.height) / this.wrap.height();

                    if (isPointInsidePolygon(x, y, s.vs)) {
                        return i;
                        break;
                    }
                }

                if (s.type == 'spot') {
                    var shapeWidth = (s.width < 44) ? 44 : s.width;
                    var shapeHeight = (s.height < 44) ? 44 : s.height;

                    var x = (c.x/100) * this.wrap.width();
                    var y = (c.y/100) * this.wrap.height();
                    var rx = (s.x/100) * this.wrap.width() - shapeWidth/2;
                    var ry = (s.y/100) * this.wrap.height() - shapeHeight/2;
                    var rw = shapeWidth;
                    var rh = shapeHeight;

                    if (parseInt(s.default_style.icon_is_pin, 10) == 1 && parseInt(s.default_style.use_icon, 10) == 1) {
                        ry -= shapeHeight/2;

                        if (s.height < 44) {
                            ry += s.height/2;
                        }
                    }

                    if (isPointInsideRect(x, y, rx, ry, rw, rh)) {
                        return i;
                        break;
                    }
                }

                if (s.type == 'rect') {
                    if (isPointInsideRect(c.x, c.y, s.x, s.y, s.width, s.height)) {
                        return i;
                        break;
                    }
                }

                if (s.type == 'oval') {
                    var x = c.x;
                    var y = c.y;
                    var ex = s.x + s.width/2;
                    var ey = s.y + s.height/2;
                    var rx = s.width/2;
                    var ry = s.height/2;

                    if (isPointInsideEllipse(x, y, ex, ey, rx, ry)) {
                        return i;
                        break;
                    }
                }
            }

            return -1;
        },

        applyMouseoverStyles: function(i) {
            var self = this;

            var s = self.settings.spots[i];
            // If it's an icon, return
            // if (s.type == 'spot' && parseInt(s.default_style.use_icon, 10) == 1) return;

            var el = this.wrap.find('#' + s.id);

            var style = '';

            if (s.type == 'spot' && parseInt(s.default_style.use_icon, 10) == 0) {
                var color_bg = hexToRgb(s.mouseover_style.background_color) || { r: 0, b: 0, g: 0 };
                var color_border = hexToRgb(s.mouseover_style.border_color) || { r: 0, b: 0, g: 0 };

                style += 'left: '+ s.x +'%;';
                style += 'top: '+ s.y +'%;';
                
                style += 'width: '+ s.width +'px;';
                style += 'height: '+ s.height +'px;';
                style += 'margin-left: -'+ s.width/2 +'px;';
                style += 'margin-top: -'+ s.height/2 +'px;';

                style += 'opacity: ' + s.mouseover_style.opacity + ';';
                style += 'border-radius: ' + s.mouseover_style.border_radius + 'px;';
                style += 'background: rgba('+ color_bg.r +', '+ color_bg.g +', '+ color_bg.b +', '+ s.mouseover_style.background_opacity +');';
                style += 'border-width: ' + s.mouseover_style.border_width + 'px;';
                style += 'border-style: ' + s.mouseover_style.border_style + ';';
                style += 'border-color: rgba('+ color_border.r +', '+ color_border.g +', '+ color_border.b +', '+ s.mouseover_style.border_opacity +');';
            }
            if (s.type == 'spot' && parseInt(s.default_style.use_icon, 10) == 1) {
                // If it's an icon, apply opacity
                var wrapperWidth = (s.width < 44) ? 44 : s.width;
                var wrapperHeight = (s.height < 44) ? 44 : s.height;

                style += 'left: '+ s.x +'%;';
                style += 'top: '+ s.y +'%;';
                style += 'width: '+ wrapperWidth +'px;';
                style += 'height: '+ wrapperHeight +'px;';

                // If the icon is a pin, center it on the bottom edge
                var marginTop = -wrapperHeight/2;
                var marginLeft = -wrapperWidth/2;

                if (parseInt(s.default_style.icon_is_pin, 10) == 1) {
                    marginTop = -wrapperHeight;

                    if (s.height < 44) {
                        marginTop = -wrapperHeight/2 -s.height/2;
                    }
                }

                style += 'margin-left: '+ marginLeft +'px;';
                style += 'margin-top: '+ marginTop +'px;';

                style += 'opacity: ' + s.mouseover_style.opacity + ';';
            }
            if (s.type == 'spot' && parseInt(s.default_style.use_icon, 10) == 1 && s.default_style.icon_type == 'library') {
                // If it's an icon and it's from library, apply SVG fill
                el.find('path').attr('style', 'fill:' + s.mouseover_style.icon_fill);
            }
            if (s.type == 'rect') {
                var color_bg = hexToRgb(s.mouseover_style.background_color) || { r: 0, b: 0, g: 0 };
                var color_border = hexToRgb(s.mouseover_style.border_color) || { r: 0, b: 0, g: 0 };

                style += 'left: '+ s.x +'%;';
                style += 'top: '+ s.y +'%;';
                style += 'width: '+ s.width +'%;';
                style += 'height: '+ s.height +'%;';

                style += 'opacity: ' + s.mouseover_style.opacity + ';';
                style += 'border-radius: ' + s.mouseover_style.border_radius + 'px;';
                style += 'background: rgba('+ color_bg.r +', '+ color_bg.g +', '+ color_bg.b +', '+ s.mouseover_style.background_opacity +');';
                style += 'border-width: ' + s.mouseover_style.border_width + 'px;';
                style += 'border-style: ' + s.mouseover_style.border_style + ';';
                style += 'border-color: rgba('+ color_border.r +', '+ color_border.g +', '+ color_border.b +', '+ s.mouseover_style.border_opacity +');';
            }
            if (s.type == 'oval') {
                var color_bg = hexToRgb(s.mouseover_style.background_color) || { r: 0, b: 0, g: 0 };
                var color_border = hexToRgb(s.mouseover_style.border_color) || { r: 0, b: 0, g: 0 };

                style += 'left: '+ s.x +'%;';
                style += 'top: '+ s.y +'%;';
                style += 'width: '+ s.width +'%;';
                style += 'height: '+ s.height +'%;';

                style += 'opacity: ' + s.mouseover_style.opacity + ';';
                style += 'border-radius: 50% 50%;';
                style += 'background: rgba('+ color_bg.r +', '+ color_bg.g +', '+ color_bg.b +', '+ s.mouseover_style.background_opacity +');';
                style += 'border-width: ' + s.mouseover_style.border_width + 'px;';
                style += 'border-style: ' + s.mouseover_style.border_style + ';';
                style += 'border-color: rgba('+ color_border.r +', '+ color_border.g +', '+ color_border.b +', '+ s.mouseover_style.border_opacity +');';
            }
            if (s.type == 'poly') {
                var c_fill = hexToRgb(s.mouseover_style.fill) || { r: 0, b: 0, g: 0 };
                var c_stroke = hexToRgb(s.mouseover_style.stroke_color) || { r: 0, b: 0, g: 0 };

                style += 'opacity: ' + s.mouseover_style.opacity + ';';
                style += 'fill: rgba('+ c_fill.r +', '+ c_fill.g +', '+ c_fill.b +', '+ s.mouseover_style.fill_opacity +');';
                style += 'stroke: rgba('+ c_stroke.r +', '+ c_stroke.g +', '+ c_stroke.b +', '+ s.mouseover_style.stroke_opacity +');';
                style += 'stroke-width: ' + s.mouseover_style.stroke_width + 'px;';
                style += 'stroke-dasharray: ' + s.mouseover_style.stroke_dasharray + ';';
                style += 'stroke-linecap: ' + s.mouseover_style.stroke_linecap + ';';
            }

            el.attr('style', style);
        },
        applyDefaultStyles: function(i) {
            var self = this;
            var s = self.settings.spots[i];

            // If it's an icon, return
            // if (s.type == 'spot' && parseInt(s.default_style.use_icon, 10) == 1) return;
            var el = this.wrap.find('#' + s.id);
            var style = '';

            if (s.type == 'spot' && parseInt(s.default_style.use_icon, 10) == 0) {
                var color_bg = hexToRgb(s.default_style.background_color) || { r: 0, b: 0, g: 0 };
                var color_border = hexToRgb(s.default_style.border_color) || { r: 0, b: 0, g: 0 };

                style += 'left: '+ s.x +'%;';
                style += 'top: '+ s.y +'%;';
                style += 'width: '+ s.width +'px;';
                style += 'height: '+ s.height +'px;';
                style += 'margin-left: -'+ s.width/2 +'px;';
                style += 'margin-top: -'+ s.height/2 +'px;';

                style += 'opacity: ' + s.default_style.opacity + ';';
                style += 'border-radius: ' + s.default_style.border_radius + 'px;';
                style += 'background: rgba('+ color_bg.r +', '+ color_bg.g +', '+ color_bg.b +', '+ s.default_style.background_opacity +');';
                style += 'border-width: ' + s.default_style.border_width + 'px;';
                style += 'border-style: ' + s.default_style.border_style + ';';
                style += 'border-color: rgba('+ color_border.r +', '+ color_border.g +', '+ color_border.b +', '+ s.default_style.border_opacity +');';
            }
            if (s.type == 'spot' && parseInt(s.default_style.use_icon, 10) == 1) {
                // If it's an icon, apply opacity
                var wrapperWidth = (s.width < 44) ? 44 : s.width;
                var wrapperHeight = (s.height < 44) ? 44 : s.height;

                style += 'left: '+ s.x +'%;';
                style += 'top: '+ s.y +'%;';
                style += 'width: '+ wrapperWidth +'px;';
                style += 'height: '+ wrapperHeight +'px;';

                // If the icon is a pin, center it on the bottom edge
                var marginTop = -wrapperHeight/2;
                var marginLeft = -wrapperWidth/2;

                if (parseInt(s.default_style.icon_is_pin, 10) == 1) {
                    marginTop = -wrapperHeight;

                    if (s.height < 44) {
                        marginTop = -wrapperHeight/2 -s.height/2;
                    }
                }

                style += 'margin-left: '+ marginLeft +'px;';
                style += 'margin-top: '+ marginTop +'px;';

                style += 'opacity: ' + s.default_style.opacity + ';';
            }
            if (s.type == 'spot' && parseInt(s.default_style.use_icon, 10) == 1 && s.default_style.icon_type == 'library') {
                // If it's an icon and it's from library, apply SVG fill

                el.find('path').attr('style', 'fill:' + s.default_style.icon_fill);
            }
            if (s.type == 'rect') {
                var color_bg = hexToRgb(s.default_style.background_color) || { r: 0, b: 0, g: 0 };
                var color_border = hexToRgb(s.default_style.border_color) || { r: 0, b: 0, g: 0 };

                style += 'left: '+ s.x +'%;';
                style += 'top: '+ s.y +'%;';
                style += 'width: '+ s.width +'%;';
                style += 'height: '+ s.height +'%;';

                style += 'opacity: ' + s.default_style.opacity + ';';
                style += 'border-radius: ' + s.default_style.border_radius + 'px;';
                style += 'background: rgba('+ color_bg.r +', '+ color_bg.g +', '+ color_bg.b +', '+ s.default_style.background_opacity +');';
                style += 'border-width: ' + s.default_style.border_width + 'px;';
                style += 'border-style: ' + s.default_style.border_style + ';';
                style += 'border-color: rgba('+ color_border.r +', '+ color_border.g +', '+ color_border.b +', '+ s.default_style.border_opacity +');';
            }
            if (s.type == 'oval') {
                var color_bg = hexToRgb(s.default_style.background_color) || { r: 0, b: 0, g: 0 };
                var color_border = hexToRgb(s.default_style.border_color) || { r: 0, b: 0, g: 0 };

                style += 'left: '+ s.x +'%;';
                style += 'top: '+ s.y +'%;';
                style += 'width: '+ s.width +'%;';
                style += 'height: '+ s.height +'%;';

                style += 'opacity: ' + s.default_style.opacity + ';';
                style += 'border-radius: 50% 50%;';
                style += 'background: rgba('+ color_bg.r +', '+ color_bg.g +', '+ color_bg.b +', '+ s.default_style.background_opacity +');';
                style += 'border-width: ' + s.default_style.border_width + 'px;';
                style += 'border-style: ' + s.default_style.border_style + ';';
                style += 'border-color: rgba('+ color_border.r +', '+ color_border.g +', '+ color_border.b +', '+ s.default_style.border_opacity +');';
            }
            if (s.type == 'poly') {
                var c_fill = hexToRgb(s.default_style.fill) || { r: 0, b: 0, g: 0 };
                var c_stroke = hexToRgb(s.default_style.stroke_color) || { r: 0, b: 0, g: 0 };

                style += 'opacity: ' + s.default_style.opacity + ';';
                style += 'fill: rgba('+ c_fill.r +', '+ c_fill.g +', '+ c_fill.b +', '+ s.default_style.fill_opacity +');';
                style += 'stroke: rgba('+ c_stroke.r +', '+ c_stroke.g +', '+ c_stroke.b +', '+ s.default_style.stroke_opacity +');';
                style += 'stroke-width: ' + s.default_style.stroke_width + 'px;';
                style += 'stroke-dasharray: ' + s.default_style.stroke_dasharray + ';';
                style += 'stroke-linecap: ' + s.default_style.stroke_linecap + ';';
            }

            el.attr('style', style);
        },

        highlightShape: function(i, sendEvent) {
            this.applyMouseoverStyles(i);
            this.highlightedShapeIndex = i;
            this.highlightedShape = this.settings.spots[i];

            if (sendEvent) {
                // $.imageMapProEventHighlightedShape(this.settings.general.name, this.highlightedShape.title);
            }
        },
        unhighlightShape: function() {
            this.applyDefaultStyles(this.highlightedShapeIndex);

            // Send event
            // $.imageMapProEventUnhighlightedShape(this.settings.general.name, this.highlightedShape.title);

            // Reset vars
            this.highlightedShapeIndex = undefined;
            this.highlightedShape = undefined;
        },
        clickShape: function(i, e) {
            if (this.settings.spots[i].actions.click == 'show-tooltip') {
                this.applyMouseoverStyles(i);
                this.showTooltip(i);
                this.updateTooltipPosition(i, e);

                this.clickedShapeIndex = i;
                this.clickedShape = this.settings.spots[i];
            }
            if (this.settings.spots[i].actions.click == 'follow-link') {
                if ($('#imp-temp-link').length == 0) {
                    $('body').append('<a href="" id="imp-temp-link" target="_blank"></a>');
                }
                $('#imp-temp-link').attr('href', this.settings.spots[i].actions.link);

                if (parseInt(this.settings.spots[i].actions.open_link_in_new_window, 10) == 1) {
                    $('#imp-temp-link').attr('target', '_blank');
                } else {
                    $('#imp-temp-link').removeAttr('target');
                }

                $('#imp-temp-link')[0].click();
            }

            // $.imageMapProEventClickedShape(this.settings.general.name, this.settings.spots[i].id);
        },
        unclickShape: function() {
            this.applyDefaultStyles(this.clickedShapeIndex);

            if (this.clickedShape.actions.click == 'show-tooltip') {
                this.hideTooltip();
            }

            this.clickedShapeIndex = undefined;
            this.clickedShape = undefined;
        },

        showTooltip: function(i) {
            if ((this.settings.tooltips.fullscreen_tooltips == 'mobile-only' && isMobile()) || this.settings.tooltips.fullscreen_tooltips == 'always') {
                // Fullscreen tooltips
                this.visibleTooltip = $('.imp-fullscreen-tooltip[data-index="'+ i +'"]');
                this.visibleTooltipIndex = i;
                this.fullscreenTooltipsContainer.show();

                var self = this;
                setTimeout(function() {
                    self.visibleTooltip.addClass('imp-tooltip-visible');
                }, 20);

                this.fullscreenTooltipVisible = true;

                // Prevent scrolling of the body and store the original overflow attribute value
                this.bodyOverflow = $('body').css('overflow');
                $('body').css({
                    overflow: 'hidden'
                });
            } else {
                // Normal tooltips
                $('.imp-tooltip-visible').removeClass('imp-tooltip-visible');
                this.visibleTooltip = this.wrap.find('.imp-tooltip[data-index="'+ i +'"]');
                this.visibleTooltipIndex = i;
                this.visibleTooltip.addClass('imp-tooltip-visible');

                this.measureTooltipSize(i);
            }

            // $.imageMapProEventOpenedTooltip(this.settings.general.name, this.settings.spots[i].title);
        },
        hideTooltip: function() {
            $('.imp-tooltip-visible').removeClass('imp-tooltip-visible');
            this.visibleTooltip = undefined;
            this.visibleTooltipIndex = undefined;

            if ((this.settings.tooltips.fullscreen_tooltips == 'mobile-only' && isMobile()) || this.settings.tooltips.fullscreen_tooltips == 'always') {
                var self = this;

                setTimeout(function() {
                    self.fullscreenTooltipsContainer.hide();
                }, 200);

                this.fullscreenTooltipVisible = false;

                // Restore the body overflow to allow scrolling
                $('body').css({
                    overflow: this.bodyOverflow
                });
            }

            // $.imageMapProEventClosedTooltip(this.settings.general.name);
        },
        updateTooltipPosition: function(i, e) {
            // t = tooltip element
            // tw/th = tooltip width/height
            // sx/sy/sw/sh = spot x/y/width/height
            // p = padding
            // ex/ey = event x/y
            // s = target shape

            // If fullscreen tooltips are on, then do nothing
            if (this.fullscreenTooltipVisible) return;

            var t, tw, th, sx, sy, sw, sh, p = 20, ex, ey, s;

            t = this.visibleTooltip;
            tw = this.visibleTooltip.data('imp-measured-width');
            th = this.visibleTooltip.data('imp-measured-height');
            s = this.settings.spots[i];

            if (parseInt(this.settings.tooltips.sticky_tooltips, 10) == 1 && s.actions.mouseover == 'show-tooltip' && e) {
                // Sticky tooltips
                // Set width/height of the spot to 0
                // and X and Y to the mouse coordinates
                // Get the event coordinates
                var c = this.getEventCoordinates(e);
                ex = c.x;
                ey = c.y;

                sx = ex - this.wrap.offset().left;
                sy = ey - this.wrap.offset().top;
                sw = 0;
                sh = 0;
            } else {
                // Calculate the position and dimentions of the spot
                if (s.type == 'spot') {
                    sw = s.width;
                    sh = s.height;
                    sx = ((Math.round(s.x*10)/10)/100)*this.wrap.width() - sw/2;
                    sy = ((Math.round(s.y*10)/10)/100)*this.wrap.height() - sh/2;
                } else {
                    sw = (s.width/100)*this.wrap.width();
                    sh = (s.height/100)*this.wrap.height();
                    sx = ((Math.round(s.x*10)/10)/100)*this.wrap.width();
                    sy = ((Math.round(s.y*10)/10)/100)*this.wrap.height();
                }
            }

            // Calculate and set the position
            var x, y;
            if (s.tooltip_style.position == 'left') {
                x = sx - tw - p;
                y = sy + sh/2 - th/2;
            }
            if (s.tooltip_style.position == 'right') {
                x = sx + sw + p;
                y = sy + sh/2 - th/2;
            }
            if (s.tooltip_style.position == 'top') {
                x = sx + sw/2 - tw/2
                y = sy - th - p;
            }
            if (s.tooltip_style.position == 'bottom') {
                x = sx + sw/2 - tw/2;
                y = sy + sh + p;
            }

            // If the spot is a pin, offset it to the top
            if (s.type == 'spot' && parseInt(s.default_style.icon_is_pin, 10) == 1 && s.type == 'spot' && parseInt(s.default_style.use_icon, 10) == 1) {
                y -= sh/2;
            }

            var pos = { x: x, y: y };
            if (parseInt(this.settings.tooltips.constrain_tooltips, 10) == 1) {
                var wrapOffsetLeft = this.wrap.offset().left - $(window).scrollLeft();
                var wrapOffsetTop = this.wrap.offset().top - $(window).scrollTop();

                pos = fitRectToScreen(x + wrapOffsetLeft, y + wrapOffsetTop, tw, th);
                pos.x -= wrapOffsetLeft;
                pos.y -= wrapOffsetTop;
            }

            t.css({
                left: pos.x,
                top: pos.y
            });
        },

        toggleFullscreen: function() {
            if (parseInt(this.settings.runtime.is_fullscreen, 10) == 0) {
                // Go fullscreen
                $('body').addClass('imp-fullscreen-mode');

                var fullscreenSettings = $.extend(true, {}, this.settings);
                fullscreenSettings.runtime.is_fullscreen = 1;
                fullscreenSettings.id = '999999';
                fullscreenSettings.general.responsive = 0;

                var style = '';
                style += 'background: ' + this.settings.fullscreen.fullscreen_background;
                $('body').append('<div id="imp-fullscreen-wrap" style="'+ style +'"><div id="image-map-pro-'+ fullscreenSettings.id +'"></div></div>');

                $('#image-map-pro-'+ fullscreenSettings.id).imageMapPro(fullscreenSettings);

                // Disable current image map
                this.disableEvents();

                fullscreenMap = this;
            } else {
                // Close fullscreen
                $('body').removeClass('imp-fullscreen-mode');
                $('#imp-fullscreen-wrap').remove();
                this.disableEvents();

                fullscreenMap.events();
            }
        },
    });

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[ pluginName ] = function ( options ) {
        return this.each(function() {
            $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
        });
    };

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    function isPointInsideRect(x, y, rx, ry, rw, rh) {
        if (x>=rx && x<=rx+rw && y>=ry && y<=ry+rh) return true;
        return false;
    }
    function isPointInsidePolygon(x, y, vs) {
        // ray-casting algorithm based on
        // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

        var inside = false;
        for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
            var xi = vs[i][0], yi = vs[i][1];
            var xj = vs[j][0], yj = vs[j][1];

            var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }

        return inside;
    }
    function isPointInsideEllipse(x, y, ex, ey, rx, ry) {
        var a = (x - ex)*(x - ex);
        var b = rx*rx;
        var c = (y - ey)*(y - ey);
        var d = ry*ry;

        if (a/b + c/d <= 1) return true;

        return false;
    }
    function fitRectToScreen(x, y, w, h) {
        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x > $(document).width() - w) x = $(document).width() - w;
        if (y > $(document).height() - h) y = $(document).height() - h;

        return { x: x, y: y };
    }
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex ;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    function isMobile() {
        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true;
        }

        return false;
    }

})( jQuery, window, document );

;(function ($, window, document, undefined) {

	// Vars
	var editor = undefined;
	var settings = undefined;
	var sliderDragging = false;
	var copiedStyles = undefined;
	var indexOfShapeToDelete = 0;

	// Consts
	var EDITOR_OBJECT_TYPE_CANVAS = 0;
	var EDITOR_OBJECT_TYPE_SPOT = 1;
	var EDITOR_OBJECT_TYPE_OVAL = 2;
	var EDITOR_OBJECT_TYPE_RECT = 3;
	var EDITOR_OBJECT_TYPE_POLY = 4;
	var EDITOR_OBJECT_TYPE_TRANSFORM_GIZMO = 5;
	var EDITOR_OBJECT_TYPE_POLY_LINE = 6;
	var EDITOR_OBJECT_TYPE_POLY_POINT = 7;

	var EDITOR_TOOL_UNDEFINED = '';
	var EDITOR_TOOL_SPOT = 'spot';
	var EDITOR_TOOL_OVAL = 'oval';
	var EDITOR_TOOL_RECT = 'rect';
	var EDITOR_TOOL_POLY = 'poly';
	var EDITOR_TOOL_SELECT = 'select';
	var EDITOR_TOOL_ZOOM_IN = 'zoom-in';
	var EDITOR_TOOL_ZOOM_OUT = 'zoom-out';
	var EDITOR_TOOL_DRAG_CANVAS = 'drag';

	// Editor Settings
	var editorMaxZoomLevel = 32;


	// Preview settings, Used when the tour launches
	var preview_settings = {"id":1718,"editor":{"selected_shape":"spot-8364","tool":"poly"},"general":{"name":"Demo","shortcode":"image-map-demo","width":1280,"height":776},"spots":[{"id":"spot-8364","title":"spot-8364","x":26,"y":19.8,"default_style":{"icon_is_pin":1},"mouseover_style":{"icon_fill":"#ffcd00"},"tooltip_style":{"position":"left","auto_width":1},"tooltip_content":{"plain_text":"Mouseover the building below!","squares_settings":{"containers":[{"id":"sq-container-403761","settings":{"elements":[{"settings":{"name":"Paragraph","iconClass":"fa fa-paragraph"}}]}}]}}},{"id":"poly-2893","title":"poly-2893","type":"poly","x":15.757,"y":22.263,"width":22.844,"height":65.977,"default_style":{"fill":"#ffcd00","fill_opacity":0,"use_icon":0,"icon_svg_path":"","icon_svg_viewbox":"","icon_fill":"#2196f3"},"mouseover_style":{"fill":"#ffcd00","fill_opacity":0.5112781954887218},"tooltip_style":{"width":450},"tooltip_content":{"content_type":"content-builder","squares_settings":{"containers":[{"id":"sq-container-359931","settings":{"elements":[{"settings":{"name":"Heading","iconClass":"fa fa-header"},"options":{"heading":{"text":"Content Builder for the Tooltips"}}},{"settings":{"name":"Image","iconClass":"fa fa-camera"},"options":{"layout":{"column_span":{"lg":{"class":"col-lg-6"}}}}},{"settings":{"name":"Paragraph","iconClass":"fa fa-paragraph"},"options":{"text":{"text":"Image Map Pro 3.0 comes with a fully featured content builder that allows you to add rich content to your tooltips. Images, video, buttons, responsive grid system - it has it all!"},"layout":{"column_span":{"lg":{"class":"col-lg-6"}}}}},{"settings":{"name":"Button","iconClass":"fa fa-link"},"options":{"button":{"text":"Example Button!","display":"block"}}}]}}]}},"points":[{"x":2.8712844939993056,"y":100},{"x":3.536549668697936,"y":95.06062700400813},{"x":0.8754889699034004,"y":95.06062700400813},{"x":0,"y":47.12265849973005},{"x":0.7847960076976461,"y":23.53692508155694},{"x":3.9088248123944527,"y":17.15586649440026},{"x":12.222274912965194,"y":15.76484496015944},{"x":15.056281433779493,"y":7.219083609526608},{"x":19.502913861465178,"y":6.533930832820084},{"x":19.502913861465178,"y":4.254220219285366},{"x":26.155565608451525,"y":1.9745096057506475},{"x":33.47348253013651,"y":0.8346542989832882},{"x":38.79560392772559,"y":0.4547025300608352},{"x":44.78299050001331,"y":0},{"x":52.766172596396935,"y":1.8997588446122655},{"x":59.41882434338327,"y":0.7599035378449062},{"x":64.49612815668326,"y":2.2028938646528204},{"x":70.93855610846484,"y":3.267998410281798},{"x":70.30788472285052,"y":9.951430765378646},{"x":85.60898374091914,"y":7.900104410746106},{"x":100,"y":12.231141378913366},{"x":99.33473482530137,"y":71.50361733081603},{"x":94.67787860241093,"y":71.1236655618936},{"x":94.67787860241093,"y":73.02342440650584},{"x":74.71992336145188,"y":73.02342440650584},{"x":74.71992336145188,"y":99.62004823107758}],"vs":[[210.09118541033433,684.7416413373859],[212.03647416413372,659.4528875379939],[204.25531914893617,659.4528875379939],[201.69531914893616,414.0186018237082],[203.99012564995655,293.2636383750531],[213.12503655683665,260.593698339942],[237.43423174842115,253.4719035012826],[245.72109422492397,209.7190516717325],[258.7234042553191,206.21118541033434],[258.7234042553191,194.53945288753798],[278.17629179331306,182.86772036474164],[299.57446808510633,177.03185410334345],[315.1367781155015,175.08656534954406],[332.64437689969606,172.75856534954406],[355.9878419452888,182.48500911854103],[375.44072948328267,176.64914285714283],[390.2871732522796,184.03700911854102],[409.12534954407295,189.49016413373857],[407.2812158054711,223.70820668693008],[452.0228571428571,213.20576291793313],[494.10334346504555,235.37993920972644],[492.15805471124617,538.8449848024316],[478.54103343465044,536.8996960486323],[478.54103343465044,546.6261398176291],[420.18237082066867,546.6261398176291],[420.18237082066867,682.7963525835867]]},{"id":"poly-974","title":"poly-974","type":"poly","x":41.033,"y":2.507,"width":19.909,"height":84.48,"actions":{"mouseover":"no-action"},"default_style":{"fill":"#ffcd00","fill_opacity":0,"use_icon":0,"icon_svg_path":"","icon_svg_viewbox":"","icon_fill":"#2196f3"},"mouseover_style":{"fill":"#ffcd00","fill_opacity":0.5112781954887218},"tooltip_style":{"auto_width":1},"tooltip_content":{"squares_settings":{"containers":[{"id":"sq-container-403761","settings":{"elements":[{"settings":{"name":"Paragraph","iconClass":"fa fa-paragraph"}}]}}]}},"points":[{"x":3.0534351145038165,"y":91.98813056379822},{"x":0,"y":10.979228486646884},{"x":11.450381679389313,"y":7.71513353115727},{"x":11.450381679389313,"y":6.528189910979229},{"x":3.0534351145038165,"y":3.857566765578635},{"x":29.00763358778626,"y":0},{"x":55.72519083969466,"y":5.934718100890208},{"x":60.30534351145038,"y":5.341246290801187},{"x":72.51908396946564,"y":8.605341246290802},{"x":73.2824427480916,"y":9.792284866468842},{"x":93.12977099236642,"y":14.540059347181009},{"x":93.12977099236642,"y":28.18991097922849},{"x":100,"y":30.267062314540063},{"x":98.47328244274809,"y":100},{"x":58.01526717557252,"y":100},{"x":57.25190839694656,"y":91.3946587537092},{"x":25.190839694656486,"y":91.0979228486647},{"x":25.190839694656486,"y":89.31750741839762},{"x":10.687022900763358,"y":89.02077151335311},{"x":10.687022900763358,"y":90.80118694362018}],"vs":[[533.0091185410333,622.4924012158053],[525.2279635258358,91.4285714285714],[554.4072948328267,70.0303951367781],[554.4072948328267,62.24924012158054],[533.0091185410333,44.741641337386014],[599.1489361702127,19.45288753799392],[667.2340425531914,58.358662613981764],[678.9057750759878,54.46808510638297],[710.030395136778,75.86626139817629],[711.9756838905774,83.64741641337383],[762.5531914893617,114.77203647416411],[762.5531914893617,204.25531914893614],[780.0607902735562,217.8723404255319],[776.1702127659574,675.0151975683889],[673.0699088145896,675.0151975683889],[671.1246200607902,618.6018237082064],[589.4224924012158,616.6565349544071],[589.4224924012158,604.9848024316108],[552.4620060790272,603.0395136778113],[552.4620060790272,614.7112462006078]]},{"id":"poly-225","title":"poly-225","type":"poly","x":64.742,"y":16.044,"width":18.845,"height":71.444,"actions":{"mouseover":"no-action"},"default_style":{"fill":"#ffcd00","fill_opacity":0,"use_icon":0,"icon_svg_path":"","icon_svg_viewbox":"","icon_fill":"#2196f3"},"mouseover_style":{"fill":"#ffcd00","fill_opacity":0.5112781954887218},"tooltip_style":{"auto_width":1},"tooltip_content":{"squares_settings":{"containers":[{"id":"sq-container-403761","settings":{"elements":[{"settings":{"name":"Paragraph","iconClass":"fa fa-paragraph"}}]}}]}},"points":[{"x":1.6129032258064515,"y":92.28070175438596},{"x":0,"y":25.6140350877193},{"x":2.4193548387096775,"y":25.6140350877193},{"x":2.4193548387096775,"y":12.982456140350877},{"x":15.32258064516129,"y":11.578947368421053},{"x":15.32258064516129,"y":5.964912280701754},{"x":31.451612903225808,"y":4.912280701754386},{"x":30.64516129032258,"y":2.807017543859649},{"x":54.03225806451613,"y":1.7543859649122806},{"x":54.83870967741935,"y":3.1578947368421053},{"x":77.41935483870968,"y":0},{"x":91.12903225806451,"y":5.614035087719298},{"x":91.93548387096774,"y":21.75438596491228},{"x":98.38709677419355,"y":25.6140350877193},{"x":100,"y":81.05263157894737},{"x":98.38709677419355,"y":89.47368421052632},{"x":86.29032258064517,"y":89.47368421052632},{"x":85.48387096774194,"y":99.64912280701755},{"x":3.225806451612903,"y":100}],"vs":[[832.5835866261398,636.1094224924011],[828.693009118541,266.5045592705167],[834.5288753799392,266.5045592705167],[834.5288753799392,196.47416413373858],[865.6534954407294,188.69300911854103],[865.6534954407294,157.56838905775075],[904.5592705167173,151.73252279635258],[902.6139817629179,140.06079027355622],[959.0273556231002,134.22492401215806],[960.9726443768997,142.0060790273556],[1015.4407294832827,124.4984802431611],[1048.5106382978722,155.62310030395136],[1050.4559270516718,245.1063829787234],[1066.018237082067,266.5045592705167],[1069.9088145896656,573.8601823708206],[1066.018237082067,620.547112462006],[1036.838905775076,620.547112462006],[1034.8936170212764,676.9604863221883],[836.4741641337386,678.9057750759878]]},{"id":"poly-1879","title":"poly-1879","type":"poly","x":88.146,"y":53.144,"width":11.854,"height":35.095,"actions":{"mouseover":"no-action"},"default_style":{"fill":"#ffcd00","fill_opacity":0,"use_icon":0,"icon_svg_path":"","icon_svg_viewbox":"","icon_fill":"#2196f3"},"mouseover_style":{"fill":"#ffcd00","fill_opacity":0.5112781954887218},"tooltip_style":{"auto_width":1},"tooltip_content":{"squares_settings":{"containers":[{"id":"sq-container-403761","settings":{"elements":[{"settings":{"name":"Paragraph","iconClass":"fa fa-paragraph"}}]}}]}},"points":[{"x":5.128205128205128,"y":99.28571428571429},{"x":3.8461538461538463,"y":19.28571428571429},{"x":0,"y":13.571428571428571},{"x":8.974358974358974,"y":13.571428571428571},{"x":10.256410256410255,"y":10},{"x":14.102564102564102,"y":9.285714285714286},{"x":15.384615384615385,"y":5.714285714285714},{"x":98.71794871794873,"y":0},{"x":100,"y":100}],"vs":[[1136.0486322188447,682.7963525835867],[1134.1033434650453,464.9240121580547],[1128.267477203647,449.36170212765956],[1141.8844984802429,449.36170212765956],[1143.8297872340422,439.6352583586626],[1149.6656534954404,437.6899696048632],[1151.6109422492398,427.9635258358662],[1278.0547112462002,412.4012158054711],[1279.9999999999995,684.741641337386]]},{"id":"poly-5080","title":"poly-5080","type":"poly","x":3.191,"y":57.155,"width":12.614,"height":31.085,"actions":{"mouseover":"no-action"},"default_style":{"fill":"#ffcd00","fill_opacity":0,"use_icon":0,"icon_svg_path":"","icon_svg_viewbox":"","icon_fill":"#2196f3"},"mouseover_style":{"fill":"#ffcd00","fill_opacity":0.5112781954887218},"tooltip_style":{"auto_width":1},"tooltip_content":{"squares_settings":{"containers":[{"id":"sq-container-403761","settings":{"elements":[{"settings":{"name":"Paragraph","iconClass":"fa fa-paragraph"}}]}}]}},"points":[{"x":1.2048192771084338,"y":100},{"x":0,"y":92.74193548387096},{"x":13.253012048192772,"y":90.32258064516128},{"x":14.457831325301203,"y":87.09677419354838},{"x":28.915662650602407,"y":87.09677419354838},{"x":32.53012048192771,"y":50},{"x":38.55421686746988,"y":41.12903225806452},{"x":45.78313253012048,"y":41.12903225806452},{"x":44.57831325301205,"y":20.967741935483872},{"x":66.26506024096386,"y":15.32258064516129},{"x":67.46987951807229,"y":2.4193548387096775},{"x":83.13253012048193,"y":0},{"x":98.79518072289156,"y":4.838709677419355},{"x":100,"y":99.19354838709677}],"vs":[[42.796352583586625,684.741641337386],[40.85106382978723,667.2340425531914],[62.24924012158054,661.3981762917932],[64.19452887537993,653.6170212765958],[87.53799392097264,653.6170212765958],[93.37386018237082,564.1337386018237],[103.10030395136778,542.7355623100304],[114.77203647416414,542.7355623100304],[112.82674772036475,494.10334346504555],[147.8419452887538,480.48632218844983],[149.7872340425532,449.36170212765956],[175.07598784194528,443.5258358662614],[200.3647416413374,455.1975683890577],[202.31003039513678,682.7963525835866]]},{"id":"poly-3579","title":"poly-3579","type":"poly","x":33.587,"y":69.94,"width":7.599,"height":18.55,"actions":{"mouseover":"no-action"},"default_style":{"fill":"#ffcd00","fill_opacity":0,"use_icon":0,"icon_svg_path":"","icon_svg_viewbox":"","icon_fill":"#2196f3"},"mouseover_style":{"fill":"#ffcd00","fill_opacity":0.5112781954887218},"tooltip_style":{"auto_width":1},"tooltip_content":{"squares_settings":{"containers":[{"id":"sq-container-403761","settings":{"elements":[{"settings":{"name":"Paragraph","iconClass":"fa fa-paragraph"}}]}}]}},"points":[{"x":100,"y":0},{"x":0,"y":9.45945945945946},{"x":4,"y":97.2972972972973},{"x":84,"y":100},{"x":80,"y":56.75675675675676},{"x":100,"y":52.702702702702695}],"vs":[[527.1732522796352,542.7355623100303],[429.9088145896656,556.3525835866261],[433.7993920972644,682.7963525835866],[511.61094224924005,686.6869300911853],[507.7203647416413,624.4376899696048],[527.1732522796352,618.6018237082067]]},{"id":"poly-919","title":"poly-919","type":"poly","x":39.666,"y":77.711,"width":12.918,"height":10.278,"actions":{"mouseover":"no-action"},"default_style":{"fill":"#ffcd00","fill_opacity":0,"use_icon":0,"icon_svg_path":"","icon_svg_viewbox":"","icon_fill":"#2196f3"},"mouseover_style":{"fill":"#ffcd00","fill_opacity":0.5112781954887218},"tooltip_style":{"auto_width":1},"tooltip_content":{"squares_settings":{"containers":[{"id":"sq-container-403761","settings":{"elements":[{"settings":{"name":"Paragraph","iconClass":"fa fa-paragraph"}}]}}]}},"points":[{"x":96.47058823529412,"y":100},{"x":100,"y":26.82926829268293},{"x":50.588235294117645,"y":17.073170731707318},{"x":50.588235294117645,"y":12.195121951219512},{"x":44.70588235294118,"y":0},{"x":28.235294117647058,"y":0},{"x":27.058823529411764,"y":14.634146341463413},{"x":0,"y":24.390243902439025},{"x":1.1764705882352942,"y":97.5609756097561}],"vs":[[667.2340425531916,682.7963525835866],[673.0699088145897,624.4376899696048],[591.3677811550152,616.6565349544072],[591.3677811550152,612.7659574468084],[581.6413373860182,603.0395136778114],[554.4072948328268,603.0395136778114],[552.4620060790273,614.7112462006078],[507.72036474164133,622.4924012158053],[509.6656534954407,680.8510638297871]]},{"id":"poly-9983","title":"poly-9983","type":"poly","x":60.334,"y":73.951,"width":4.863,"height":14.038,"actions":{"mouseover":"no-action"},"default_style":{"fill":"#ffcd00","fill_opacity":0,"use_icon":0,"icon_svg_path":"","icon_svg_viewbox":"","icon_fill":"#2196f3"},"mouseover_style":{"fill":"#ffcd00","fill_opacity":0.5112781954887218},"tooltip_style":{"auto_width":1},"tooltip_content":{"squares_settings":{"containers":[{"id":"sq-container-403761","settings":{"elements":[{"settings":{"name":"Paragraph","iconClass":"fa fa-paragraph"}}]}}]}},"points":[{"x":15.625,"y":0},{"x":84.375,"y":0},{"x":96.875,"y":10.714285714285714},{"x":100,"y":96.42857142857143},{"x":0,"y":100},{"x":0,"y":16.071428571428573}],"vs":[[782.0060790273557,573.8601823708207],[824.8024316109422,573.8601823708207],[832.5835866261398,585.531914893617],[834.5288753799392,678.9057750759879],[772.2796352583587,682.7963525835867],[772.2796352583587,591.3677811550152]]},{"id":"poly-9416","title":"poly-9416","type":"poly","x":80.699,"y":74.202,"width":8.055,"height":13.787,"actions":{"mouseover":"no-action"},"default_style":{"fill":"#ffcd00","fill_opacity":0,"use_icon":0,"icon_svg_path":"","icon_svg_viewbox":"","icon_fill":"#2196f3"},"mouseover_style":{"fill":"#ffcd00","fill_opacity":0.5112781954887218},"tooltip_style":{"auto_width":1},"tooltip_content":{"squares_settings":{"containers":[{"id":"sq-container-403761","settings":{"elements":[{"settings":{"name":"Paragraph","iconClass":"fa fa-paragraph"}}]}}]}},"points":[{"x":0,"y":98.18181818181819},{"x":0,"y":47.27272727272727},{"x":30.188679245282955,"y":41.81818181818181},{"x":33.962264150943305,"y":0.029659090909091627},{"x":84.90566037735844,"y":0},{"x":98.11320754716974,"y":10.909090909090908},{"x":100,"y":100}],"vs":[[1032.9483282674773,680.8510638297872],[1032.9483282674773,626.3829787234042],[1064.0729483282676,620.547112462006],[1067.9635258358662,575.8372036474163],[1120.48632218845,575.80547112462],[1134.1033434650458,587.4772036474163],[1136.0486322188451,682.7963525835866]]}]};
	var tmp_settings = undefined;

	// For safe keeping only
	var demo_drawing_shapes_settings = {"id":8264,"editor":{"previewMode":1,"selected_shape":"poly-3332","tool":"poly"},"general":{"name":"Demo - Drawing Shapes","width":5245,"height":4428,"image_url":"img/demo_2.jpg"},"spots":[{"id":"poly-3332","type":"poly","x":3.409,"y":21.12,"width":94.279,"height":33.12,"actions":{"mouseover":"no-action"},"default_style":{"fill":"#ffffff","fill_opacity":0},"mouseover_style":{"fill":"#209ee8","fill_opacity":0.6533864541832669},"tooltip_style":{"auto_width":1},"points":[{"x":0,"y":76.44927536231886},{"x":0.5675485690757941,"y":100},{"x":39.6814667832578,"y":63.28502415458939},{"x":47.56156019637138,"y":57.97101449275364},{"x":51.28669526438871,"y":57.00483091787441},{"x":56.01475131225687,"y":58.454106280193265},{"x":60.169709657353124,"y":62.318840579710155},{"x":100,"y":99.03381642512075},{"x":99.71345114861406,"y":69.56521739130436},{"x":60.026435231660145,"y":5.797101449275358},{"x":55.58492803517794,"y":1.4492753623188424},{"x":52.86271394701143,"y":0.4830917874396141},{"x":48.707755601915174,"y":0},{"x":44.122973979739996,"y":1.4492753623188424},{"x":42.11713202003835,"y":3.864734299516913},{"x":40.11129006033671,"y":6.763285024154586}],"vs":[[178.81136000000004,2056.3632],[206.87616000000003,2401.7471999999993],[2141.0265600000002,1863.3023999999998],[2530.69056,1785.3696],[2714.89536,1771.1999999999998],[2948.69376,1792.4544],[3154.15296,1849.1327999999999],[5123.72736,2387.577599999999],[5109.55776,1955.4047999999998],[3147.06816,1020.2111999999998],[2927.43936,956.448],[2792.82816,942.2783999999999],[2587.3689600000002,935.1936],[2360.6553599999997,956.448],[2261.46816,991.872],[2162.2809599999996,1034.3808]]},{"id":"poly-3432","type":"poly","x":3.809,"y":40.16,"width":93.744,"height":25.92,"actions":{"mouseover":"no-action"},"default_style":{"fill":"#ffffff","fill_opacity":0},"mouseover_style":{"fill":"#209ee8","fill_opacity":0.6533864541832669},"tooltip_style":{"auto_width":1},"points":[{"x":0,"y":100},{"x":37.89625360230547,"y":93.20987654320986},{"x":48.84726224783862,"y":94.44444444444446},{"x":60.37463976945246,"y":91.35802469135804},{"x":100,"y":95.67901234567906},{"x":99.85590778097982,"y":53.086419753086425},{"x":60.61982514337632,"y":6.249999999999992},{"x":56.77233429394812,"y":2.4691358024691383},{"x":53.7463976945245,"y":0.6172839506172709},{"x":51.44092219020173,"y":0},{"x":48.559077809798275,"y":1.2345679012345692},{"x":45.38904899135447,"y":2.4691358024691383},{"x":42.65129682997118,"y":4.320987654320978},{"x":39.62536023054755,"y":6.790123456790117},{"x":0.14409221902017288,"y":53.703703703703724}],"vs":[[199.79136,2926.0224],[2063.0937599999997,2848.0895999999993],[2601.5385600000004,2862.2592],[3168.3225600000005,2826.8352],[5116.64256,2876.4288000000006],[5109.55776,2387.5776],[3180.3779600000003,1850.0184],[2991.20256,1806.6240000000003],[2842.42176,1785.3696],[2729.06496,1778.2848000000001],[2587.3689600000002,1792.4544],[2431.50336,1806.6240000000003],[2296.8921600000003,1827.8784],[2148.1113600000003,1856.2176],[206.87616,2394.6624]]},{"id":"poly-1676","type":"poly","x":3.269,"y":63.84,"width":94.149,"height":25.1,"actions":{"mouseover":"no-action"},"default_style":{"fill":"#ffffff","fill_opacity":0},"mouseover_style":{"fill":"#209ee8","fill_opacity":0.6533864541832669},"tooltip_style":{"auto_width":1},"points":[{"x":0.573888091822095,"y":57.370517928286844},{"x":40.45911047345766,"y":92.43027888446213},{"x":42.71904594344843,"y":98.64541832669322},{"x":46.162374494380984,"y":99.60159362549803},{"x":49.78087548391025,"y":99.36254980079683},{"x":53.39381968664259,"y":100},{"x":56.85773507962243,"y":94.18326693227088},{"x":60.54519368723099,"y":88.60557768924303},{"x":70.01434720229557,"y":78.40637450199203},{"x":77.18794835007174,"y":71.39442231075694},{"x":85.5093256814921,"y":62.47011952191235},{"x":93.974175035868,"y":55.45816733067726},{"x":100,"y":49.08366533864542},{"x":100,"y":4.4621513944223},{"x":60.83213773314202,"y":0},{"x":57.53228120516497,"y":1.2749003984063756},{"x":39.45480631276901,"y":1.2749003984063756},{"x":1.0043041606886653,"y":7.649402390438224},{"x":0.1434720229555236,"y":8.286852589641455},{"x":0,"y":12.111553784860554},{"x":0.573888091822095,"y":18.486055776892403}],"vs":[[199.79135999999997,3464.4672],[2169.365759999999,3854.1312],[2280.9637599999996,3923.2079999999996],[2450.998959999999,3933.8352000000004],[2629.684359999999,3931.1784000000002],[2808.09536,3938.2632000000003],[2979.1471599999995,3873.6143999999995],[3161.23776,3811.6224],[3628.8345600000007,3698.2656],[3983.0745599999996,3620.3327999999997],[4393.99296,3521.1456],[4811.99616,3443.2128],[5109.55776,3372.3648000000003],[5109.55776,2876.4287999999997],[3175.407359999999,2826.8352],[3012.4569599999986,2841.0048],[2119.77216,2841.0048],[221.04575999999994,2911.8527999999997],[178.53695999999997,2918.9376],[171.45215999999996,2961.4464],[199.79135999999997,3032.2943999999998]]}]};

	// Default settings
	var default_settings = $.imageMapProEditorDefaults;
	var default_spot_settings = $.imageMapProShapeDefaults;
	
	$.imageMapProDefaultSettings = $.extend(true, {}, default_settings);
	$.imageMapProDefaultSpotSettings = $.extend(true, {}, default_spot_settings);

	// SQUARES API =============================================================
	$.squaresExtendElementDefaults({
		defaultControls: {
			font: {
				text_color: {
					name: 'Text Color',
					type: 'color',
					default: '#ffffff'
				},
			}
		}
	});
	// =========================================================================

	// WCP EDITOR API ==========================================================

	// WCP TOUR API ============================================================
	$.wcpTourCoordinatesForTipForStep = function(step) {
		if (step == 'Drawing Shapes') {
			return {
				x: $('#wcp-editor-toolbar').offset().left,
				y: $('#wcp-editor-toolbar').offset().top + $('#wcp-editor-toolbar').height()/2
			}
		}
		if (step == 'Customize Your Shapes') {
			return {
				x: $('[data-wcp-main-tab-button-name="Shape"]').offset().left + 20,
				y: $('[data-wcp-main-tab-button-name="Shape"]').offset().top + 40
			}
		}
		if (step == 'Edit and Delete Shapes') {
			return {
				x: $('#wcp-editor-right').offset().left - 20,
				y: $('#wcp-editor-right').offset().top + 50
			}
		}
		if (step == 'Use Icons') {
			return {
				x: $('[data-wcp-form-tab-button-name="icon"]').offset().left + 64,
				y: $('[data-wcp-form-tab-button-name="icon"]').offset().top + 28
			}
		}
		if (step == 'Tooltip Content Builder') {
			return {
				x: $('[data-wcp-form-tab-button-name="tooltip_content"]').offset().left + 64,
				y: $('[data-wcp-form-tab-button-name="tooltip_content"]').offset().top + 28
			}
		}
		if (step == 'Responsive &amp; Fullscreen Tooltips') {
			return {
				x: $('[data-wcp-main-tab-button-name="Image Map"]').offset().left + 150,
				y: $('[data-wcp-main-tab-button-name="Image Map"]').offset().top + 40
			}
		}
		if (step == 'Preview Mode') {
			return {
				x: $('#wcp-editor-button-preview').offset().left + 64,
				y: $('#wcp-editor-button-preview').offset().top + 32
			}
		}
		if (step == 'Save and Load') {
			return {
				x: $('#wcp-editor-button-load').offset().left + 64,
				y: $('#wcp-editor-button-load').offset().top + 32
			}
		}
		if (step == 'Publish') {
			return {
				x: $('#wcp-editor-form-control-image_map_shortcode').offset().left + $('#wcp-editor-form-control-image_map_shortcode').outerWidth() + 20,
				y: $('#wcp-editor-form-control-image_map_shortcode').offset().top + $('#wcp-editor-form-control-image_map_shortcode').outerHeight()/2
			}
		}
		if (step == 'Import and Export') {
			return {
				x: $('[data-wcp-editor-extra-main-button-name="export"]').offset().left + 64,
				y: $('[data-wcp-editor-extra-main-button-name="export"]').offset().top + 32
			}
		}
		if (step == 'Code') {
			return {
				x: $('[data-wcp-editor-extra-main-button-name="code"]').offset().left + 64,
				y: $('[data-wcp-editor-extra-main-button-name="code"]').offset().top + 32
			}
		}
	}
	$.wcpTourCoordinatesForHighlightRect = function(step) {
		if (step == 'Drawing Shapes') {
			return {
				x: $('#wcp-editor-toolbar').offset().left,
				y: $('#wcp-editor-toolbar').offset().top,
				width: $('#wcp-editor-toolbar').outerWidth(),
				height: $('#wcp-editor-toolbar').outerHeight(),
			}
		}
		if (step == 'Customize Your Shapes') {
			return {
				x: $('[data-wcp-main-tab-button-name="Shape"]').offset().left,
				y: $('[data-wcp-main-tab-button-name="Shape"]').offset().top,
				width: $('[data-wcp-main-tab-button-name="Shape"]').outerWidth(),
				height: $('[data-wcp-main-tab-button-name="Shape"]').outerHeight(),
			}
		}
		if (step == 'Edit and Delete Shapes') {
			return {
				x: $('#wcp-editor-right').offset().left,
				y: $('#wcp-editor-right').offset().top,
				width: $('#wcp-editor-right').outerWidth(),
				height: $('#wcp-editor-right').outerHeight(),
			}
		}
		if (step == 'Use Icons') {
			return {
				x: $('[data-wcp-form-tab-button-name="icon"]').offset().left,
				y: $('[data-wcp-form-tab-button-name="icon"]').offset().top,
				width: $('[data-wcp-form-tab-button-name="icon"]').outerWidth(),
				height: $('[data-wcp-form-tab-button-name="icon"]').outerHeight(),
			}
		}
		if (step == 'Tooltip Content Builder') {
			return {
				x: $('[data-wcp-form-tab-button-name="tooltip_content"]').offset().left,
				y: $('[data-wcp-form-tab-button-name="tooltip_content"]').offset().top,
				width: $('[data-wcp-form-tab-button-name="tooltip_content"]').outerWidth(),
				height: $('[data-wcp-form-tab-button-name="tooltip_content"]').outerHeight(),
			}
		}
		if (step == 'Responsive &amp; Fullscreen Tooltips') {
			return {
				x: $('[data-wcp-main-tab-button-name="Image Map"]').offset().left,
				y: $('[data-wcp-main-tab-button-name="Image Map"]').offset().top,
				width: $('[data-wcp-main-tab-button-name="Image Map"]').outerWidth(),
				height: $('[data-wcp-main-tab-button-name="Image Map"]').outerHeight(),
			}
		}
		if (step == 'Preview Mode') {
			return {
				x: $('#wcp-editor-button-preview').offset().left,
				y: $('#wcp-editor-button-preview').offset().top,
				width: $('#wcp-editor-button-preview').outerWidth(),
				height: $('#wcp-editor-button-preview').outerHeight(),
			}
		}
		if (step == 'Save and Load') {
			return {
				x: $('#wcp-editor-button-save').offset().left,
				y: $('#wcp-editor-button-save').offset().top,
				width: $('#wcp-editor-button-save').outerWidth() + $('#wcp-editor-button-load').outerWidth(),
				height: $('#wcp-editor-button-save').outerHeight(),
			}
		}
		if (step == 'Publish') {
			return {
				x: $('#wcp-editor-form-control-image_map_shortcode').offset().left - 10,
				y: $('#wcp-editor-form-control-image_map_shortcode').offset().top - 10,
				width: $('#wcp-editor-form-control-image_map_shortcode').outerWidth() + 20,
				height: $('#wcp-editor-form-control-image_map_shortcode').outerHeight() + 20,
			}
		}
		if (step == 'Import and Export') {
			return {
				x: $('[data-wcp-editor-extra-main-button-name="import"]').offset().left,
				y: $('[data-wcp-editor-extra-main-button-name="import"]').offset().top,
				width: $('[data-wcp-editor-extra-main-button-name="import"]').outerWidth() + $('[data-wcp-editor-extra-main-button-name="export"]').outerWidth(),
				height: $('[data-wcp-editor-extra-main-button-name="import"]').outerHeight(),
			}
		}
		if (step == 'Code') {
			return {
				x: $('[data-wcp-editor-extra-main-button-name="code"]').offset().left,
				y: $('[data-wcp-editor-extra-main-button-name="code"]').offset().top,
				width: $('[data-wcp-editor-extra-main-button-name="code"]').outerWidth(),
				height: $('[data-wcp-editor-extra-main-button-name="code"]').outerHeight(),
			}
		}
	}
	$.wcpTourEventStarted = function() {
		tmp_settings = settings;
		settings = preview_settings;
		editor.shapesFormSpotIndex = -1; // Force redraw of the form
		editor.parseSettings();
		editor.redraw();
		$.wcpEditorOpenMainTabWithName('Shape');
	}
	$.wcpTourEventFinished = function() {
		settings = tmp_settings;
		editor.redraw();
	}
	$.wcpTourEventStepWillChange = function(step) {
		if (step == 'Publish') {
			// Open image map settings
			$.wcpEditorOpenMainTabWithName('Image Map');
		} else {
			// Open shape settings
			$.wcpEditorOpenMainTabWithName('Shape');
		}
	}

	// [data source] Called on initialization:
	$.wcpEditorGetContentForTabWithName = function(tabName) {
		if (tabName == 'Image Map') {
			return $.wcpEditorGetHTMLForFormWithName('Image Map Settings');
		}
		if (tabName == 'Shape') {
			return $.wcpEditorGetHTMLForFormWithName('Shape Settings');
		}
	}
	$.wcpEditorGetContentForCanvas = function() {
		return '';
	}
	$.wcpEditorGetListItems = function() {
		var items = [];

		// Returns an array of objects in the format { id: 'id', title: 'title' }
		for (var i=settings.spots.length - 1; i>=0; i--) {
			var s = settings.spots[i];
			items.push({ id: s.id, title: s.title });
		}

		return items;
	}
	// [data source] Get a list of saves
	$.wcpEditorGetSaves = function(callback) {
		$.imp_editor_storage_get_saves_list(function(savesList) {
			var list = new Array();

			for (var i=0; i<savesList.length; i++) {
				var listItem = {};

				if (savesList[i].name) {
					listItem = {
						name: savesList[i].name,
						id: savesList[i].id
					};
				} else {
					listItem = {
						name: 'Untitled',
						id: savesList[i].id
					};
				}

				list.push(listItem);
			}

			callback(list);
		});
	}
	// [data source] Provide encoded JSON for export
	$.wcpEditorGetExportJSON = function() {
		return JSON.stringify(editor.getCompressedSettings());
	}

	// Form events
	$.wcpEditorEventFormUpdated = function(formName, controlName) {
		if (formName == 'Image Map Settings') {
			var m = $.wcpEditorGetModelOfFormWithName(formName);

			// Did the image URL change?
			if (m.image.image_url && m.image.image_url.length > 0 && settings.image.url !== m.image.image_url) {
				settings.image.url = m.image.image_url;
				editor.canvasImage.src = m.image.image_url;

				loadImage(editor.canvasImage, function() {
					// Image is loading
					// Show loader
					$.wcpEditorPresentLoadingScreen('Loading Image...');
				}, function() {
					// Image has loaded
					// init canvas events
					editor.canvas_events();

					// Hide loader
					$.wcpEditorHideLoadingScreen();

					settings.general.width = editor.canvasImage.naturalWidth;
					settings.general.height = editor.canvasImage.naturalHeight;

					settings.general.naturalWidth = editor.canvasImage.naturalWidth;
					settings.general.naturalHeight = editor.canvasImage.naturalHeight;

					$.wcpEditorSetControlValue('Image Map Settings', 'image_map_width', settings.general.width);
					$.wcpEditorSetControlValue('Image Map Settings', 'image_map_height', settings.general.height);
					$.wcpEditorUpdateForm('Image Map Settings');

					editor.redraw();
					editor.addAction();
				}, function() {
					$.wcpEditorHideLoadingScreenWithMessage('Error Loading Image!', true, false);
				});
			} else {
				settings.general.name = m.general.image_map_name.trim();
				if (m.general.image_map_shortcode) {
					settings.general.shortcode = m.general.image_map_shortcode.replace(/[\[\]']+/g,'').trim();
				}
				settings.general.width = m.general.image_map_width;
				settings.general.height = m.general.image_map_height;
				settings.general.responsive = m.general.responsive;
				settings.general.preserve_quality = m.general.preserve_quality;
				settings.general.pageload_animation = m.general.pageload_animation;
				settings.general.late_initialization = m.general.late_initialization;
				settings.general.center_image_map = m.general.center_image_map;

				settings.image.url = m.image.image_url;

				settings.tooltips.sticky_tooltips = m.tooltips.sticky_tooltips;
				settings.tooltips.constrain_tooltips = m.tooltips.constrain_tooltips;
				settings.tooltips.tooltip_animation = m.tooltips.tooltip_animation;
				settings.tooltips.fullscreen_tooltips = m.tooltips.fullscreen_tooltips;

				settings.fullscreen.enable_fullscreen_mode = m.fullscreen.enable_fullscreen_mode;
				settings.fullscreen.start_in_fullscreen_mode = m.fullscreen.start_in_fullscreen_mode;
				settings.fullscreen.fullscreen_background = m.fullscreen.fullscreen_background;
				settings.fullscreen.fullscreen_button_position = m.fullscreen.fullscreen_button_position;
				settings.fullscreen.fullscreen_button_type = m.fullscreen.fullscreen_button_type;
				settings.fullscreen.fullscreen_button_color = m.fullscreen.fullscreen_button_color;
				settings.fullscreen.fullscreen_button_text_color = m.fullscreen.fullscreen_button_text_color;

				settings.custom_code.custom_css = m.custom_code.custom_css;
				settings.custom_code.custom_js = m.custom_code.custom_js;

				editor.redraw();
				editor.addAction();
			}
		}
		if (formName == 'Shape Settings' && editor.selectedSpot !== undefined) {
			var s = editor.selectedSpot;
			var model = $.wcpEditorGetModelOfFormWithName('Shape Settings');

			// General
			s.x = model.general.x;
			s.y = model.general.y;
			s.width = model.general.width;
			s.height = model.general.height;

			// Actions
			s.actions.mouseover = model.actions.mouseover;
			s.actions.click = model.actions.click;
			s.actions.link = model.actions.link;
			s.actions.open_link_in_new_window = model.actions.open_link_in_new_window;

			// Default style
			s.default_style.opacity = model.default_style.opacity;
			s.default_style.icon_fill = model.default_style.icon_fill;
			s.default_style.border_radius = model.default_style.border_radius;
			s.default_style.background_color = model.default_style.background_color;
			s.default_style.background_opacity = model.default_style.background_opacity;
			s.default_style.border_width = model.default_style.border_width;
			s.default_style.border_style = model.default_style.border_style;
			s.default_style.border_color = model.default_style.border_color;
			s.default_style.border_opacity = model.default_style.border_opacity;
			s.default_style.fill = model.default_style.fill;
			s.default_style.fill_opacity = model.default_style.fill_opacity;
			s.default_style.stroke_color = model.default_style.stroke_color;
			s.default_style.stroke_opacity = model.default_style.stroke_opacity;
			s.default_style.stroke_width = model.default_style.stroke_width;
			s.default_style.stroke_dasharray = model.default_style.stroke_dasharray;
			s.default_style.stroke_linecap = model.default_style.stroke_linecap;
			s.default_style.use_icon = model.icon.use_icon;
			s.default_style.icon_type = model.icon.icon_type;
			s.default_style.icon_svg_path = model.icon.icon_svg_path;
			s.default_style.icon_svg_viewbox = model.icon.icon_svg_viewbox;
			s.default_style.icon_url = model.icon.icon_url;
			s.default_style.icon_is_pin = model.icon.icon_is_pin;
			s.default_style.icon_shadow = model.icon.icon_shadow;

			// Mouseover style
			s.mouseover_style.opacity = model.mouseover_style.mouseover_opacity;
			s.mouseover_style.icon_fill = model.mouseover_style.mouseover_icon_fill;
			s.mouseover_style.border_radius = model.mouseover_style.mouseover_border_radius;
			s.mouseover_style.background_color = model.mouseover_style.mouseover_background_color;
			s.mouseover_style.background_opacity = model.mouseover_style.mouseover_background_opacity;
			s.mouseover_style.border_width = model.mouseover_style.mouseover_border_width;
			s.mouseover_style.border_style = model.mouseover_style.mouseover_border_style;
			s.mouseover_style.border_color = model.mouseover_style.mouseover_border_color;
			s.mouseover_style.border_opacity = model.mouseover_style.mouseover_border_opacity;
			s.mouseover_style.fill = model.mouseover_style.mouseover_fill;
			s.mouseover_style.fill_opacity = model.mouseover_style.mouseover_fill_opacity;
			s.mouseover_style.stroke_color = model.mouseover_style.mouseover_stroke_color;
			s.mouseover_style.stroke_opacity = model.mouseover_style.mouseover_stroke_opacity;
			s.mouseover_style.stroke_width = model.mouseover_style.mouseover_stroke_width;
			s.mouseover_style.stroke_dasharray = model.mouseover_style.mouseover_stroke_dasharray;
			s.mouseover_style.stroke_linecap = model.mouseover_style.mouseover_stroke_linecap;

			// Tooltip style
			s.tooltip_style.border_radius = model.tooltip_settings.tooltip_border_radius;
			s.tooltip_style.padding = model.tooltip_settings.tooltip_padding;
			s.tooltip_style.background_color = model.tooltip_settings.tooltip_background_color;
			s.tooltip_style.background_opacity = model.tooltip_settings.tooltip_background_opacity;
			s.tooltip_style.position = model.tooltip_settings.tooltip_position;
			s.tooltip_style.width = model.tooltip_settings.tooltip_width;
			s.tooltip_style.auto_width = model.tooltip_settings.tooltip_auto_width;

			// Tooltip content
			s.tooltip_content.content_type = model.tooltip_content.tooltip_content_type;
			s.tooltip_content.plain_text = model.tooltip_content.plain_text;
			s.tooltip_content.plain_text_color = model.tooltip_content.plain_text_color;
			s.tooltip_content.squares_settings = model.tooltip_content.squares_settings;

			editor.redraw();
			if (!sliderDragging) { editor.addAction(); }
		}
	}

	// Main button events
	$.wcpEditorEventNewButtonPressed = function() {}
	$.wcpEditorEventSaveButtonPressed = function() {
		$.wcpEditorPresentLoadingScreen('Saving...');

		$.imp_editor_storage_store_save(editor.getCompressedSettings(), function(success) {
			if (success) {
				$.wcpEditorHideLoadingScreenWithMessage('Saved!', false, false);
			} else {
				$.wcpEditorHideLoadingScreenWithMessage('There was an error saving the image map!', true, false);

				var modalBody = '';

				modalBody += '<div class="modal-info-text">Please save this code in order to preserve your work and try again later. <br>This code can be imported any time by opening an existing image map and pressing the Import button. <br>You can also <a href="https://webcraftplugins.com/support">contact us</a>!</div>';
				modalBody += '<textarea id="textarea-error-saving">'+ JSON.stringify(editor.getCompressedSettings()) +'</textarea>';

				setTimeout(function() {
					$.wcpEditorPresentModal({
						name: 'error-saving',
						title: 'Error Saving Image Map',
						buttons: [
							{
								class: 'primary',
								name: 'done',
								title: 'Done'
							}
						],
						body: modalBody
					});
				}, 1000);
			}
		});
	}
	$.wcpEditorEventLoadButtonPressed = function() {}
	$.wcpEditorEventUndoButtonPressed = function() {
		editor.undo();
	}
	$.wcpEditorEventRedoButtonPressed = function() {
		editor.redo();
	}
	$.wcpEditorEventPreviewButtonPressed = function() {}
	$.wcpEditorEventEnteredPreviewMode = function() {
		settings.editor.previewMode = 1;
		editor.redraw();
	}
	$.wcpEditorEventExitedPreviewMode = function() {
		settings.editor.previewMode = 0;
		editor.redraw();
	}

	// List events
	$.wcpEditorEventListItemMouseover = function(itemID) {
		// Find the title of the shape with ID = itemID
		var shapeTitle = undefined;

		for (var i=0; i<settings.spots.length; i++) {
			if (settings.spots[i].id == itemID) {
				shapeTitle = settings.spots[i].title;
			}
		}

		if (parseInt(settings.editor.previewMode, 10) == 1) {
			$.imageMapProHighlightShape(settings.general.name, shapeTitle);
		}
	}
	$.wcpEditorEventListItemSelected = function(itemID) {
		editor.selectSpot(itemID);
		editor.redraw();

		// Find the title of the shape with ID = itemID
		var shapeTitle = undefined;

		for (var i=0; i<settings.spots.length; i++) {
			if (settings.spots[i].id == itemID) {
				shapeTitle = settings.spots[i].title;
			}
		}

		if (parseInt(settings.editor.previewMode, 10) == 1) {
			$.imageMapProHighlightShape(settings.general.name, shapeTitle);

			if (editor.selectedSpot.actions.mouseover == 'show-tooltip' || editor.selectedSpot.actions.click == 'show-tooltip') {
				$.imageMapProOpenTooltip(settings.general.name, shapeTitle);
			}
		}
	}
	$.wcpEditorEventListItemMoved = function(itemID, oldIndex, newIndex) {
		// Invert the indexes, because the list is inverted
		newIndex = settings.spots.length - 1 - newIndex;
		oldIndex = settings.spots.length - 1 - oldIndex;

		// Move the item with itemID from listItems to the new index
		if (newIndex > settings.spots.length - 1) {
			newIndex = settings.spots.length - 1;
		}
		
		settings.spots.splice(newIndex, 0, settings.spots.splice(oldIndex, 1)[0]);

		editor.updateShapesList();
		editor.redraw();
	}
	$.wcpEditorEventListItemButtonPressed = function(itemID, buttonName) {
		
	}
	$.wcpEditorEventListItemTitleButtonPressed = function(buttonName) {
		if (!editor.selectedSpot) {
			return;
		}

        if (buttonName == 'duplicate') {
			var s = $.extend(true, {}, editor.selectedSpot);

			if (s.type == 'spot') s.id = editor.createIdForSpot();
			if (s.type == 'rect') s.id = editor.createIdForRect();
			if (s.type == 'oval') s.id = editor.createIdForOval();
			if (s.type == 'poly') s.id = editor.createIdForPoly();

			s.title += ' Copy';

			settings.spots.push(s);

			editor.redraw();
			editor.addAction();
		}

		if (buttonName == 'copy') {
			copiedStyles = {
				default_style: $.extend(true, {}, editor.selectedSpot.default_style),
				mouseover_style: $.extend(true, {}, editor.selectedSpot.mouseover_style),
				tooltip_style: $.extend(true, {}, editor.selectedSpot.tooltip_style),
				tooltip_content: {
					plain_text_color: editor.selectedSpot.tooltip_content.plain_text_color
				}
			}
		}

		if (buttonName == 'paste') {
			editor.selectedSpot.default_style = $.extend(true, {}, copiedStyles.default_style);
			editor.selectedSpot.mouseover_style = $.extend(true, {}, copiedStyles.mouseover_style);
			editor.selectedSpot.tooltip_style = $.extend(true, {}, copiedStyles.tooltip_style);
			editor.selectedSpot.tooltip_content.plain_text_color = copiedStyles.tooltip_content.plain_text_color;

			editor.redraw();
			editor.addAction();
		}

		if (buttonName == 'delete') {
			indexOfShapeToDelete = editor.getIndexOfSpotWithId(editor.selectedSpot.id);

			$.wcpEditorPresentModal({
				name: 'confirm-delete-shape',
				title: 'Confirm Delete',
				buttons: [
					{
						name: 'cancel',
						title: 'Cancel',
						class: ''
					},
					{
						name: 'delete',
						title: 'Delete',
						class: 'danger'
					}
				],
				body: 'Delete this shape?'
			});
		}

		if (buttonName == 'rename') {
			var html = '<div class="wcp-editor-form-control">';
			html += '<label>Shape Name</label>';
			html += '<input type="text" id="input-shape-name">';
			html += '<div class="modal-error-text" id="rename-shape-error" style="margin-top: 10px; display: none;"></div>';
			html += '</div>';

			$.wcpEditorPresentModal({
				name: 'confirm-rename-shape',
				title: 'Rename Shape',
				buttons: [
					{
						name: 'cancel',
						title: 'Cancel',
						class: ''
					},
					{
						name: 'rename',
						title: 'Rename',
						class: 'primary'
					}
				],
				body: html
			});

			$('#input-shape-name').val(editor.selectedSpot.title);
		}
    }

	// Tool events
	$.wcpEditorEventSelectedTool = function(toolName) {
		settings.editor.tool = toolName;
		editor.redraw();

		// Lite
		// if (toolName == 'poly') {
		// 	if (settings.spots.length > 0) {
		// 		for (var i=0; i<settings.spots.length; i++) {
		// 			var s = settings.spots[i];
		// 			if (s.type == 'poly') {
		// 				$.imageMapProLiteLaunchPremiumWindow();
		// 				$.wcpEditorSelectTool('select');
		// 			}
		// 		}
		// 	}
		// }
	}
	$.wcpEditorEventPressedTool = function(toolName) {
		if (toolName == 'reset') {
			editor.zoomReset();
		}
	}

	// Extra main button events
	$.wcpEditorEventExtraMainButtonClick = function(buttonName) {
		if (buttonName == 'code') {
			var html = '';

			html += '<div id="imp-generated-code-wrap">';
			html += '<div class="generated-code-help">';
			html += '    This is a sample HTML document, showing how to install the plugin in your website.';
			html += '</div>';

			html += '<pre>';
			html += '&lt;!doctype html&gt;<br>';
			html += '&lt;html&gt;<br>';
			html += '&lt;head&gt;<br>';
			html += '    <strong><span class="em-code">&lt;link rel=&quot;stylesheet&quot; href=&quot;css/image-map-pro.min.css&quot;&gt;</span></strong><br>';
			html += '&lt;/head&gt;<br>';
			html += '&lt;body&gt;<br>';
			html += '    &lt;div id=&quot;<strong><span class="em-code">image-map-pro-container</span></strong>&quot;&gt;&lt;/div&gt;<br><br>';

			html += '    &lt;script src=&quot;js/jquery.min.js&quot;&gt;&lt;/script&gt;<br>';
			html += '    <strong><span class="em-code">&lt;script src=&quot;js/image-map-pro.min.js&quot;&gt;&lt;/script&gt;</span></strong><br>';
			html += '    &lt;script type=&quot;text/javascript&quot;&gt;<br>';
			html += '        ;(function ($, window, document, undefined) {<br>';
			html += '            $(document).ready(function() {<br>';
			html += '</pre>';
			html += '<div class="generated-code-help">The code that contains all settings and initializes the plugin:</div>';

			html += '<textarea id="textarea-generated-code" rows="4"></textarea>';

			html += '    <pre>';
			html += '            });<br>';
			html += '        })(jQuery, window, document);<br>';
			html += '    &lt;/script&gt;<br>';
			html += '&lt;/body&gt;<br>';
			html += '&lt;/html&gt;<br>';
			html += '</pre>';
			html += '</div>';

			$.wcpEditorPresentModal({
				name: 'code',
				title: 'Code',
				buttons: [
					{
						name: 'done',
						title: 'Done',
						class: 'primary'
					}
				],
				body: html
			});

			$('#textarea-generated-code').val("$('#image-map-pro-container').imageMapPro("+ JSON.stringify(editor.getCompressedSettings()) +");");
		}
		if (buttonName == 'activate') {
			var html = '<div class="wcp-editor-form-control">';
			html += '<label>Purchase Code <a href="https://help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code-" target="_blank"><i class="fa fa-question-circle" aria-hidden="true" data-wcp-tooltip="Trouble finding your purchase code?" data-wcp-tooltip-position="right"></i></a></label>';
			html += '<input type="text" id="input-purchase-code">'
			html += '</div>';

			$.wcpEditorPresentModal({
				name: 'activate',
				title: 'Activate',
				buttons: [
					{
						name: 'cancel',
						title: 'Cancel',
						class: 'default'
					},
					{
						name: 'activate',
						title: 'Activate',
						class: 'primary'
					}
				],
				body: html
			});
		}
		if (buttonName == 'help') {
			$.wcpTourRestart('Image Map Pro Editor Tour');
		}

		// Lite
		if (buttonName == 'purchase') {
            alert("You don't need to purchase this, I already hacked it.");
		}
	}

	// Modal events
	$.wcpEditorEventModalButtonClicked = function(modalName, buttonName) {
		if (modalName == 'create_new') {
			if (buttonName == 'cancel') {
				$.wcpEditorCloseModal();
			}
		}
		if (modalName == 'modal-choose-icon') {
			if (buttonName == 'cancel') {
				$.wcpEditorCloseModal();
			}
		}
		if (modalName == 'load') {
			if (buttonName == 'cancel') {
				$.wcpEditorCloseModal();
			}
		}
		if (modalName == 'confirm-delete-shape') {
			if (buttonName == 'delete') {
				// If the deleted spot was selected, deselect it
				if (settings.editor.selected_shape == settings.spots[indexOfShapeToDelete].id) {
					editor.deselectSpot();
				}

				settings.spots.splice(indexOfShapeToDelete, 1);

				$.wcpEditorCloseModal();

				editor.redraw();
				editor.addAction();
			}
			if (buttonName == 'cancel') {
				$.wcpEditorCloseModal();
			}
		}
		if (modalName == 'code') {
			if (buttonName == 'done') {
				$.wcpEditorCloseModal();
			}
		}
		if (modalName == 'export') {
			if (buttonName == 'cancel') {
				$.wcpEditorCloseModal();
			}
		}
		if (modalName == 'import') {
			if (buttonName == 'cancel') {
				$.wcpEditorCloseModal();
			}
		}
		if (modalName == 'error-saving') {
			if (buttonName == 'done') {
				$.wcpEditorCloseModal();
			}
		}
		if (modalName == 'activate') {
			if (buttonName == 'cancel') {
				$.wcpEditorCloseModal();
			}
			if (buttonName == 'activate') {
				$.wcpEditorCloseModal();
				$.wcpEditorPresentLoadingScreen('Validating Purchase Code...');

				if ($.wcpValidatePurchaseCode) {
					$.wcpValidatePurchaseCode($('#input-purchase-code').val(), function(success, errorMessage) {
						if (success) {
							$.wcpEditorHideLoadingScreenWithMessage('Success!', false, false);

							$.wcpEditorHideExtraMainButton('activate');
						} else {
							$.wcpEditorHideLoadingScreenWithMessage('Failed to validate your purchase code.', true, false);
						}
					});
				} else {
					$.wcpEditorHideLoadingScreenWithMessage('Failed to validate your purchase code.</div>', true, true);
				}
			}
		}
		if (modalName == 'confirm-rename-shape') {
			if (buttonName == 'cancel') {
				$.wcpEditorCloseModal();
			}
			if (buttonName == 'rename') {
				var newTitle = $('#input-shape-name').val();

			// Validate new title, it must be unique
			if (newTitle.length == 0) {
				$('#rename-shape-error').show().html('Please enter a new name for the shape, or press Cancel.');
				return;
			}

			var shapeTitleExists = false;
			for (var i=0; i<settings.spots.length; i++) {
				if (settings.spots[i].title == newTitle && settings.spots[i].id != editor.selectedSpot.id) {
					shapeTitleExists = true;
					break;
				}
			}

			if (shapeTitleExists || newTitle.length == 0) {
				$('#rename-shape-error').show().html('A shape with this name already exists!');
				return;
			}

			// Rename
			editor.selectedSpot.title = newTitle;

			// Close modal
			$.wcpEditorCloseModal();
			editor.redraw();
			}
		}
	}
	$.wcpEditorEventModalClosed = function(modalName) {}

	// Create new event
	$.wcpEditorEventCreatedNewInstance = function(instanceName) {
		settings = $.extend(true, {}, default_settings);

		settings.id = Math.round(Math.random() * 10000) + 1;
		settings.general.name = instanceName;

		$.wcpEditorPresentLoadingScreen('Creating...');

		$.imp_editor_storage_store_save(editor.getCompressedSettings(), function() {
			$.imp_editor_storage_set_last_save(settings.id, function() {
				// Launch editor
				editor.launch();

				$.wcpEditorHideLoadingScreenWithMessage('Created!', false, false);
			});
		});
	}

	// Event for loading a save
	$.wcpEditorEventLoadSaveWithID = function(saveID) {
		$.wcpEditorPresentLoadingScreen('Loading Image Map...');

		$.imp_editor_storage_get_save(saveID, function(save) {
			if (!save) {
				$.wcpEditorHideLoadingScreenWithMessage('Error loading image map.', true, false);
			} else {
				settings = save;

				$.imp_editor_storage_set_last_save(settings.id, function() {
					$.wcpEditorHideLoadingScreen();
					editor.launch();
				});
			}
		});
	}

	// Event for deleting a save
	$.wcpEditorEventDeleteSaveWithID = function(saveID, cb) {
		$.imp_editor_storage_delete_save(saveID, function() {
			cb();
		});
	}

	// Event for importing
	$.wcpEditorEventImportedJSON = function(parsedJSON) {
		// Preserve the map name and ID to avoid conflicts
		var mapName = settings.general.name;
		var mapID = settings.id;

		// Set the settings
		settings = $.extend(true, {}, parsedJSON);

		// Set the map name
		settings.general.name = mapName;
		settings.id = mapID;

		editor.launch();
	}

	// Event for help button
	$.wcpEditorEventHelpButtonPressed = function() {
		
	}

	// CONTROLS API ============================================================
	$.wcpEditorSliderStartedDragging = function() {
		sliderDragging = true;
	}
	$.wcpEditorSliderFinishedDragging = function() {
		sliderDragging = false;
	}

	// IMAGE MAP PRO EDITOR API ================================================

	$.image_map_pro_default_spot_settings = function() {
		return default_spot_settings;
	}

	$.image_map_pro_init_editor = function(initSettings, wcpEditorSettings) {
		editor = new Editor();
		editor.init(initSettings, wcpEditorSettings);
	}

	$.image_map_pro_editor_current_settings = function() {
		return settings;
	}

	$.image_map_pro_editor_compressed_settings = function() {
		return editor.getCompressedSettings();
	}

	$.image_map_pro_user_uploaded_image = function() {}


	// EDITOR CLASS ============================================================

	function Editor() {
		this.wcpEditorSettings = undefined;

		// undo/redo
		this.actionStack = new Array();
		this.actionIndex = 0;

		// canvas
		this.canvasImage = new Image();
		this.canvasWidth = 0;
		this.canvasHeight = 0;
		this.canvas = undefined;

		this.ix = 0; // in pixels, canvas space
		this.iy = 0;
		this.x = 0; // in pixels, canvas space
		this.y = 0;
		this.dx = 0; // in percentage, canvas space
		this.dy = 0;

		// screen space, pixels
		this.ixss = 0;
		this.iyss = 0;
		this.xss = 0;
		this.yss = 0;
		this.dxss = 0;
		this.dyss = 0;

		this.drawRectWidth = 0;
		this.drawRectHeight = 0;

		this.transformX = 0;
		this.transformY = 0;
		this.transformWidth = 0;
		this.transformHeight = 0;

		this.eventSpotId = undefined;
		this.redrawEl = undefined;
		this.redrawSvgEl = undefined;
		this.redrawPolygonEl = undefined;

		this.tempControlPoint = undefined;
		this.tempControlPointLine = undefined;
		this.tempControlPointIndex = undefined;

		this.controlPointInsertionPointX = 0;
		this.controlPointInsertionPointY = 0;

		this.translatedPointIndex = 0;
		this.translatedPoint = undefined;

		this.translatedPointX = 0;
		this.translatedPointY = 0;

		this.polyPoints = new Array();

		this.canvasInitialX = 0;
		this.canvasInitialY = 0;

		// flags
		this.startedSelecting = false;
		this.startedMoving = false;
		this.startedTransforming = false;
		this.didTransforming = false;
		this.transformDirection = 0;

		this.startedDrawingSpot = false;

		this.startedDrawingRect = false;
		this.createdDrawingRect = false;

		this.startedDrawingOval = false;
		this.createdDrawingOval = false;

		this.startedDrawingPoly = false;
		this.drawingPoly = false;
		this.finishedDrawingPoly = false;
		this.mouseDownWhileDrawingPoly = false;

		this.startedTranslatingControlPoint = false;
		this.translatingControlPoint = false;

		this.didDeleteControlPoint = false;

		this.shouldDeselectShape = false;

		this.ctrlKeyDown = false;
		this.altKeyDown = false;
		this.shiftKeyDown = false;
		this.spaceKeyDown = false;
		this.commandKeyDown = false;

		this.draggingCanvas = false;

		// vars
		this.selectedSpot = undefined;
		this.eventSpot = undefined;
		this.shapesFormSpotIndex = undefined;
		this.iconsHTML = undefined;

		this.zoom = 1;
		this.canvasX = 0;
		this.canvasY = 0;
	}
	Editor.prototype.init = function(initSettings, wcpEditorSettings) {
		var self = this;

		// events & other
		self.events();
		self.loadIconLibrary();

		// Initialize the editor
		self.wcpEditorSettings = wcpEditorSettings;
		settings = $.extend(true, {}, default_settings);
		$.wcpEditorInit(this.wcpEditorSettings);

		// If settings were passed with initialization, use them and don't look for saves
		if (initSettings) {
			settings = initSettings;

			// launch
			self.launch();
		} else {
			// Load last save
			$.imp_editor_storage_get_last_save(function(lastSaveID) {
				if (lastSaveID && parseInt(lastSaveID, 10) != 0 && !isNaN(parseInt(lastSaveID, 10))) {
					$.wcpEditorPresentLoadingScreen('Loading Image Map...');
					$.imp_editor_storage_get_save(parseInt(lastSaveID, 10), function(save) {
						if (!save) {
							$.wcpEditorHideLoadingScreenWithMessage('Error loading image map.', true, false);
						} else {
							settings = save;
							editor.launch();
						}
					});
				} else {
					// Present guided tour
					if (!$.wcpTourIsFinished('Image Map Pro Editor Tour')) {
						$.wcpTourStart('Image Map Pro Editor Tour');
					} else {
						// Get a list of saves
						$.imp_editor_storage_get_saves_list(function(savesList) {
							if (savesList.length > 0) {
								// Launch with defaults
								settings = $.extend(true, {}, default_settings);
								settings.general.name = 'Untitled';
								settings.id = Math.round(Math.random() * 10000) + 1;
								self.launch();

								// Display saves modal
								$.wcpEditorPresentLoadModal();
							} else {
								// If no saves are available, launch with default settings
								settings = $.extend(true, {}, default_settings);
								settings.general.name = 'Untitled';
								settings.id = Math.round(Math.random() * 10000) + 1;
								self.launch();
							}
						});
					}
				}
			});
		}
	};
	Editor.prototype.launch = function() {
		var self = this;

		// Initialize the editor
		$.wcpEditorInit(this.wcpEditorSettings);

		// Set the canvas object type
		$('#wcp-editor-canvas').attr('data-editor-object-type', '0');

		// Reset vars
		this.selectedSpot = undefined;
		this.eventSpot = undefined;
		this.shapesFormSpotIndex = undefined;

		this.parseSettings();

		// If there is an image URL entered, show the loader and start redraw
		if (settings.image.url && settings.image.url.length > 0) {
			self.canvasImage.src = settings.image.url;

			loadImage(self.canvasImage, function() {
				// Image is loading
				// Show loader
				$.wcpEditorPresentLoadingScreen('Loading Image...');
			}, function() {
				// Image has loaded
				// Hide loader

				// init canvas events
				self.canvas_events();

				settings.general.naturalWidth = self.canvasImage.naturalWidth;
				settings.general.naturalHeight = self.canvasImage.naturalHeight;

				settings.editor.state = {
					dragging: false,
					canvasX: 0,
					canvasY: 0,
					canvasZoom: 1
				};

				self.redraw();
				self.selectSpot(settings.editor.selected_shape);

				$.wcpEditorHideLoadingScreen();

				setTimeout(function() {
					$.imageMapProLiteLaunchBanner();
				}, 0);
			}, function() {
				$.wcpEditorHideLoadingScreenWithMessage('Error Loading Image!', true, false);
			});
		} else {
			$.wcpEditorHideLoadingScreen();
			$.wcpEditorOpenMainTabWithName('Image Map');
			$.wcpEditorFormOpenTab('Image Map Settings', 'image');
		}

		// Variables
		this.actionIndex = -1;
		this.actionStack = new Array();
		this.addAction();
		this.canvas = $('#wcp-editor-canvas');

		// Select the active tool
		$.wcpEditorSelectTool(settings.editor.tool);

		// Init general settings form
		this.updateImageMapForm();
	}
	Editor.prototype.parseSettings = function() {
		// Make sure spot coordinates are numbers
		for (var i=0; i<settings.spots.length; i++) {
			var s = settings.spots[i];

			s.x = parseFloat(s.x);
			s.y = parseFloat(s.y);

			if (s.width) {
				s.width = parseFloat(s.width);
			}
			if (s.height) {
				s.height = parseFloat(s.height);
			}

			if (s.type == 'poly') {
				if (s.points) {
					for (var j=0; j<s.points.length; j++) {
						s.points[j].x = parseFloat(s.points[j].x);
						s.points[j].y = parseFloat(s.points[j].y);
					}
				}
				if (s.vs) {
					for (var j=0; j<s.vs.length; j++) {
						for (var k=0; k<s.vs[j].length; k++) {
							s.vs[j][0] = parseFloat(s.vs[j][0]);
							s.vs[j][1] = parseFloat(s.vs[j][1]);
						}
					}
				}
			}
		}

		// Uncompress and update legacy spot options
		for (var i=0; i<settings.spots.length; i++) {
			settings.spots[i] = $.extend(true, {}, default_spot_settings, settings.spots[i]);

			// Migrate the title and text to the plain_text setting
			if (settings.spots[i].tooltip_content.title || settings.spots[i].tooltip_content.text) {
				var plainText = '';

				if (settings.spots[i].tooltip_content.title) {
					plainText += '<h3>' + settings.spots[i].tooltip_content.title + '</h3>';
				}
				if (settings.spots[i].tooltip_content.text) {
					plainText += '<p>' + settings.spots[i].tooltip_content.text + '</p>';
				}

				settings.spots[i].tooltip_content.plain_text = plainText;

				settings.spots[i].tooltip_content = {
					content_type: settings.spots[i].tooltip_content.content_type,
					plain_text: settings.spots[i].tooltip_content.plain_text,
					plain_text_color: settings.spots[i].tooltip_content.plain_text_color,
					squares_json: settings.spots[i].tooltip_content.squares_json
				};
			}

			// Migrate squares_json to squares_settings
			if (settings.spots[i].tooltip_content.squares_json) {
				try {
					settings.spots[i].tooltip_content.squares_settings = JSON.parse(settings.spots[i].tooltip_content.squares_json);
					settings.spots[i].tooltip_content.squares_json = '';
				} catch (err) {
					// console.log('Failed to parse JSON for spot ' + settings.spots[i].id + ':');
					// console.log(settings.spots[i].tooltip_content.squares_json);
				}
			}

			// Create a "title" for each spot that doesn't have one
			if (!settings.spots[i].title) {
				settings.spots[i].title = settings.spots[i].id;
			}
		}

		// Update legacy general options
		settings.general = $.extend(true, {}, default_settings.general, settings.general);
		settings.image = $.extend(true, {}, default_settings.image, settings.image);
		settings.tooltips = $.extend(true, {}, default_settings.tooltips, settings.tooltips);
		settings.fullscreen = $.extend(true, {}, default_settings.fullscreen, settings.fullscreen);
		settings.editor = $.extend(true, {}, default_settings.editor, settings.editor);
		settings.custom_code = $.extend(true, {}, default_settings.custom_code, settings.custom_code);

		settings.general.width = parseInt(settings.general.width);
		settings.general.height = parseInt(settings.general.height);

		// 3.1.0 - Reorganize "general" settings
		if (settings.general.image_url) {
			settings.image.url = settings.general.image_url;
			settings.general.image_url = undefined;
		}
		if (settings.general.sticky_tooltips) {
			settings.tooltips.sticky_tooltips = settings.general.sticky_tooltips;
			settings.general.sticky_tooltips = undefined;
		}
		if (settings.general.constrain_tooltips) {
			settings.tooltips.constrain_tooltips = settings.general.constrain_tooltips;
			settings.general.constrain_tooltips = undefined;
		}
		if (settings.general.fullscreen_tooltips) {
			settings.tooltips.fullscreen_tooltips = settings.general.fullscreen_tooltips;
			settings.general.fullscreen_tooltips = undefined;
		}
		if (settings.general.tooltip_animation) {
			settings.tooltips.tooltip_animation = settings.general.tooltip_animation;
			settings.general.tooltip_animation = undefined;
		}

		// Add squares settings for objects that don't have them
		for (var i=0; i<settings.spots.length; i++) {
			if (!settings.spots[i].tooltip_content.squares_settings) {
				settings.spots[i].tooltip_content.squares_settings = $.extend(true, {}, default_spot_settings.tooltip_content.squares_settings);
			}
		}

		// Move the old imageurl property to settings.image.url
		if (settings.general.imageurl) {
			settings.image.url = settings.general.imageurl;
		}

		// Trim whitespaces of the image map name and shortcode
		settings.general.name = settings.general.name.trim();
		settings.general.shortcode = settings.general.shortcode.trim();
	}
	Editor.prototype.redraw = function() {
		var self = this;

		// Calculate canvas dimensions
		var size = self.getCanvasDefaultSize();

		self.canvasWidth = size.w * self.zoom;
		self.canvasHeight = size.h * self.zoom;

		// Set the size of the canvas
		$('#wcp-editor-canvas').css({
			width: self.canvasWidth,
			height: self.canvasHeight
		});

		if (parseInt(settings.editor.previewMode, 10) == 0) {
			// Edit mode
			// Redraw editor
			$('#wcp-editor-canvas').html($.image_map_pro_editor_content());
			
			$('#imp-editor-image').css({
				width: self.canvasWidth,
				height: self.canvasHeight
			});

			$.wcpEditorSetPreviewModeOff();
		} else {
			// Preview mode
			// Redraw plugin

			// Modify settings for the editor only
			var clonedSettings = $.extend(true, {}, settings);
			clonedSettings.fullscreen.start_in_fullscreen_mode = false;
			$('#wcp-editor-canvas').imageMapPro(clonedSettings);

			// Reset zoom
			if (this.zoom != 1) {
				self.zoomReset();
			}

			// Update UI
			$.wcpEditorSetPreviewModeOn();
		}

		// Redraw spot selection in canvas
		self.redrawSpotSelection();

		// Update shapes form values
		self.updateShapesForm();

		// Update the state of the form
		this.updateShapesFormState();

		// Update Shapes list
		self.updateShapesList();

		// Update state of the general form
		self.updateImageMapFormState();

		// Redraw temp poly if user is currently drawing a polygon
		if (self.drawingPoly) {
			self.redrawTempPoly();
		}
	}
	Editor.prototype.redrawCanvas = function() {
		this.canvas.css({ transform: 'translate('+ this.canvasX +'px, '+ this.canvasY +'px)' });
	}
	Editor.prototype.getCanvasDefaultSize = function() {
		var size = { w: 0, h: 0 };

		// Calculate canvas dimentions
		var canvasBackgroundWidth = $('#wcp-editor-center').width() - 80;
		var canvasBackgroundHeight = $('#wcp-editor-center').height() - 80;

		if (settings.general.width > canvasBackgroundWidth || settings.general.height > canvasBackgroundHeight) {
			// Canvas needs to be resized to fit the editor's background
			var imageRatio = settings.general.width / settings.general.height;
			var backgroundRatio = canvasBackgroundWidth / canvasBackgroundHeight;

			if (imageRatio <= backgroundRatio) {
				// Fit to height
				size.w = canvasBackgroundHeight * imageRatio;
				size.h = $('#wcp-editor-center').height() - 80;
			} else {
				// Fit to width
				size.w = $('#wcp-editor-center').width() - 80;
				size.h = canvasBackgroundWidth/imageRatio;
			}
		} else {
			// Canvas does not need to be resized
			size.w = settings.general.width;
			size.h = settings.general.height;
		}

		return size;
	}
	Editor.prototype.redrawSpotSelection = function() {
		var self = this;

		// deselect
		$('.imp-editor-shape').removeClass('selected');

		// select
		if (settings.editor.selected_shape != -1) {
			// set a reference to the selected spot
			var i = self.getIndexOfSpotWithId(settings.editor.selected_shape);

			// No such spot found
			if (i == undefined) {
				settings.editor.selected_shape = -1;
				return;
			}

			$('.imp-editor-shape[data-id="'+ settings.editor.selected_shape +'"]').addClass('selected');

			self.selectedSpot = settings.spots[i];

			// Save a reference to the SVG if it's a poly for quick redraw
			if (self.selectedSpot.type == 'poly') {
				self.tempControlPoint = $('.imp-editor-poly[data-id="'+ settings.editor.selected_shape +'"]').find('.imp-editor-poly-svg-temp-control-point');
				self.tempControlPointLine = $('.imp-editor-poly[data-id="'+ settings.editor.selected_shape +'"]').find('.imp-editor-poly-svg-temp-control-point-line');
			}
		} else {
			self.selectedSpot = undefined;
		}
	}

	Editor.prototype.events = function() {
		var self = this;

		// Button Controls events
		$(document).off('button-choose-icon-clicked');
		$(document).on('button-choose-icon-clicked', function() {
			$.wcpEditorPresentModal({
				name: 'modal-choose-icon',
				title: 'Choose Icon',
				buttons: [
					{
						name: 'cancel',
						title: 'Cancel',
						class: 'default',
						id: 'imp-editor-button-cancel-choose-icon'
					},
				],
				body: self.iconsHTML
			});
		});

		// Copy styles from default to mouseover
		$(document).off('button-copy-from-default-styles-clicked');
		$(document).on('button-copy-from-default-styles-clicked', function() {
			self.selectedSpot.mouseover_style.opacity = self.selectedSpot.default_style.opacity;
			self.selectedSpot.mouseover_style.border_radius = self.selectedSpot.default_style.border_radius;
			self.selectedSpot.mouseover_style.background_color = self.selectedSpot.default_style.background_color;
			self.selectedSpot.mouseover_style.background_opacity = self.selectedSpot.default_style.background_opacity;
			self.selectedSpot.mouseover_style.border_width = self.selectedSpot.default_style.border_width;
			self.selectedSpot.mouseover_style.border_style = self.selectedSpot.default_style.border_style;
			self.selectedSpot.mouseover_style.border_color = self.selectedSpot.default_style.border_color;
			self.selectedSpot.mouseover_style.border_opacity = self.selectedSpot.default_style.border_opacity;

			self.selectedSpot.mouseover_style.fill = self.selectedSpot.default_style.fill;
			self.selectedSpot.mouseover_style.fill_opacity = self.selectedSpot.default_style.fill_opacity;
			self.selectedSpot.mouseover_style.stroke_color = self.selectedSpot.default_style.stroke_color;
			self.selectedSpot.mouseover_style.stroke_opacity = self.selectedSpot.default_style.stroke_opacity;
			self.selectedSpot.mouseover_style.stroke_width = self.selectedSpot.default_style.stroke_width;
			self.selectedSpot.mouseover_style.stroke_dasharray = self.selectedSpot.default_style.stroke_dasharray;
			self.selectedSpot.mouseover_style.stroke_linecap = self.selectedSpot.default_style.stroke_linecap;

			self.selectedSpot.mouseover_style.icon_fill = self.selectedSpot.default_style.icon_fill;

			self.redraw();
			self.addAction();
		});

		// Reset original image size
		$(document).off('button-reset-size-clicked');
		$(document).on('button-reset-size-clicked', function() {
			settings.general.width = self.canvasImage.naturalWidth;
			settings.general.height = self.canvasImage.naturalHeight;
			self.updateImageMapForm();
			self.redraw();
		});

		// Launch content builder
		// $(document).off('button-launch-content-builder-clicked');
		// $(document).on('button-launch-content-builder-clicked', function() {

		// 	// Lite
		// 	// $.imageMapProLiteLaunchPremiumWindow();
		// 	self.launchTooltipContentBuilder();
		// });

        $(document).off('click', '#wcp-editor-form-control-launch_content_builder');
        $(document).on('click', '#wcp-editor-form-control-launch_content_builder', function() {
            console.log($(this));
            localStorage.setItem('textAreaHtmlId', $(this).parent().find('textarea').attr('id'));
            console.log(localStorage.getItem('textAreaHtmlId'));
            // Lite
            // $.imageMapProLiteLaunchPremiumWindow();
            self.launchTooltipContentBuilder();
        });
		// Choose Icon modal events
		$(document).off('click', '.imp-spot-icon');
		$(document).on('click', '.imp-spot-icon', function() {
			$.wcpEditorCloseModal();
			self.selectedSpot.default_style.icon_svg_path = $(this).data('path');
			self.selectedSpot.default_style.icon_svg_viewbox = $(this).data('viewbox');
			self.redraw();
			self.addAction();
		});

		// Tooltip content builder done event
		$(document).off('click', '#imp-editor-done-editing-tooltip, #imp-editor-tooltip-content-builder-close');
		$(document).on('click', '#imp-editor-done-editing-tooltip, #imp-editor-tooltip-content-builder-close', function() {
			$('#imp-editor-tooltip-content-builder-wrap').removeClass('imp-visible');

			setTimeout(function() {
				$('#imp-editor-tooltip-content-builder-wrap').hide();
			}, 250);

			self.doneEditingTooltip();
			$.squaresHideEditorWindow();
		});

        $(document).off('click', '#imp-editor-done-editing-tooltip');
        jQuery(document).on('click', '#imp-editor-done-editing-tooltip', function() {
            html = $(this).parent().find('.sq-content').html();
            textareaId = localStorage.getItem('textAreaHtmlId');
            console.log(textareaId);
            jQuery('textarea#' + textareaId).val(html);
            console.log(jQuery('#' + textareaId).val());
            // jQue

            $('textarea#' + textareaId).focus();
            $('textarea#' + textareaId).val($('textarea#' + textareaId).val() + 'DELETE THIS ME~KsdQwe~@');

            // $('textarea#' + textareaId).keydown();
            // $('textarea#' + textareaId).keypress();
            // $('textarea#' + textareaId).keyup();

            // var e = $.Event('keypress');
            // e.which = 190;
            // setTimeout(function() {
            //     $('textarea#' + textareaId).trigger(e);
            // }, 500);
            // $('textarea#' + textareaId).blur();
        });
        // jQuery(document).on('click', '.wcp-editor-form-tabs-content-wrap, .wcp-editor-control-button', function() {
        //     console.log($(this));
        // });
	}
	Editor.prototype.canvas_events = function() {
		var self = this;

		$(window).off('resize.imp-redraw');
		$(window).on('resize.imp-redraw', function() {
			self.redraw();
		});

		$(document).off('mousedown', '#wcp-editor-center');
		$(document).on('mousedown', '#wcp-editor-center', function(e) {
			self.handleMouseDown(e);
		});
		$(document).off('mousemove', '#wcp-editor');
		$(document).on('mousemove', '#wcp-editor', function(e) {
			self.handleMouseMove(e);
		});
		$(document).off('mouseup', '#wcp-editor');
		$(document).on('mouseup', '#wcp-editor', function(e) {
			self.handleMouseUp(e);
		});
		$(document).off('keyup.canvasEvents');
		$(document).on('keyup.canvasEvents', function(e) {
			// Abort drawing poly
			if (e.keyCode == 27 && self.drawingPoly) {
				self.drawingPoly = false;
				self.startedDrawingPoly = false;
				self.mouseDownWhileDrawingPoly = false;
				$('#temp-poly').remove();
			}
		});
		// Disable the context menu when deleting control point
		$('body').on('contextmenu', function(e) {
			if (self.didDeleteControlPoint) {
				self.didDeleteControlPoint = false;
				return false;
			}
		});
		// Keyboard shortcuts
		$(document).off('keydown');
		$(document).on('keydown', function(e) {
			if (self.handleKeyDown(e)) {
				return false;
			}

			return true;
		});
		$(document).off('keyup');
		$(document).on('keyup', function(e) {
			if (self.handleKeyUp(e)) {
				return false;
			}

			return true;
		});
	}
	Editor.prototype.addAction = function() {
		var self = this;
		if (self.actionIndex < self.actionStack.length - 1) {
			self.actionStack.splice(self.actionIndex + 1, self.actionStack.length);
		}

		self.actionStack.push($.extend(true, {}, settings));
		self.actionIndex++;

		if (self.actionStack.length > 100) {
			self.actionStack.splice(0, 1);
			self.actionIndex--;
		}

		$('#button-save').html('<span class="glyphicon glyphicon-hdd"></span> Save');
	}
	Editor.prototype.undo = function() {
		var self = this;
		if (self.actionIndex > 0) {
			self.actionIndex--;
		}

		settings = $.extend(true, {}, self.actionStack[self.actionIndex]);

		self.redraw();

		// to do: Update forms
	}
	Editor.prototype.redo = function() {
		var self = this;
		if (self.actionIndex < self.actionStack.length - 1) {
			self.actionIndex++;
		}

		settings = $.extend(true, {}, self.actionStack[self.actionIndex]);

		self.redraw();

		// to do: Update forms
	}
	Editor.prototype.loadIconLibrary = function() {
		var self = this;

		var html = '';
		for (var i=0; i<$.webcraft_icon_library.length; i++) {
			html += '<div class="imp-spot-icon" data-path="'+ $.webcraft_icon_library[i][1] +'" data-viewbox="'+ $.webcraft_icon_library[i][0] +'">';
			html += '   <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="'+ $.webcraft_icon_library[i][0] +'" xml:space="preserve" width="40px" height="40px">';
			html += '       <path style="fill:#000000" d="'+ $.webcraft_icon_library[i][1] +'"></path>';
			html += '   </svg>';
			html += '</div>';
		}

		// $('#imp-spot-icons-container').html(html);
		this.iconsHTML = html;
	}

	Editor.prototype.handleMouseDown = function(e) {
		var self = this;

		// If the event occurred on a UI element of the editor, ignore event
		if ($(e.target).attr('id') == 'wcp-editor-toolbar' || $(e.target).closest('#wcp-editor-toolbar').length == 1) {
			return;
		}
		if ($(e.target).attr('id') == 'wcp-editor-extra-main-buttons' || $(e.target).closest('#wcp-editor-extra-main-buttons').length == 1) {
			return;
		}

		// If user clicked on a tooltip close button, ignore
		if ($(e.target).attr('id') == 'imp-poly-tooltip-close-button') {
			return;
		}

		// === If preview mode, return
		if (parseInt(settings.editor.previewMode, 10) == 1) return;

		// === If a modal is open, ignore
		// to do: Add this class to WCPEditor
		if ($('body').hasClass('modal-open')) return;

		// Convert the screen coords to canvas coords
		var point = screenToCanvasSpace(e.pageX, e.pageY, self.canvas);

		// Record the coords for later use
		self.ix = point.x;
		self.iy = point.y;

		self.ixss = e.pageX;
		self.iyss = e.pageY;

		// Commonly used checks
		var isEventInsideCanvas = false;
		if (point.x > 0 && point.x < self.canvasWidth * self.zoom && point.y > 0 && point.y < self.canvasHeight * self.zoom) {
			isEventInsideCanvas = true;
		}

		// Which object is below the mouse
		var objectType = $(e.target).data('editor-object-type') || $(e.target).closest('[data-editor-object-type]').data('editor-object-type')
		
		// === Space bar down or drag tool active?
		if ((self.spaceKeyDown || settings.editor.tool == EDITOR_TOOL_DRAG_CANVAS) && isEventInsideCanvas) {
			self.draggingCanvas = true;

			self.canvasInitialX = self.canvasX;
			self.canvasInitialY = self.canvasY;

			return;
		}

		// === Zoom in active?
		if (settings.editor.tool == EDITOR_TOOL_ZOOM_IN && $(e.target).attr('id') != 'wcp-editor-center') {
			self.zoomIn(e);

			// Deselect shapes
			this.shouldDeselectShape = true;

			return;
		}

		// === Zoom out active?
		if (settings.editor.tool == EDITOR_TOOL_ZOOM_OUT && $(e.target).attr('id') != 'wcp-editor-center') {
			self.zoomOut(e);

			// Deselect shapes
			this.shouldDeselectShape = true;

			return;
		}

		// === Drawing a poly?
		if (self.drawingPoly) {
			// close the loop
			if ($(e.target).is('circle') && $(e.target).data('index') == 0) {
				self.drawingPoly = false;
				self.finishedDrawingPoly = true;
				return;
			}

			// or create a new point
			self.placePointForTempPoly(self.ix, self.iy);
			self.redrawTempPoly();
			self.mouseDownWhileDrawingPoly = true;

			return;
		}

		// === Canvas drag active?
		if (settings.editor.tool == EDITOR_TOOL_DRAG_CANVAS && $(e.target).attr('id') != 'wcp-editor-center') {
			self.startedDraggingCanvas = true;

			// Deselect shapes
			this.shouldDeselectShape = true;

			return;
		}

		// === Did user click on a control point?
		if (objectType == EDITOR_OBJECT_TYPE_POLY_POINT) {
			$(e.target).addClass('active');

			self.translatedPointIndex = $(e.target).data('index');

			if (e.button == 2) {
				// Remove the control point
				self.selectedSpot.points.splice(self.translatedPointIndex, 1);
				self.updateBoundingBoxForPolygonSpot(self.selectedSpot);
				self.redraw();
				self.addAction();
				self.didDeleteControlPoint = true;
				return;
			}

			self.translatingControlPoint = true;

			self.translatedPointX = self.selectedSpot.points[self.translatedPointIndex].x;
			self.translatedPointY = self.selectedSpot.points[self.translatedPointIndex].y;

			// Cache
			self.translatedPoint = $(e.target);
			self.redrawPolygonEl = $(e.target).closest('.imp-editor-shape').find('.imp-editor-poly-svg polygon');

			return;
		}

		// === Did user click on a poly line?
		if (objectType == EDITOR_OBJECT_TYPE_POLY_LINE) {
			self.selectedSpot.points.splice(self.tempControlPointIndex + 1, 0, { x: self.controlPointInsertionPointX, y: self.controlPointInsertionPointY });
			self.redraw();

			// Same code as from the "click on control point action"
			var point = $('.imp-editor-shape[data-id="'+ self.selectedSpot.id +'"]').find('.imp-poly-control-point[data-index="'+ (self.tempControlPointIndex+1) +'"]');
			point.addClass('active');

			self.translatedPointIndex = point.data('index');
			self.translatingControlPoint = true;

			self.translatedPointX = self.selectedSpot.points[self.translatedPointIndex].x;
			self.translatedPointY = self.selectedSpot.points[self.translatedPointIndex].y;

			// Cache
			self.translatedPoint = point;
			self.redrawPolygonEl = point.closest('.imp-editor-shape').find('.imp-editor-poly-svg polygon');

			return;
		}

		// === Did the event happen on a transform box?
		if (objectType == EDITOR_OBJECT_TYPE_TRANSFORM_GIZMO) {
			self.startedTransforming = true;
			self.transformDirection = $(e.target).data('transform-direction');
			self.redrawEl = $(e.target).closest('.imp-editor-shape');

			if (self.selectedSpot.type == 'poly') {
				// Reference for quick redrawing
				self.redrawSvgEl = self.redrawEl.find('.imp-editor-poly-svg');
				self.redrawPolygonEl = self.redrawSvgEl.find('polygon');

				// Save the original coordinates of the poly's points
				self.polyPoints = new Array();
				for (var i=0; i<self.selectedSpot.points.length; i++) {
					self.polyPoints.push({
						x: self.selectedSpot.points[i].x,
						y: self.selectedSpot.points[i].y
					});
				}
			}

			return;
		}

		// === Did user try to select a polygon?
		for (var i=settings.spots.length - 1; i>=0; i--) {
			if (settings.spots[i].type != 'poly') continue;

			if (self.shouldSelectPoly(settings.spots[i].id)) {
				self.eventSpotId = settings.spots[i].id;
				self.startedSelecting = true;
				return;
			}
		}

		// === Did the event happen on a spot?
		if ($(e.target).hasClass('imp-editor-shape') || $(e.target).closest('.imp-editor-shape').length > 0) {
			// Make sure it's not a polygon
			if (!$(e.target).hasClass('imp-editor-poly') && $(e.target).closest('.imp-editor-poly').length == 0) {
				self.eventSpotId = $(e.target).data('id') || $(e.target).closest('.imp-editor-shape').data('id');
				self.startedSelecting = true;
				return;
			}
		}

		// === Create spots
		// === If the event is outside canvas, ignore
		
		if (isEventInsideCanvas) {
			// Spot tool
			if (settings.editor.tool == EDITOR_TOOL_SPOT) {
				self.startedDrawingSpot = true;
				return;
			}

			// Rect tool
			if (settings.editor.tool == EDITOR_TOOL_RECT) {
				self.startedDrawingRect = true;
				return;
			}

			// Ellipse tool
			if (settings.editor.tool == EDITOR_TOOL_OVAL) {
				self.startedDrawingOval = true;
				return;
			}

			// Poly tool
			if (settings.editor.tool == EDITOR_TOOL_POLY) {
				self.startedDrawingPoly = true;

				// deselect and redraw
				self.deselectSpot();
				self.redraw();

				// create a temp array of points
				self.polyPoints = new Array();

				// create a temp poly
				$('#imp-editor-shapes-container').append('<svg id="temp-poly" width="'+ self.canvasWidth +'px" height="'+ self.canvasHeight +'px" viewBox="0 0 '+ self.canvasWidth +' '+ self.canvasHeight +'" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>')

				// place the first point
				self.placePointForTempPoly(self.ix, self.iy);
				self.redrawTempPoly();
				self.mouseDownWhileDrawingPoly = true;

				self.drawingPoly = true;
				return;
			}
		}

		// If SELECT tool is active and user clicked the canvas, deselect shape
		if (settings.editor.tool == EDITOR_TOOL_SELECT && objectType == EDITOR_OBJECT_TYPE_CANVAS) {
			this.shouldDeselectShape = true;
			return;
		}

		// If event happened outside the canvas, set the flag to deselect shape
		if ($(e.target).attr('id') == 'wcp-editor-center' && this.selectedSpot) {
			this.shouldDeselectShape = true;
			return;
		}
	}
	Editor.prototype.handleMouseMove = function(e) {
		var self = this;

		// === If preview mode, return
		if (parseInt(settings.editor.previewMode, 10) == 1) return;

		// Canvas space coords
		var point = screenToCanvasSpace(e.pageX, e.pageY, self.canvas);

		self.x = point.x;
		self.y = point.y;

		self.dx = ((self.x - self.ix)/self.canvasWidth) * 100;
		self.dy = ((self.y - self.iy)/self.canvasHeight) * 100;

		self.dx = Math.round(self.dx * 1000) / 1000;
		self.dy = Math.round(self.dy * 1000) / 1000;

		// Screen space coords
		self.xss = e.pageX;
		self.yss = e.pageY;

		self.dxss = self.xss - self.ixss;
		self.dyss = self.yss - self.iyss;

		// Drag canvas
		if (self.draggingCanvas) {
			var x = self.canvasInitialX + self.dxss;
			var y = self.canvasInitialY + self.dyss;

			self.canvasX = self.canvasInitialX + self.dxss;
			self.canvasY = self.canvasInitialY + self.dyss;

			self.redrawCanvas();
		}

		// Select
		if (self.startedSelecting) {
			self.selectSpot(self.eventSpotId);
			self.redrawEl = $('.imp-editor-shape[data-id="'+ self.eventSpotId +'"]');

			// Manually select the spot
			self.redrawSpotSelection();

			self.startedMoving = true;
			self.startedSelecting = false;
		}

		// Move
		if (self.startedMoving) {
			var c = limitToCanvas(self.selectedSpot.x + self.dx, self.selectedSpot.y + self.dy);

			if (self.selectedSpot.type == 'rect' || self.selectedSpot.type == 'oval' || self.selectedSpot.type == 'poly') {
				if (c.x + self.selectedSpot.width > 100) {
					c.x = 100 - self.selectedSpot.width;
				}
				if (c.y + self.selectedSpot.height > 100) {
					c.y = 100 - self.selectedSpot.height;
				}
			}

			self.redrawEl.css({
				left: c.x + '%',
				top: c.y + '%'
			});

			return;
		}

		// Transform
		if (self.startedTransforming) {
			self.didTransform = true;
			var c, d;

			if (self.transformDirection == 1) {
				c = { x: self.selectedSpot.x + self.dx, y: self.selectedSpot.y + self.dy };
				d = { x: self.selectedSpot.width - self.dx, y: self.selectedSpot.height - self.dy };
			}
			if (self.transformDirection == 2) {
				c = { x: self.selectedSpot.x, y: self.selectedSpot.y + self.dy };
				d = { x: self.selectedSpot.width, y: self.selectedSpot.height - self.dy };
			}
			if (self.transformDirection == 3) {
				c = { x: self.selectedSpot.x, y: self.selectedSpot.y + self.dy };
				d = { x: self.selectedSpot.width + self.dx, y: self.selectedSpot.height - self.dy };
			}
			if (self.transformDirection == 4) {
				c = { x: self.selectedSpot.x, y: self.selectedSpot.y };
				d = { x: self.selectedSpot.width + self.dx, y: self.selectedSpot.height };
			}
			if (self.transformDirection == 5) {
				c = { x: self.selectedSpot.x, y: self.selectedSpot.y };
				d = { x: self.selectedSpot.width + self.dx, y: self.selectedSpot.height + self.dy };
			}
			if (self.transformDirection == 6) {
				c = { x: self.selectedSpot.x, y: self.selectedSpot.y };
				d = { x: self.selectedSpot.width, y: self.selectedSpot.height + self.dy };
			}
			if (self.transformDirection == 7) {
				c = { x: self.selectedSpot.x + self.dx, y: self.selectedSpot.y };
				d = { x: self.selectedSpot.width - self.dx, y: self.selectedSpot.height + self.dy };
			}
			if (self.transformDirection == 8) {
				c = { x: self.selectedSpot.x + self.dx, y: self.selectedSpot.y };
				d = { x: self.selectedSpot.width - self.dx, y: self.selectedSpot.height };
			}

			// Canvas bounds
			if (c.x < 0) {
				d.x = self.selectedSpot.x + self.selectedSpot.width;
				c.x = 0;
			}
			if (c.y < 0) {
				c.y = 0;
				d.y = self.selectedSpot.y + self.selectedSpot.height;
			}
			if (d.x + c.x > 100) d.x = 100 - c.x;
			if (d.y + c.y > 100) d.y = 100 - c.y;

			// Negative width/height
			if (c.x > self.selectedSpot.x + self.selectedSpot.width) c.x = self.selectedSpot.x + self.selectedSpot.width;
			if (c.y > self.selectedSpot.y + self.selectedSpot.height) c.y = self.selectedSpot.y + self.selectedSpot.height;
			if (d.x < 0) d.x = 0;
			if (d.y < 0) d.y = 0;

			self.transformX = c.x;
			self.transformY = c.y;
			self.transformWidth = d.x;
			self.transformHeight = d.y;

			self.redrawEl.css({
				left: self.transformX + '%',
				top: self.transformY + '%',
				width: self.transformWidth + '%',
				height: self.transformHeight + '%'
			});

			// Update the SVG viewbox property
			if (self.selectedSpot.type == 'poly') {
				var shapeWidthPx = settings.general.width * (d.x/100);
				var shapeHeightPx = settings.general.height * (d.y/100);
				self.redrawSvgEl[0].setAttribute('viewBox', '0 0 ' + shapeWidthPx + ' ' + shapeHeightPx);

				// Redraw the shape
				var coords = '';
				for (var j=0; j<self.selectedSpot.points.length; j++) {
					var p = self.selectedSpot.points[j];
					var x = self.selectedSpot.default_style.stroke_width + (p.x/100) * (shapeWidthPx - self.selectedSpot.default_style.stroke_width*2);
					var y = self.selectedSpot.default_style.stroke_width + (p.y/100) * (shapeHeightPx - self.selectedSpot.default_style.stroke_width*2);
					coords += x +','+ y +' ';
				}

				self.redrawPolygonEl.attr('points', coords);
			}


			return;
		}

		// Draw rect
		if (self.startedDrawingRect) {
			var point = screenToCanvasSpace(e.pageX, e.pageY, self.canvas);

			if (!self.createdDrawingRect) {
				self.createdDrawingRect = true;

				// create a rect
				self.eventSpot = self.createRect();

				// set position
				self.eventSpot.x = (self.x / self.canvasWidth) * 100;
				self.eventSpot.y = (self.y / self.canvasHeight) * 100;

				self.eventSpot.x = Math.round(self.eventSpot.x * 1000) / 1000;
				self.eventSpot.y = Math.round(self.eventSpot.y * 1000) / 1000;

				// redraw once
				self.redraw();

				self.redrawEl = $('.imp-editor-shape[data-id="'+ self.eventSpot.id +'"]');
			}

			// fast redraw rect
			var d = { x: self.dx, y: self.dy };

			if (self.eventSpot.x + d.x > 100) {
				d.x = 100 - self.eventSpot.x;
			}
			if (self.eventSpot.y + d.y > 100) {
				d.y = 100 - self.eventSpot.y;
			}

			self.drawRectWidth = d.x;
			self.drawRectHeight = d.y;

			if (self.shiftKeyDown) {
				var ratio = self.canvasWidth / self.canvasHeight;
				self.drawRectHeight = self.drawRectWidth * ratio;
			}

			self.redrawEl.css({
				width: self.drawRectWidth + '%',
				height: self.drawRectHeight + '%'
			});

			return;
		}

		// Draw oval
		if (self.startedDrawingOval) {
			var point = screenToCanvasSpace(e.pageX, e.pageY, self.canvas);

			if (!self.createdDrawingOval) {
				self.createdDrawingOval = true;

				// create a rect
				self.eventSpot = self.createOval();

				// set position
				self.eventSpot.x = (self.x / self.canvasWidth) * 100;
				self.eventSpot.y = (self.y / self.canvasHeight) * 100;

				self.eventSpot.x = Math.round(self.eventSpot.x * 1000) / 1000;
				self.eventSpot.y = Math.round(self.eventSpot.y * 1000) / 1000;

				// redraw once
				self.redraw();

				self.redrawEl = $('.imp-editor-shape[data-id="'+ self.eventSpot.id +'"]');
			}

			// fast redraw rect
			var d = { x: self.dx, y: self.dy };

			if (self.eventSpot.x + d.x > 100) {
				d.x = 100 - self.eventSpot.x;
			}
			if (self.eventSpot.y + d.y > 100) {
				d.y = 100 - self.eventSpot.y;
			}

			self.drawRectWidth = d.x;
			self.drawRectHeight = d.y;

			if (self.shiftKeyDown) {
				var ratio = self.canvasWidth / self.canvasHeight;
				self.drawRectHeight = self.drawRectWidth * ratio;
			}

			self.redrawEl.css({
				width: self.drawRectWidth + '%',
				height: self.drawRectHeight + '%'
			});

			return;
		}

		// Draw poly
		if (self.mouseDownWhileDrawingPoly) {
			self.polyPoints[self.polyPoints.length - 1].x = self.x / self.zoom;
			self.polyPoints[self.polyPoints.length - 1].y = self.y / self.zoom;

			self.redrawTempPoly();

			return;
		}

		// Move control point
		if (self.translatingControlPoint) {
			// Scale up the SVG and redraw the points
			if (!self.startedTranslatingControlPoint) {
				self.startedTranslatingControlPoint = true;

				// Hide transform boxes
				$(e.target).closest('.imp-editor-shape').find('.imp-selection').hide();

				// Scale up the shape
				$(e.target).closest('.imp-editor-shape').css({
					left: 0,
					top: 0,
					width: '100%',
					height: '100%'
				});

				// Change the SVG viewbox
				$(e.target).closest('.imp-editor-shape').find('.imp-editor-poly-svg')[0].setAttribute('viewBox', '0 0 ' + settings.general.width + ' ' + settings.general.height);

				// Redraw the control points
				for (var i=0; i<self.selectedSpot.points.length; i++) {
					$('.imp-editor-shape[data-id="'+ self.selectedSpot.id +'"]').find('.imp-poly-control-point[data-index="'+ i +'"]').css({
						left: relLocalToRelCanvasSpace(self.selectedSpot.points[i], self.selectedSpot).x + '%',
						top: relLocalToRelCanvasSpace(self.selectedSpot.points[i], self.selectedSpot).y + '%'
					});
				}
			}

			// Limit to canvas bounds
			if (relLocalToRelCanvasSpace({x: self.translatedPointX, y: self.translatedPointY}, self.selectedSpot).x + self.dx < 0) {
				self.dx = -relLocalToRelCanvasSpace({x: self.translatedPointX, y: self.translatedPointY}, self.selectedSpot).x;
			}
			if (relLocalToRelCanvasSpace({x: self.translatedPointX, y: self.translatedPointY}, self.selectedSpot).x + self.dx > 100) {
				self.dx = 100 - relLocalToRelCanvasSpace({x: self.translatedPointX, y: self.translatedPointY}, self.selectedSpot).x;
			}
			if (relLocalToRelCanvasSpace({x: self.translatedPointX, y: self.translatedPointY}, self.selectedSpot).y + self.dy < 0) {
				self.dy = -relLocalToRelCanvasSpace({x: self.translatedPointX, y: self.translatedPointY}, self.selectedSpot).y;
			}
			if (relLocalToRelCanvasSpace({x: self.translatedPointX, y: self.translatedPointY}, self.selectedSpot).y + self.dy > 100) {
				self.dy = 100 - relLocalToRelCanvasSpace({x: self.translatedPointX, y: self.translatedPointY}, self.selectedSpot).y;
			}

			// convert self.dx from canvas rel. to poly rel.
			var dx = self.dx / (((self.selectedSpot.width/100)*self.canvasWidth)/self.canvasWidth);
			var dy = self.dy / (((self.selectedSpot.height/100)*self.canvasHeight)/self.canvasHeight);

			// Update the coordinates of the translated point
			self.selectedSpot.points[self.translatedPointIndex].x = self.translatedPointX + dx;
			self.selectedSpot.points[self.translatedPointIndex].y = self.translatedPointY + dy;

			// Redraw the control point
			self.translatedPoint.css({
				left: relLocalToRelCanvasSpace(self.selectedSpot.points[self.translatedPointIndex], self.selectedSpot).x + '%',
				top: relLocalToRelCanvasSpace(self.selectedSpot.points[self.translatedPointIndex], self.selectedSpot).y + '%',
			});

			// Redraw the polygon shape
			var coords = '';
			for (var j=0; j<self.selectedSpot.points.length; j++) {
				var p = relLocalToRelCanvasSpace(self.selectedSpot.points[j], self.selectedSpot);
				var x = self.selectedSpot.default_style.stroke_width + (p.x/100) * (settings.general.width - self.selectedSpot.default_style.stroke_width*2);
				var y = self.selectedSpot.default_style.stroke_width + (p.y/100) * (settings.general.height - self.selectedSpot.default_style.stroke_width*2);
				// var x = (p.x/100) * (settings.general.width);
				// var y = (p.y/100) * (settings.general.height);
				coords += x +','+ y +' ';
			}

			self.redrawPolygonEl.attr('points', coords);

			return;
		}

		// Place temporary control point
		if (self.selectedSpot && self.selectedSpot.type == 'poly') {
			self.redrawSelectedPolyTempPoint(e);
			return;
		}
	}
	Editor.prototype.handleMouseUp = function(e) {
		var self = this;

		// === If preview mode, return
		if (parseInt(settings.editor.previewMode, 10) == 1) return;

		// If user clicked on a tooltip close button, remove the tooltip
		if ($(e.target).attr('id') == 'imp-poly-tooltip-close-button') {
			$("#imp-poly-tooltip").remove();
		}

		if (self.startedDrawingSpot) {
			// Draw spot
			var s = self.createSpot();
			s.x = (self.ix / self.canvasWidth) * 100;
			s.y = (self.iy / self.canvasHeight) * 100;

			s.x = Math.round(s.x * 1000) / 1000;
			s.y = Math.round(s.y * 1000) / 1000;

			self.selectSpot(s.id);
			self.redraw();
			self.addAction();
		} else if (self.startedDrawingRect && self.createdDrawingRect) {
			// Draw rect
			var o = limitToCanvas(self.dx, self.dy);
			self.eventSpot.width = Math.round(self.drawRectWidth * 1000) / 1000;
			self.eventSpot.height = Math.round(self.drawRectHeight * 1000) / 1000;

			self.selectSpot(self.eventSpot.id);
			self.redraw();
			self.addAction();
		} else if (self.startedDrawingOval && self.createdDrawingOval) {
			// Draw oval
			var o = limitToCanvas(self.dx, self.dy);
			self.eventSpot.width = Math.round(self.drawRectWidth * 1000) / 1000;
			self.eventSpot.height = Math.round(self.drawRectHeight * 1000) / 1000;

			self.selectSpot(self.eventSpot.id);
			self.redraw();
			self.addAction();
		} else if (self.finishedDrawingPoly) {
			// Finish drawing poly

			// Delete temp poly
			$('#temp-poly').remove();

			// Create the final poly
			// Dimentions are created in the createPoly() function
			var p = self.createPoly(self.polyPoints);

			// Select it
			self.selectSpot(p.id);

			// Redraw
			self.addAction();
			self.redraw();

			// Lite
			// Select the rectangle tool
			$.wcpEditorSelectTool('select');

		} else if (self.startedMoving) {
			// Move
			var o = limitToCanvas(self.selectedSpot.x + self.dx, self.selectedSpot.y + self.dy);

			if (self.selectedSpot.type == 'rect' || self.selectedSpot.type == 'oval' || self.selectedSpot.type == 'poly') {
				if (o.x + self.selectedSpot.width > 100) {
					o.x = 100 - self.selectedSpot.width;
				}
				if (o.y + self.selectedSpot.height > 100) {
					o.y = 100 - self.selectedSpot.height;
				}
			}

			self.selectedSpot.x = Math.round(o.x * 1000) / 1000;
			self.selectedSpot.y = Math.round(o.y * 1000) / 1000;

			self.redraw();
			self.addAction();

		} else if (self.startedTransforming && self.didTransform) {
			// Transform
			self.selectedSpot.x = Math.round(self.transformX * 1000) / 1000;
			self.selectedSpot.y = Math.round(self.transformY * 1000) / 1000;
			self.selectedSpot.width = Math.round(self.transformWidth * 1000) / 1000;
			self.selectedSpot.height = Math.round(self.transformHeight * 1000) / 1000;

			self.redraw();
			self.addAction();

		} else if (self.translatingControlPoint) {
			var dx = self.dx / (((self.selectedSpot.width/100)*self.canvasWidth)/self.canvasWidth);
			var dy = self.dy / (((self.selectedSpot.height/100)*self.canvasHeight)/self.canvasHeight);

			// Update the bounding box of the poly
			self.updateBoundingBoxForPolygonSpot(self.selectedSpot);

			self.redraw();
			self.addAction();
		} else if (self.startedSelecting) {
			// Select
			if (self.selectedSpot && self.selectedSpot.id != self.eventSpotId) {
				self.deselectSpot();
			}
			self.selectSpot(self.eventSpotId);

			self.redraw();
			self.addAction();
		} else if (self.shouldDeselectShape) {
			self.deselectSpot();
			self.redraw();
			self.addAction();
		}

		// Reset flags
		self.draggingCanvas = false;
		self.startedSelecting = false;
		self.startedMoving = false;
		self.startedTransforming = false;
		self.didTransform = false;
		self.transformDirection = 0;

		self.startedDrawingSpot = false;

		self.startedDrawingRect = false;
		self.createdDrawingRect = false;

		self.startedDrawingOval = false;
		self.createdDrawingOval = false;

		self.startedDrawingPoly = false;
		self.finishedDrawingPoly = false;
		self.mouseDownWhileDrawingPoly = false;

		self.translatingControlPoint = false;
		self.startedTranslatingControlPoint = false;

		self.shouldDeselectShape = false;
	}
	Editor.prototype.handleKeyDown = function(e) {
		// console.log('keydown: ' + e.keyCode);
		var returnValue = undefined;

		// Space
		if (e.keyCode == 32) {
			this.spaceKeyDown = true;
			this.enterCanvasDragMode();

			returnValue = false;
		}
		// CMD
		if (e.keyCode == 91) {
			this.commandKeyDown = true;
			returnValue = true;
		}
		// CTRL
		if (e.keyCode == 17) {
			this.ctrlKeyDown = true;
			returnValue = true;
		}
		// SHIFT
		if (e.keyCode == 16) {
			this.shiftKeyDown = true;
			returnValue = true;
		}
		// +
		if (e.keyCode == 187 || e.keyCode == 107) {
			if (this.ctrlKeyDown || this.commandKeyDown) {
				this.zoomIn();
				returnValue = true;
			}
		}
		// -
		if (e.keyCode == 189 || e.keyCode == 109) {
			if (this.ctrlKeyDown || this.commandKeyDown) {
				this.zoomOut();
				returnValue = true;
			}
		}
		// 0
		if (e.keyCode == 48) {
			if (this.ctrlKeyDown || this.commandKeyDown) {
				this.zoomReset();
				returnValue = true;
			}
		}

		return returnValue;
	}
	Editor.prototype.handleKeyUp = function(e) {
		var self = this;

		// console.log('keyup: ' + e.keyCode);
		var returnValue = false;

		// Space
		if (e.keyCode == 32) {
			self.spaceKeyDown = false;

			self.exitCanvasDragMode();

			returnValue = false;
		}
		// CMD
		if (e.keyCode == 91) {
			self.commandKeyDown = false;
			returnValue = true;
		}
		// CTRL
		if (e.keyCode == 17) {
			self.ctrlKeyDown = false;
			returnValue = true;
		}
		// SHIFT
		if (e.keyCode == 16) {
			self.shiftKeyDown = false;
			returnValue = true;
		}
		// ENTER
		if (e.keyCode == 13) {
			if (self.drawingPoly) {
				self.drawingPoly = false;
				self.finishedDrawingPoly = false;

				// Finish drawing poly

				// Delete temp poly
				$('#temp-poly').remove();

				// Create the final poly
				// Dimentions are created in the createPoly() function
				var p = self.createPoly(self.polyPoints);

				// Select it
				self.selectSpot(p.id);

				// Redraw
				self.addAction();
				self.redraw();
			}
		}

		return returnValue;
	}

	Editor.prototype.getIndexOfSpotWithId = function(id) {
		for (var i=0; i<settings.spots.length; i++) {
			if (settings.spots[i].id == id) {
				return i;
			}
		}
	}
	Editor.prototype.selectSpot = function(id) {
		settings.editor.selected_shape = id;
	}
	Editor.prototype.deselectSpot = function() {
		settings.editor.selected_shape = -1;
	}

	Editor.prototype.createIdForSpot = function() {
		var id = 0;

		// Check if there is already a shape with the same ID
		var exists = false;

		do {
			id = 'spot-' + Math.floor(Math.random() * 9999);

			exists = false;
			for (var i=0; i<settings.spots.length; i++) {
				if (settings.spots[i].id == id) {
					exists = true;
					break;
				}
			}
		} while (exists);

		return id;
	}
	Editor.prototype.createIdForRect = function() {
		var id = 0;
		// Check if there is already a shape with the same ID
		var exists = false;

		do {
			id = 'rect-' + Math.floor(Math.random() * 9999);

			exists = false;
			for (var i=0; i<settings.spots.length; i++) {
				if (settings.spots[i].id == id) {
					exists = true;
					break;
				}
			}
		} while (exists);

		return id;
	}
	Editor.prototype.createIdForOval = function() {
		var id = 0;

		// Check if there is already a shape with the same ID
		var exists = false;

		do {
			id = 'oval-' + Math.floor(Math.random() * 9999);

			exists = false;
			for (var i=0; i<settings.spots.length; i++) {
				if (settings.spots[i].id == id) {
					exists = true;
					break;
				}
			}
		} while (exists);

		return id;
	}
	Editor.prototype.createIdForPoly = function() {
		var id = 0;

		// Check if there is already a shape with the same ID
		var exists = false;

		do {
			id = 'rect-' + Math.floor(Math.random() * 9999);

			exists = false;
			for (var i=0; i<settings.spots.length; i++) {
				if (settings.spots[i].id == id) {
					exists = true;
					break;
				}
			}
		} while (exists);

		return id;
	}

	Editor.prototype.createSpot = function() {
		var self = this;

		var s = $.extend(true, {}, default_spot_settings);
		s.type = 'spot';
		s.id = self.createIdForSpot();
		s.title = s.id;

		settings.spots.push(s);

		return s;
	}
	Editor.prototype.createRect = function() {
		var self = this;

		var s = $.extend(true, {}, default_spot_settings);
		s.type = 'rect';
		s.default_style.border_radius = 10;
		s.mouseover_style.border_radius = 10;
		s.id = self.createIdForRect();
		s.title = s.id;

		settings.spots.push(s);

		return s;
	}
	Editor.prototype.createOval = function() {
		var self = this;

		var s = $.extend(true, {}, default_spot_settings);
		s.type = 'oval';
		s.id = self.createIdForOval();
		s.title = s.id;

		settings.spots.push(s);

		return s;
	}
	Editor.prototype.createPoly = function() {
		var self = this;

		var s = $.extend(true, {}, default_spot_settings);
		s.type = 'poly';
		s.id = self.createIdForPoly();
		s.title = s.id;

		// Set dimentions
		var minX=99999, minY=99999, maxX=0, maxY=0;
		for (var i=0; i<self.polyPoints.length; i++) {
			var p = self.polyPoints[i];

			if (p.x < minX) minX = p.x;
			if (p.x > maxX) maxX = p.x;
			if (p.y < minY) minY = p.y;
			if (p.y > maxY) maxY = p.y;
		}

		var pixelWidth = maxX - minX;
		var pixelHeight = maxY - minY;

		// percentage, relative to the canvas width/height
		s.x = (minX/self.canvasWidth)*100 * self.zoom;
		s.y = (minY/self.canvasHeight)*100 * self.zoom;
		s.width = (pixelWidth/self.canvasWidth)*100 * self.zoom;
		s.height = (pixelHeight/self.canvasHeight)*100 * self.zoom;

		for (var i=0; i<self.polyPoints.length; i++) {
			// coordinates are in percentage, relative to the current pixel dimentions of the shape box
			s.points.push({
				x: ((self.polyPoints[i].x - minX)/pixelWidth)*100,
				y: ((self.polyPoints[i].y - minY)/pixelHeight)*100
			});
		}

		settings.spots.push(s);

		return s;
	}

	Editor.prototype.enterCanvasDragMode = function() {
		if (!settings.editor.state.dragging) {
			settings.editor.state.dragging = true;
			
			this.canvas.append('<div class="imp-editor-canvas-overlay" id="imp-editor-canvas-overlay-drag"></div>');
		}
	}
	Editor.prototype.exitCanvasDragMode = function() {
		if (settings.editor.state.dragging) {
			settings.editor.state.dragging = false;
			
			this.canvas.find('#imp-editor-canvas-overlay-drag').remove();
		}
	}
	Editor.prototype.zoomIn = function(e) {
		var self = this;

		self.zoom*=2;

		if (self.zoom > editorMaxZoomLevel) {
			self.zoom = editorMaxZoomLevel;
		} else {
			// The distance to offset the image
			var dx = 0;
			var dy = 0;

			// The focal point around which to center the image
			var fx = 0;
			var fy = 0;

			// Check if the zoom was triggered by clicking with the zoom tool, or by keyboard shortcut
			if (e) {
				// Focal point is at event point in pixel canvas space
				fx = self.ix;
				fy = self.iy;
			} else {
				// Assume that the focal point is at the center of #wcp-editor-center
				var wcpEditorCenter = $('#wcp-editor-center');

				// Center of wcp-editor-center, relative to screen
				var wcpEditorCenterCenterX = wcpEditorCenter.offset().left + wcpEditorCenter.width()/2;
				var wcpEditorCenterCenterY = wcpEditorCenter.offset().top + wcpEditorCenter.height()/2;

				// Center of wcp-editor-center in pixel canvas space
				var p = screenToCanvasSpace(wcpEditorCenterCenterX, wcpEditorCenterCenterY, self.canvas);

				// Set focal point to that center
				fx = p.x;
				fy = p.y;
			}

			// Find the distance from the focal point to the center of the image, all in pixel canvas space
			dx = (self.canvasWidth / 2) - fx;
			dy = (self.canvasHeight / 2) - fy;
			
			// Adjust the canvas position to match the focal point
			self.canvasX += dx;
			self.canvasY += dy;

			// Redraw
			self.redrawCanvas();
			self.redraw();
		}
	}
	Editor.prototype.zoomOut = function(e) {
		var self = this;

		self.zoom/=2;

		if (self.zoom < 1) {
			self.zoom = 1;
		} else {
			// The distance to offset the image
			var dx = 0;
			var dy = 0;

			// The focal point around which to center the image
			var fx = 0;
			var fy = 0;

			// Check if the zoom was triggered by clicking with the zoom tool, or by keyboard shortcut
			if (e) {
				// Focal point is at event point in pixel canvas space
				fx = self.ix;
				fy = self.iy;
			} else {
				// Assume that the focal point is at the center of #wcp-editor-center
				var wcpEditorCenter = $('#wcp-editor-center');

				// Center of wcp-editor-center, relative to screen
				var wcpEditorCenterCenterX = wcpEditorCenter.offset().left + wcpEditorCenter.width()/2;
				var wcpEditorCenterCenterY = wcpEditorCenter.offset().top + wcpEditorCenter.height()/2;

				// Center of wcp-editor-center in pixel canvas space
				var p = screenToCanvasSpace(wcpEditorCenterCenterX, wcpEditorCenterCenterY, self.canvas);

				// Set focal point to that center
				fx = p.x;
				fy = p.y;
			}

			// Find the distance from the focal point to the center of the image, all in pixel canvas space
			dx = (self.canvasWidth / 2) - fx;
			dy = (self.canvasHeight / 2) - fy;
			
			// Adjust the canvas position to match the focal point
			self.canvasX -= dx/2;
			self.canvasY -= dy/2;

			// Redraw
			self.redrawCanvas();
			self.redraw();
		}

		if (self.zoom == 1) {
			// If zoom becomes 1, reset the canvas offset
			self.canvasX = 0;
			self.canvasY = 0;
			self.redrawCanvas();
		}
	}
	Editor.prototype.zoomReset = function() {
		this.zoom = 1;

		this.canvasX = 0;
		this.canvasY = 0;

		this.redrawCanvas();
		this.redraw();
	}

	Editor.prototype.shouldSelectPoly = function(id) {
		var self = this;
		var s;

		for (var i=0; i<settings.spots.length; i++) {
			if (settings.spots[i].id == id) {
				s = settings.spots[i];
			}
		}

		// Coordinates in shape pixel space
		var x = self.ix - (s.x/100)*self.canvasWidth;
		var y = self.iy - (s.y/100)*self.canvasHeight;

		// Spot dimentions in pixels
		var spotWidth = (s.width/100)*self.canvasWidth;
		var spotHeight = (s.height/100)*self.canvasHeight;

		// Convert to shape percentage space
		x = (x / spotWidth) * 100;
		y = (y / spotHeight) * 100;

		var testPoly = new Array();
		for (var i=0; i<s.points.length; i++) {
			testPoly.push([s.points[i].x, s.points[i].y]);
		}

		if (isPointInsidePolygon({ x: x, y: y }, testPoly)) {
			return true;
		} else {
			return false;
		}
	}
	Editor.prototype.placePointForTempPoly = function(x, y) {
		var self = this;

		self.polyPoints.push({
			x: x / self.zoom,
			y: y / self.zoom
		});
	}
	Editor.prototype.redrawTempPoly = function() {
		var self = this;

		// Draw polygon
		var html = '<polygon points="'
		
		for (var i=0; i<self.polyPoints.length; i++) {
			var x = self.polyPoints[i].x * self.zoom;
			var y = self.polyPoints[i].y * self.zoom;
			html += x + ',' + y + ' ';
		}
		html += '" />';

		// Draw points

		for (var i=0; i<self.polyPoints.length; i++) {
			var x = self.polyPoints[i].x * self.zoom;
			var y = self.polyPoints[i].y * self.zoom;

			html += '<circle cx="'+ x +'" cy="'+ y +'" r="4" data-index="'+ i +'" />';
		}

		// Insert HTML
		if ($('#temp-poly').length == 0) {
			$('#imp-editor-shapes-container').append('<svg id="temp-poly" width="'+ self.canvasWidth +'px" height="'+ self.canvasHeight +'px" viewBox="0 0 '+ self.canvasWidth +' '+ self.canvasHeight +'" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>')
		}
		$('#temp-poly').html(html);

		// Tooltip
		var html = '';

		if (localStorage['image-map-pro-seen-poly-tooltip'] != 1) {
			localStorage['image-map-pro-seen-poly-tooltip'] = 1;

			var x = self.polyPoints[0].x * self.zoom;
			var y = self.polyPoints[0].y * self.zoom;

			html += '<div id="imp-poly-tooltip" style="left: '+ x +'px; top: '+ y +'px;">Click the first point or press ENTER to finish <i class="fa fa-times" aria-hidden="true" id="imp-poly-tooltip-close-button"></i></div>';

			$('#imp-editor-shapes-container').append(html);
			$('#imp-poly-tooltip').css({
				left: $('#imp-poly-tooltip').position().left - $('#imp-poly-tooltip').outerWidth() - 20,
				top: $('#imp-poly-tooltip').position().top - $('#imp-poly-tooltip').outerHeight()/2,
			});
		}
	}
	Editor.prototype.redrawSelectedPolyTempPoint = function(e) {
		var self = this;
		
		// Convert canvas space pixel coordinates to percentage space polygon space
		var polygonPixelWidth = (self.selectedSpot.width / 100) * self.canvasWidth;
		var polygonPixelHeight = (self.selectedSpot.height / 100) * self.canvasHeight;
		var xPolygonPixelSpace = self.x - ((self.selectedSpot.x / 100) * self.canvasWidth);
		var yPolygonPixelSpace = self.y - ((self.selectedSpot.y / 100) * self.canvasHeight);
		var xPolygonPerSpace = (xPolygonPixelSpace/polygonPixelWidth) * 100;
		var yPolygonPerSpace = (yPolygonPixelSpace/polygonPixelHeight) * 100;

		var p;
		if (p = self.shouldShowTempControlPoint(xPolygonPerSpace, yPolygonPerSpace, self.selectedSpot.points, e)) {
			// Show
			self.tempControlPoint.show();
			self.tempControlPointLine.show();

			self.tempControlPoint.css({
				left: p.x + '%',
				top: p.y + '%'
			});

			self.controlPointInsertionPointX = p.x;
			self.controlPointInsertionPointY = p.y;
		} else {
			// Hide
			self.tempControlPoint.hide();
			self.tempControlPointLine.hide();
		}
	}
	Editor.prototype.shouldShowTempControlPoint = function(x, y, points, e) {
		// Get the object type under the mouse
		var objectType = $(e.target).data('editor-object-type') || $(e.target).closest('[data-editor-object-type]').data('editor-object-type')

		// If there is a control point under the mouse, don't show the temp control point
		if (objectType == EDITOR_OBJECT_TYPE_POLY_POINT) return false;

		// Continue
		var self = this;
		var p = { x: x, y: y };
		var shortestDistance = 9999;
		var shortestDistanceIndex = -1;
		var shortestDistanceCoords = false;

		var shapeWidthPx = self.canvasWidth * (self.selectedSpot.width / 100);
		var minDistancePx = 20;
		var minDistance = minDistancePx * 100 / shapeWidthPx;

		// Test for each line
		for (var i=0; i<points.length; i++) {
			var a = { x: points[i].x, y: points[i].y };
			var b = undefined;

			if (points[i+1]) {
				b = { x: points[i+1].x, y: points[i+1].y };
			} else {
				b = { x: points[0].x, y: points[0].y };
			}

			var closestPointToLine = new Vector2(p.x, p.y).closestPointOnLine(new Vector2(a.x, a.y), new Vector2(b.x, b.y));
			var d = Math.sqrt(Math.pow((p.x - closestPointToLine.x), 2) + Math.pow((p.y - closestPointToLine.y), 2));

			if (d < shortestDistance && d < minDistance) {
				self.tempControlPointIndex = i;
				shortestDistance = d;
				shortestDistanceIndex = i;
				shortestDistanceCoords = { x: closestPointToLine.x, y: closestPointToLine.y };
			}
		}

		if (shortestDistanceIndex != -1) {
			return shortestDistanceCoords;
		} else {
			return false;
		}
	}
	Editor.prototype.updateBoundingBoxForPolygonSpot = function(s) {
		var minX=99999, minY=99999, maxX=-99999, maxY=-99999;
		for (var i=0; i<s.points.length; i++) {
			var p = s.points[i];

			if (p.x < minX) minX = p.x;
			if (p.x > maxX) maxX = p.x;
			if (p.y < minY) minY = p.y;
			if (p.y > maxY) maxY = p.y;
		}

		// Calculate new bounding box
		var o = relLocalToRelCanvasSpace({ x: minX, y: minY }, s);
		var o2 = relLocalToRelCanvasSpace({ x: maxX, y: maxY }, s);

		// Update the coordinates of the points
		for (var i=0; i<s.points.length; i++) {
			var p = s.points[i];

			// to canvas space
			var p1 = relLocalToRelCanvasSpace(p, s);
			// to local space
			var p2 = relCanvasToRelLocalSpace(p1, { x: o.x, y: o.y, width: o2.x - o.x, height: o2.y - o.y });
			// debugger;
			p.x = p2.x;
			p.y = p2.y;
		}

		// Set new values
		s.x = o.x;
		s.y = o.y;
		s.width = o2.x - o.x;
		s.height = o2.y - o.y;

		// debugger;
	}

	Editor.prototype.updateShapesList = function() {
		// Create a list of items
		var listItems = [];
		for (var i=settings.spots.length - 1; i>=0; i--) {
			var s = settings.spots[i];

			listItems.push({ id: s.id, title: s.title });
		}

		// Set items
		$.wcpEditorSetListItems(listItems);

		// Select item
		$.wcpEditorSelectListItem(settings.editor.selected_shape);
	}
	Editor.prototype.updateShapesForm = function() {
		// This function needs to be called only when a shape is created, selected or deselected

		var i = this.getIndexOfSpotWithId(settings.editor.selected_shape);
		var s = settings.spots[i];

		if (s) {
			// General
			$.wcpEditorSetControlValue('Shape Settings', 'x', s.x);
			$.wcpEditorSetControlValue('Shape Settings', 'y', s.y);
			$.wcpEditorSetControlValue('Shape Settings', 'width', s.width);
			$.wcpEditorSetControlValue('Shape Settings', 'height', s.height);

			// Actions
			$.wcpEditorSetControlValue('Shape Settings', 'mouseover', s.actions.mouseover);
			$.wcpEditorSetControlValue('Shape Settings', 'click', s.actions.click);
			$.wcpEditorSetControlValue('Shape Settings', 'link', s.actions.link);
			$.wcpEditorSetControlValue('Shape Settings', 'open_link_in_new_window', s.actions.open_link_in_new_window);

			// Icon
			$.wcpEditorSetControlValue('Shape Settings', 'use_icon', s.default_style.use_icon);
			$.wcpEditorSetControlValue('Shape Settings', 'icon_type', s.default_style.icon_type);
			$.wcpEditorSetControlValue('Shape Settings', 'icon_svg_path', s.default_style.icon_svg_path);
			$.wcpEditorSetControlValue('Shape Settings', 'icon_svg_viewbox', s.default_style.icon_svg_viewbox);
			$.wcpEditorSetControlValue('Shape Settings', 'icon_url', s.default_style.icon_url);
			$.wcpEditorSetControlValue('Shape Settings', 'icon_is_pin', s.default_style.icon_is_pin);
			$.wcpEditorSetControlValue('Shape Settings', 'icon_shadow', s.default_style.icon_shadow);

			// Default Style
			$.wcpEditorSetControlValue('Shape Settings', 'opacity', s.default_style.opacity);
			$.wcpEditorSetControlValue('Shape Settings', 'icon_fill', s.default_style.icon_fill);
			$.wcpEditorSetControlValue('Shape Settings', 'border_radius', s.default_style.border_radius);
			$.wcpEditorSetControlValue('Shape Settings', 'background_color', s.default_style.background_color);
			$.wcpEditorSetControlValue('Shape Settings', 'background_opacity', s.default_style.background_opacity);
			$.wcpEditorSetControlValue('Shape Settings', 'border_width', s.default_style.border_width);
			$.wcpEditorSetControlValue('Shape Settings', 'border_style', s.default_style.border_style);
			$.wcpEditorSetControlValue('Shape Settings', 'border_color', s.default_style.border_color);
			$.wcpEditorSetControlValue('Shape Settings', 'border_opacity', s.default_style.border_opacity);
			$.wcpEditorSetControlValue('Shape Settings', 'fill', s.default_style.fill);
			$.wcpEditorSetControlValue('Shape Settings', 'fill_opacity', s.default_style.fill_opacity);
			$.wcpEditorSetControlValue('Shape Settings', 'stroke_color', s.default_style.stroke_color);
			$.wcpEditorSetControlValue('Shape Settings', 'stroke_opacity', s.default_style.stroke_opacity);
			$.wcpEditorSetControlValue('Shape Settings', 'stroke_width', s.default_style.stroke_width);
			$.wcpEditorSetControlValue('Shape Settings', 'stroke_dasharray', s.default_style.stroke_dasharray);
			$.wcpEditorSetControlValue('Shape Settings', 'stroke_linecap', s.default_style.stroke_linecap);

			// Mouseover Style
			$.wcpEditorSetControlValue('Shape Settings', 'mouseover_opacity', s.mouseover_style.opacity);
			$.wcpEditorSetControlValue('Shape Settings', 'mouseover_icon_fill', s.mouseover_style.icon_fill);
			$.wcpEditorSetControlValue('Shape Settings', 'mouseover_border_radius', s.mouseover_style.border_radius);
			$.wcpEditorSetControlValue('Shape Settings', 'mouseover_background_color', s.mouseover_style.background_color);
			$.wcpEditorSetControlValue('Shape Settings', 'mouseover_background_opacity', s.mouseover_style.background_opacity);
			$.wcpEditorSetControlValue('Shape Settings', 'mouseover_border_width', s.mouseover_style.border_width);
			$.wcpEditorSetControlValue('Shape Settings', 'mouseover_border_style', s.mouseover_style.border_style);
			$.wcpEditorSetControlValue('Shape Settings', 'mouseover_border_color', s.mouseover_style.border_color);
			$.wcpEditorSetControlValue('Shape Settings', 'mouseover_border_opacity', s.mouseover_style.border_opacity);
			$.wcpEditorSetControlValue('Shape Settings', 'mouseover_fill', s.mouseover_style.fill);
			$.wcpEditorSetControlValue('Shape Settings', 'mouseover_fill_opacity', s.mouseover_style.fill_opacity);
			$.wcpEditorSetControlValue('Shape Settings', 'mouseover_stroke_color', s.mouseover_style.stroke_color);
			$.wcpEditorSetControlValue('Shape Settings', 'mouseover_stroke_opacity', s.mouseover_style.stroke_opacity);
			$.wcpEditorSetControlValue('Shape Settings', 'mouseover_stroke_width', s.mouseover_style.stroke_width);
			$.wcpEditorSetControlValue('Shape Settings', 'mouseover_stroke_dasharray', s.mouseover_style.stroke_dasharray);
			$.wcpEditorSetControlValue('Shape Settings', 'mouseover_stroke_linecap', s.mouseover_style.stroke_linecap);

			// Tooltip Settings
			$.wcpEditorSetControlValue('Shape Settings', 'tooltip_border_radius', s.tooltip_style.border_radius);
			$.wcpEditorSetControlValue('Shape Settings', 'tooltip_padding', s.tooltip_style.padding);
			$.wcpEditorSetControlValue('Shape Settings', 'tooltip_background_color', s.tooltip_style.background_color);
			$.wcpEditorSetControlValue('Shape Settings', 'tooltip_background_opacity', s.tooltip_style.background_opacity);
			$.wcpEditorSetControlValue('Shape Settings', 'tooltip_position', s.tooltip_style.position);
			$.wcpEditorSetControlValue('Shape Settings', 'tooltip_width', s.tooltip_style.width);
			$.wcpEditorSetControlValue('Shape Settings', 'tooltip_auto_width', s.tooltip_style.auto_width);

			// Tooltip Content (to do)
			$.wcpEditorSetControlValue('Shape Settings', 'tooltip_content_type', s.tooltip_content.content_type);
			$.wcpEditorSetControlValue('Shape Settings', 'plain_text', s.tooltip_content.plain_text);
			$.wcpEditorSetControlValue('Shape Settings', 'squares_settings', s.tooltip_content.squares_settings);

			// Do a "redraw update" of the form only when the selection changes
			// To show/hide shape-specific controls
			if (i == this.shapesFormSpotIndex) return;
			this.shapesFormSpotIndex = i;

			var form = $.wcpEditorGetHTMLForFormWithName('Shape Settings');
			$.wcpEditorSetContentForTabWithName('Shape', form);

			$.wcpEditorUpdateForm('Shape Settings');

			// Open Shape Settings tab
			$.wcpEditorOpenMainTabWithName('Shape');

			// Show/hide controls
			this.updateShapesFormStateMaster();
		} else {
			this.shapesFormSpotIndex = -1;
			$.wcpEditorSetContentForTabWithName('Shape', '<div class="wcp-editor-form-tabs-content-wrap">No shape selected.</div>');
		}
	}
	Editor.prototype.updateShapesFormState = function() {
		// Show/hide controls, depending on current settings of the selected shape

		var i = this.getIndexOfSpotWithId(settings.editor.selected_shape);
		var s = settings.spots[i];

		if (!s) return;

		if (s.type == 'spot') {
			// Show/hide icon controls, if the spot is an icon or not
			if (parseInt(s.default_style.use_icon, 10) == 1) {
				// Icon tab
				$.wcpEditorFormShowControl('Shape Settings', 'icon_type');

				if (s.default_style.icon_type == 'library') {
					$.wcpEditorFormHideControl('Shape Settings', 'icon_url');
					$.wcpEditorFormShowControl('Shape Settings', 'choose_icon_from_library');
				}

				if (s.default_style.icon_type == 'custom') {
					$.wcpEditorFormShowControl('Shape Settings', 'icon_url');
					$.wcpEditorFormHideControl('Shape Settings', 'choose_icon_from_library');
				}

				$.wcpEditorFormShowControl('Shape Settings', 'icon_is_pin');
				$.wcpEditorFormShowControl('Shape Settings', 'icon_shadow');

				// Default style tab
				$.wcpEditorFormShowControl('Shape Settings', 'icon_fill');

				$.wcpEditorFormHideControl('Shape Settings', 'border_radius');
				$.wcpEditorFormHideControl('Shape Settings', 'background_color');
				$.wcpEditorFormHideControl('Shape Settings', 'background_opacity');
				$.wcpEditorFormHideControl('Shape Settings', 'border_width');
				$.wcpEditorFormHideControl('Shape Settings', 'border_style');
				$.wcpEditorFormHideControl('Shape Settings', 'border_color');
				$.wcpEditorFormHideControl('Shape Settings', 'border_opacity');

				// Mouseover style tab
				$.wcpEditorFormShowControl('Shape Settings', 'mouseover_icon_fill');

				$.wcpEditorFormHideControl('Shape Settings', 'mouseover_border_radius');
				$.wcpEditorFormHideControl('Shape Settings', 'mouseover_background_color');
				$.wcpEditorFormHideControl('Shape Settings', 'mouseover_background_opacity');
				$.wcpEditorFormHideControl('Shape Settings', 'mouseover_border_width');
				$.wcpEditorFormHideControl('Shape Settings', 'mouseover_border_style');
				$.wcpEditorFormHideControl('Shape Settings', 'mouseover_border_color');
				$.wcpEditorFormHideControl('Shape Settings', 'mouseover_border_opacity');
			} else {
				// Icon tab
				$.wcpEditorFormHideControl('Shape Settings', 'choose_icon_from_library');
				$.wcpEditorFormHideControl('Shape Settings', 'icon_type');
				$.wcpEditorFormHideControl('Shape Settings', 'icon_url');
				$.wcpEditorFormHideControl('Shape Settings', 'icon_is_pin');
				$.wcpEditorFormHideControl('Shape Settings', 'icon_shadow');

				// Default style tab
				$.wcpEditorFormHideControl('Shape Settings', 'icon_fill');

				$.wcpEditorFormShowControl('Shape Settings', 'border_radius');
				$.wcpEditorFormShowControl('Shape Settings', 'background_color');
				$.wcpEditorFormShowControl('Shape Settings', 'background_opacity');
				$.wcpEditorFormShowControl('Shape Settings', 'border_width');
				$.wcpEditorFormShowControl('Shape Settings', 'border_style');
				$.wcpEditorFormShowControl('Shape Settings', 'border_color');
				$.wcpEditorFormShowControl('Shape Settings', 'border_opacity');

				// Mouseover style tab
				$.wcpEditorFormHideControl('Shape Settings', 'mouseover_icon_fill');

				$.wcpEditorFormShowControl('Shape Settings', 'mouseover_border_radius');
				$.wcpEditorFormShowControl('Shape Settings', 'mouseover_background_color');
				$.wcpEditorFormShowControl('Shape Settings', 'mouseover_background_opacity');
				$.wcpEditorFormShowControl('Shape Settings', 'mouseover_border_width');
				$.wcpEditorFormShowControl('Shape Settings', 'mouseover_border_style');
				$.wcpEditorFormShowControl('Shape Settings', 'mouseover_border_color');
				$.wcpEditorFormShowControl('Shape Settings', 'mouseover_border_opacity');
			}
		}

		// Tooltip content type
		if (s.tooltip_content.content_type == 'plain-text') {
			$.wcpEditorFormShowControl('Shape Settings', 'plain_text');
			$.wcpEditorFormShowControl('Shape Settings', 'launch_content_builder');
			$.wcpEditorFormShowControl('Shape Settings', 'plain_text_color');
		} else {
			$.wcpEditorFormShowControl('Shape Settings', 'plain_text');
			$.wcpEditorFormShowControl('Shape Settings', 'launch_content_builder');
			$.wcpEditorFormShowControl('Shape Settings', 'plain_text_color');
		}

		// Tooltip auto width
		if (parseInt(s.tooltip_style.auto_width, 10) == 1) {
			$.wcpEditorFormHideControl('Shape Settings', 'tooltip_width');
		} else {
			$.wcpEditorFormShowControl('Shape Settings', 'tooltip_width');
		}

		// Link URL
		if (s.actions.click == 'follow-link') {
			$.wcpEditorFormShowControl('Shape Settings', 'link');
			$.wcpEditorFormShowControl('Shape Settings', 'open_link_in_new_window');
		} else {
			$.wcpEditorFormHideControl('Shape Settings', 'link');
			$.wcpEditorFormHideControl('Shape Settings', 'open_link_in_new_window');
		}
	}
	Editor.prototype.updateShapesFormStateMaster = function() {
		// Show/hide controls, depending on the type of the current selected shape
		var i = this.getIndexOfSpotWithId(settings.editor.selected_shape);
		var s = settings.spots[i];

		if (!s) return;

		if (s.type == 'spot') {
			// Show the Icon tab
			$.wcpEditorFormShowControlsGroup('Shape Settings', 'icon');

			// Show icon specific controls
			$.wcpEditorFormShowControl('Shape Settings', 'icon_fill');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_icon_fill');

			// Show common controls
			$.wcpEditorFormShowControl('Shape Settings', 'opacity');
			$.wcpEditorFormShowControl('Shape Settings', 'border_radius');
			$.wcpEditorFormShowControl('Shape Settings', 'background_color');
			$.wcpEditorFormShowControl('Shape Settings', 'background_opacity');
			$.wcpEditorFormShowControl('Shape Settings', 'border_width');
			$.wcpEditorFormShowControl('Shape Settings', 'border_style');
			$.wcpEditorFormShowControl('Shape Settings', 'border_color');
			$.wcpEditorFormShowControl('Shape Settings', 'border_opacity');

			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_opacity');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_border_radius');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_background_color');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_background_opacity');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_border_width');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_border_style');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_border_color');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_border_opacity');

			// Hide polygon-specific controls
			$.wcpEditorFormHideControl('Shape Settings', 'fill');
			$.wcpEditorFormHideControl('Shape Settings', 'fill_opacity');
			$.wcpEditorFormHideControl('Shape Settings', 'stroke_color');
			$.wcpEditorFormHideControl('Shape Settings', 'stroke_opacity');
			$.wcpEditorFormHideControl('Shape Settings', 'stroke_width');
			$.wcpEditorFormHideControl('Shape Settings', 'stroke_dasharray');
			$.wcpEditorFormHideControl('Shape Settings', 'stroke_linecap');

			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_fill');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_fill_opacity');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_stroke_color');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_stroke_opacity');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_stroke_width');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_stroke_dasharray');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_stroke_linecap');
		}
		if (s.type == 'rect') {
			// Hide the Icon tab
			$.wcpEditorFormHideControlsGroup('Shape Settings', 'icon');

			// Hide icon specific controls
			$.wcpEditorFormHideControl('Shape Settings', 'icon_fill');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_icon_fill');

			// Show common controls
			$.wcpEditorFormShowControl('Shape Settings', 'opacity');
			$.wcpEditorFormShowControl('Shape Settings', 'border_radius');
			$.wcpEditorFormShowControl('Shape Settings', 'background_color');
			$.wcpEditorFormShowControl('Shape Settings', 'background_opacity');
			$.wcpEditorFormShowControl('Shape Settings', 'border_width');
			$.wcpEditorFormShowControl('Shape Settings', 'border_style');
			$.wcpEditorFormShowControl('Shape Settings', 'border_color');
			$.wcpEditorFormShowControl('Shape Settings', 'border_opacity');

			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_opacity');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_border_radius');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_background_color');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_background_opacity');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_border_width');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_border_style');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_border_color');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_border_opacity');

			// Hide polygon-specific controls
			$.wcpEditorFormHideControl('Shape Settings', 'fill');
			$.wcpEditorFormHideControl('Shape Settings', 'fill_opacity');
			$.wcpEditorFormHideControl('Shape Settings', 'stroke_color');
			$.wcpEditorFormHideControl('Shape Settings', 'stroke_opacity');
			$.wcpEditorFormHideControl('Shape Settings', 'stroke_width');
			$.wcpEditorFormHideControl('Shape Settings', 'stroke_dasharray');
			$.wcpEditorFormHideControl('Shape Settings', 'stroke_linecap');

			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_fill');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_fill_opacity');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_stroke_color');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_stroke_opacity');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_stroke_width');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_stroke_dasharray');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_stroke_linecap');
		}
		if (s.type == 'oval') {
			// Hide the Icon tab
			$.wcpEditorFormHideControlsGroup('Shape Settings', 'icon');

			// Hide icon specific controls
			$.wcpEditorFormHideControl('Shape Settings', 'icon_fill');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_icon_fill');

			// Show common controls
			$.wcpEditorFormShowControl('Shape Settings', 'opacity');
			$.wcpEditorFormShowControl('Shape Settings', 'border_radius');
			$.wcpEditorFormShowControl('Shape Settings', 'background_color');
			$.wcpEditorFormShowControl('Shape Settings', 'background_opacity');
			$.wcpEditorFormShowControl('Shape Settings', 'border_width');
			$.wcpEditorFormShowControl('Shape Settings', 'border_style');
			$.wcpEditorFormShowControl('Shape Settings', 'border_color');
			$.wcpEditorFormShowControl('Shape Settings', 'border_opacity');

			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_opacity');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_border_radius');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_background_color');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_background_opacity');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_border_width');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_border_style');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_border_color');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_border_opacity');

			// Hide polygon-specific controls
			$.wcpEditorFormHideControl('Shape Settings', 'fill');
			$.wcpEditorFormHideControl('Shape Settings', 'fill_opacity');
			$.wcpEditorFormHideControl('Shape Settings', 'stroke_color');
			$.wcpEditorFormHideControl('Shape Settings', 'stroke_opacity');
			$.wcpEditorFormHideControl('Shape Settings', 'stroke_width');
			$.wcpEditorFormHideControl('Shape Settings', 'stroke_dasharray');
			$.wcpEditorFormHideControl('Shape Settings', 'stroke_linecap');

			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_fill');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_fill_opacity');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_stroke_color');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_stroke_opacity');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_stroke_width');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_stroke_dasharray');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_stroke_linecap');
		}
		if (s.type == 'poly') {
			// Hide the Icon tab
			$.wcpEditorFormHideControlsGroup('Shape Settings', 'icon');

			// Hide icon specific controls
			$.wcpEditorFormHideControl('Shape Settings', 'icon_fill');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_icon_fill');

			// Hide common controls
			$.wcpEditorFormHideControl('Shape Settings', 'opacity');
			$.wcpEditorFormHideControl('Shape Settings', 'border_radius');
			$.wcpEditorFormHideControl('Shape Settings', 'background_color');
			$.wcpEditorFormHideControl('Shape Settings', 'background_opacity');
			$.wcpEditorFormHideControl('Shape Settings', 'border_width');
			$.wcpEditorFormHideControl('Shape Settings', 'border_style');
			$.wcpEditorFormHideControl('Shape Settings', 'border_color');
			$.wcpEditorFormHideControl('Shape Settings', 'border_opacity');

			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_opacity');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_border_radius');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_background_color');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_background_opacity');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_border_width');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_border_style');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_border_color');
			$.wcpEditorFormHideControl('Shape Settings', 'mouseover_border_opacity');

			// Show polygon-specific controls
			$.wcpEditorFormShowControl('Shape Settings', 'fill');
			$.wcpEditorFormShowControl('Shape Settings', 'fill_opacity');
			$.wcpEditorFormShowControl('Shape Settings', 'stroke_color');
			$.wcpEditorFormShowControl('Shape Settings', 'stroke_opacity');
			$.wcpEditorFormShowControl('Shape Settings', 'stroke_width');
			$.wcpEditorFormShowControl('Shape Settings', 'stroke_dasharray');
			$.wcpEditorFormShowControl('Shape Settings', 'stroke_linecap');

			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_fill');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_fill_opacity');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_stroke_color');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_stroke_opacity');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_stroke_width');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_stroke_dasharray');
			$.wcpEditorFormShowControl('Shape Settings', 'mouseover_stroke_linecap');
		}
	}
	Editor.prototype.updateImageMapForm = function() {
		$.wcpEditorSetControlValue('Image Map Settings', 'image_map_name', settings.general.name);
		$.wcpEditorSetControlValue('Image Map Settings', 'image_map_shortcode', settings.general.shortcode);
		$.wcpEditorSetControlValue('Image Map Settings', 'image_map_width', settings.general.width);
		$.wcpEditorSetControlValue('Image Map Settings', 'image_map_height', settings.general.height);
		$.wcpEditorSetControlValue('Image Map Settings', 'responsive', settings.general.responsive);
		$.wcpEditorSetControlValue('Image Map Settings', 'preserve_quality', settings.general.preserve_quality);
		$.wcpEditorSetControlValue('Image Map Settings', 'pageload_animation', settings.general.pageload_animation);
		$.wcpEditorSetControlValue('Image Map Settings', 'late_initialization', settings.general.late_initialization);
		$.wcpEditorSetControlValue('Image Map Settings', 'center_image_map', settings.general.center_image_map);

		$.wcpEditorSetControlValue('Image Map Settings', 'image_url', settings.image.url);

		$.wcpEditorSetControlValue('Image Map Settings', 'sticky_tooltips', settings.tooltips.sticky_tooltips);
		$.wcpEditorSetControlValue('Image Map Settings', 'constrain_tooltips', settings.tooltips.constrain_tooltips);
		$.wcpEditorSetControlValue('Image Map Settings', 'tooltip_animation', settings.tooltips.tooltip_animation);
		$.wcpEditorSetControlValue('Image Map Settings', 'fullscreen_tooltips', settings.tooltips.fullscreen_tooltips);

		$.wcpEditorSetControlValue('Image Map Settings', 'enable_fullscreen_mode', settings.fullscreen.enable_fullscreen_mode);
		$.wcpEditorSetControlValue('Image Map Settings', 'start_in_fullscreen_mode', settings.fullscreen.start_in_fullscreen_mode);
		$.wcpEditorSetControlValue('Image Map Settings', 'fullscreen_background', settings.fullscreen.fullscreen_background);
		$.wcpEditorSetControlValue('Image Map Settings', 'fullscreen_button_position', settings.fullscreen.fullscreen_button_position);
		$.wcpEditorSetControlValue('Image Map Settings', 'fullscreen_button_type', settings.fullscreen.fullscreen_button_type);
		$.wcpEditorSetControlValue('Image Map Settings', 'fullscreen_button_color', settings.fullscreen.fullscreen_button_color);
		$.wcpEditorSetControlValue('Image Map Settings', 'fullscreen_button_text_color', settings.fullscreen.fullscreen_button_text_color);

		$.wcpEditorSetControlValue('Image Map Settings', 'custom_css', settings.custom_code.custom_css);
		$.wcpEditorSetControlValue('Image Map Settings', 'custom_js', settings.custom_code.custom_js);

		$.wcpEditorUpdateForm('Image Map Settings');
	}
	Editor.prototype.updateImageMapFormState = function() {
		// Show/hide controls

		if (parseInt(settings.general.responsive, 10) == 0) {
			$.wcpEditorFormShowControl('Image Map Settings', 'image_map_width');
			$.wcpEditorFormShowControl('Image Map Settings', 'image_map_height');
			$.wcpEditorFormShowControl('Image Map Settings', 'reset_size');

			$.wcpEditorFormHideControl('Image Map Settings', 'preserve_quality');
		} else {
			$.wcpEditorFormHideControl('Image Map Settings', 'image_map_width');
			$.wcpEditorFormHideControl('Image Map Settings', 'image_map_height');
			$.wcpEditorFormHideControl('Image Map Settings', 'reset_size');

			$.wcpEditorFormShowControl('Image Map Settings', 'preserve_quality');
		}

		if (parseInt(settings.fullscreen.enable_fullscreen_mode, 10) == 1) {
			$.wcpEditorFormShowControl('Image Map Settings', 'start_in_fullscreen_mode');
			$.wcpEditorFormShowControl('Image Map Settings', 'fullscreen_background');
			$.wcpEditorFormShowControl('Image Map Settings', 'fullscreen_button_position');
			$.wcpEditorFormShowControl('Image Map Settings', 'fullscreen_button_type');
			$.wcpEditorFormShowControl('Image Map Settings', 'fullscreen_button_color');
			$.wcpEditorFormShowControl('Image Map Settings', 'fullscreen_button_text_color');
		} else {
			$.wcpEditorFormHideControl('Image Map Settings', 'start_in_fullscreen_mode');
			$.wcpEditorFormHideControl('Image Map Settings', 'fullscreen_background');
			$.wcpEditorFormHideControl('Image Map Settings', 'fullscreen_button_position');
			$.wcpEditorFormHideControl('Image Map Settings', 'fullscreen_button_type');
			$.wcpEditorFormHideControl('Image Map Settings', 'fullscreen_button_color');
			$.wcpEditorFormHideControl('Image Map Settings', 'fullscreen_button_text_color');
		}
	}

	Editor.prototype.launchTooltipContentBuilder = function() {
		if ($('#imp-editor-tooltip-content-builder-wrap').length == 0) {
			// add HTML
			var html = '';

			html += '<div id="imp-editor-tooltip-content-builder-wrap">';
			html += '   <div id="imp-editor-tooltip-content-builder-background"></div>';
			html += '   <div id="imp-editor-tooltip-content-builder-close"><i class="fa fa-times" aria-hidden="true"></i></div>';
			html += '   <div id="imp-editor-tooltip-content-builder-tooltip-wrap" class="squares">';
			html += '       <div id="imp-editor-tooltip-content-builder" class="squares"></div>';
			html += '   </div>';
			html += '   <div id="imp-editor-tooltip-content-builder-description">';
			html += '       <p>Press the Done button when you are done editing, or click the Close button in the upper-right corner.</p>';
			html += '   </div>';
			html += '   <div class="wcp-editor-control-button" id="imp-editor-done-editing-tooltip">Done</div>';
			html += '</div>';

			$('body').append(html);
		} else {
			$('#imp-editor-tooltip-content-builder-wrap').show();
		}

		setTimeout(function() {
			$('#imp-editor-tooltip-content-builder-wrap').addClass('imp-visible');
		}, 10);

		// Set width of the content root
		var tooltipWidth = this.selectedSpot.tooltip_style.width;
		var tooltipBackgroundRGB = hexToRgb(this.selectedSpot.tooltip_style.background_color);
		var tooltipBackground = 'rgba('+ tooltipBackgroundRGB.r +', '+ tooltipBackgroundRGB.g +', '+ tooltipBackgroundRGB.b +', '+ this.selectedSpot.tooltip_style.background_opacity +')';

		$('#imp-editor-tooltip-content-builder-tooltip-wrap').css({
			width: tooltipWidth,
			background: tooltipBackground
		});

		// initialize content builder
		$.squaresInitWithSettings($('#imp-editor-tooltip-content-builder'), this.selectedSpot.tooltip_content.squares_settings);
		$.squaresShowEditorWindow(20, 20);
	}
	Editor.prototype.doneEditingTooltip = function() {
		var squarea_settings = $.squaresGetCurrentSettings($('#imp-editor-tooltip-content-builder'));
		var html = $.squaresGenerateHTML($('#imp-editor-tooltip-content-builder'));

		this.selectedSpot.tooltip_content.squares_settings = squarea_settings;

		this.redraw();
	}

	Editor.prototype.getCompressedSettings = function() {
		var compressed = $.extend(true, {}, settings);
		var compressedSpots = [];

		for (var i=0; i<compressed.spots.length; i++) {
			compressedSpots[i] = $.wcpCompress(compressed.spots[i], default_spot_settings);

			compressedSpots[i].x = Math.round(compressedSpots[i].x * 1000) / 1000;
			compressedSpots[i].y = Math.round(compressedSpots[i].y * 1000) / 1000;

			if (compressedSpots[i].width) {
				compressedSpots[i].width = Math.round(compressedSpots[i].width * 1000) / 1000;
			}
			if (compressedSpots[i].height) {
				compressedSpots[i].height = Math.round(compressedSpots[i].height * 1000) / 1000;
			}
		}

		compressed = $.wcpCompress(settings, default_settings);
		compressed.spots = compressedSpots;

		return compressed;
	}

	function loadImage(image, cbLoading, cbComplete, cbError) {
		if (!image.complete || image.naturalWidth === undefined || image.naturalHeight === undefined) {
			cbLoading();
			$(image).on('load', function() {
				$(image).off('load');
				cbComplete();
			});
			$(image).on('error', function() {
				$(image).off('error');
				cbError();
			});
		} else {
			cbComplete();
		}
	}

	function hexToRgb(hex) {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	}
	function abs_to_rel(val, min, max) {
		return ((min + max) / val) * 100;
	}
	function rel_to_abs(val, min, max) {
		return ((min + max) * val) * 100;
	}
	function screenToCanvasSpace(x, y, canvas) {
		return {
			x: Math.round((x - canvas.offset().left) * 1000) / 1000,
			y: Math.round((y - canvas.offset().top) * 1000) / 1000
		}
	}
	function relLocalToRelCanvasSpace(p, localSpace) {
		return {
			x: (localSpace.width)*(p.x / 100) + localSpace.x,
			y: (localSpace.height)*(p.y / 100) + localSpace.y
		}
	}
	function relCanvasToRelLocalSpace(p, localSpace) {
		return {
			x: ((p.x - localSpace.x)/(localSpace.width))*100,
			y: ((p.y - localSpace.y)/(localSpace.height))*100
		}
	}

	function limitToCanvas(x, y) {
		if (x < 0) x = 0;
		if (x > 100) x = 100;
		if (y < 0) y = 0;
		if (y > 100) y = 100;

		return {
			x: Math.round(x * 1000) / 1000,
			y: Math.round(y * 1000) / 1000
		}
	}
	function isPointInsidePolygon(point, vs) {
		// ray-casting algorithm based on
		// http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

		var x = point.x, y = point.y;

		var inside = false;
		for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
			var xi = vs[i][0], yi = vs[i][1];
			var xj = vs[j][0], yj = vs[j][1];

			var intersect = ((yi > y) != (yj > y))
			&& (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
			if (intersect) inside = !inside;
		}

		return inside;
	}

	function Vector2(x, y) 
	{
		this.x = x;
		this.y = y;
	}
	Vector2.prototype.add = function(other) {
		return new Vector2(this.x + other.x, this.y + other.y);
	};
	Vector2.prototype.subtract = function(other) {
		return new Vector2(this.x - other.x, this.y - other.y);
	};
	Vector2.prototype.scale = function(scalar) {
		return new Vector2(this.x*scalar, this.y*scalar);
	};
	Vector2.prototype.normalized = function() {
		var magnitude = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
		return new Vector2(this.x/magnitude, this.y/magnitude);
	};
	Vector2.prototype.dot = function(other) {
		return this.x*other.x + this.y*other.y;
	};
	Vector2.prototype.closestPointOnLine = function(pt1, pt2) {
		function dist2(pt1, pt2) { 
			return Math.pow(pt1.x - pt2.x, 2) + Math.pow(pt1.y - pt2.y, 2);
		}
		
		var l2 = dist2(pt1, pt2);
		if (l2 == 0) 
			return dist2(this, v);
		
		var t = ((this.x - pt1.x) * (pt2.x - pt1.x) + (this.y - pt1.y) * (pt2.y - pt1.y)) / l2;
		
		if (t < 0) 
			return pt1;
		if (t > 1) 
			return pt2;
		
		return new Vector2(pt1.x + t * (pt2.x - pt1.x), pt1.y + t * (pt2.y - pt1.y));
	}
	Vector2.prototype.vector2Args = function(x, y) {
		x = x || 0;
		y = y || 0;
		return [this.x + x, this.y + y];
	};


})(jQuery, window, document);

;(function ( $, window, document, undefined) {
    // Register Forms
    $.wcpEditorCreateForm({
        name: 'Image Map Settings',
        controlGroups: [
            {
                groupName: 'general',
                groupTitle: 'General',
                groupIcon: 'fa fa-cog',
                controls: [
                    {
                        type: 'text',
                        name: 'image_map_name',
                        title: 'Image Map Name',
                        value: $.imageMapProDefaultSettings.general.name
                    },
                    {
                        type: 'text',
                        name: 'image_map_shortcode',
                        title: 'Shortcode',
                        value: ''
                    },
                    {
                        type: 'switch',
                        name: 'responsive',
                        title: 'Responsive',
                        value: $.imageMapProDefaultSettings.general.responsive,
                    },
                    {
                        type: 'switch',
                        name: 'preserve_quality',
                        title: 'Preserve Quality',
                        value: $.imageMapProDefaultSettings.general.preserve_quality,
                    },
                    {
                        type: 'int',
                        name: 'image_map_width',
                        title: 'Width',
                        value: $.imageMapProDefaultSettings.general.width,
                    },
                    {
                        type: 'int',
                        name: 'image_map_height',
                        title: 'Height',
                        value: $.imageMapProDefaultSettings.general.height
                    },
                    {
                        type: 'button',
                        name: 'reset_size',
                        title: 'Reset Size',
                        options: { event_name: 'button-reset-size-clicked' },
                        value: undefined
                    },
                    {
                        type: 'select',
                        name: 'pageload_animation',
                        title: 'Page Load Animation',
                        options: [
                            { value: 'none', title: 'None' },
                            { value: 'grow', title: 'Grow' },
                            { value: 'fade', title: 'Fade' },
                        ],
                        value: $.imageMapProDefaultSettings.general.pageload_animation
                    },
                    {
                        type: 'switch',
                        name: 'late_initialization',
                        title: 'Late Initialization',
                        value: $.imageMapProDefaultSettings.general.late_initialization,
                    },
                    {
                        type: 'switch',
                        name: 'center_image_map',
                        title: 'Center Image Map',
                        value: $.imageMapProDefaultSettings.general.center_image_map,
                    },
                ]
            },
            {
                groupName: 'image',
                groupTitle: 'Image',
                groupIcon: 'fa fa-photo',
                controls: [
                    {
                        type: 'wp media upload',
                        name: 'image_url',
                        title: 'Image URL',
                        value: $.imageMapProDefaultSettings.general.image_url
                    },
                ]
            },
            {
                groupName: 'tooltips',
                groupTitle: 'Tooltips',
                groupIcon: 'fa fa-comment',
                controls: [
                    {
                        type: 'switch',
                        name: 'sticky_tooltips',
                        title: 'Sticky Tooltips',
                        value: $.imageMapProDefaultSettings.general.sticky_tooltips,
                    },
                    {
                        type: 'switch',
                        name: 'constrain_tooltips',
                        title: 'Constrain Tooltips',
                        value: $.imageMapProDefaultSettings.general.constrain_tooltips,
                    },
                    {
                        type: 'select',
                        name: 'tooltip_animation',
                        title: 'Tooltip Animation',
                        options: [
                            { value: 'none', title: 'None' },
                            { value: 'grow', title: 'Grow' },
                            { value: 'fade', title: 'Fade' },
                        ],
                        value: $.imageMapProDefaultSettings.general.tooltip_animation
                    },
                    {
                        type: 'select',
                        name: 'fullscreen_tooltips',
                        title: 'Fullscreen Tooltips',
                        options: [
                            { value: 'none', title: 'None' },
                            { value: 'mobile-only', title: 'Mobile Only' },
                            { value: 'always', title: 'Always' },
                        ],
                        value: $.imageMapProDefaultSettings.general.fullscreen_tooltips
                    },
                ]
            },
            {
                groupName: 'fullscreen',
                groupTitle: 'Fullscreen',
                groupIcon: 'fa fa-arrows-alt',
                controls: [
                    {
                        type: 'switch',
                        name: 'enable_fullscreen_mode',
                        title: 'Enable Fullscreen Mode',
                        value: $.imageMapProDefaultSettings.fullscreen.enable_fullscreen_mode,
                    },
                    {
                        type: 'switch',
                        name: 'start_in_fullscreen_mode',
                        title: 'Start in Fullscreen Mode',
                        value: $.imageMapProDefaultSettings.fullscreen.start_in_fullscreen_mode,
                    },
                    {
                        type: 'color',
                        name: 'fullscreen_background',
                        title: 'Fullscreen Background',
                        value: $.imageMapProDefaultSettings.fullscreen.fullscreen_background,
                    },
                    {
                        type: 'fullscreen button position',
                        name: 'fullscreen_button_position',
                        title: 'Fullscreen Button Position',
                        value: 1 // 0 = top left, 1 = top center, 2 = top right, 3 = bottom right, 4 = bottom center, 5 = bottom left
                    },
                    {
                        type: 'button group',
                        name: 'fullscreen_button_type',
                        title: 'Button Type',
                        options: [
                            { value: 'icon', title: 'Icon' },
                            { value: 'text', title: 'Text' },
                            { value: 'icon_and_text', title: 'Icon and Text' }
                        ],
                        value: $.imageMapProDefaultSettings.fullscreen.fullscreen_button_type,
                    },
                    {
                        type: 'color',
                        name: 'fullscreen_button_color',
                        title: 'Button Color',
                        value: $.imageMapProDefaultSettings.fullscreen.fullscreen_button_color,
                    },
                    {
                        type: 'color',
                        name: 'fullscreen_button_text_color',
                        title: 'Button Icon/Text Color',
                        value: $.imageMapProDefaultSettings.fullscreen.fullscreen_button_text_color,
                    }
                ]
            },
            {
                groupName: 'custom_code',
                groupTitle: 'Custom Code',
                groupIcon: 'fa fa-code',
                controls: [
                    {
                        type: 'textarea',
                        name: 'custom_css',
                        title: 'Custom CSS',
                        value: $.imageMapProDefaultSettings.custom_code.custom_css,
                    },
                    {
                        type: 'textarea',
                        name: 'custom_js',
                        title: 'Custom JS',
                        value: $.imageMapProDefaultSettings.custom_code.custom_js,
                    }
                ]
            }
        ]
    });
    $.wcpEditorCreateForm({
        name: 'Shape Settings',
        controlGroups: [
            {
                groupName: 'general',
                groupTitle: 'General',
                groupIcon: 'fa fa-cog',
                controls: [
                    {
                        type: 'float',
                        name: 'x',
                        title: 'X',
                        value: $.imageMapProDefaultSpotSettings.x
                    },
                    {
                        type: 'float',
                        name: 'y',
                        title: 'Y',
                        value: $.imageMapProDefaultSpotSettings.y
                    },
                    {
                        type: 'float',
                        name: 'width',
                        title: 'Width',
                        value: $.imageMapProDefaultSpotSettings.width
                    },
                    {
                        type: 'float',
                        name: 'height',
                        title: 'Height',
                        value: $.imageMapProDefaultSpotSettings.height
                    },
                ]
            },
            {
                groupName: 'actions',
                groupTitle: 'Actions',
                groupIcon: 'fa fa-bolt',
                controls: [
                    {
                        type: 'select',
                        name: 'mouseover',
                        title: 'Mouseover Action',
                        options: [
                            { value: 'no-action', title: 'No Action' },
                            { value: 'show-tooltip', title: 'Show Tooltip' },
                        ],
                        value: $.imageMapProDefaultSpotSettings.actions.mouseover
                    },
                    {
                        type: 'select',
                        name: 'click',
                        title: 'Click Action',
                        options: [
                            { value: 'no-action', title: 'No Action' },
                            { value: 'show-tooltip', title: 'Show Tooltip' },
                            { value: 'follow-link', title: 'Follow Link' },
                        ],
                        value: $.imageMapProDefaultSpotSettings.actions.click
                    },
                    {
                        type: 'text',
                        name: 'link',
                        title: 'Link URL',
                        value: $.imageMapProDefaultSpotSettings.actions.link
                    },
                    {
                        type: 'switch',
                        name: 'open_link_in_new_window',
                        title: 'Open Link in New Window',
                        value: $.imageMapProDefaultSpotSettings.actions.open_link_in_new_window
                    },
                ]
            },
            {
                groupName: 'icon',
                groupTitle: 'Icon',
                groupIcon: 'fa fa-map-marker',
                controls: [
                    {
                        type: 'switch',
                        name: 'use_icon',
                        title: 'Use Icon',
                        value: $.imageMapProDefaultSpotSettings.default_style.use_icon
                    },
                    {
                        type: 'button group',
                        name: 'icon_type',
                        title: 'Icon Type',
                        options: [
                            { value: 'library', title: 'Library' },
                            { value: 'custom', title: 'Custom' },
                        ],
                        value: $.imageMapProDefaultSpotSettings.default_style.icon_type
                    },
                    {
                        type: 'button',
                        name: 'choose_icon_from_library',
                        title: 'Choose from Library',
                        options: { event_name: 'button-choose-icon-clicked' },
                        value: undefined
                    },
                    {
                        type: 'text',
                        name: 'icon_svg_path',
                        title: 'Icon SVG Path',
                        value: $.imageMapProDefaultSpotSettings.default_style.icon_svg_path,
						render: false
                    },
                    {
                        type: 'text',
                        name: 'icon_svg_viewbox',
                        title: 'Icon SVG Viewbox',
                        value: $.imageMapProDefaultSpotSettings.default_style.icon_svg_viewbox,
						render: false
                    },
                    {
                        type: 'text',
                        name: 'icon_url',
                        title: 'Icon URL',
                        value: $.imageMapProDefaultSpotSettings.default_style.icon_url
                    },
                    {
                        type: 'switch',
                        name: 'icon_is_pin',
                        title: 'Icon is a Pin',
                        value: $.imageMapProDefaultSpotSettings.default_style.icon_is_pin
                    },
                    {
                        type: 'switch',
                        name: 'icon_shadow',
                        title: 'Icon Shadow',
                        value: $.imageMapProDefaultSpotSettings.default_style.icon_shadow
                    },
                ]
            },
            {
                groupName: 'default_style',
                groupTitle: 'Default Style',
                groupIcon: 'fa fa-paint-brush',
                controls: [
                    {
                        type: 'slider',
                        name: 'opacity',
                        title: 'Opacity',
                        options: { min: 0, max: 1 },
                        value: $.imageMapProDefaultSpotSettings.default_style.opacity
                    },
                    {
                        type: 'color',
                        name: 'icon_fill',
                        title: 'SVG Icon Fill Color',
                        value: $.imageMapProDefaultSpotSettings.default_style.icon_fill
                    },
                    {
                        type: 'int',
                        name: 'border_radius',
                        title: 'Border Radius',
                        value: $.imageMapProDefaultSpotSettings.default_style.border_radius
                    },
                    {
                        type: 'color',
                        name: 'background_color',
                        title: 'Background Color',
                        value: $.imageMapProDefaultSpotSettings.default_style.background_color
                    },
                    {
                        type: 'slider',
                        name: 'background_opacity',
                        title: 'Background Opacity',
                        options: { min: 0, max: 1 },
                        value: $.imageMapProDefaultSpotSettings.default_style.background_opacity
                    },
                    {
                        type: 'slider',
                        name: 'border_width',
                        title: 'Border Width',
                        options: { min: 0, max: 20, type: 'int' },
                        value: $.imageMapProDefaultSpotSettings.default_style.border_width
                    },
                    {
                        type: 'select',
                        name: 'border_style',
                        title: 'Border Style',
                        options: [
                            { value: 'none', title: 'None' },
                            { value: 'hidden', title: 'Hidden' },
                            { value: 'solid', title: 'Solid' },
                            { value: 'dotted', title: 'Dotted' },
                            { value: 'dashed', title: 'Dashed' },
                            { value: 'double', title: 'Double' },
                            { value: 'groove', title: 'Groove' },
                            { value: 'inset', title: 'Inset' },
                            { value: 'outset', title: 'Outset' },
                        ],
                        value: $.imageMapProDefaultSpotSettings.default_style.border_style
                    },
                    {
                        type: 'color',
                        name: 'border_color',
                        title: 'Border Color',
                        value: $.imageMapProDefaultSpotSettings.default_style.border_color
                    },
                    {
                        type: 'slider',
                        name: 'border_opacity',
                        title: 'Border Opacity',
                        options: { min: 0, max: 1 },
                        value: $.imageMapProDefaultSpotSettings.default_style.border_opacity
                    },
                    {
                        type: 'color',
                        name: 'fill',
                        title: 'Fill',
                        value: $.imageMapProDefaultSpotSettings.default_style.fill
                    },
                    {
                        type: 'slider',
                        name: 'fill_opacity',
                        title: 'Fill Opacity',
                        options: { min: 0, max: 1 },
                        value: $.imageMapProDefaultSpotSettings.default_style.fill_opacity
                    },
                    {
                        type: 'color',
                        name: 'stroke_color',
                        title: 'Stroke Color',
                        value: $.imageMapProDefaultSpotSettings.default_style.stroke_color
                    },
                    {
                        type: 'slider',
                        name: 'stroke_opacity',
                        title: 'Stroke Opacity',
                        options: { min: 0, max: 1 },
                        value: $.imageMapProDefaultSpotSettings.default_style.stroke_opacity
                    },
                    {
                        type: 'slider',
                        name: 'stroke_width',
                        title: 'Stroke Width',
                        options: { min: 0, max: 20, type: 'int' },
                        value: $.imageMapProDefaultSpotSettings.default_style.stroke_width
                    },
                    {
                        type: 'text',
                        name: 'stroke_dasharray',
                        title: 'Stroke Dasharray',
                        value: $.imageMapProDefaultSpotSettings.default_style.stroke_dasharray
                    },
                    {
                        type: 'select',
                        name: 'stroke_linecap',
                        title: 'Stroke Linecap',
                        options: [
                            { value: 'butt', title: 'Butt' },
                            { value: 'round', title: 'Round' },
                            { value: 'square', title: 'Square' },
                        ],
                        value: $.imageMapProDefaultSpotSettings.default_style.stroke_linecap
                    },
                ]
            },
            {
                groupName: 'mouseover_style',
                groupTitle: 'Mouseover Style',
                groupIcon: 'fa fa-paint-brush',
                controls: [
                    {
                        type: 'button',
                        name: 'copy_from_default_styles',
                        title: 'Copy from Default Styles',
                        options: { event_name: 'button-copy-from-default-styles-clicked' },
                        value: undefined
                    },
                    {
                        type: 'slider',
                        name: 'mouseover_opacity',
                        title: 'Opacity',
                        options: { min: 0, max: 1 },
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.opacity
                    },
                    {
                        type: 'color',
                        name: 'mouseover_icon_fill',
                        title: 'SVG Icon Fill Color',
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.icon_fill
                    },
                    {
                        type: 'int',
                        name: 'mouseover_border_radius',
                        title: 'Border Radius',
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.border_radius
                    },
                    {
                        type: 'color',
                        name: 'mouseover_background_color',
                        title: 'Background Color',
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.background_color
                    },
                    {
                        type: 'slider',
                        name: 'mouseover_background_opacity',
                        title: 'Background Opacity',
                        options: { min: 0, max: 1 },
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.background_opacity
                    },
                    {
                        type: 'slider',
                        name: 'mouseover_border_width',
                        title: 'Border Width',
                        options: { min: 0, max: 20, type: 'int' },
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.border_width
                    },
                    {
                        type: 'select',
                        name: 'mouseover_border_style',
                        title: 'Border Style',
                        options: [
                            { value: 'none', title: 'None' },
                            { value: 'hidden', title: 'Hidden' },
                            { value: 'solid', title: 'Solid' },
                            { value: 'dotted', title: 'Dotted' },
                            { value: 'dashed', title: 'Dashed' },
                            { value: 'double', title: 'Double' },
                            { value: 'groove', title: 'Groove' },
                            { value: 'inset', title: 'Inset' },
                            { value: 'outset', title: 'Outset' },
                        ],
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.border_style
                    },
                    {
                        type: 'color',
                        name: 'mouseover_border_color',
                        title: 'Border Color',
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.border_color
                    },
                    {
                        type: 'slider',
                        name: 'mouseover_border_opacity',
                        title: 'Border Opacity',
                        options: { min: 0, max: 1 },
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.border_opacity
                    },
                    {
                        type: 'color',
                        name: 'mouseover_fill',
                        title: 'Fill',
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.fill
                    },
                    {
                        type: 'slider',
                        name: 'mouseover_fill_opacity',
                        title: 'Fill Opacity',
                        options: { min: 0, max: 1 },
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.fill_opacity
                    },
                    {
                        type: 'color',
                        name: 'mouseover_stroke_color',
                        title: 'Stroke Color',
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.stroke_color
                    },
                    {
                        type: 'slider',
                        name: 'mouseover_stroke_opacity',
                        title: 'Stroke Opacity',
                        options: { min: 0, max: 1 },
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.stroke_opacity
                    },
                    {
                        type: 'slider',
                        name: 'mouseover_stroke_width',
                        title: 'Stroke Width',
                        options: { min: 0, max: 20, type: 'int' },
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.stroke_width
                    },
                    {
                        type: 'text',
                        name: 'mouseover_stroke_dasharray',
                        title: 'Stroke Dasharray',
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.stroke_dasharray
                    },
                    {
                        type: 'select',
                        name: 'mouseover_stroke_linecap',
                        title: 'Stroke Linecap',
                        options: [
                            { value: 'butt', title: 'Butt' },
                            { value: 'round', title: 'Round' },
                            { value: 'square', title: 'Square' },
                        ],
                        value: $.imageMapProDefaultSpotSettings.mouseover_style.stroke_linecap
                    },
                ]
            },
            {
                groupName: 'tooltip_settings',
                groupTitle: 'Tooltip Settings',
                groupIcon: 'fa fa-comment',
                controls: [
                    {
                        type: 'int',
                        name: 'tooltip_border_radius',
                        title: 'Border Radius',
                        value: $.imageMapProDefaultSpotSettings.tooltip_style.border_radius
                    },
                    {
                        type: 'int',
                        name: 'tooltip_padding',
                        title: 'Padding',
                        value: $.imageMapProDefaultSpotSettings.tooltip_style.padding
                    },
                    {
                        type: 'color',
                        name: 'tooltip_background_color',
                        title: 'Background Color',
                        value: $.imageMapProDefaultSpotSettings.tooltip_style.background_color
                    },
                    {
                        type: 'slider',
                        name: 'tooltip_background_opacity',
                        title: 'Background Opacity',
                        options: { min: 0, max: 1 },
                        value: $.imageMapProDefaultSpotSettings.tooltip_style.background_opacity
                    },
                    {
                        type: 'select',
                        name: 'tooltip_position',
                        title: 'Position',
                        options: [
                            { value: 'top', title: 'Top' },
                            { value: 'bottom', title: 'Bottom' },
                            { value: 'left', title: 'Left' },
                            { value: 'right', title: 'Right' },
                        ],
                        value: $.imageMapProDefaultSpotSettings.tooltip_style.position
                    },
                    {
                        type: 'switch',
                        name: 'tooltip_auto_width',
                        title: 'Auto Width',
                        value: $.imageMapProDefaultSpotSettings.tooltip_style.auto_width
                    },
                    {
                        type: 'int',
                        name: 'tooltip_width',
                        title: 'Width',
                        value: $.imageMapProDefaultSpotSettings.tooltip_style.width
                    },
                ]
            },
            {
                groupName: 'tooltip_content',
                groupTitle: 'Tooltip Content',
                groupIcon: 'fa fa-paragraph',
                controls: [
                    {
                        type: 'textarea',
                        name: 'plain_text',
                        title: 'Tooltip Content',
                        value: $.imageMapProDefaultSpotSettings.tooltip_content.plain_text
                    },
                    {
                        type: 'color',
                        name: 'plain_text_color',
                        title: 'Text Color',
                        value: $.imageMapProDefaultSpotSettings.tooltip_content.plain_text_color
                    },
                    {
                        type: 'object',
                        name: 'squares_settings',
                        title: 'Squares Settings',
                        value: $.imageMapProDefaultSpotSettings.tooltip_content.squares_settings,
						render: false
                    },
                    {
                        type: 'button',
                        name: 'launch_content_builder',
                        title: 'Launch Content Builder',
                        options: { event_name: 'button-launch-content-builder-clicked' },
                        value: undefined
                    },
                ]
            },
        ]
    });

    // Register Tour
    $.wcpTourRegister({
        name: 'Image Map Pro Editor Tour',
        welcomeScreen: {
            title: 'Welcome!',
            text: 'This is a guided tour to get you started quickly with Image Map Pro.<br>Click the button below to begin!',
            startButtonTitle: 'Take the Tour',
            cancelButtonTitle: 'Or skip this guide',
        },
        steps: [
            {
                title: 'Drawing Shapes',
                text: 'Use the toolbar on the left to draw different kinds of shapes.<br>Choose between Spots/Icons, Ellipses, Rectangles or polygons.',
                tip: {
                    title: 'Toolbar',
                    subtitle: 'Watch Video',
                    media: {
                        type: 'video',
                        url_mp4: 'https://webcraftplugins.com/uploads/image-map-pro/videos/01-drawing-shapes.mp4',
                        url_webm: 'https://webcraftplugins.com/uploads/image-map-pro/videos/01-drawing-shapes.mp4',
                        url_ogv: 'https://webcraftplugins.com/uploads/image-map-pro/videos/01-drawing-shapes.mp4',
                    },
                    position: 'bottom-left',
                    highlightRect: true
                },
            },
            {
                title: 'Customize Your Shapes',
                text: 'Change how the shapes look by selecting a shape <br>and clicking “Shape” on the left, and then “Default Style” or “Mouseover Style”.',
                tip: {
                    title: 'Shape Styles',
                    subtitle: 'Watch Video',
                    media: {
                        type: 'video',
                        url_mp4: 'https://webcraftplugins.com/uploads/image-map-pro/videos/02-customizing-shapes.mp4',
                        url_webm: 'https://webcraftplugins.com/uploads/image-map-pro/videos/02-customizing-shapes.mp4',
                        url_ogv: 'https://webcraftplugins.com/uploads/image-map-pro/videos/02-customizing-shapes.mp4',
                    },
                    position: 'bottom-right',
                    arrowStyle: 'transform: scaleX(-1);',
                    highlightRect: true
                }
            },
            {
                title: 'Edit and Delete Shapes',
                text: 'From the list on the right you can do various things with your shapes, like <br>copy-pasting styles, reordering them, or deleting the shapes.',
                tip: {
                    title: 'Shapes List',
                    subtitle: 'Watch Video',
                    media: {
                        type: 'video',
                        url_mp4: 'https://webcraftplugins.com/uploads/image-map-pro/videos/03-list.mp4',
                        url_webm: 'https://webcraftplugins.com/uploads/image-map-pro/videos/03-list.mp4',
                        url_ogv: 'https://webcraftplugins.com/uploads/image-map-pro/videos/03-list.mp4',
                    },
                    position: 'bottom-left',
                    highlightRect: true
                }
            },
            {
                title: 'Use Icons',
                text: 'To have an icon, place a Spot shape on the image, then open the “Icon” tab on the left to customize it.<br>Choose from 150 built-in SVG icons, or use your own!',
                tip: {
                    title: 'Icon Settings',
                    subtitle: 'Watch Video',
                    media: {
                        type: 'video',
                        url_mp4: 'https://webcraftplugins.com/uploads/image-map-pro/videos/04-icons.mp4',
                        url_webm: 'https://webcraftplugins.com/uploads/image-map-pro/videos/04-icons.mp4',
                        url_ogv: 'https://webcraftplugins.com/uploads/image-map-pro/videos/04-icons.mp4',
                    },
                    position: 'bottom-right',
                    highlightRect: true
                }
            },
            {
                title: 'Tooltip Content Builder',
                text: 'Use a fully featured content builder to add rich content to the tooltips. <br>You can launch the content builder by selecting a shape and opening the "Tooltip Content" settings tab.',
                tip: {
                    title: 'Tooltip Content Settings',
                    subtitle: 'Watch Video',
                    media: {
                        type: 'video',
                        url_mp4: 'https://webcraftplugins.com/uploads/image-map-pro/videos/05-content-builder.mp4',
                        url_webm: 'https://webcraftplugins.com/uploads/image-map-pro/videos/05-content-builder.mp4',
                        url_ogv: 'https://webcraftplugins.com/uploads/image-map-pro/videos/05-content-builder.mp4',
                    },
                    position: 'top-right',
                    highlightRect: true
                }
            },
            {
                title: 'Responsive &amp; Fullscreen Tooltips',
                text: 'Image Map Pro is fully optimized for mobile devices. It\'s responsive, <br>and you even have the option for fullscreen tooltips on mobile. To change these settings, open the "General" settings tab.',
                tip: {
                    title: 'Image Map Settings',
                    subtitle: 'Watch Video',
                    media: {
                        type: 'video',
                        url_mp4: 'https://webcraftplugins.com/uploads/image-map-pro/videos/06-responsive.mp4',
                        url_webm: 'https://webcraftplugins.com/uploads/image-map-pro/videos/06-responsive.mp4',
                        url_ogv: 'https://webcraftplugins.com/uploads/image-map-pro/videos/06-responsive.mp4',
                    },
                    position: 'bottom-right',
                    highlightRect: true
                }
            },
            {
                title: 'Preview Mode',
                text: 'See how your image map will look like by entering Preview Mode. <br>You can continue to tweak settings and see the changes live!',
                tip: {
                    title: 'Preview Mode Button',
                    subtitle: 'Watch Video',
                    media: {
                        type: 'video',
                        url_mp4: 'https://webcraftplugins.com/uploads/image-map-pro/videos/07-preview-mode.mp4',
                        url_webm: 'https://webcraftplugins.com/uploads/image-map-pro/videos/07-preview-mode.mp4',
                        url_ogv: 'https://webcraftplugins.com/uploads/image-map-pro/videos/07-preview-mode.mp4',
                    },
                    position: 'bottom-right',
                    highlightRect: true
                }
            },
            {
                title: 'Save and Load',
                text: 'You can have as many image maps as you want, <br>and switch between them any time. Just don\'t forget to save!',
                tip: {
                    title: 'Save/Load Buttons',
                    subtitle: 'Watch Video',
                    media: {
                        type: 'video',
                        url_mp4: 'https://webcraftplugins.com/uploads/image-map-pro/videos/08-save-load.mp4',
                        url_webm: 'https://webcraftplugins.com/uploads/image-map-pro/videos/08-save-load.mp4',
                        url_ogv: 'https://webcraftplugins.com/uploads/image-map-pro/videos/08-save-load.mp4',
                    },
                    position: 'bottom-right',
                    highlightRect: true
                }
            },
            {
                title: 'Publish',
                text: 'To insert the image map on a page or post, choose a shortcode and paste it anywhere on your site.',
                tip: {
                    title: 'Shortcode Field',
                    // subtitle: 'Watch Video',
                    // media: {
                    //     type: 'video',
                    //     url_mp4: 'https://webcraftplugins.com/uploads/image-map-pro/videos/08-save-load.mp4',
                    //     url_webm: 'https://webcraftplugins.com/uploads/image-map-pro/videos/08-save-load.mp4',
                    //     url_ogv: 'https://webcraftplugins.com/uploads/image-map-pro/videos/08-save-load.mp4',
                    // },
                    position: 'bottom-right',
                    highlightRect: true
                }
            },
            {
                title: 'Import and Export',
                text: 'You can also import and export your data, <br>in case you need to switch devices, or save your work somewhere else.',
                tip: {
                    title: 'Import/Export Buttons',
                    subtitle: 'Watch Video',
                    media: {
                        type: 'video',
                        url_mp4: 'https://webcraftplugins.com/uploads/image-map-pro/videos/09-import-export.mp4',
                        url_webm: 'https://webcraftplugins.com/uploads/image-map-pro/videos/09-import-export.mp4',
                        url_ogv: 'https://webcraftplugins.com/uploads/image-map-pro/videos/09-import-export.mp4',
                    },
                    position: 'bottom-right',
                    highlightRect: true
                }
            },
        ]
    });

    var extraMainButtons = [
        {
            name: 'import',
            icon: 'fa fa-arrow-down',
            title: 'Import'
        },
        {
            name: 'export',
            icon: 'fa fa-arrow-up',
            title: 'Export'
        },
        {
            name: 'fullscreen',
            icon: 'fa fa-arrows-alt',
            title: 'Fullscreen'
        },
        {
            name: 'purchase',
            icon: 'fa fa-shopping-cart',
            title: 'Purchase',
            tooltip: 'Purchase Image Map Pro to unlock premium features.'
        },
        {
            name: 'help',
            icon: 'fa fa-question-circle',
            title: 'Help'
        }
    ];

    if ($('#instance-options-wrap').data('purchase-code').length > 0) {
        extraMainButtons.splice(0, 1);
    }

    $.WCPEditorSettings = {
        mainTabs: [
            {
                name: 'Image Map',
                icon: 'fa fa-cog',
                title: 'Image Map Settings'
            },
            {
                name: 'Shape',
                icon: 'fa fa-object-ungroup',
                title: 'Selected Shape Settings'
            }
        ],
        toolbarButtons: [
            [
                {
                    name: 'spot',
                    icon: 'fa fa-map-marker',
                    title: 'Icon'
                },
                {
                    name: 'oval',
                    customIcon: '<div style="width: 14px; height: 14px; border: 2px solid #222; border-radius: 50px;"></div>',
                    title: 'Ellipse'
                },
                {
                    name: 'rect',
                    customIcon: '<div style="width: 20px; height: 14px; border: 2px solid #222; border-radius: 5px;"></div>',
                    title: 'Rectangle'
                },
                {
                    name: 'poly',
                    customIcon: '<svg width="24px" height="24px" viewport="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" style="stroke: black; stroke-width: 2px;" points="20,20 18,4 7,7 4,20"></polygon><ellipse cx="20" cy="20" rx="3" ry="3"></ellipse><ellipse cx="18" cy="4" rx="3" ry="3"></ellipse><ellipse cx="7" cy="7" rx="3" ry="3"></ellipse><ellipse cx="4" cy="20" rx="3" ry="3"></ellipse></svg>',
                    title: 'Polygon. This is a premium feature, you can draw only one polygon to try it out.'
                },
            ],
            [
                {
                    name: 'select',
                    icon: 'fa fa-mouse-pointer',
                    title: 'Select'
                },
                {
                    name: 'zoom-in',
                    icon: 'fa fa-search-plus',
                    title: 'Zoom In (CTRL +)',
                },
                {
                    name: 'zoom-out',
                    icon: 'fa fa-search-minus',
                    title: 'Zoom Out (CTRL -)'
                },
                {
                    name: 'drag',
                    icon: 'fa fa-hand-paper-o',
                    title: 'Drag Canvas (Hold Spacebar and Drag)'
                },
                {
                    name: 'reset',
                    customIcon: '1:1',
                    title: 'Reset Canvas Zoom & Pan (CTRL + 0)',
                    kind: 'button'
                },
            ]
        ],   
        extraMainButtons: extraMainButtons,
        listItemButtons: [
           
        ],
        listItemTitle: 'Shapes',
        listItemTitleButtons: [
            {
                name: 'rename',
                icon: 'fa fa-pencil',
                title: 'Rename'
            },
            {
                name: 'copy',
                icon: 'fa fa-files-o',
                title: 'Copy Style'
            },
            {
                name: 'paste',
                icon: 'fa fa-clipboard',
                title: 'Paste Style'
            },
            {
                name: 'duplicate',
                icon: 'fa fa-clone',
                title: 'Duplicate'
            },
            {
                name: 'delete',
                icon: 'fa fa-trash-o',
                title: 'Delete'
            },
        ],
        fullscreenButton: true,
        newButton: true,
        helpButton: false,
        previewToggle: true
    };

    // Init Editor
    $(document).ready(function() {
        $.image_map_pro_init_editor(undefined, $.WCPEditorSettings);
    });
})( jQuery, window, document );

;(function ( $, window, document, undefined ) {
    $.image_map_pro_editor_content = function() {
        var settings = $.image_map_pro_editor_current_settings();
        var html = '';

        if (settings.editor.tool == 'zoom-in') {
            html += '<div class="imp-editor-canvas-overlay" id="imp-editor-canvas-overlay-zoom-in"></div>';
        }
        if (settings.editor.tool == 'zoom-out') {
            html += '<div class="imp-editor-canvas-overlay" id="imp-editor-canvas-overlay-zoom-out"></div>';
        }
        if (settings.editor.tool == 'drag' || settings.editor.state.dragging) {
            html += '<div class="imp-editor-canvas-overlay" id="imp-editor-canvas-overlay-drag"></div>';
        }

        html += '<img id="imp-editor-image" src="'+ settings.image.url +'">'
        html += '<div id="imp-editor-shapes-container">';

        for (var i=0; i<settings.spots.length; i++) {
            var s = settings.spots[i];

            if (s.type == 'spot') {
                if (parseInt(s.default_style.use_icon, 10) == 1) {
                    var style = '';
                    style += 'left: ' + s.x + '%;';
                    style += 'top: ' + s.y + '%;';

                    style += 'width: ' + s.width + 'px;';
                    style += 'height: ' + s.height + 'px;';
                    style += 'margin-left: -' + (s.width/2) + 'px;';
                    style += 'margin-top: -' + (s.height/2) + 'px;';
                    style += 'background-image: url('+ s.default_style.icon_url +')';
                    style += 'background-position: center;';
                    style += 'background-repeat: no-repeat;';

                    var iconStyle = '';
                    if (parseInt(s.default_style.icon_is_pin, 10) == 1) {
                        iconStyle += 'top: -50%;';
                        iconStyle += 'position: absolute;';
                    }

                    html += '<div class="imp-editor-shape imp-editor-spot" data-id="'+ s.id +'" data-editor-object-type="1" style="'+ style +'"><div class="imp-selection" style="border-radius: '+ s.default_style.border_radius +'px;"></div>';

                    if (s.default_style.icon_type == 'library') {
                        html += '   <svg style="'+ iconStyle +'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="'+ s.default_style.icon_svg_viewbox +'" xml:space="preserve" width="'+ s.width +'px" height="'+ s.height +'px">';
                        html += '       <path style="fill:'+ s.default_style.icon_fill +'" d="'+ s.default_style.icon_svg_path +'"></path>';
                        html += '   </svg>';
                    } else {
                        if (s.default_style.icon_url.length > 0) {
                            html += '<img style="'+ iconStyle +'" src="'+ s.default_style.icon_url +'">';
                        }
                    }
                    if (parseInt(s.default_style.icon_shadow, 10) == 1) {
                        var shadowStyle = '';
                        shadowStyle += 'width: ' + s.width + 'px;';
                        shadowStyle += 'height: ' + s.height + 'px;';
                        if (parseInt(s.default_style.icon_is_pin, 10) == 0) {
                            shadowStyle += 'top: '+ s.height/2 +'px;';
                        }
                        html += '<div style="'+ shadowStyle +'" class="imp-editor-shape-icon-shadow"></div>';
                    }

                    html += '</div>';
                } else {
                    var c_bg = hexToRgb(s.default_style.background_color);
                    var c_bo = hexToRgb(s.default_style.border_color);

                    var style = '';

                    style += 'left: ' + s.x + '%;';
                    style += 'top: ' + s.y + '%;';

                    style += 'width: ' + s.width + 'px;';
                    style += 'height: ' + s.height + 'px;';
                    style += 'margin-left: -' + (s.width/2) + 'px;';
                    style += 'margin-top: -' + (s.height/2) + 'px;';

                    style += 'background: rgba('+ c_bg.r +', '+ c_bg.g +', '+ c_bg.b +', '+ s.default_style.background_opacity +');';
                    // style += 'opacity: ' + s.default_style.opacity + ';';
                    style += 'border-color: rgba('+ c_bo.r +', '+ c_bo.g +', '+ c_bo.b +', '+ s.default_style.border_opacity +');';
                    style += 'border-width: ' + s.default_style.border_width + 'px;';
                    style += 'border-style: ' + s.default_style.border_style + ';';
                    style += 'border-radius: ' + s.default_style.border_radius + 'px;';

                    html += '<div class="imp-editor-shape imp-editor-spot" data-id="'+ s.id +'" data-editor-object-type="1" style="'+ style +'"><div class="imp-selection" style="border-radius: '+ s.default_style.border_radius +'px;"></div></div>';
                }
            }
            if (s.type == 'rect') {
                var c_bg = hexToRgb(s.default_style.background_color);
                var c_bo = hexToRgb(s.default_style.border_color);

                var style = '';

                style += 'left: ' + s.x + '%;';
                style += 'top: ' + s.y + '%;';

                style += 'width: ' + s.width + '%;';
                style += 'height: ' + s.height + '%;';

                style += 'background: rgba('+ c_bg.r +', '+ c_bg.g +', '+ c_bg.b +', '+ s.default_style.background_opacity +');';
                // style += 'opacity: ' + s.default_style.opacity + ';';
                style += 'border-color: rgba('+ c_bo.r +', '+ c_bo.g +', '+ c_bo.b +', '+ s.default_style.border_opacity +');';
                style += 'border-width: ' + s.default_style.border_width + 'px;';
                style += 'border-style: ' + s.default_style.border_style + ';';
                style += 'border-radius: ' + s.default_style.border_radius + 'px;';

                html += '<div class="imp-editor-shape imp-editor-rect" data-id="'+ s.id +'" data-editor-object-type="3" style="'+ style +'">';
                html += '   <div class="imp-selection" style="border-radius: '+ s.default_style.border_radius +'px;">';
                html += '       <div class="imp-selection-translate-boxes">';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-1" data-transform-direction="1" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-2" data-transform-direction="2" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-3" data-transform-direction="3" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-4" data-transform-direction="4" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-5" data-transform-direction="5" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-6" data-transform-direction="6" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-7" data-transform-direction="7" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-8" data-transform-direction="8" data-editor-object-type="5"></div>';
                html += '       </div>';
                html += '   </div>';
                html += '</div>';
            }
            if (s.type == 'oval') {
                var c_bg = hexToRgb(s.default_style.background_color);
                var c_bo = hexToRgb(s.default_style.border_color);

                var style = '';

                style += 'left: ' + s.x + '%;';
                style += 'top: ' + s.y + '%;';

                style += 'width: ' + s.width + '%;';
                style += 'height: ' + s.height + '%;';

                style += 'background: rgba('+ c_bg.r +', '+ c_bg.g +', '+ c_bg.b +', '+ s.default_style.background_opacity +');';
                // style += 'opacity: ' + s.default_style.opacity + ';';
                style += 'border-color: rgba('+ c_bo.r +', '+ c_bo.g +', '+ c_bo.b +', '+ s.default_style.border_opacity +');';
                style += 'border-width: ' + s.default_style.border_width + 'px;';
                style += 'border-style: ' + s.default_style.border_style + ';';
                style += 'border-radius: 100% 100%;';

                html += '<div class="imp-editor-shape imp-editor-oval" data-id="'+ s.id +'" data-editor-object-type="2" style="'+ style +'">';
                html += '   <div class="imp-selection" style="border-radius: 100% 100%;">';
                html += '       <div class="imp-selection-translate-boxes">';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-1" data-transform-direction="1" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-2" data-transform-direction="2" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-3" data-transform-direction="3" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-4" data-transform-direction="4" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-5" data-transform-direction="5" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-6" data-transform-direction="6" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-7" data-transform-direction="7" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-8" data-transform-direction="8" data-editor-object-type="5"></div>';
                html += '       </div>';
                html += '   </div>';
                html += '</div>';
            }
            if (s.type == 'poly' && s.points) {
                var c_fill = hexToRgb(s.default_style.fill);
                var c_stroke = hexToRgb(s.default_style.stroke_color);

                var style = '';
                style += 'left: ' + s.x + '%;';
                style += 'top: ' + s.y + '%;';
                style += 'width: ' + s.width + '%;';
                style += 'height: ' + s.height + '%;';
                // style += 'opacity: ' + s.default_style.opacity + ';';


                var svgStyle = '';
                svgStyle += 'width: 100%;';
                svgStyle += 'height: 100%;';
                svgStyle += 'fill: rgba('+ c_fill.r +', '+ c_fill.g +', '+ c_fill.b +', '+ s.default_style.fill_opacity +');';
                svgStyle += 'stroke: rgba('+ c_stroke.r +', '+ c_stroke.g +', '+ c_stroke.b +', '+ s.default_style.stroke_opacity +');';
                svgStyle += 'stroke-width: ' + s.default_style.stroke_width + 'px;';
                svgStyle += 'stroke-dasharray: ' + s.default_style.stroke_dasharray + ';';
                svgStyle += 'stroke-linecap: ' + s.default_style.stroke_linecap + ';';

                html += '<div class="imp-editor-shape imp-editor-poly" data-id="'+ s.id +'" data-editor-object-type="4" style="'+ style +'">';
                html += '   <div class="imp-editor-poly-svg-temp-control-point" data-editor-object-type="6"></div>';

                var shapeWidthPx = settings.general.width * (s.width/100);
                var shapeHeightPx = settings.general.height * (s.height/100);
                html += '   <div class="imp-editor-svg-wrap" style="padding: '+ (s.default_style.stroke_width) +'px; left: -'+ (s.default_style.stroke_width) +'px; top: -'+ (s.default_style.stroke_width) +'px;">'
                html += '       <svg class="imp-editor-poly-svg" viewBox="0 0 '+ shapeWidthPx +' '+ shapeHeightPx +'" preserveAspectRatio="none" style="'+ svgStyle +'">';
                html += '           <polygon points="';

                for (var j=0; j<s.points.length; j++) {
                    var x = s.default_style.stroke_width + (s.points[j].x / 100) * (shapeWidthPx - s.default_style.stroke_width*2);
                    var y = s.default_style.stroke_width + (s.points[j].y / 100) * (shapeHeightPx - s.default_style.stroke_width*2);
                    html += x + ',' + y + ' ';
                }

                html += '           "></polygon>';
                html += '       </svg>';
                html += '   </div>'; // end svg wrap
                html += '       <svg class="imp-editor-shape-poly-svg-overlay" viewBox="0 0 '+ shapeWidthPx +' '+ shapeHeightPx +'" preserveAspectRatio="none">';
                html += '           <polygon points="';

                for (var j=0; j<s.points.length; j++) {
                    var x = (s.points[j].x / 100) * shapeWidthPx;
                    var y = (s.points[j].y / 100) * shapeHeightPx;
                    html += x + ',' + y + ' ';
                }

                html += '           "></polygon>';
                html += '       </svg>';
                html += '   <div class="imp-selection imp-expanded-selection">';
                html += '       <div class="imp-selection-translate-boxes">';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-1" data-transform-direction="1" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-2" data-transform-direction="2" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-3" data-transform-direction="3" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-4" data-transform-direction="4" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-5" data-transform-direction="5" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-6" data-transform-direction="6" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-7" data-transform-direction="7" data-editor-object-type="5"></div>';
                html += '           <div class="imp-selection-translate-box imp-selection-translate-box-8" data-transform-direction="8" data-editor-object-type="5"></div>';
                html += '       </div>';
                html += '   </div>';

                for (var j=0; j<s.points.length; j++) {
                    html += '       <div class="imp-poly-control-point" data-editor-object-type="7" data-index="'+ j +'" style="left: '+ s.points[j].x +'%; top: ' + s.points[j].y + '%;"></div>';
                }

                html += '</div>';
            }
        }

        // Close shapes container
        html += '</div>';

        // Close canvas inner wrap
        html += '</div>';

        return html;
    }

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 0, g: 0, b: 0 };
    }
})( jQuery, window, document );

;(function ( $, window, document, undefined ) {
    // Version 3.0
    $.imp_editor_storage_get_saves_list = function(cb) {
        var data = {
            action : 'image_map_pro_get_saves_list'
        };

        $.post(ajaxurl, data).done(function(res) {
            var parsed = 0;
            try {
                res = stripSlashes(res);
                res = res.replace(/\\'/g, "'");

                parsed = JSON.parse(res);
                // console.log("Fetched saves list: ");
                // console.log(parsed);
                cb(parsed);
            } catch (err) {
                res = stripSlashes(res);
                res = res.replace(/\\'/g, "'");

                console.log(err);
                console.log('Failed to load saves list.');
                console.log(res);
                cb(false);
            }
        });
    }

    // Version 3.0
    $.imp_editor_storage_get_save = function(id, cb) {
		var data = {
            action : 'image_map_pro_get_save',
            saveID: id
        };

		$.ajax({
			type: 'POST',
			url: ajaxurl,
			data: data,
		}).done(function(res) {
			// Verify loaded data
			var parsed = 0;

			try {
				var parsed = JSON.parse(stripSlashes(res));
				// console.log('Successfully verified loaded image map:');
				// console.log(parsed);
				cb(parsed);
			} catch (err) {
				console.log(err);
				console.log('Failed to verify loaded image map.');
				console.log('Original JSON: ');
				console.log(stripSlashes(res));
				cb(false);
			}
		});
    }

    // Version 3.0
    $.imp_editor_storage_store_save = function(save, cb) {
		var data = {
			action: 'image_map_pro_store_save',
			json: JSON.stringify(save),
			saveID: save.id,
            name: save.general.name,
            shortcode: save.general.shortcode
		};

		$.ajax({
			type: 'POST',
			url: ajaxurl,
			data: data,
		}).done(function(res) {
			// Verify saved data
			var parsed = 0;

			try {
				var parsed = JSON.parse(stripSlashes(res));
				// console.log('Successfully verified saved image map:');
				// console.log(parsed);
				cb(true);
			} catch (err) {
				console.log(err);
				console.log('Failed to verify saved image map.');
				console.log('Original JSON: ');
				console.log(stripSlashes(res));
				cb(false);
			}
		});
    }

    // Version 3.0
    $.imp_editor_storage_delete_save = function(id, cb) {
        var data = {
            action : 'image_map_pro_delete_save',
            saveID: id
        };

        $.post(ajaxurl, data).done(function(res) {
            cb();
        });
    }
    $.imp_editor_storage_get_last_save = function(cb) {
        var data = {
            action : 'image_map_pro_get_last_save'
        };

        $.post(ajaxurl, data).done(function(res) {
            if (res.length > 0) {
                cb(res);
            } else {
                cb(false);
            }
        });
    }
    $.imp_editor_storage_set_last_save = function(id, cb) {
        var data = {
            action : 'image_map_pro_set_last_save',
            saveID: id
        };

        $.post(ajaxurl, data).done(function() {
            cb();
        });
    }

    function stripSlashes(str) {
        return str.replace(/\\(.)/mg, "$1");
    }
})( jQuery, window, document );

;(function ( $, window, document, undefined ) {
    var isFullscreen = false;

    $(document).ready(function() {
        // Set size of the editor
        setEditorHeight();

        // Events
        $(window).on('resize', function() {
            setEditorHeight();
        });

        $(document).on('click', '[data-wcp-editor-extra-main-button-name="fullscreen"]', function() {
            if (!isFullscreen) {
                goFullscreen();
            } else {
                closeFullscreen();
            }
        });
    });

    function setEditorHeight() {
        var h = $(window).height() - $('#wpadminbar').height();

        if (h < $('#adminmenuwrap').height()) {
            h = $('#adminmenuwrap').height();
        }

        $('#wcp-editor').height(h);

        // Hide everything else except the editor
        $('#instance-options-wrap').siblings().hide();
    }
    function goFullscreen() {
        isFullscreen = true;

        $('#wcp-editor').attr('id', 'wcp-editor-offline').html('');
        $('body').append('<div id="fullscreen-wrap"><div id="wcp-editor"></div></div>');
        $.image_map_pro_init_editor($.image_map_pro_editor_current_settings(), $.WCPEditorSettings);
    }
    function closeFullscreen() {
        isFullscreen = false;

        $('#fullscreen-wrap').remove();
        $('#wcp-editor-offline').attr('id', 'wcp-editor');

        $.image_map_pro_init_editor($.image_map_pro_editor_current_settings(), $.WCPEditorSettings);
    }

})( jQuery, window, document );
