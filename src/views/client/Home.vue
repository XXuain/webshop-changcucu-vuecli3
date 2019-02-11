<template>
  <div>
    <!-- slider -->
    <section class="slider">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="<% publicPath %>/img/home/slide/slide-01.png" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="/img/home/slide/slide-01.png" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="/img/home/slide/slide-01.png" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>

    <!-- 最新作品 LATEST WORKS -->
    <section>
      <div class="container">
        <!-- 標題 -->
        <div class="row heading heading-2">
          <div class="col-12">
            <p class="display-4 subheading">最新作品 ></p>
          </div>
          <div class="col-md-6">
            <h2 class="h2 EN-font-family">LATEST WORKS</h2>
          </div>
          <div class="col-md-6 text-right">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam amet vero eaque ex, fugit non deserunt aut
              consectetur provident voluptate alias reprehenderit aperiam temporibus laudantium est dolore soluta
              necessitatibus facilis.</p>
          </div>
        </div>
        <div>
          <div class="row mb-4">
            <div class="col-12 col-md">
              <div class="border p-3">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content content-center">
                    <div class="portfolio-name">
                      <a href="#" class="display-3">水桶包</a>
                    </div>
                    <div class="portfolio-subname">
                      <a href="#">Hobo Bag</a>
                    </div>
                  </div>
                  <img src="<% publicPath %>/img/BarrelBag/HB-01-1.png" class="img-fluid" alt="">
                </div>
              </div>
            </div>
            <div class="col-12 col-md">
              <div class="border p-3">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content content-center">
                    <div class="portfolio-name">
                      <a href="#" class="display-3">水桶包</a>
                    </div>
                    <div class="portfolio-subname">
                      <a href="#">Hobo Bag</a>
                    </div>
                  </div>
                  <img src="/img/BarrelBag/HB-01-2.png" class="img-fluid" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 作品列表 WORKS LIST -->
    <section class="bg-light py-5">
      <div class="container py-5">
        <!-- 標題 -->
        <div class="row heading">
          <div class="col-12">
            <p class="display-4 subheading">商品列表 ></p>
          </div>
          <div class="col-md-6">
            <h2 class="h2">WORKS LIST</h2>
          </div>
          <div class="col-md-6 item-filter">
            <ul class="nav justify-content-end">
              <li class="nav-item item-filter">
                <a class="nav-link active" href="#">全部<span>2</span></a>
              </li>
            </ul>
          </div>
        </div>

        <!-- 長夾 -->
        <div class="row mb-4">
          <div class="col-md-6 pr-0">
            <div class="bg-cover portfolio-hover" style="background-image: url('/img/home/LW-01-4.jpg');">
              <div class="portfolio-hover-content content-center">
                <div class="portfolio-name">
                  <a href="#" class="display-3">零錢包長夾</a>
                </div>
                <div class="portfolio-subname">
                  <a href="#">LW-01-4</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2 px-0">
            <div class="d-flex align-items-center h-100 bg-white py-5 pl-4">
              <div class="my-5">
                <p class="mb-0"><small>長夾 ></small></p>
                <h3 class="h5">Long wallets</h3>
              </div>
            </div>
          </div>
          <div class="col-md-4 pl-0">
            <div class="bg-cover portfolio-hover" style="background-image: url('/img/home/LW-01-2.jpg');">
              <div class="portfolio-hover-content content-center">
                <div class="portfolio-name">
                  <a href="#" class="display-3">零錢包長夾</a>
                </div>
                <div class="portfolio-subname">
                  <a href="#">LW-01-4</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 零錢包 -->
        <div class="row mb-4">
          <div class="col-md-2 pr-0">
            <div class="d-flex align-items-center h-100 bg-white py-5 pl-4">
              <div class="my-5">
                <p><small>零錢包 ></small></p>
                <h3 class="h5">Coin purse</h3>
              </div>
            </div>
          </div>
          <div class="col-md-6 px-0">
            <div class="bg-cover portfolio-hover" style="background-image: url('/img/home/CP-01-1.jpg');">
              <div class="portfolio-hover-content content-center">
                <div class="portfolio-name">
                  <a href="#" class="display-3">水桶包</a>
                </div>
                <div class="portfolio-subname">
                  <a href="#">Hobo Bag</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 pl-0">
            <div class="bg-cover portfolio-hover" style="background-image: url('/img/home/CP-02-2.jpg');">
              <div class="portfolio-hover-content content-center">
                <div class="portfolio-name">
                  <a href="#" class="display-3">水桶包</a>
                </div>
                <div class="portfolio-subname">
                  <a href="#">Hobo Bag</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 錶帶 -->
        <div class="row mb-4">
          <div class="col-md-4 pr-0">
            <div class="bg-cover portfolio-hover" style="background-image: url('/img/home/WB-01-3.png');
                    background-position: top;">
              <div class="portfolio-hover-content content-center">
                <div class="portfolio-name">
                  <a href="#" class="display-3">錶帶</a>
                </div>
                <div class="portfolio-subname">
                  <a href="#">LW-01-4</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 px-0">
            <div class="bg-cover portfolio-hover" style="background-image: url('/img/home/WB-01-7.png');
                    background-position: top;">
              <div class="portfolio-hover-content content-center">
                <div class="portfolio-name">
                  <a href="#" class="display-3">錶帶</a>
                </div>
                <div class="portfolio-subname">
                  <a href="#">LW-01-4</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2 pl-0">
            <div class="d-flex align-items-center h-100 bg-white py-5 pl-4">
              <div class="my-5">
                <p class="mb-0"><small>錶帶 ></small></p>
                <h3 class="h5">Watchband</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 客製服務 CUSTOM -->
    <!-- <section class="custom bg-cover">
      <div class="custom-bg-color">
        <div class="container">
          <div class="row heading heading-2">
            <div class="col-12">
              <p class="display-4 subheading">客製服務 ></p>
            </div>
            <div class="col-md-6">
              <h2 class="h2">CUSTOM</h2>
            </div>
            <div class="col-md-6 text-right text-white">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam amet vero eaque ex, fugit non deserunt
                aut
                consectetur provident voluptate alias reprehenderit aperiam temporibus laudantium est dolore soluta
                necessitatibus facilis.</p>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- insta shop -->
    <!-- <section class="instaShop bg-cover">
      <div class="container">
        <div class="row heading heading-2">
          <div class="col-md-6">
            <h2 class="h2">INSTA SHOP</h2>
          </div>
        </div>
      </div>
    </section> -->

  </div>
</template>

<script>
  /* eslint-disable */

  export default {
    name: "home",
    
  };
</script>