var cart = new Vue({
    el: '#cart',
    data: {
        productList: [],
        productList_Search: [],
        cart: [0, ],
        total: 0,
        showModal: false,
        search: "",
    },
    methods: {
        init() {
            // GET PRODUCTS BASED ON THEIR CATEGORY!
            fetch('http://0.0.0.0:8000/api/products/',
                {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json',},
                }
            )
                .then(response => response.text())
                .then((data) => {
                        this.productList = data
                }).then(() => {
                    let temp = JSON.parse(this.productList)
                    for (var i = 0; i < temp.length; i++){
                        if (temp[i].name != undefined){
                            this.productList_Search.push({
                                name: temp[i].name,
                                url: temp[i].url
                            });
                        }
                    }


                //TODO It doesn't refresh after the delete button is hit..!
                for (var i = 0; i < sessionStorage.length; i++) {
                    let obj = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
                    if (obj.name != null)
                    {
                        this.cart.push(obj);
                        this.total += Number(obj.price)
                    }
                }

                // POP first element because there is an if down there
                // and if checks (sometimes) before this cart is updated..
                this.cart.shift(1)
            });


        },

        deleteFromStorage(obj) {
            sessionStorage.removeItem(obj.id);
            if (sessionStorage.length == 0){
                this.cart = []
                return;
            }
            for (var i = 0; i < this.cart.length; i++){
                if (JSON.stringify(this.cart[i]) == JSON.stringify(obj)){
                    if (i == 0){
                        this.cart.shift(1);
                        break;
                    }
                    this.cart.splice(i, i);
                    break;
                }
            }
        },

        clearSearch(){
            $('.search_input').val('');
            this.search="";
        },


    },
    mounted() {
        this.init();
    },
    computed:{
        filteredList() {
          return this.productList_Search.filter(post => {
            if (this.search === "")
                return;
            return post.name.toLowerCase().includes(this.search.toLowerCase());
          })
        }
    },
    template:`
            
<div>
  <div class="main">
    <section>
      <nav class="navbar navbar-dark bg-dark navbar-expand-lg text-white">
        <div class="container py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 172 172"
            style=" fill:#000000;"
          >
            <g transform="translate(25.8,25.8) scale(0.7,0.7)">
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <path d="M0,172v-172h172v172z" fill="none" stroke="none"></path>
                <g fill="#ffffff" stroke="none">
                  <path
                    d="M88.322,14.33333l1.03917,0.00717c1.86333,0.02867 4.4075,0.39058 6.65425,0.7095c1.12517,0.16125 2.20733,0.31533 3.16408,0.42642c0.58767,0.086 2.56208,0.81342 3.73742,1.247c2.67675,0.98183 11.74975,7.912 11.74975,7.912l-3.58333,-6.71875c0,0 5.60075,1.59458 7.61458,3.13542c4.0205,3.0745 4.40392,4.03125 6.71875,4.03125h1.34375l-1.34375,-3.58333c1.34375,0.68083 6.37833,4.61892 7.052,5.52192l0.11467,0.1505l0.129,0.13975c5.05608,5.35708 7.50708,8.82217 9.29875,11.35558c1.21475,1.72 3.38625,2.9455 4.45408,4.33583c1.25775,1.62325 4.03483,7.16308 4.03483,7.16308v-3.57617c0,0 2.78067,3.68725 4.47917,8.50325c2.6875,7.61458 2.6875,12.98958 2.6875,12.98958c0,0 -0.89583,-2.23958 -3.58333,-3.13542c0,3.13542 3.58333,10.30208 3.58333,21.05925v21.5c-2.65167,2.0425 -3.54392,5.17075 -4.35017,8.54983c-1.17533,4.91633 -2.16792,8.22017 -5.17433,9.29158l-1.2255,0.07525l-0.28667,0.99258c-1.90992,2.37217 -3.56183,4.84108 -5.15642,7.23117c-5.1815,7.75075 -8.94042,13.27625 -16.05692,13.27625c-3.73025,0 -7.32433,0.59842 -8.74692,2.00308c-1.54442,1.5265 -2.00308,3.94525 -2.00308,5.16358c-3.62633,1.35092 -7.76508,3.58333 -28.66667,3.58333c-17.91667,0 -33.68333,-6.29233 -43.93883,-16.28625c-3.45792,-2.81292 -8.14133,-5.98058 -10.23758,-8.14492c-6.82625,-5.70108 -10.15517,-14.78483 -10.32358,-14.9855c4.24267,3.52958 18.79458,16.61233 25.40942,16.61233v0c0.7525,-0.7955 -3.90942,-7.00183 -3.90942,-9.44567c5.12058,7.74 19.36792,17.9095 39.41667,17.9095c14.78125,0 13.94633,-2.61583 21.5,-3.58333c17.46875,-2.23958 26.84633,-19.48975 29.4335,-24.424c0.17917,-0.344 0.72383,-3.655 0.86,-3.913c1.31867,-1.34733 1.65908,-4.18175 2.17508,-8.49608c0.39058,-3.2465 3.36475,-7.06275 3.36475,-11.094c0,-4.03125 -3.58333,-5.82292 -3.58333,-5.82292c0,0 0,-10.75 -2.23958,-19.26042c-0.44792,-1.6985 -2.28258,-7.94067 -12.09375,-20.15625v3.5905c-7.61458,-4.03842 -13.14367,-9.11958 -14.78125,-9.86133c-5.16,-2.33275 -10.90767,-4.47917 -17.46875,-4.47917c-14.33333,0 -16.57292,3.58333 -28.66667,7.16667c0,0 4.47917,0 7.16667,0c0,0 -6.69008,5.17792 -10.75,7.61458c-6.71875,4.03125 -14.33333,18.0385 -14.33333,28.21875c0,10.75 -8.90458,14.33333 -14.33333,14.33333c-8.78992,0 -14.33333,-7.16667 -14.33333,-14.33333c0,-4.05992 1.6125,-8.95833 3.17483,-12.27292c1.47275,-3.12825 2.86308,-6.08092 2.84875,-9.24858c0.11108,-0.37983 0.98183,-1.37242 1.55875,-2.02817c1.66983,-1.90275 3.88075,-4.42183 4.386,-8.06967c3.96317,-3.32175 11.21583,-10.80375 11.30542,-10.89692c0.5805,-0.61275 1.161,-1.08933 1.83108,-1.63758c1.161,-0.94958 2.60867,-2.1285 4.37525,-4.31792l1.51575,-1.88125c2.8595,-1.53367 7.96217,-3.70875 9.94733,-4.55442c1.2255,-0.52317 2.15717,-0.9245 2.56567,-1.12158l12.92867,-2.20017c0.774,0 0.89583,-1.83467 0.89583,-2.6875c0,-0.81342 0.37983,-0.7095 1.161,-0.97825c6.50375,-2.25033 8.86875,-2.60508 15.49433,-2.60508v0"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <a href="/" class="navbar-brand">B & K STORE</a>

          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbar-bkStore"
            aria-controls="#navbar-bkStore"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbar-bkStore">
            <ul class="navbar-nav ml-5" style="width: 100%;">
              <li class="nav-item px-4">
                <a href="/" class="nav-link mr-4 text-white ">Home</a>
              </li>

              <li class="nav-item px-4">
                <a href="/films" class="nav-link mr-3 text-white">Films</a>
              </li>

              <li class="nav-item px-4">
                <a href="/books" class="nav-link mr-3 text-white">Books</a>
              </li>

              <li class="nav-item px-4" style="margin-left: -30px">
                <a href="/about" class="nav-link ml-3 text-white">About</a>
              </li>

              <li class="nav-item px-2" style="margin-left:auto;"></li>
              <a href="/cart"
                ><svg
                  class="nav-link"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="44"
                  height="44"
                  viewBox="0 0 172 172"
                  style=" fill:#000000;"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <path d="M0,172v-172h172v172z" fill=""></path>
                    <g fill="#ffffff">
                      <path
                        d="M39.2627,21.5l-14.19336,37.85596h11.50586l10.16211,-27.10596h78.54639l10.16211,27.10596h11.46386l-14.19336,-37.85596zM10.75,64.5v32.25h6.76074l16.125,53.75h104.74951l16.125,-53.75h6.73974v-32.25zM21.5,75.25h129v10.75h-4.01026l-16.125,53.75h-88.75048l-16.125,-53.75h-3.98926zM59.125,91.375v37.625h10.75v-37.625zM80.625,91.375v37.625h10.75v-37.625zM102.125,91.375v37.625h10.75v-37.625z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </a>
            </ul>
          </div>
        </div>
        <div class="d-flex justify-content-center h-100">
          <div class="searchbar">
            <input
              class="search_input"
              type="text"
              v-model="search"
              @mouseleave="clearSearch"
              name=""
              placeholder="Search..."
            />
            <a href="#" class="search_icon"
              ><i class="fa fa-search" aria-hidden="true"></i
            ></a>
          </div>
        </div>
        <ul
          style="position:absolute; right: 0%; top: 100%; background-color: rgba(0, 0, 0, 0.75); z-index: 1;"
        >
          <li class="link" v-for="post in filteredList">
            <a v-bind:href="post.url" target="_blank">
              <small>{{ post.name }}({{post.category}})</small>
            </a>
          </li>
        </ul>
      </nav>
    </section>

    <section>
      <div class="container">
        <header>
          <h2 class="basketTitle">My Basket</h2>
          <hr class="line-class" />
        </header>
        <div v-if="cart.length == 0">
          <h1>YOUR CART IS EMPTY, GO ADD THINGS NOW!</h1>
        </div>
        <div v-else>
          <div
            class="card lg-8"
            style="max-width: 1040px; margin: auto; height: 90px; background-color:  rgba(255, 255, 255, 0.75);"
            v-for="product in cart"
          >
            <div class="row">
              <div class="col-lg-4 col-md-2 col-sm-5">
                <img
                  class="card-img-top card-img"
                  v-bind:src="product.image"
                  alt="..."
                  style="width:auto;height: 100px;margin-left: 40px; padding-top: 10px; padding-bottom: 20px;"
                />
              </div>

              <div class="col-lg-3 col-md-2 col-sm-1">
                <div class="card-body">
                  <h5
                    class="card-text"
                    style="margin-left:-120px; padding-bottom:-150px;max-width: 100%"
                  >
                    {{product.name}}
                  </h5>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-1">
                <div class="card-body">
                  <h5
                    class="card-text"
                    style="margin-left:-120px; padding-bottom:-150px;"
                  >
                    {{product.category}}
                  </h5>
                </div>
              </div>
              <div class="col-lg-1 col-md-2 col-sm-2">
                <p
                  class="card-price"
                  style="margin-left:20px; padding-top:30px;"
                >
                  {{product.price}}$
                </p>
              </div>
              <div class="col-lg-1 col-md-2 col-sm-1">
                <div
                  class="btn-class"
                  style="padding: 30px; margin-right: 20px;"
                >
                  <button
                    type="delete"
                    class="btn btn-danger"
                    v-on:click="deleteFromStorage(product)"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            style="margin-left: 72%; margin-right: 3%; margin-top: 50px; padding: 2% 2% 2% 7%; background: rgba(255, 255, 255, 0.5); border-radius: 20px"
          >
            <p>Cost: {{total}}$</p>
            <div v-if="total > 75">
              <p>Shipping: 0$</p>
              <p>Tax: Free</p>
              <hr style="color: black" />
              <p><strong>Total: {{total}}$</strong></p>
            </div>
            <div v-else>
              <p>Shipping: 7.5$</p>
              <p>Tax: Free</p>
              <hr
                style="width: 125%; margin-right: auto; margin-left: -50px; border: 3px solid black; border-radius: 10px"
              />
              <p><strong>Total: {{total+7.5}}$</strong></p>
            </div>
            <button
              id="show-modal"
              @click="showModal = true"
              type="buy"
              class="btn btn-primary"
              style="width: 75%;"
            >
              RENT
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div>
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

  <modal class="modal" v-if="showModal" @close="showModal = false">

    <h3 slot="header" style="position:absolute;">Payment Session</h3>
  </modal>
</div>

    
             
`
});

Vue.component('modal', {
    template: `
    
<transition name="modal" class="modal">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
            <button class="btn btn-danger"
                @click="$emit('close')"
                style="position: relative; left: auto; right: -95%;font-size: 15px;"
            >&times;
            </button>
          <slot name="header">
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            Fullname<br />
            <input type="text" placeholder="John Doe"/><br />
            Phone<br />
            <input type="text" placeholder="+905321112233"/><br />
            Adress<br />
            <textarea name="address" form="usrform" placeholder="1601 Willow Rd, Menlo Park, California 94025"></textarea>
            Credit Card Number<br />
            <input type="text" placeholder="1111222233334444"/><br />
            CVC<br />
            <input type="text" placeholder="010"/><br />
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button
              class="btn btn-success"
              @click="$emit('close')"
              onclick="completePayment()"
              style="font-size: 16px;padding-left: 45px; padding-right: 45px"
            >
              Pay
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</transition>


`
});

function completePayment(){
            Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Payment is successful!',
                  showConfirmButton: true,
                  timer: 2000
            })
    }