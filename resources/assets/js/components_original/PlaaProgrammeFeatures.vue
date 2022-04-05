<template>
    <div class="mb-8 mt-16 md:mx-8 md:py-16" :class="theme">
        <div class="max-w-4xl mx-auto">

            <h3 class="heading pt-6 px-2 font-bold italic text-center text-plaa-sign-up font-normal font-primary text-3xl xl:text-4xl tracking-wide mb-15"
              v-html="headingParsed">
            </h3>

            <ul class="flex flex-wrap list-none p-0 mt-8 xl:flex-nowrap">

              <li v-for="(feature, index) in features"
                  :key="index"
                  :index="index"
                  class="flex flex-col items-center w-full md:w-1/2 lg:w-1/3 xl:w-1/5 px-6 lg:px-2 mb-10">

                  <div class="flex flex-col justify-center mb-2 lg:h-27 md:h-20">

                    <svg v-if="feature.icon == 'people-group'" xmlns="http://www.w3.org/2000/svg" width="78.741" height="83.499" viewBox="0 0 78.741 83.499">
                      <g id="Group_6682" data-name="Group 6682" transform="translate(477.541 160.737)">
                        <path id="Path_37229" data-name="Path 37229" d="M-379.386,31.209a8.274,8.274,0,0,0-8.274-8.274,8.274,8.274,0,0,0-8.273,8.274" transform="translate(-48.348 -109.947)" fill="none" stroke="#343434" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        <circle id="Ellipse_972" data-name="Ellipse 972" cx="6.864" cy="6.864" r="6.864" transform="translate(-442.766 -101.353)" fill="none" stroke="#343434" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        <path id="Path_37230" data-name="Path 37230" d="M-310.192-39.345a8.274,8.274,0,0,0-8.273-8.274,8.274,8.274,0,0,0-8.274,8.274" transform="translate(-90.108 -67.365)" fill="none" stroke="#343434" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        <circle id="Ellipse_973" data-name="Ellipse 973" cx="6.864" cy="6.864" r="6.864" transform="translate(-415.333 -129.325)" fill="none" stroke="#343434" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        <path id="Path_37231" data-name="Path 37231" d="M-459.494-37.345a8.274,8.274,0,0,0-8.274-8.274,8.274,8.274,0,0,0-8.273,8.274" transform="translate(0 -68.572)" fill="none" stroke="#343434" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        <circle id="Ellipse_974" data-name="Ellipse 974" cx="6.864" cy="6.864" r="6.864" transform="translate(-474.526 -128.532)" fill="none" stroke="#343434" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        <path id="Path_37232" data-name="Path 37232" d="M-384.386-114.791a8.274,8.274,0,0,0-8.274-8.273,8.274,8.274,0,0,0-8.273,8.273" transform="translate(-45.33 -21.831)" fill="none" stroke="#343434" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        <circle id="Ellipse_975" data-name="Ellipse 975" cx="6.864" cy="6.864" r="6.864" transform="translate(-444.748 -159.237)" fill="none" stroke="#343434" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        <path id="Path_37233" data-name="Path 37233" d="M-318.525-48.936" transform="translate(-95.066 -66.57)" fill="none" stroke="#343434" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        <path class="coloured" id="Path_37234" data-name="Path 37234" d="M-339.937-119.611A22.392,22.392,0,0,1-329.86-110.6" transform="translate(-82.143 -23.916)" fill="none" stroke="#00903f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        <path class="coloured" id="Path_37235" data-name="Path 37235" d="M-433.9,2.153a22.389,22.389,0,0,1-10.077-9.009" transform="translate(-19.349 -91.967)" fill="none" stroke="#00903f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        <path class="coloured" id="Path_37236" data-name="Path 37236" d="M-325.314-14.64a22.388,22.388,0,0,1-9.009,10.077" transform="translate(-85.531 -87.269)" fill="none" stroke="#00903f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        <path class="coloured" id="Path_37237" data-name="Path 37237" d="M-441.449-112.322a22.388,22.388,0,0,1,10.1-8.987" transform="translate(-20.877 -22.891)" fill="none" stroke="#00903f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                      </g>
                    </svg>

                    <svg v-if="feature.icon == 'ebook'" xmlns="http://www.w3.org/2000/svg" width="79.806" height="79.46" viewBox="0 0 79.806 79.46">
                      <g id="Group_6631" data-name="Group 6631" transform="translate(0.25 0.25)">
                        <path id="Path_36969" data-name="Path 36969" d="M-3554.486,2166.2v-60.459a3.76,3.76,0,0,1,3.76-3.76h50.282a5.379,5.379,0,0,1,1.178.276c1.428.341,1.739,1.363,2.275,2.59a9.089,9.089,0,0,1,.427,3.72c-.04,7.836-.022,15.672-.017,23.508a6.887,6.887,0,0,0,.124,2.405c.2.5.891.805,1.411,1.18a2.819,2.819,0,0,1,.312.279A57.512,57.512,0,0,1-3489.3,2142a15.773,15.773,0,0,1,3.213,9.023c.118,4.617.051,9.239.013,13.858a3.381,3.381,0,0,0,1.053,2.56,10.111,10.111,0,0,1,2.064,2.475c.431.9,1.3,1.355,1.719,2.265a12.609,12.609,0,0,0,1.805,2.239c.621.787,1.171,1.63,1.8,2.405.763.934,1.609,1.8,2.4,2.709l-.651,1.411h-1.407c-.744-.919-1.479-1.845-2.233-2.756-1.191-1.438-2.483-2.8-3.571-4.313-1.539-2.139-3.29-4.106-4.882-6.2a2.312,2.312,0,0,1-.554-1.538c.019-4.207.036-8.415,0-12.621a23.236,23.236,0,0,0-.269-4.778c-.258-1.2-.944-2.212-1.122-3.406a36.571,36.571,0,0,0-6.553-7.513,1.28,1.28,0,0,0-.11.341c-.005,4.909.02,9.817-.025,14.725a4.809,4.809,0,0,0,.931,2.423c.218.393.817.557,1.177.895.61.574.537,1.268-.137,1.911-.589.562-.885.551-1.567-.127q-3.6-3.586-7.186-7.192a3.159,3.159,0,0,0-2.781-1.08,2.248,2.248,0,0,0-1.961,1.8,2.58,2.58,0,0,0,.615,2.19c.926,1.247,1.8,2.534,2.737,3.771,1.591,2.094,3.239,4.146,4.81,6.254a2.192,2.192,0,0,1,.587,1.686,11.552,11.552,0,0,0-.015,1.225,8.968,8.968,0,0,0,1.573,5.13c.965,1.607,2.14,3.088,3.192,4.644.612.906,1.145,1.866,1.748,2.778a.836.836,0,0,1-.167,1.207,3.048,3.048,0,0,0-.36.517l-1.07.025c-.578-.753-1.167-1.5-1.732-2.262a35.107,35.107,0,0,1-4.24-6.653,2.488,2.488,0,0,0-2.608-1.652c-14.951.063-29.9.028-44.854.064-1.042,0-1.965-.415-2.973-.476a1.737,1.737,0,0,1-1.056-.372c-.943-.945-2.167-1.718-2.259-3.263C-3554.2,2166.282-3554.386,2166.246-3554.486,2166.2Zm10.528-31.173v20.685c0,.408.018.818-.005,1.224a.453.453,0,0,0,.5.5c.407-.024.818-.005,1.227-.005h32.428c.351,0,.7.024,1.051-.009a2.705,2.705,0,0,0,.6-.2,4.536,4.536,0,0,0-.277-.585,4.475,4.475,0,0,0-.364-.377,7.669,7.669,0,0,1-1.786-3.46,4.662,4.662,0,0,1,.682-3.379c.538-.849,1.034-1.769,2.258-1.853.2-.013.437-.49.52-.791a4.035,4.035,0,0,0,.021-1.046v-31.9c0-.254.014-.507.021-.76.01-.421-.12-.7-.738-.566a3.447,3.447,0,0,1-.7.007h-34.006a6.935,6.935,0,0,1-.876-.007c-.508-.065-.576.2-.553.614s0,.818,0,1.227Zm44.918,16.6V2107.9c0-.176.33-.354.355-.526a2.1,2.1,0,0,0-.554-1.521,4.374,4.374,0,0,0-3.612-1.417q-22.715.012-45.43.005c-.234,0-.477.016-.7.01a2.336,2.336,0,0,0-2.7,2.254,3.189,3.189,0,0,0-.337,1.784q-.024,27.714-.014,55.428a2.893,2.893,0,0,0,.021,1.043c.272.646.265,1.387.829,1.946a4.047,4.047,0,0,0,3.08,1.055q22.365-.006,44.729,0a7.34,7.34,0,0,0,1.05-.015c.169-.025.437-.191.454-.322a4.353,4.353,0,0,0-1.707-4.284,4.088,4.088,0,0,1-1.3-1.773,2.5,2.5,0,0,0-2.679-1.7c-12.337.042-24.674.027-37.01.027-.468,0-.936-.017-1.4,0-.414.019-.477-.2-.45-.539.019-.232,0-.468,0-.7v-47.359c0-.234.015-.469,0-.7-.027-.336.035-.566.449-.539.291.019.584,0,.876,0q19.558,0,39.115,0c1.319,0,1.322,0,1.322,1.411q0,17.1-.015,34.2c0,.751.1,1.423.765,1.784A23.3,23.3,0,0,1-3499.04,2151.632Z" transform="translate(3554.486 -2101.986)" fill="#343434" stroke="#343434" stroke-width="0.5"/>
                        <path class="coloured-fill" id="Path_36970" data-name="Path 36970" d="M-3493.772,2161.969q5.433,0,10.866,0c.879,0,.879.01.9.783.037,1.671.037,1.672-1.585,1.672q-10.427,0-20.855,0c-1.067,0-1.068-.008-1.071-1.133a4.962,4.962,0,0,0-.005-.7c-.088-.6.24-.632.714-.63C-3501.134,2161.976-3497.453,2161.969-3493.772,2161.969Z" transform="translate(3522.718 -2140.914)" fill="#00903f"/>
                        <path class="coloured-fill" id="Path_36971" data-name="Path 36971" d="M-3493.643,2176.984q5.346,0,10.69,0c.972,0,.972.011.978,1.051q0,.175,0,.351c-.005,1.041-.006,1.051-.978,1.051q-10.778,0-21.556,0c-.972,0-.972-.011-.977-1.051q0-.175,0-.351c.005-1.041.005-1.05.977-1.051Q-3499.076,2176.979-3493.643,2176.984Z" transform="translate(3522.682 -2150.665)" fill="#00903f"/>
                        <path class="coloured-fill" id="Path_36972" data-name="Path 36972" d="M-3493.772,2191.97q5.433,0,10.866,0c.879,0,.879.01.9.782.037,1.671.037,1.672-1.585,1.672q-10.427,0-20.855,0c-1.067,0-1.068-.008-1.071-1.133a4.962,4.962,0,0,0-.005-.7c-.088-.6.24-.632.714-.63C-3501.134,2191.976-3497.453,2191.97-3493.772,2191.97Z" transform="translate(3522.718 -2160.387)" fill="#00903f"/>
                        <path class="coloured-fill" id="Path_36973" data-name="Path 36973" d="M-3493.548,2206.969c3.622,0,7.244.008,10.866-.009.479,0,.716.042.723.633.022,1.833.052,1.833-1.793,1.833q-10.34,0-20.68,0c-1.046,0-1.046-.007-1.056-.973,0-.175,0-.351,0-.526.01-.944.011-.954.9-.955Q-3499.068,2206.965-3493.548,2206.969Z" transform="translate(3522.683 -2170.123)" fill="#00903f"/>
                        <path class="coloured-fill" id="Path_36974" data-name="Path 36974" d="M-3493.729,2224.431q-5.433,0-10.866,0c-.892,0-.894-.01-.9-.951,0-.351.016-.7,0-1.051-.025-.407.186-.46.531-.459,2.454.011,4.907.006,7.361.006q7.36,0,14.721,0c.892,0,.893.01.9.951a7.027,7.027,0,0,0,.008.876c.08.588-.223.64-.709.638C-3486.368,2224.423-3490.048,2224.431-3493.729,2224.431Z" transform="translate(3522.693 -2179.864)" fill="#00903f"/>
                        <path class="coloured-fill" id="Path_36975" data-name="Path 36975" d="M-3498.852,2146.984c1.926,0,3.853-.008,5.779.011.178,0,.5.159.507.263a15.8,15.8,0,0,1,.007,1.924c0,.092-.221.2-.357.25a1,1,0,0,1-.347.008c-3.852,0-7.705-.007-11.558.009-.478,0-.716-.042-.723-.632-.022-1.834-.052-1.833,1.789-1.833Z" transform="translate(3522.722 -2131.192)" fill="#00903f"/>
                        <path class="coloured-fill" id="Path_36976" data-name="Path 36976" d="M-3481.4,2277.432c-1.4,0-2.8,0-4.2,0-.882,0-.883-.01-.892-.959,0-.35.016-.7,0-1.05-.024-.412.2-.452.537-.451,3.034.01,6.068,0,9.1.01.16,0,.457.064.459.108q.046,1.11.007,2.224c0,.045-.3.113-.455.114C-3478.369,2277.436-3479.886,2277.432-3481.4,2277.432Z" transform="translate(3510.36 -2214.266)" fill="#00903f"/>
                      </g>
                    </svg>

                    <svg v-if="feature.icon == 'meal-plan'" xmlns="http://www.w3.org/2000/svg" width="75.92" height="80.372" viewBox="0 0 75.92 80.372">
                      <g id="Group_6632" data-name="Group 6632" transform="translate(1.5 1.25)">
                        <g id="Group_6022" data-name="Group 6022">
                          <g id="Group_6021" data-name="Group 6021" transform="translate(54.831 26.874)">
                            <path id="Path_36978" data-name="Path 36978" d="M833.53,1433.787s-6.456,8.311-5.83,18.045" transform="translate(-825.105 -1428.373)" fill="none" stroke="#343434" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.5"/>
                            <path id="Path_36979" data-name="Path 36979" d="M826.7,1436.323c1.6-.253,2.995-1.477,3.954-3.831a11.929,11.929,0,0,0,.75-2.9l1.452-10.725a.15.15,0,0,0-.176-.169,36.378,36.378,0,0,0-5.781,1.626,9.738,9.738,0,0,0-5.649,12.709" transform="translate(-820.541 -1418.691)" fill="none" stroke="#343434" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.5"/>
                          </g>
                          <path id="Path_36980" data-name="Path 36980" d="M825.089,1484.628a3.236,3.236,0,0,1-6.471,0" transform="translate(-764.476 -1434.104)" fill="none" stroke="#343434" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.5"/>
                          <path id="Path_36981" data-name="Path 36981" d="M712.5,1443.46H672.368a4.7,4.7,0,0,1-4.7-4.7v-55.884a4.7,4.7,0,0,1,4.7-4.7h7.139" transform="translate(-667.67 -1365.837)" fill="none" stroke="#343434" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                          <path id="Path_36982" data-name="Path 36982" d="M794.67,1378.181h7.139a4.7,4.7,0,0,1,4.7,4.7v7.139" transform="translate(-749.118 -1365.837)" fill="none" stroke="#343434" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                          <path id="Path_36983" data-name="Path 36983" d="M730.168,1350.371a.033.033,0,0,1-.033-.033,6.553,6.553,0,1,0-13.106,0,.033.033,0,0,1-.033.033h-2.815a3.511,3.511,0,0,0-3.511,3.511v6.68a.21.21,0,0,0,.21.21h25.405a.209.209,0,0,0,.209-.21v-6.68a3.511,3.511,0,0,0-3.512-3.512Z" transform="translate(-695.247 -1343.766)" fill="none" stroke="#343434" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.5"/>
                          <line id="Line_1446" data-name="Line 1446" x2="1.076" transform="translate(27.977 6.246)" fill="none" stroke="#343434" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                          <path class="coloured" id="Path_36984" data-name="Path 36984" d="M697.239,1413.888l2.475,2.564,5.128-5.129" transform="translate(-686.633 -1387.093)" fill="none" stroke="#00903f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                          <line id="Line_1447" data-name="Line 1447" x2="19.368" transform="translate(24.031 24.539)" fill="none" stroke="#343434" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                          <line id="Line_1448" data-name="Line 1448" x2="10.76" transform="translate(24.031 29.919)" fill="none" stroke="#343434" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                          <path class="coloured" id="Path_36985" data-name="Path 36985" d="M697.239,1463.888l2.475,2.564,5.128-5.128" transform="translate(-686.633 -1419.159)" fill="none" stroke="#00903f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                          <line id="Line_1449" data-name="Line 1449" x2="19.368" transform="translate(24.031 42.472)" fill="none" stroke="#343434" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                          <line id="Line_1450" data-name="Line 1450" x2="10.76" transform="translate(24.031 47.853)" fill="none" stroke="#343434" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                          <path class="coloured" id="Path_36986" data-name="Path 36986" d="M697.239,1513.888l2.475,2.564,5.128-5.128" transform="translate(-686.633 -1451.225)" fill="none" stroke="#00903f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                          <line id="Line_1451" data-name="Line 1451" x2="12.195" transform="translate(24.031 60.406)" fill="none" stroke="#343434" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                          <line id="Line_1452" data-name="Line 1452" x2="10.76" transform="translate(24.031 65.786)" fill="none" stroke="#343434" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                          <circle id="Ellipse_749" data-name="Ellipse 749" cx="16.499" cy="16.499" r="16.499" transform="translate(40.172 44.624)" fill="none" stroke="#343434" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.5"/>
                        </g>
                      </g>
                    </svg>

                    <svg v-if="feature.icon == 'calendar'" xmlns="http://www.w3.org/2000/svg" width="72.449" height="70.62" viewBox="0 0 72.449 70.62">
                      <g id="Group_6630" data-name="Group 6630" transform="translate(1.25 1.25)">
                        <g id="Group_6011" data-name="Group 6011" transform="translate(0)">
                          <rect id="Rectangle_4978" data-name="Rectangle 4978" width="69.949" height="68.12" rx="8" transform="translate(0 0)" fill="none" stroke="#343434" stroke-miterlimit="10" stroke-width="2.5"/>
                          <path class="coloured" id="Path_36964" data-name="Path 36964" d="M5.315,0H54.443c4.2,0,3.618,3.168,3.618,7.076s.578,7.076-3.618,7.076H5.315c-4.2,0-3.785-3.168-3.785-7.076S1.119,0,5.315,0Z" transform="translate(5.336 6.567)" fill="none" stroke="#00903f" stroke-width="2.5"/>
                          <rect id="Rectangle_4980" data-name="Rectangle 4980" width="56.801" height="35.006" rx="4" transform="translate(6.623 26.491)" fill="none" stroke="#343434" stroke-miterlimit="10" stroke-width="2.5"/>
                        </g>
                        <line id="Line_1440" data-name="Line 1440" x1="56.179" transform="translate(6.87 38.242)" fill="none" stroke="#343434" stroke-linecap="round" stroke-width="3"/>
                        <line id="Line_1441" data-name="Line 1441" x1="56.179" transform="translate(6.87 50.374)" fill="none" stroke="#343434" stroke-linecap="round" stroke-width="2.5"/>
                        <line id="Line_1442" data-name="Line 1442" x1="33.697" transform="translate(28.099 27.459) rotate(90)" fill="none" stroke="#343434" stroke-linecap="round" stroke-width="2.5"/>
                        <line id="Line_1443" data-name="Line 1443" x1="33.697" transform="translate(16.979 27.459) rotate(90)" fill="none" stroke="#343434" stroke-linecap="round" stroke-width="2.5"/>
                        <line id="Line_1444" data-name="Line 1444" x1="33.697" transform="translate(52.36 27.459) rotate(90)" fill="none" stroke="#343434" stroke-linecap="round" stroke-width="2.5"/>
                        <line id="Line_1445" data-name="Line 1445" x1="33.697" transform="translate(40.23 27.459) rotate(90)" fill="none" stroke="#343434" stroke-linecap="round" stroke-width="2.5"/>
                      </g>
                    </svg>

                    <svg v-if="feature.icon == 'live-streams'" xmlns="http://www.w3.org/2000/svg" width="98.222" height="78.235" viewBox="0 0 98.222 78.235">
                      <g id="Group_6681" data-name="Group 6681" transform="translate(-39.629 -55.284)">
                        <rect id="Rectangle_5266" data-name="Rectangle 5266" width="64.322" height="40.609" rx="8.676" transform="translate(56.872 74.05)" fill="none" stroke="#343434" stroke-miterlimit="10" stroke-width="3"/>
                        <path id="Path_37224" data-name="Path 37224" d="M130.206,112.5,114.1,103.2a1.846,1.846,0,0,0-2.769,1.6v18.6A1.846,1.846,0,0,0,114.1,125l16.108-9.3A1.846,1.846,0,0,0,130.206,112.5Z" transform="translate(-30.028 -19.748)" fill="none" stroke="#343434" stroke-miterlimit="10" stroke-width="3"/>
                        <path class="coloured" id="Path_37225" data-name="Path 37225" d="M176.608,73.674a9.662,9.662,0,0,1,9.634,9.633" transform="translate(-57.951 -7.225)" fill="none" stroke="#00903f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        <path class="coloured" id="Path_37226" data-name="Path 37226" d="M177.356,56.784c9.5,0,17.266,6.6,17.266,17.266" transform="translate(-58.271 0)" fill="none" stroke="#00903f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        <path class="coloured" id="Path_37227" data-name="Path 37227" d="M64.849,164.165a9.662,9.662,0,0,1-9.634-9.634" transform="translate(-6.025 -41.812)" fill="none" stroke="#00903f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        <path class="coloured" id="Path_37228" data-name="Path 37228" d="M58.4,175.349c-9.5,0-17.266-6.6-17.266-17.266" transform="translate(0 -43.331)" fill="none" stroke="#00903f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                      </g>
                    </svg>

                  </div>

                  <div class="flex w-full md:h-12 items-center justify-center">
                      <h5 class="feature-title text-center uppercase text-plaa-green font-normal font-primary text-xl tracking-wider w-48 font-bold italic">
                          {{ feature.title }}
                      </h5>
                  </div>

                  <p class="text-center text-grey-darker w-48 leading-snug">
                      {{ feature.blurb }}
                  </p>
              </li>

            </ul>

        </div>
    </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String
    },
    theme: {
      type: String,
      default: 'purple'
    },
    features: {
      type: Array,
      required: true
    }
  },

  computed: {
    headingParsed () {
      return this.heading.replace(/\\"/g, '"').replace(/\\'/g, "'");
    }
  }
};
</script>

<style lang="sass" scoped>
  .purple
    .feature-title
      @apply text-plaa-purple

    svg
      .coloured
        @apply stroke-current text-plaa-purple

  .red
    .feature-title
      @apply text-plaa-red

    svg
      .coloured
        @apply stroke-current text-plaa-red

      .coloured-fill
        @apply fill-current text-plaa-red
  .blue
    .feature-title
      @apply text-plaa-blue

    svg
      .coloured
        @apply stroke-current text-plaa-blue

      .coloured-fill
        @apply fill-current text-plaa-blue
</style>
