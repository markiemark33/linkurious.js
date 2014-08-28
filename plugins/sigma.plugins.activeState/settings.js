;(function(undefined) {
  'use strict';

  if (typeof sigma === 'undefined')
    throw 'sigma is not declared';

  // Initialize package:
  sigma.utils.pkg('sigma.settings');

  /**
  * Extended sigma settings for sigma.plugins.activeState.
  */
  var settings = {
    /**
     * ACTIVE STATE SETTINGS:
     * **********************
     */
    // {string} The active node's label font. If not specified, will heritate
    //          the "font" value.
    activeFont: '',
    // {string} Example: 'bold'
    activeFontStyle: '',
    // {string} Indicates how to choose the active nodes color.
    //          Available values: "node", "default"
    nodeActiveColor: 'node',
    // {string}
    defaultNodeActiveColor: 'rgb(236, 81, 72)',
    // {string} Indicates how to choose the active nodes color.
    //          Available values: "edge", "default"
    edgeActiveColor: 'edge',
    // {string}
    defaultEdgeActiveColor: 'rgb(236, 81, 72)',

    /**
     * NODE BORDERS SETTINGS:
     * **********************
     */
    // {string} Indicates how to choose the nodes border color.
    //          Available values: "node", "default"
    nodeBorderColor: 'node,',
    // defaultNodeBorderColor is already available in sigma.settings.
    // {string} Indicates how to choose the nodes outer border color.
    //          Available values: "node", "default"
    nodeOuterBorderColor: '',
    // {number} The size of the outer border of hovered and active nodes.
    outerBorderSize: 0,
    // {string} The default hovered and active node outer border's color.
    defaultNodeOuterBorderColor: '#000'
  };

  // Export the previously designed settings:
  sigma.settings = sigma.utils.extend(sigma.settings || {}, settings);

}).call(this);
