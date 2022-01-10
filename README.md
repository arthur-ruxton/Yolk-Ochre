# General Assembly
# Project 4 - Yolk Ochre
A richly featured CRUD app geared towards art lovers.

<details>
  <summary>Aim</summary>
  <ul>
    <li>On your own or in teams, build a full stack application.</li>
    <li>Use PostegreSQL, Python, Django REST framework, React.js & Node.</li>
    <li>Include at least one ‘one-to-many’ or one ‘many-to-many’ relationship.</li>
    <li>For a challenge - include Authentication.</li>
    <li>Use SASS for styling</li>
    <li>For a challenge include one or more dependencies for React libraries</li>
    <li>It can be a direct clone of, or inspired by, an existing website.</li>
    <li>Make wireframes as part of your planning in order for us to sign you off. </li>
  </ul>
</details>

<details>
  <summary>YolkOchre - Overview.</summary>
  <ul>
    <li>A dynamic web application geared towards the Art world.</li>
    <li>Upload, view, and update Artworks on the database - includes a caption and location.</li>
    <li><em>Like</em> or <em>unlike</em> art posts by other users and see who already likes a particular post.</li>
    <li><em>Follow</em> and or <em>Favourite</em> other users</li>
    <li>View posts by people you favourite on the star page</li>
    <li>
      View other users profiles - see their bio, who follows them, who they follow, who they favourite and who they’re favourites by. 
    </li>
    <li>Authentication (Register / Login & perform restricted actions when logged in)</li>
    <li>Consistent styling throughout, achieved mainly with SASS and react-bootstrap</li>
  </ul>
</details>

<details>
  <summary>Tech - Frontend</summary>
  <ul>
    <li>
      <details>
        <summary>  JavaScript / REACT / React-Bootstrap / HTML - 55% :</summary>
        <ul>
          <li>The client facing APP.</li>
          <li>Components of all shapes and sizes for getting and displaying data</li>
          <li>Helper functions (configurable blueprints for sending requests) </li>
          <li>Various pages on which components are rendered</li>
          <li>Index.js where the client facing app is injected into the document root (an HTML file)</li>
        </ul>
      </details>
    </li>
    <li>
      <details>
        <summary>SASS - 6% :</summary>
        <ul>
          <li>Positioning, fonts & colouring.</li>
        </ul>
      </details>
    </li>
  </ul>
</details>  

<details>
  <summary>Tech - Backend</summary>
    <ul>
      <li>
        Models - Exported schemas for data which will be added - this includes seeded data and also any relationships (one-to-many & many-to-many ) including:
        <ul>
          <li>
            <strong>
               Custom user model which has multiple many-to-many relationships with itself – when a user follows or favourites another user, their own following                  and favourite-users data is updated.
            </strong>
          </li>
          <li>Art has a one-to-many relationship with User model (one user can own many artworks)</li>
          <li>Art has a many-many relationship with User model (many users can ‘like’ many artworks)</li>
          <li>Comments (yet to be hooked up on the frontend)  has a one-to-many relationship with Art model (one artwork can have many comments)</li>
          <li>Comments has a one-many relationship with User model (one user can make many comments)</li>
        </ul>
      </li>
      <li>Configuration</li>
      <li>Controllers (functions which handle incoming requests) - these include permissions to restrict access.</li>
      <li>Serializers - translate Django models into other data types, for sending and receiving data as JSON. </li>
    </ul>
</details>

<details>
  <summary>Approach</summary>
  <ul>
    <li>
      <details>
        <summary>Beginning  - planning :</summary>
        <ul>
          <li>
            I created an EntityRelationshipDiagram (ERD) - a visual aid in planning.  A graphic depiction of the relationships in the tabular data my project would             consist of.
          </li>
          <li>Then wireframes to visualise the entire client side app.</li>
          <li>Followed by lists of ‘to-dos’, ‘doing’, ‘done-front-end’ & ‘done-backend’</li>
          <li>I created a database using PostgreSQL</li>
          <li>Then began working on the project in VS.Code making sure the engine was postgresql.</li>
          <li>After setting up initial url for homepage</li>
          <li>
            I built the first model, ‘Art’, its urls, serializers & controllers - this took many revisions before I arrived at something usable for the final MVP.
          </li>
          <li>
            Then the <strong>custom user model</strong> and its respective urls, serializers and controllers. This is also where we introduce authentication. -                 again this had to be revised many times. 
          </li>
          <li>Finally, the comment model and its urls etc. I am still yet to use this up on the front end but it works.</li>
          <li>As I built these models and controllers (views) I tested them using Insomnia.</li>
          <li>When a feature seemed to be complete I committed my work to git and pushed it to github.</li>
        </ul>
      </details>
    </li>
    <li>
      <details>
        <summary>Middle - bulk of the project :</summary>
        <ul>
          <li>I began work on the frontend as usual - adding a ‘helpers’ folder containing configurable callback functions for making our requests.</li>
          <li>
            My thorough plan gave me a clear overview of the pages and components I would have to build for our MVP and I made quick progress with those - building             out things like the navigation bar and the footer which would be seen on every page - then the register and login form which I tested before moving on.
          </li>
          <li>
            I then built out all of the pages and components that would be used within them, testing things as I went along - always committing to get and pushing             to github at good checkpoints. 
          </li>
          <li>I then brought in React-Bootstrap components (a bunch of which I had never used before) to speed up styling and formatting. </li>
        </ul>
      </details>
    </li>
    <li>
      <details>
        <summary>End - polishing & testing :</summary>
        <ul>
          <li>I worked from the morning until the next morning, 5am, with very few breaks in order to deliver an MVP presentation a few hours later.</li>
          <li>I brought in React-Bootstrap-Icons to clean up the look and feel of the application, this really helps to create a finished, professional feel.</li>
          <li>
            I worked in SASS to implement my chosen color palette drawn from the name, YolkOchre, the fonts which were inspired by a magazine cover and the                     formatting, inspired by modern art galleries. I also used this time to customise all of the bootstrapped stuff to make it my own. 
          </li>
        </ul>
      </details>
    </li>
  </ul>
