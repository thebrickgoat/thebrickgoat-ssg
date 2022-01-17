export default function Skills() {
  return (
    <>
      <section className="skills ">
        <div className="container">
          <div className="row">
            <div className="col-6 white-box">
              <h2>
                The Real World <br />
                Skills Edition
              </h2>
              <p>
                Fullstack, halfstack, whatever you want to call it, today's
                environment requires the use of al ot of things to get the best
                product to the best people. Luckily, I've forced all those tools
                to live together in my brain, where they spend there playing rec
                soccer and discussing the finer points of baking shows.
              </p>
              <div className="moreInfo">
                <div className="moreInfoLeft">
                  <img id="moreInfoPic" src="/imgs/ps.gif" alt="Big Boy" />
                </div>
                <div className="moreInfoRight">
                  <h3 className="infoName">PhotoShop: 8 Years</h3>
                  <div className="likesDislikes">
                    <span className="likes">
                      Likes: at-size media, color corrections, raster images of
                      black and white newly weds
                    </span>
                    <br />
                    <span className="dislikes">
                      Dislikes: automated scripts not crashing, the pen tool,
                      auto select tolerance actually doing anything
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div id="skill-container">
                <div
                  className="el"
                  id="photoshop"
                  data-attribute-name="PhotoShop: 10 Years"
                  data-attribute-likes="Likes: color corrections, raster images of black and white newly weds"
                  data-attribute-dislikes="Dislikes: automated scripts
                        not crashing, the pen tool, auto select tolerance actually doing anything"
                >
                  <img src="/imgs/ps.gif" alt="Photoshop" />
                </div>
                <div
                  className="el"
                  id="illustrator"
                  data-attribute-name="Illustrator: 10 Years"
                  data-attribute-likes="Likes: Bezier pins, the patherfinder window, miter limits"
                  data-attribute-dislikes="Dislikes: clipping masks, cheating with live traces, copy and pasting appearances."
                >
                  <img src="/imgs/ai.gif" alt="Illustrator" />
                </div>
                <div
                  className="el"
                  id="afterEffects"
                  data-attribute-name="AfterEffects: 10 Years"
                  data-attribute-likes="Likes: Motion trackers, all the plugins, having very slightly different keyboard shortcuts that the rest of the CS"
                  data-attribute-dislikes="Dislikes: the integrity of your scratch disk, rendering a clip 3 times because you keep forgetting to turn your layers back on"
                >
                  <img src="/imgs/ae.gif" alt="AfterEffects" />
                </div>
                <div
                  className="el"
                  id="html"
                  data-attribute-name="HTML 5: 10 Years"
                  data-attribute-likes="Likes: Easy going tables, correctly validated header tags, stack overflow"
                  data-attribute-dislikes="Dislikes: div soup, the shadow dom, stack overflow"
                >
                  <img src="/imgs/html.gif" alt="HTML" />
                </div>
                <div
                  className="el"
                  id="cSharp"
                  data-attribute-name="C Sharp: 3 Years"
                  data-attribute-likes="Likes: Visual Studio, a 5 five course meal of .NET distros, extending classNamees all the way into summer break"
                  data-attribute-dislikes="Dislikes: Singletons, thanksgiving at c++'s house, java people"
                >
                  <img src="/imgs/csharrp.gif" alt="C Sharp" />
                </div>
                <div
                  className="el"
                  id="reactNative"
                  data-attribute-name="React JS: 3 Years"
                  data-attribute-likes="Likes: Being the coolest kid in the room, state management, native"
                  data-attribute-dislikes="Dislikes: Good tutorials, vue, being called the coolest kid in the room because your dad is rich"
                >
                  <img src="/imgs/react.gif" alt="React" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
