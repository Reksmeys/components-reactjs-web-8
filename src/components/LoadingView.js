import React from "react";
import preview from "./preview.png";

export default function LoadingView() {
  return (
    <>
      <div className="col-sm-6 col-lg-4 col-xl-3">
        <div class="card" aria-hidden="true">
          <img src={preview} class="card-img-top" alt="placeholder" />
          <div class="card-body">
            <h5 class="card-title placeholder-glow">
              <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-glow">
              <span class="placeholder col-7"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-6"></span>
              <span class="placeholder col-8"></span>
            </p>
            <a
              href="#"
              tabindex="-1"
              class="btn btn-primary disabled placeholder col-6"
            ></a>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 col-xl-3">
        <div class="card" aria-hidden="true">
          <img src={preview} class="card-img-top" alt="placeholder" />
          <div class="card-body">
            <h5 class="card-title placeholder-glow">
              <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-glow">
              <span class="placeholder col-7"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-6"></span>
              <span class="placeholder col-8"></span>
            </p>
            <a
              href="#"
              tabindex="-1"
              class="btn btn-primary disabled placeholder col-6"
            ></a>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 col-xl-3">
        <div class="card" aria-hidden="true">
          <img src={preview} class="card-img-top" alt="placeholder" />
          <div class="card-body">
            <h5 class="card-title placeholder-glow">
              <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-glow">
              <span class="placeholder col-7"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-6"></span>
              <span class="placeholder col-8"></span>
            </p>
            <a
              href="#"
              tabindex="-1"
              class="btn btn-primary disabled placeholder col-6"
            ></a>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 col-xl-3">
        <div class="card" aria-hidden="true">
          <img src={preview} class="card-img-top" alt="placeholder" />
          <div class="card-body">
            <h5 class="card-title placeholder-glow">
              <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-glow">
              <span class="placeholder col-7"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-6"></span>
              <span class="placeholder col-8"></span>
            </p>
            <a
              href="#"
              tabindex="-1"
              class="btn btn-primary disabled placeholder col-6"
            ></a>
          </div>
        </div>
      </div>
    </>
  );
}
