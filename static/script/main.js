var main = new Vue({
    el: '#main',
    data:{
        productList: []
    },
    mounted(){
        fetch('http://0.0.0.0:8000/api/products/',
        {
            method:'GET',
            headers: { 'Content-Type': 'application/json',},
        }
        )
        .then(response => response.json())
        .then((data) => {
            this.productList=data;
        })
    },
    template:`

        <div>

        <section>
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg text-white">
          <div class="container py-10">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="48" height="48"
              viewBox="0 0 172 172"
              style=" fill:#000000;"><g transform="translate(25.8,25.8) scale(0.7,0.7)"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none" stroke="none"></path><g fill="#ffffff" stroke="none"><path d="M88.322,14.33333l1.03917,0.00717c1.86333,0.02867 4.4075,0.39058 6.65425,0.7095c1.12517,0.16125 2.20733,0.31533 3.16408,0.42642c0.58767,0.086 2.56208,0.81342 3.73742,1.247c2.67675,0.98183 11.74975,7.912 11.74975,7.912l-3.58333,-6.71875c0,0 5.60075,1.59458 7.61458,3.13542c4.0205,3.0745 4.40392,4.03125 6.71875,4.03125h1.34375l-1.34375,-3.58333c1.34375,0.68083 6.37833,4.61892 7.052,5.52192l0.11467,0.1505l0.129,0.13975c5.05608,5.35708 7.50708,8.82217 9.29875,11.35558c1.21475,1.72 3.38625,2.9455 4.45408,4.33583c1.25775,1.62325 4.03483,7.16308 4.03483,7.16308v-3.57617c0,0 2.78067,3.68725 4.47917,8.50325c2.6875,7.61458 2.6875,12.98958 2.6875,12.98958c0,0 -0.89583,-2.23958 -3.58333,-3.13542c0,3.13542 3.58333,10.30208 3.58333,21.05925v21.5c-2.65167,2.0425 -3.54392,5.17075 -4.35017,8.54983c-1.17533,4.91633 -2.16792,8.22017 -5.17433,9.29158l-1.2255,0.07525l-0.28667,0.99258c-1.90992,2.37217 -3.56183,4.84108 -5.15642,7.23117c-5.1815,7.75075 -8.94042,13.27625 -16.05692,13.27625c-3.73025,0 -7.32433,0.59842 -8.74692,2.00308c-1.54442,1.5265 -2.00308,3.94525 -2.00308,5.16358c-3.62633,1.35092 -7.76508,3.58333 -28.66667,3.58333c-17.91667,0 -33.68333,-6.29233 -43.93883,-16.28625c-3.45792,-2.81292 -8.14133,-5.98058 -10.23758,-8.14492c-6.82625,-5.70108 -10.15517,-14.78483 -10.32358,-14.9855c4.24267,3.52958 18.79458,16.61233 25.40942,16.61233v0c0.7525,-0.7955 -3.90942,-7.00183 -3.90942,-9.44567c5.12058,7.74 19.36792,17.9095 39.41667,17.9095c14.78125,0 13.94633,-2.61583 21.5,-3.58333c17.46875,-2.23958 26.84633,-19.48975 29.4335,-24.424c0.17917,-0.344 0.72383,-3.655 0.86,-3.913c1.31867,-1.34733 1.65908,-4.18175 2.17508,-8.49608c0.39058,-3.2465 3.36475,-7.06275 3.36475,-11.094c0,-4.03125 -3.58333,-5.82292 -3.58333,-5.82292c0,0 0,-10.75 -2.23958,-19.26042c-0.44792,-1.6985 -2.28258,-7.94067 -12.09375,-20.15625v3.5905c-7.61458,-4.03842 -13.14367,-9.11958 -14.78125,-9.86133c-5.16,-2.33275 -10.90767,-4.47917 -17.46875,-4.47917c-14.33333,0 -16.57292,3.58333 -28.66667,7.16667c0,0 4.47917,0 7.16667,0c0,0 -6.69008,5.17792 -10.75,7.61458c-6.71875,4.03125 -14.33333,18.0385 -14.33333,28.21875c0,10.75 -8.90458,14.33333 -14.33333,14.33333c-8.78992,0 -14.33333,-7.16667 -14.33333,-14.33333c0,-4.05992 1.6125,-8.95833 3.17483,-12.27292c1.47275,-3.12825 2.86308,-6.08092 2.84875,-9.24858c0.11108,-0.37983 0.98183,-1.37242 1.55875,-2.02817c1.66983,-1.90275 3.88075,-4.42183 4.386,-8.06967c3.96317,-3.32175 11.21583,-10.80375 11.30542,-10.89692c0.5805,-0.61275 1.161,-1.08933 1.83108,-1.63758c1.161,-0.94958 2.60867,-2.1285 4.37525,-4.31792l1.51575,-1.88125c2.8595,-1.53367 7.96217,-3.70875 9.94733,-4.55442c1.2255,-0.52317 2.15717,-0.9245 2.56567,-1.12158l12.92867,-2.20017c0.774,0 0.89583,-1.83467 0.89583,-2.6875c0,-0.81342 0.37983,-0.7095 1.161,-0.97825c6.50375,-2.25033 8.86875,-2.60508 15.49433,-2.60508v0"></path></g></g></g></svg>
            <a href="#" class="navbar-brand">B & K STORE</a>
            

            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-bkStore" aria-controls="#navbar-bkStore">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbar-bkStore">
              
              <ul class="navbar-nav ">
                <li class="nav-item px-2">
                  <a href="#" class="nav-link ml-5 text-white">Home</a>
                  
                  <li><div class="dropdown">
                  
                      <button class="dropbtn">Films</button>
                      <div class="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                      </div>
                    
                    </div></li>
                  <li><div class="dropdown">
                  
                        <button class="dropbtn">Books</button>
                        <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                        </div>
                      
                      </div></li>
                      <a href="#" class="nav-link ml-5 text-white">About</a>
                      <a href="#" class="nav-link ml-5 text-white">My Basket</a>
                </li>
              </ul>
             </div>
            
          </div>
          <div class="d-flex justify-content-center h-100">
              <div class="searchbar">
                <input class="search_input" type="text" name="" placeholder="Search...">
                <a href="#" class="search_icon"><i class="fa fa-search" aria-hidden="true"></i></a>
              </div>
            </div>
        </nav>
      </section>
      
      <section class="bg-white py-5">
        <div id="slider" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner text-center">
            <div class="carousel-item active">

                <h1 class="display-1">Yeni Çıkan Filmlere Hemen Gözat</h1>
                <a href="#" class="btn btn-success">GO</a>
             </div>

             <div class="carousel-item">
               <h1 class="display-2">deneme beni</h1>
               <a href="#" class="btn btn-success">GO</a>
               
             </div>

             <div class="carousel-item">
                <img class="display-3" src="https://infojaponya.com/wp-content/uploads/2017/11/k%C4%B1%C5%9F1-678x381.png" alt="Japan" width="1100" height="400">
                
              </div>

          </div>
          <a href="#slider" class="carousel-control-prev">
            <span class="carousel-control-prev-icon"></span>
          </a>

          <a href="#slider" class="carousel-control-next">
              <span class="carousel-control-next-icon"></span>
            </a>

        </div>


      </section>
      
      
        <input type='file' onchange="readURL(this);" />
        <img id="blah" src="http://placehold.it/180" alt="your image" />

      <div>
          <h1 style="bottom: 560px; margin-left:40% ;">FILMS</h1>
        </div>

          <section>
            <div class="container"  >
              <div class="row1" style="height: 600px; position:sticky; margin-top: 10px;" >
                     
                    <div class="row">
                        <div v-for="product in productList.slice(-6).reverse()" class="col-lg-2 col-md-6 mb-4" >
                            <div class="card" style="width: 11rem; height: 450px; position: relative; margin-top:650px; bottom: 50%; margin-left: 15%;
                            background-color: transparent;border-width:2px;  border-style:dashed;">
                            <img class="card-img-top" src=" " alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title" style="padding-top: 150px;">{{product.name}}</h5>
                                <p class="card-text">{{product.category}}</p>
                                <p v-for="genre in product.genre">{{genre}}</p>
                                <a href="#" class="btn btn-primary" style="margin-left: 25px;" stretched-link >Detail</a>
                            </div>
                        </div>
                    </div>
                          
                </section>
          <div>
          <h1 style="top: 160px; margin-left:40% ;">BOOKS</h1>
        </div>
         
            <section>
            <div class="container" >
              <div class="row1" >
                
                <div class="col-lg-2"  > </div>
                
                <div class="row">
                  <div class="col-lg-2 col-md-6 mb-4" >
                    <div class="card" style="width: 11rem; height: 450px; position: relative; margin-top:650px; bottom: 50%; margin-left: 15%;
                     background-color: transparent;border-width:2px; border-style:dashed;">
                     <img class="card-img-top" src=" " alt="Card image cap">
                      <div class="card-body">
                       <h5 class="card-title" style="padding-top: 150px;">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                         <a href="#" class="btn btn-primary" style="margin-left: 25px;" stretched-link >Detail</a>
                        </div>
                      </div>
                    </div>

                      <div class="col-lg-2 col-md-6 mb-4">
                        <div class="card" style="width: 11rem; height: 450px; position: relative; margin-top:650px; bottom: 50%; margin-left: 15%;
                        background-color: transparent; border-width:2px;  border-style:dashed;">
                        <img class="card-img-top" src=" " alt="Card image cap">
                         <div class="card-body">
                          <h5 class="card-title"  style="padding-top: 150px;">Card title</h5>
                           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <a href="#" class="btn btn-primary" style="margin-left: 25px;" stretched-link>Detail</a>
                           </div>
                          </div>
                        </div>
                      
                      <div class="col-lg-2 col-md-6 mb-4">
                        
                        <div class="card" style="width: 11rem; height: 450px; position: relative; margin-top:650px; bottom: 50%; margin-left: 15%;
                        background-color:transparent;border-width:2px;  border-style:dashed;">
                        <img class="card-img-top" src=" " alt="Card image cap">
                         <div class="card-body">
                          <h5 class="card-title"  style="padding-top: 150px;">Card title</h5>
                           <p class="card-text" >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <a href="#" class="btn btn-primary" style="margin-left: 25px;" stretched-link>Detail</a>
                           </div>
                          </div>
                        </div>
                    
                        <div class="col-lg-2 col-md-6 mb-4">
                          <div class="card" style="width: 11rem; height: 450px; position: relative; margin-top:650px; bottom: 50%; margin-left: 15%;
                            background-color: transparent;border-width:2px;  border-style:dashed;">
                            <img class="card-img-top" src=" " alt="Card image cap">
                            <div class="card-body">
                              <h5 class="card-title"  style="padding-top: 150px;">Card title</h5>
                               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                               <a href="#" class="btn btn-primary" style="margin-left: 25px;" stretched-link>Detail</a>
                               </div>
                              </div>
                            </div>
                      
                      <div class="col-lg-2 col-md-6 mb-4">
                        <div class="card" style="width: 11rem; height: 450px; position: relative; margin-top:650px; bottom: 50%; margin-left: 15%;
                        background-color: transparent;border-width:2px;  border-style:dashed;">
                        <img class="card-img-top" src=" " alt="Card image cap">
                        <div class="card-body">
                          <h5 class="card-title" style="padding-top: 150px;">Card title</h5>
                          <p class="card-text" >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <a href="#" class="btn btn-primary" style="margin-left: 25px;" stretched-link>Detail</a>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-2 col-md-6 mb-4">
                        <div class="card" style="width: 11rem; height: 450px; position: relative; margin-top:650px; bottom: 50%; margin-left: 15%;
                        background-color: transparent;border-width:2px;  border-style:dashed;">
                        <img class="card-img-top" src=" " alt="Card image cap">
                        <div class="card-body">
                          <h5 class="card-title"style="padding-top: 150px;">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary" style="margin-left: 25px;" stretched-link >Detail</a>
                        </div>
                      </div>
                    </div>
                  
                  </div>
                
                </div>
         </section>
        
                  <script src="vendor/jquery/jquery.min.js"></script>
                  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <section>
            <footer class="bg-dark py-5">
              <div class="container text-white">
              <div class="row">
                <div class="col-lg-6">
                  <h3><b>B & K STORE</b></h3>
                </div>
                <div class="col-lg-6">
                     <i class="fa fa-twitter fa-3x mx-3" aria-hidden="true"></i>
                     <i class="fa fa-facebook fa-3x mx-3" aria-hidden="true"></i>
                     <i class="fa fa-instagram fa-3x mx-3" aria-hidden="true"></i>
                     <i class="fa fa-cc-visa fa-3x mx-3" aria-hidden="true"></i>
                     <i class="fa fa-cc-paypal fa-3x mx-3" aria-hidden="true"></i>
                     <i class="fa fa-cc-mastercard fa-3x mx-3" aria-hidden="true"></i>
                     
                </div>
                
              </div>
            </div>

          </footer>
        </section>

        </div>

            
    
            `
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}