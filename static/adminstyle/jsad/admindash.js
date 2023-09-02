let form = document.getElementById("form");
let partylistInput = document.getElementById("partylist-input");
let message = document.getElementById("message");
let uploadedPartylist = document.getElementById("uploaded-partylist");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (partylistInput.value === "") {
    console.log("fail");
    message.innerHTML = "Partylist's name cannot be blank";
  } else {
    console.log("success");
    message.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = partylistInput.value;
  console.log(data.text);
  showData();
};

let editData = (e) => {
  partylistInput.value +=
    e.parentElement.previousElementSibling.firstElementChild.innerHTML;
  e.parentElement.parentElement.remove();
};
let deleteData = (e) => {
  e.parentElement.parentElement.remove();
};

let showData = () => {
  uploadedPartylist.innerHTML += `            
  <div>
  <div class="rounded-3" style="background: rgb(55, 74, 70)">
    <a onclick="openModal(this)" href="#" class="card px-3 pt-3">
      <div>${data.text}</div>
    </a>
    <span
      class=".options d-flex justify-content-center mt-2 pb-3"
      style="gap: 5px"
    >
      <img
        onclick="editData(this)"
        src="../static/imgs/pen.png"
        style="width: 30px; cursor: pointer"
      />
      <img
        onclick="deleteData(this)"
        src="../static/imgs/bin.png"
        style="width: 30px; cursor: pointer"
      />
    </span>
  </div>

  <div class="cands-modal hidden">
    <button onclick="closeModal(this)" class="cands-close-modal">
      &times;
    </button>
    <!-- Partylist -->
    <section class="my-3 mt-5 pb-3">
      <input
        type="text"
        value="${data.text}"
        readonly
        style="text-transform: uppercase"
        class="display-6 text-center mb-4 text-white input"
      />

      <div class="d-flex flex-wrap justify-content-center gap-3">
        <!-- mayor -->
        <section
          class="d-flex align-items-center border-radius info-box my-1 gap-2 pt-2"
        >
          <div
            class="d-flex flex-column align-items-center candidate"
            style="margin-left: 55px"
          >
            <img
              class="user-img rounded-circle mb-1"
              src="../static/imgs/user.png"
            />
            <div>
              <label
                for="uploadphoto"
                style="
                  background: transparent;
                  color: rgb(199, 237, 205);
                  padding: 0.5rem 1rem;
                  cursor: pointer;
                "
                class="rounded"
                >Upload photo</label
              ><br />
              <input
                type="file"
                class="user-photo-inp"
                name="uploadphoto"
                id="uploadphoto"
                value=""
                accept="image/*"
              />
            </div>
          </div>
          <div class="text-start">
            <div>
              <h5 class="m-0" style="font-weight: bold">Mayor</h5>
              <input
                type="text"
                class="input m-0 font-des"
                placeholder="____________________🖊️"
              />
            </div>
            <br />
            <div>
              <p class="m-0" style="font-size: 1.2rem">Platforms:</p>
              <ul>
                <li>
                  <input
                    type="text"
                    class="input text-white"
                    placeholder="_________________________🖊️"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    class="input text-white"
                    placeholder="_________________________🖊️"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    class="input text-white"
                    placeholder="_________________________🖊️"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- vice mayor -->
        <section
          class="d-flex align-items-center border-radius info-box my-1 gap-3 pt-2"
        >
          <div
            class="d-flex flex-column align-items-center candidate"
            style="margin-left: 55px"
          >
            <img
              class="user-img rounded-circle mb-1"
              src="../static/imgs/user.png"
            />
            <div>
              <label
                for="uploadphoto"
                style="
                  background: transparent;
                  color: rgb(199, 237, 205);
                  padding: 0.5rem 1rem;
                  cursor: pointer;
                "
                class="rounded"
                >Upload photo</label
              ><br />
              <input
                type="file"
                class="user-photo-inp"
                name="uploadphoto"
                id="uploadphoto"
                value=""
                accept="image/*"
              />
            </div>
          </div>
          <div class="text-start">
            <div>
              <h5 class="m-0" style="font-weight: bold">
                Vice Mayor
              </h5>
              <input
                type="text"
                class="input m-0 font-des"
                placeholder="____________________🖊️"
              />
            </div>
            <br />
            <div>
              <p class="m-0" style="font-size: 1.2rem">Platforms:</p>
              <ul>
                <li>
                  <input
                    type="text"
                    class="input text-white"
                    placeholder="_________________________🖊️"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    class="input text-white"
                    placeholder="_________________________🖊️"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    class="input text-white"
                    placeholder="_________________________🖊️"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- senator -->
        <section
          class="d-flex align-items-center border-radius info-box my-1 gap-3 pt-2"
        >
          <div
            class="d-flex flex-column align-items-center candidate"
            style="margin-left: 55px"
          >
            <img
              class="user-img rounded-circle mb-1"
              src="../static/imgs/user.png"
            />
            <div>
              <label
                for="uploadphoto"
                style="
                  background: transparent;
                  color: rgb(199, 237, 205);
                  padding: 0.5rem 1rem;
                  cursor: pointer;
                "
                class="rounded"
                >Upload photo</label
              ><br />
              <input
                type="file"
                class="user-photo-inp"
                name="uploadphoto"
                id="uploadphoto"
                value=""
                accept="image/*"
              />
            </div>
          </div>
          <div class="text-start">
            <div>
              <h5 class="m-0" style="font-weight: bold">Senator</h5>
              <input
                type="text"
                class="input m-0 font-des"
                placeholder="____________________🖊️"
              />
            </div>
            <br />
            <div>
              <p class="m-0" style="font-size: 1.2rem">Platforms:</p>
              <ul>
                <li>
                  <input
                    type="text"
                    class="input text-white"
                    placeholder="_________________________🖊️"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    class="input text-white"
                    placeholder="_________________________🖊️"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    class="input text-white"
                    placeholder="_________________________🖊️"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- councilors -->

        <section
          class="d-flex align-items-center border-radius info-box my-1 gap-3 pt-2"
        >
          <div
            class="d-flex flex-column align-items-center candidate"
            style="margin-left: 55px"
          >
            <img
              class="user-img rounded-circle mb-1"
              src="../static/imgs/user.png"
            />
            <div>
              <label
                for="uploadphoto"
                style="
                  background: transparent;
                  color: rgb(199, 237, 205);
                  padding: 0.5rem 1rem;
                  cursor: pointer;
                "
                class="rounded"
                >Upload photo</label
              ><br />
              <input
                type="file"
                class="user-photo-inp"
                name="uploadphoto"
                id="uploadphoto"
                value=""
                accept="image/*"
              />
            </div>
          </div>
          <div class="text-start">
            <div>
              <h5 class="m-0" style="font-weight: bold">
                Councilor #1
              </h5>
              <input
                type="text"
                class="input m-0 font-des"
                placeholder="____________________🖊️"
              />
            </div>
            <br />
            <div>
              <p class="m-0" style="font-size: 1.2rem">Platforms:</p>
              <ul>
                <li>
                  <input
                    type="text"
                    class="input text-white"
                    placeholder="_________________________🖊️"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    class="input text-white"
                    placeholder="_________________________🖊️"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    class="input text-white"
                    placeholder="_________________________🖊️"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          class="d-flex align-items-center border-radius info-box my-1 gap-3 pt-2"
        >
          <div
            class="d-flex flex-column align-items-center candidate"
            style="margin-left: 55px"
          >
            <img
              class="user-img rounded-circle mb-1"
              src="../static/imgs/user.png"
            />
            <div>
              <label
                for="uploadphoto"
                style="
                  background: transparent;
                  color: rgb(199, 237, 205);
                  padding: 0.5rem 1rem;
                  cursor: pointer;
                "
                class="rounded"
                >Upload photo</label
              ><br />
              <input
                type="file"
                class="user-photo-inp"
                name="uploadphoto"
                id="uploadphoto"
                value=""
                accept="image/*"
              />
            </div>
          </div>
          <div class="text-start">
            <div>
              <h5 class="m-0" style="font-weight: bold">
                Councilor #2
              </h5>
              <input
                type="text"
                class="input m-0 font-des"
                placeholder="____________________🖊️"
              />
            </div>
            <br />
            <div>
              <p class="m-0" style="font-size: 1.2rem">Platforms:</p>
              <ul>
                <li>
                  <input
                    type="text"
                    class="input text-white"
                    placeholder="_________________________🖊️"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    class="input text-white"
                    placeholder="_________________________🖊️"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    class="input text-white"
                    placeholder="_________________________🖊️"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          class="d-flex align-items-center border-radius info-box my-1 gap-3 pt-2"
        >
          <div
            class="d-flex flex-column align-items-center candidate"
            style="margin-left: 55px"
          >
            <img
              class="user-img rounded-circle mb-1"
              src="../static/imgs/user.png"
            />
            <div>
              <label
                for="uploadphoto"
                style="
                  background: transparent;
                  color: rgb(199, 237, 205);
                  padding: 0.5rem 1rem;
                  cursor: pointer;
                "
                class="rounded"
                >Upload photo</label
              ><br />
              <input
                type="file"
                class="user-photo-inp"
                name="uploadphoto"
                id="uploadphoto"
                value=""
                accept="image/*"
              />
            </div>
          </div>
          <div class="text-start">
            <div>
              <h5 class="m-0" style="font-weight: bold">
                Councilor #3
              </h5>
              <input
                type="text"
                class="input m-0 font-des"
                placeholder="____________________🖊️"
              />
            </div>
            <br />
            <div>
              <p class="m-0" style="font-size: 1.2rem">Platforms:</p>
              <ul>
                <li>
                  <input
                    type="text"
                    class="input text-white"
                    placeholder="_________________________🖊️"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    class="input text-white"
                    placeholder="_________________________🖊️"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    class="input text-white"
                    placeholder="_________________________🖊️"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          class="d-flex align-items-center border-radius info-box my-1 gap-3 pt-2"
        >
          <div
            class="d-flex flex-column align-items-center candidate"
            style="margin-left: 55px"
          >
            <img
              class="user-img rounded-circle mb-1"
              src="../static/imgs/user.png"
            />
            <div>
              <label
                for="uploadphoto"
                style="
                  background: transparent;
                  color: rgb(199, 237, 205);
                  padding: 0.5rem 1rem;
                  cursor: pointer;
                "
                class="rounded"
                >Upload photo</label
              ><br />
              <input
                type="file"
                class="user-photo-inp"
                name="uploadphoto"
                id="uploadphoto"
                value=""
                accept="image/*"
              />
            </div>
          </div>
          <div class="text-start">
            <div>
              <h5 class="m-0" style="font-weight: bold">
                Councilor #4
              </h5>
              <input
                type="text"
                class="input m-0 font-des"
                placeholder="____________________🖊️"
              />
            </div>
            <br />
            <div>
              <p class="m-0" style="font-size: 1.2rem">Platforms:</p>
              <ul>
                <li>
                  <input
                    type="text"
                    class="input text-white"
                    placeholder="_________________________🖊️"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    class="input text-white"
                    placeholder="_________________________🖊️"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    class="input text-white"
                    placeholder="_________________________🖊️"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <button
        class="btn-candidate-save btn bg-light text-decoration-none px-4 py-2 mt-5 rounded-pill"
        style="font-weight: 700"
      >
        SAVE
      </button>
    </section>
  </div>
  <script>
    let openModal = (e) => {
      const candsModal = document.querySelector(".cands-modal");
      candsModal.classList.toggle("hidden");
    };
    let closeModal = (e) => {
      const candsModal = document.querySelector(".cands-modal");
      candsModal.classList.toggle("hidden");
    };
  </script>
</div>
  `;
  partylistInput.value = "";
};
