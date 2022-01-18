# General Assembly - Project 4
# [Yolk Ochre](https://yolkochre.herokuapp.com/register) :egg:
Solo Project - A richly featured CRUD app geared towards art lovers

### Timeframe: 1 week 

<details>
  <summary>Goals :dart:</summary>
  <p>1. Build a full stack application by yourself. Use PostegreSQL, Python, Django REST framework, React.js & Node. </p>
  <p>2. Include at least one ‘one-to-many’ or one ‘many-to-many’ relationship.</p>
  <p>3. For a challenge - include Authentication.</p>
  <p>4.It can be a direct clone of, or inspired by, an existing website. </p>
  <p>5. Make an ERD and wireframes as part of your planning in order for us to sign you off. </p>
</details>

<details>
  <summary>YolkOchre - Overview :bulb:</summary>
    <p>A dynamic web application geared towards the Art world.</p>
    <p>Upload, view, and update Artworks on the database - includes a caption and location.</p>
    <p><em>Like</em> or <em>unlike</em> art posts by other users and see who already likes a particular post.</p>
    <p><em>Follow</em> and or <em>Favourite</em> other users</p>
    <p>View posts by people you favourite on the star page</p>
    <p>
      View other users profiles - see their bio, who follows them, who they follow, who they favourite and who they’re favourites by. 
    </p>
    <p>Authentication (Register / Login & perform restricted actions when logged in)</p>
    <p>Consistent styling throughout, achieved mainly with SASS and react-bootstrap</p>
</details>

<details>
  <summary>Tech :gear:</summary>
  <div>
    <h3>Frontend -- JavaScript / REACT / React-Bootstrap / HTML / SASS 61% :</h3>
    <ul>
      <li>The client facing APP.</li>
      <li>Components of all shapes and sizes for getting and displaying data</li>
      <li>Helper functions (configurable blueprints for sending requests) </li>
      <li>Various pages on which components are rendered</li>
      <li>Index.js where the client facing app is injected into the document root (an HTML file)</li>
      <li>Styling</li>
    </ul>
  </div>
  <div>
    <h3>Backend -- Python 39% :</h3>
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
  </div>  
</details>  

<details>
  <summary>Approach :desktop_computer:</summary>
  <div>
    <h3>Planning :</h3>
    <p>
      My Trello board consisted of:
      <ul>
        <li>
          A hand drawn detailed EntityRelationshipDiagram (ERD) which is a visual aid in planning, it’s a graphic depiction of the relationships in the tabular data           my project would consist of. 
        </li>
        <li>Wireframes to visualise the entire client side app</li>
        <li>Lists of ‘to-dos’, ‘doing’, ‘done-front-end’ & ‘done-backend’</li>
      </ul>
    </p>
  </div>
  <div>
    <h3>Backend :</h3>
    <p>
      I created a database using PostgreSQL, then began working on the project in VS.code making sure the engine was PostgreSQL. <br>
      After setting up the initial url for the homepage, I built the first model, ‘Art’, its urls, serializers and controllers - this took many revisions before I         arrived at something usable for the final MVP. <br>
      Then the custom user model and its respective urls, serializers and controllers. This is also where we introduce authentication. - again this had to be             revised many times. <br>
      Finally, the comment model and its urls etc. I am still yet to use this up on the front end but it does work. <br>
      As I built these models and controllers (views) I tested them using Insomnia.
    </p>
    <p><b>
      Custom user model:
      <img src="https://user-images.githubusercontent.com/89402596/149993995-5417f412-c6a1-4546-ab5c-41ae1495fe7c.png" />
    </b></p>
    <p><b>
      Views / controllers for following & unfollow / favouring & un-favouring other users: 
      <img src="https://user-images.githubusercontent.com/89402596/149994155-3f117062-0031-4eda-ba1b-00d2df399ec4.png" />
    </b></p>
  </div>
  <div>
    <h3>Middle - bulk of the project :</h3>
    <p>I began work on the frontend as usual - adding a ‘helpers’ folder containing configurable callback functions for making our requests.</p>
    <p>
      My thorough plan gave me a clear overview of the pages and components I would have to build for our MVP and I made quick progress with those - building             out things like the navigation bar and the footer which would be seen on every page - then the register and login form which I tested before moving on.
    </p>
    <p>
      I then built out all of the pages and components that would be used within them, testing things as I went along - always committing to get and pushing             to github at good checkpoints. 
    </p>
    <p>I then brought in React-Bootstrap components (a bunch of which I had never used before) to speed up styling and formatting. </p>
  </div>
  <div>
    <h3>Frontend :</h3>
    <p>I began work on the frontend as usual - adding a ‘helpers’ folder containing configurable callback functions for making my requests.</p>
    <p>
      My thorough plan gave me a clear overview of the pages and components I would have to build for my MVP and I made quick progress with those - building out           things like the nav bar and the footer which would be seen on every page - then the register and login form which I tested before moving on.
    </p>
    <p>
     I then built out all of the pages and components that would be used within them, testing things as I went along - always committing to Git and pushing to            GitHub at good checkpoints. – Much of this component logic works in the same way - request data from the database, map over it and display it in some                appropriate way – whether that is building a home page or the profile page, the concepts are basically the same. 
    </p>
    <p>
      I then brought in React-Bootstrap components (a bunch of which I had never used before) to speed up formatting. 
    </p>
   <p><b>
     Example of exported helper function for making requests to the database:
     <img src="https://user-images.githubusercontent.com/89402596/149994808-1b769f99-b9f1-49dc-bf10-8aed91324f7f.png" />
   </b></p>
  </div>
  <div>
   <h3>Styling :</h3>
   <p>I worked from the morning until the next morning, 5am, with very few breaks in order to deliver an MVP presentation a few hours later.</p>
   <p>I brought in React-Bootstrap-Icons to clean up the look and feel of the application, this really helps to create a finished, professional feel.</p>
   <p>
     I worked in SASS to implement my chosen colour palette drawn from the name, YolkOchre, the fonts which were inspired by a magazine cover and the formatting,        inspired by modern art galleries. I also used this time to customise all of the bootstrap components to make them my own. 
  </p>
  <p><b>
    Example of imported and nested style-rules using SASS:
    <img src="https://user-images.githubusercontent.com/89402596/149995660-90aaf91c-0f80-4826-9221-d9727daadfb5.png" />
  </b></p>
  </div>
</details>

<details>
  <summary>Visuals :art:</summary>
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
  <summary>Key learnings :open_book:</summary>
   Entity Relationship Diagrams for visualising tabular data and relationships. <br>
   PostgreSQL, Python syntax / abilities + Django and the Rest framework. <br>
   One-to-many VS many-to-many relationships. <br>
   Furthering understanding of useEffect React hook. <br>
   <b>This project taught me to create all of the controllers I need - if I want to fetch data based on a particular user’s Id, I should create a controller for        this instead of fetching all data and doing the hard work of filtering it on the frontend. </br>
</details>

<details>
  <summary>Challenges & Wins :chart_with_upwards_trend:</summary>
  <ul>
    <li>Understanding serializers, translating django models appropriately for sending and receiving data.</li>
    <li>
      Creating reciprocal many to many relationships - the User model has multiple many-to-many relationships with itself. This must be reflected in the populated       serializer. 
    </li>
    <li>Correctly using useEffect (understanding still needs work).</li>
  </ul>
</details>

<details>
  <summary>Possible future improvements :flight_departure:</summary>
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
  <summary>Bugs :bug:</summary>
  <p>
    I could not make the list of artworks by a particular user visible on ‘other-users-profile’ and I am still unsure why - I will look again at this problem         soon.
  </p>
</details>