</details>

<details>
  <summary>Visuals</summary>
  <p>Planning on Trello:</p>
  <img src=https://user-images.githubusercontent.com/89402596/148811744-7560d3bc-2332-4a81-88f2-45f621b97ce3.png />
  <p>Register user:</p>
  <img src=https://user-images.githubusercontent.com/89402596/148812168-dbcb3101-4c3f-4e27-a742-dbf5f4f457b1.png />
  <p>Login:</p>
  <img src=https://user-images.githubusercontent.com/89402596/148812287-7b809613-d29e-4cde-88ae-711236dfd36e.png />
  <p>:house: Homepage - posts by users you follow</p>
  <img src=https://user-images.githubusercontent.com/89402596/148812538-70515d3b-33e3-4c6c-810a-3a0524e1dcf6.png />
  <p>:globe_with_meridians: Explore - all Art on the platform</p>
  <img src=https://user-images.githubusercontent.com/89402596/148812687-0d0d92bf-ef07-485e-bc98-5dc484d08b1c.png />
  <p>:star: Favourites - posts by your favourite users</p>
  <img src=https://user-images.githubusercontent.com/89402596/148812867-5dae2dad-ab06-4e39-b702-0c4465c2586a.png />
  <p>:mag: View one artwork</p>
  <img src=https://user-images.githubusercontent.com/89402596/148813790-8924f22a-ca91-430e-bc4f-220c482b05a9.png />
  <p>There's more to see - visit the website!</p>
</details>

<details>
  <summary>Key learnings:</summary>
  <ul>
    <li>Entity Relationship Diagrams for visualising tabular data and relationships.</li>
    <li>PostgreSQL</li>
    <li>Python syntax and abilities</li>
    <li>Django and the Rest framework</li>
    <li>One-to-many VS many-to-many relationships</li>
    <li>Furthering understanding of useEffect React hook</li>
    <li>
      Create all of the controllers you will need - if you want to fetch data based on a particular users Id, create a controller for this instead of fetching all       data and filtering it on the frontend. 
    </li>
  </ul>
</details>

<details>
  <summary>Challenges:</summary>
  <ul>
    <li>understanding serializers, translating django models appropriately for sending and receiving data.</li>
    <li>
      Creating reciprocal many to many relationships - the User model has multiple many-to-many relationships with itself. This must be reflected in the populated       serializer. 
    </li>
    <li>Correctly using useEffect (understanding still needs work).</li>
  </ul>
</details>

<details>
  <summary>Possible future improvements:</summary>
  <ul>
    <li>Give Users the ability to delete their own artwork posts.</li>
    <li>Make the ‘like’ button available anywhere the post is visible.</li>
    <li>
      <strong>
        Hook up the functionality for commenting on posts.
      </strong>
    </li>
    <li>
      <strong>
        Make posts by a particular user visible on their profile page. 
      </strong>
    </li>
    <li>
      <strong>
        Add a search bar to search for artists by name, possibly art by location or genre!
      </strong>
    </li>
    <li>
      <strong>
        Implement responsive design.
      </strong>
    </li>
    <li>
      <strong>
        Use three.js to create and add a layer of visual interest to the site. 
      </strong>
    </li>
    <li>
      <strong>
        IMAGE UPLOAD 
      </strong>
      - currently the user has to include a URL for image upload.
    </li>
  </ul>
</details>


<details>
  <summary>Bugs: There is only one piece of functionality that does not work as intended.</summary>
  <ul>
    <li>
      I could not make the list of artworks by a particular user visible on ‘other-users-profile’ and I am still unsure why - I will look again at this problem         soon.
    </li>
  </ul>
</details>












