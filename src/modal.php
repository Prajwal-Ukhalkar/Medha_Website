
	<!-- Button trigger modal -->
<!-- Button trigger modal -->
<button type="button"
  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight hidden uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
  data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="toggle-btn-auto" >
  Launch static backdrop modal
</button>

<!-- Modal -->
<div class="modal-onload modal p-3 md:p-0 fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
  aria-labelledby="staticBackdropLabel" aria-hidden="true" >
  <div class="modal-dialog relative w-auto pointer-events-none">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between text-center p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl  font-medium leading-normal text-gray-800 " id="exampleModalLabel">
          Upcoming Events in Medha
        </h5>
		
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1  border-none rounded-none opacity-100 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close">X</button>
      </div>
      <div class="modal-body relative p-4 ">
        <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
			<div class="carousel-indicators absolute right-0 bottom-0 bg-black/50 rounded-lg left-0 flex justify-center p-0 mb-4">
			  <button
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide-to="0"
				class="active"
				aria-current="true"
				aria-label="Slide 1"
			  ></button>
			  <button
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide-to="1"
				aria-label="Slide 2"
			  ></button>
			  <button
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide-to="2"
				aria-label="Slide 3"
			  ></button>
			  
			 
			</div>
			<div class="carousel-inner relative w-full overflow-hidden">
			  <div class="carousel-item active relative float-left w-full">
				<img
				  src="assets/img/modal/2.jpg"
				  class="block w-full"
				  alt="..."
				/>
				
			  </div>
			  <div class="carousel-item relative float-left w-full">
				<img
				  src="assets/img/modal/3.jpg"
				  class="block w-full"
				  alt="..."
				/>
				
			  </div>
			  <div class="carousel-item relative float-left w-full">
				<img
				  src="assets/img/modal/4.jpg"
				  class="block w-full"
				  alt="..."
				/>
				
			  </div>
			</div>
			<button
			  class="carousel-control-prev absolute top-0 bottom-0 text-black flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
			  type="button"
			  data-bs-target="#carouselExampleCaptions"
			  data-bs-slide="prev"
			>
			  <span class="carousel-control-prev-icon text-black inline-block bg-black rounded-lg" aria-hidden="true"></span>
			  <span class="visually-hidden text-black ">Previous</span>
			</button>
			<button
			  class="carousel-control-next absolute top-0 bottom-0 text-black flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
			  type="button"
			  data-bs-target="#carouselExampleCaptions"
			  data-bs-slide="next"
			>
			  <span class="carousel-control-next-icon inline-block text-black bg-black rounded-lg" aria-hidden="true"></span>
			  <span class="visually-hidden text-black">Next</span>
			</button>
		  </div>
      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        
      </div>
    </div>
  </div>
</div>
