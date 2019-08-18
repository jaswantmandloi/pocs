import React from 'react';



function Menifest() {
  return (
    <React.Fragment>
      <p>
        Add to Home Screen, sometimes referred to as the web app install prompt
      </p>

      <ul>
          <li>On mobile, Chrome will generate a
<a href="#">WebAPK</a>, creating an even
more integrated experience for your users.</li>
          <li>On desktop, your app will installed, and run in an
<a href="#">app window</a>.</li>
        </ul>



      <p>
        The <a href="#">web app menifest</a> is a simple manifest JSON file.
        That instruct the web browser about the web application and how it would behave when installed on the device.
      
</p>

      <p>
        A typical menifest file include the information for the name, icons and start URL.
</p>


      <p>A complete <code>manifest.json</code> file for a progressive web app.</p>



<pre className="prettyprint"><div className="devsite-code-button-wrapper">
<div className="devsite-code-button gc-analytics-event material-icons devsite-dark-code-button" data-category="Site-Wide Custom Events" data-label="Dark Code Toggle" track-type="exampleCode" track-name="darkCodeToggle"  role="button" data-tooltip-align="b,c" data-tooltip="Dark code theme" aria-label="Dark code theme" data-title="Dark code theme"></div>
<div className="devsite-code-button gc-analytics-event material-icons devsite-click-to-copy-button" data-category="Site-Wide Custom Events" data-label="Click To Copy" track-type="exampleCode" track-name="clickToCopy"  role="button" data-tooltip-align="b,c" data-tooltip="Click to copy" aria-label="Click to copy" data-title="Click to copy"></div></div><code>
  <span className="pun">{"{"}</span><span className="pln">
  <br/>&nbsp; </span><span className="str">"short_name"</span><span className="pun">:</span><span className="pln"> </span><span className="str">"Maps"</span><span className="pun">,</span><span className="pln"><br/>&nbsp; </span><span className="str">"name"</span><span className="pun">:</span><span className="pln"> </span><span className="str">"Google Maps"</span><span className="pun">,</span><span className="pln"><br/>&nbsp; </span><span className="str">"icons"</span><span className="pun">:</span><span className="pln"> </span><span className="pun">[</span><span className="pln"><br/>&nbsp; &nbsp; </span><span className="pun">{"{"}</span><span className="pln"><br/>&nbsp; &nbsp; &nbsp; </span><span className="str">"src"</span><span className="pun">:</span><span className="pln"> </span><span className="str">"/images/icons-192.png"</span><span className="pun">,</span><span className="pln"><br/>&nbsp; &nbsp; &nbsp; </span><span className="str">"type"</span><span className="pun">:</span><span className="pln"> </span><span className="str">"image/png"</span><span className="pun">,</span><span className="pln"><br/>&nbsp; &nbsp; &nbsp; </span><span className="str">"sizes"</span><span className="pun">:</span><span className="pln"> </span><span className="str">"192x192"</span><span className="pln"><br/>&nbsp; &nbsp; </span><span className="pun">},</span><span className="pln"><br/>&nbsp; &nbsp; </span><span className="pun">{"{"}</span><span className="pln"><br/>&nbsp; &nbsp; &nbsp; </span><span className="str">"src"</span><span className="pun">:</span><span className="pln"> </span><span className="str">"/images/icons-512.png"</span><span className="pun">,</span><span className="pln"><br/>&nbsp; &nbsp; &nbsp; </span><span className="str">"type"</span><span className="pun">:</span><span className="pln"> </span><span className="str">"image/png"</span><span className="pun">,</span><span className="pln"><br/>&nbsp; &nbsp; &nbsp; </span><span className="str">"sizes"</span><span className="pun">:</span><span className="pln"> </span><span className="str">"512x512"</span><span className="pln"><br/>&nbsp; &nbsp; </span><span className="pun">{"}"}</span><span className="pln"><br/>&nbsp; </span><span className="pun">],</span><span className="pln"><br/>&nbsp; </span><span className="str">"start_url"</span><span className="pun">:</span><span className="pln"> </span><span className="str">"/maps/?source=pwa"</span><span className="pun">,</span><span className="pln"><br/>&nbsp; </span><span className="str">"background_color"</span><span className="pun">:</span><span className="pln"> </span><span className="str">"#3367D6"</span><span className="pun">,</span><span className="pln"><br/>&nbsp; </span><span className="str">"display"</span><span className="pun">:</span><span className="pln"> </span><span className="str">"standalone"</span><span className="pun">,</span><span className="pln"><br/>&nbsp; </span><span className="str">"scope"</span><span className="pun">:</span><span className="pln"> </span><span className="str">"/maps/"</span><span className="pun">,</span><span className="pln"><br/>&nbsp; </span><span className="str">"theme_color"</span><span className="pun">:</span><span className="pln"> </span><span className="str">"#3367D6"</span><span className="pln"><br/></span><span className="pun">{"}"}</span><span className="pln"><br/></span></code></pre>



<p>
  display property possible values 
  
</p>
<ul>
    <li>
      standalone
    </li>
    <li>
      browser
    </li>
    <li>
      fullscreen
    </li>
    <li>
      minimal-ui
    </li>
  </ul>






      <p>Consider the following partial <code>manifest.json</code>:</p>

      <pre className="prettyprint lang-text">
        <div className="devsite-code-button-wrapper">
          <div className="devsite-code-button gc-analytics-event material-icons devsite-dark-code-button" data-category="Site-Wide Custom Events" data-label="Dark Code Toggle" track-type="exampleCode" track-name="darkCodeToggle"  role="button" data-tooltip-align="b,c" data-tooltip="Dark code theme" aria-label="Dark code theme" data-title="Dark code theme"></div><div className="devsite-code-button gc-analytics-event material-icons devsite-click-to-copy-button" data-category="Site-Wide Custom Events" data-label="Click To Copy" track-type="exampleCode" track-name="clickToCopy"  role="button" data-tooltip-align="b,c" data-tooltip="Click to copy" aria-label="Click to copy" data-title="Click to copy"></div></div><code><span className="str">"start_url"</span><span className="pun">:</span><span className="pln"> </span><span className="str">"/"</span><span className="pun">,</span><span className="pln">
            <br /></span><span className="str">"display"</span><span className="pun">
            :</span><span className="pln"> </span><span className="str">
            "standalone"</span><span className="pun">,</span><span className="pln">
            <br />
          </span></code></pre>




      <p>When a web app using it is launched from the app launcher, it would open
<code>https://example.com/</code> as a standalone app, without any browser chrome.</p>


      <p>The WebAPK would include the following intent filters:</p>

      <code><span className="tag">&lt;intent-filter&gt;</span><span className="pln"><br />&nbsp; </span><span className="tag">&lt;action</span><span className="pln"> </span><span className="atn">android:name</span><span className="pun">=</span><span className="atv">"android.intent.action.VIEW"</span><span className="pln"> </span><span className="tag">/&gt;</span><span className="pln"><br />&nbsp; </span><span className="tag">&lt;category</span><span className="pln"> </span><span className="atn">android:name</span><span className="pun">=</span><span className="atv">"android.intent.category.DEFAULT"</span><span className="pln"> </span><span className="tag">/&gt;</span><span className="pln">
        <br />&nbsp; </span><span className="tag">&lt;category</span><span className="pln"> </span><span className="atn">android:name</span><span className="pun">=</span><span className="atv">"android.intent.category.BROWSABLE"</span><span className="pln"> </span><span className="tag">/&gt;</span><span className="pln">
          <br />&nbsp; </span><span className="tag">&lt;data</span><span className="pln">
          <br />&nbsp; &nbsp; </span><span className="atn">android:scheme</span><span className="pun">=</span><span className="atv">"https"</span><span className="pln">
          <br />&nbsp; &nbsp; </span><span className="atn">android:host</span><span className="pun">=</span><span className="atv">"example.com"</span><span className="pln"><br />&nbsp; &nbsp; </span><span className="atn">android:pathPrefix</span><span className="pun">=</span><span className="atv">"/"</span><span className="pln"> </span><span className="tag">/&gt;</span><span className="pln"><br /></span><span className="tag">&lt;/intent-filter&gt;</span><span className="pln"><br /></span></code>

    </React.Fragment>
  );
}

export default Menifest;
