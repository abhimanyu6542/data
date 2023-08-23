export default function generateHTML(data: any) {
  console.log(data, "Inside template");
  const itemsHTML = data.item.map(
      (item) => `
    <tr class="flex items-center justify-between px-2 md:px-8 py-2 md:py-5">
      <td class="text-xs md:text-lg font-medium mb-2">
        ${item.name} X ( ${item.quantity} )</td>
      <td class="text-xs md:text-lg font-medium mb-2">${item.total_price}</td>
    </tr>
  `
    )
    .join("");
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Your Title Here</title>
      <style>
        /* Reset default styles */
        body,
        div,
        h1,
        h3,
        p,
        table,
        th,
        td,
        img {
          margin: 0;
          padding: 0;
          border: 0;
        }
  
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #383838;
          color: #17181a;
        }
  
        .container {
          padding: 20px;
          background-color: #17181a;
          color: #ef6817;
        }
  
        .header {
          font-size: 18px;
          margin-bottom: 10px;
          font-weight: bold;
        }
  
        .paragraph {
          font-size: 14px;
          max-width: 50%;
          font-weight: normal;
        }
  
        .font-para {
          text-transform: capitalize;
          margin-bottom: 9px;
        }
  
        table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid #ffffff;
        }
  
        th {
          text-align: left;
          padding: 8px;
          background-color: #ef6817;
          font-size: 2rem;
          font-weight: bold;
          color: #17181a;
        }
  
        td {
          text-align: left;
          padding: 8px;
          font-size: 1.5rem;
          font-weight: medium;
        }
  
        .bg-primary-orange {
          background-color: #ef6817;
        }
  
        .flex {
          display: flex;
        }
  
        .justify-between {
          justify-content: space-between;
        }
  
        .px-2 {
          padding-left: 8px;
          padding-right: 8px;
        }
  
        .py-2 {
          padding-top: 8px;
          padding-bottom: 8px;
        }
  
        .md\:px-8 {
          padding-left: 32px;
          padding-right: 32px;
        }
  
        .md\:py-5 {
          padding-top: 20px;
          padding-bottom: 20px;
        }
  
        .items-center {
          align-items: center;
        }
  
        .bg-white {
          background-color: #ffffff;
        }
  
        .p-2 {
          padding: 8px;
        }
  
        .md\:p-4 {
          padding: 16px;
        }
  
        .text-md {
          font-size: 1.5rem;
        }
  
        .md\:text-2xl {
          font-size: 6rem;
        }
  
        .text-black {
          color: #17181a;
        }
  
        .font-bold {
          font-weight: bold;
        }
  
        .text-xs {
          font-size: 1rem;
        }
  
        .md\:text-lg {
          font-size: 10px;
        }
  
        .mb-2 {
          margin-bottom: 4px;
        }
  
        .mr-10 {
          margin-right: 40px;
        }
  
        .md\:mr-28 {
          margin-right: 112px;
        }
  
        :root {
          --primary-black: #21201f;
          --primary-orange: #ef6817;
          --grey1: #727271;
          --grey2: #5f605d;
          --grey3: #383838;
          --black: #17181a;
        }
  
        .capitalize {
          text-transform: capitalize;
        }
  
        .mb-14 {
          margin-bottom: 1rem;
        }
  
        .mb-20 {
          margin-bottom: 1.25rem;
        }
  
        .text-md {
          font-size: 0.875rem;
        }
  
        .md\:text-3xl {
          font-size: 32px;
        }
  
        .text-primary-orange {
          color: var(--primary-orange);
        }
  
        .font-medium {
          font-weight: 500;
        }
  
        .w-full {
          width: 100%;
        }
  
        .flex-col {
          flex-direction: column;
        }
  
        .md\:flex-row {
          flex-direction: row;
        }
  
        .items-start {
          align-items: flex-start;
        }
  
        .mb-5 {
          margin-bottom: 0.5rem;
        }
  
        .md\:mb-0 {
          margin-bottom: 0;
        }
  
        .md\:text-lg {
          font-size: 18px;
        }
  
        .w-28 {
          width: 7rem;
        }
  
        .md\:w-40 {
          width: 10rem;
        }
  
        .text-end,
        .text-start {
          text-align: right;
        }
  
        .text-3xl {
          font-size: 1.875rem;
        }
  
        .text-xl {
          font-size: 1.25rem;
        }
  
        .text-6xl {
          font-size: 3.75rem;
        }
  
        .mb-10 {
          margin-bottom: 2.5rem;
        }
  
        .text-5xl {
          font-size: 3.125rem;
        }
  
        .text-7xl {
          font-size: 4.375rem;
        }
  
        .uppercase {
          text-transform: uppercase;
        }
  
        .mb-2 {
          margin-bottom: 0.5rem;
        }
  
        .bg-primary-black {
          background-color: #21201f;
        }
  
        .text-white {
          color: white;
        }
  
        .border-grey1 {
          border-bottom: 4px solid;
          border-color: #727271;
        }
  
        .px-5 {
          padding-left: 5px;
          padding-right: 5px;
        }
  
        .md\:px-20 {
          padding-left: 80px;
          padding-right: 80px;
        }
  
        .py-12 {
          padding-top: 12px;
          padding-bottom: 12px;
        }
  
        .md\:py-16 {
          padding-top: 64px;
          padding-bottom: 64px;
        }
  
        .mb-7 {
          margin-bottom: 7px;
        }
  
        .md\:mb-14 {
          margin-bottom: 56px;
        }
  
        .mb-4 {
          margin-bottom: 40px;
        }
  
        .w-32 {
          width: 32px;
        }
  
        .md\:w-64 {
          width: 250px;
        }
  
        .flex-wrap {
          flex-wrap: wrap;
        }
  
        .text-[10px] {
          font-size: 10px;
        }
  
        .mr-1 {
          margin-right: 1px;
        }
  
        .md\:mr-2 {
          margin-right: 2px;
        }
  
        .md\:mb-5 {
          margin-bottom: 24px;
        }
  
        .mb-3 {
          margin-bottom: 15px;
        }
  
        .mb-9 {
          margin-bottom: 80px;
        }
  
        .md\:mb-20 {
          margin-bottom: 120px;
        }
  
        .justify-end {
          justify-content: flex-end;
        }
  
        .icon {
          width: 15px;
        }
  
        .header {
          font-size: 30px;
          color: var(--primary-orange);
        }
  
        .paragraph {
          font-size: 20px;
          color: white;
        }
  
        .md\:text-xl {
          font-size: 1rem;
        }
  
        .flex-col-reverse {
          flex-direction: row;
        }
  
        .wFooter {
          width: 100%;
        }
  
        /* -- Media Query -------------------------------------------- */
        @media (max-width: 768px) {
          .header {
            font-size: 16px;
          }
  
          .paragraph {
            font-size: 12px;
          }
  
          .md\:w-64 {
            width: 150px;
          }
  
          .md\:px-20 {
            padding-left: 20px;
            padding-right: 20px;
          }
  
          .md\:mb-14 {
            margin-bottom: 40px;
          }
  
          .border-grey1 {
            border-bottom: 2px solid;
            border-color: #727271;
          }
  
          .icon {
            width: 10px;
          }
  
          .md\:text-lg {
            font-size: 6px;
          }
  
          .md\:text-3xl {
            font-size: 20px;
          }
  
          .md\:w-40 {
            width: 5rem;
          }
  
          .text-3xl {
            font-size: 1rem;
          }
  
          .mb-4 {
            margin-bottom: 20px;
          }
  
          .text-5xl {
            font-size: 2rem;
          }
  
          .md\:text-xl {
            font-size: 0.5rem;
          }
  
          .flex-col-reverse {
            flex-direction: column-reverse;
          }
  
          .md\:w-40 {
            width: 3rem;
          }
  
          .md\:py-5 {
            padding-top: 8px;
            padding-bottom: 8px;
          }
  
          .md\:px-8 {
            padding-left: 8px;
            padding-right: 8px;
          }
  
          .md\:p-4 {
            padding: 8px;
          }
  
          .wFooter {
            width: 100%;
          }
  
          .w-28 {
            width: 3.5rem;
          }
  
          .mb-14 {
            margin-bottom: 0.5rem;
          }
  
          .md\:mb-20 {
            margin-bottom: 40px;
          }
  
          .md\:py-16 {
            padding-top: 30px;
            padding-bottom: 30px;
          }
        }
      </style>
  
      <!-- <style>
      /* Reset default styles */
      body,
      div,
      h1,
      h3,
      p,
      table,
      th,
      td,
      img {
        margin: 0;
        padding: 0;
        border: 0;
      }
      body {
        font-family: Arial, sans-serif;
        background-color: #383838;
        color: #17181A;
        margin: 0;
        padding: 0;
      }
      .container {
        padding: 20px;
        background-color: #17181A;
        color: #ef6817;
      }
      .header {
        font-size: 18px;
        font-weight: bold;
      }
      .paragraph {
        font-size: 14px;
        max-width: 50%;
      }
      .font-para {
        text-transform: capitalize;
        margin-bottom: 9px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #ffffff;
      }
      th {
        text-align: left;
        padding: 8px;
        background-color: #ef6817;
        font-size: 2rem;
        font-weight: bold;
        color: #17181A;
      }
      td {
        text-align: left;
        padding: 8px;
        font-size: 1.5rem;
        font-weight: medium;
      }
      .bg-primary-orange {
        background-color: #ef6817;
      }
      .flex {
        display: flex;
      }
      .justify-between {
        justify-content: space-between;
      }
      .px-2 {
        padding: 8px;
      }
      .py-2 {
        padding: 8px;
      }
      .md\:px-8 {
        padding: 32px;
      }
      .md\:py-5 {
        padding: 20px;
      }
      .items-center {
        align-items: center;
      }
      .bg-white {
        background-color: #ffffff;
      }
      .p-2 {
        padding: 8px;
      }
      .md\:p-4 {
        padding: 16px;
      }
      .text-md {
        font-size: 1.5rem;
      }
      .md\:text-2xl {
        font-size: 6rem;
      }
      .text-black {
        color: #17181A;
      }
      .font-bold {
        font-weight: bold;
      }
      .text-xs {
        font-size: 1rem;
      }
      .md\:text-lg {
        font-size: 10px;
      }
      .mb-2 {
        margin-bottom: 4px;
      }
      .mr-10 {
        margin-right: 40px;
      }
      .md\:mr-28 {
        margin-right: 112px;
      }
      :root {
        --primary-black: #21201f;
        --primary-orange: #ef6817;
        --grey1: #727271;
        --grey2: #5f605d;
        --grey3: #383838;
        --black: #17181A;
      }
      .capitalize {
        text-transform: capitalize;
      }
      .mb-14 {
        margin-bottom: 1rem;
      }
      .mb-20 {
        margin-bottom: 1.25rem;
      }
      .text-md {
        font-size: 0.875rem;
      }
      .md\:text-3xl {
        font-size: 32px;
      }
      .text-primary-orange {
        color: var(--primary-orange);
      }
      .font-medium {
        font-weight: 500;
      }
      .w-full {
        width: 100%;
      }
      .flex-col {
        flex-direction: column;
      }
      .md\:flex-row {
        flex-direction: row;
      }
      .items-start {
        align-items: flex-start;
      }
      .mb-5 {
        margin-bottom: 0.5rem;
      }
      .md\:mb-0 {
        margin-bottom: 0;
      }
      .md\:text-lg {
        font-size: 18px;
      }
      .w-28 {
        width: 7rem;
      }
      .md\:w-40 {
        width: 10rem;
      }
      .text-end,
      .text-start {
        text-align: right;
      }
      .text-3xl {
        font-size: 1.875rem;
      }
      .text-xl {
        font-size: 1.25rem;
      }
      .text-6xl {
        font-size: 3.75rem;
      }
      .mb-10 {
        margin-bottom: 2.5rem;
      }
      .text-5xl {
        font-size: 3.125rem;
      }
      .text-7xl {
        font-size: 4.375rem;
      }
      .uppercase {
        text-transform: uppercase;
      }
      .mb-2 {
        margin-bottom: 0.5rem;
      }
      .bg-primary-black {
        background-color: #21201f;
      }
      .text-white {
        color: white;
      }
      .border-grey1 {
        border-bottom: 4px solid;
        border-color: #727271;
      }
      .px-5 {
        padding-left: 5px;
        padding-right: 5px;
      }
      .md\:px-20 {
        padding-left: 80px;
        padding-right: 80px;
      }
      .py-12 {
        padding-top: 12px;
        padding-bottom: 12px;
      }
      .md\:py-16 {
        padding-top: 64px;
        padding-bottom: 64px;
      }
      .mb-7 {
        margin-bottom: 7px;
      }
      .md\:mb-14 {
        margin-bottom: 56px;
      }
      .mb-4 {
        margin-bottom: 40px;
      }
      .w-32 {
        width: 32px;
      }
      .md\:w-64 {
        width: 250px;
      }
      .flex-wrap {
        flex-wrap: wrap;
      }
      .text-[10px] {
        font-size: 10px;
      }
      .mr-1 {
        margin-right: 1px;
      }
      .md\:mr-2 {
        margin-right: 2px;
      }
      .md\:mb-5 {
        margin-bottom: 24px;
      }
      .mb-3 {
        margin-bottom: 15px;
      }
      .mb-9 {
        margin-bottom: 80px;
      }
      .md\:mb-20 {
        margin-bottom: 120px;
      }
      .justify-end {
        justify-content: flex-end;
      }
      .icon {
        width: 15px;
      }
      @media (max-width: 768px) {
        .header {
          font-size: 16px;
        }
        .paragraph {
          font-size: 12px;
        }
        .md\:w-64 {
          width: 150px;
        }
        .md\:px-20 {
          padding-left: 20px;
          padding-right: 20px;
        }
        .md\:mb-14 {
          margin-bottom: 40px;
        }
        .border-grey1 {
          border-bottom: 2px solid;
          border-color: #727271;
        }
        .icon {
          width: 10px;
        }
        .md\:text-lg {
          font-size: 6px;
        }
        .md\:text-3xl {
          font-size: 20px;
        }
        .md\:w-40 {
          width: 5rem;
        }
        .text-3xl {
          font-size: 1rem;
        }
        .mb-4 {
          margin-bottom: 20px;
        }
        .text-5xl {
          font-size: 2rem;
        }
        .md\:text-xl {
          font-size: 0.5rem;
        }
        .flex-col-reverse {
          flex-direction: column-reverse;
        }
        .md\:w-40 {
          width: 3rem;
        }
        .md\:py-5 {
          padding-top: 8px;
          padding-bottom: 8px;
        }
        .md\:px-8 {
          padding-left: 8px;
          padding-right: 8px;
        }
        .md\:p-4 {
          padding: 8px;
        }
        .wFooter {
          width: 100%;
        }
        .w-28 {
          width: 3.5rem;
        }
        .mb-14 {
          margin-bottom: 0.5rem;
        }
        .md\:mb-20 {
          margin-bottom: 40px;
        }
        .md\:py-16 {
          padding-top: 30px;
          padding-bottom: 30px;
        }
      }
    </style> -->
    </head>
  
    <body>
      <div class="px-5 py-12 text-white md:px-20 md:py-16 bg-primary-black">
        <!-- Navbar  ---------------------------------------------------------------- -->
        <div
          class="flex flex-col items-center w-full border-b-4 mb-7 md:mb-14 border-grey1"
        >
          <img
            src="https://favucswophavluggenlb.supabase.co/storage/v1/object/public/image/logo.png"
            alt="logo"
            class="w-32 mb-4 md:w-64"
          />
  
          <div class="flex flex-wrap items-center justify-between w-full mb-5">
            <div class="flex items-center text-[10px] md:text-lg mb-2">
              <img
                src="https://favucswophavluggenlb.supabase.co/storage/v1/object/public/image/location-icon.png"
                alt="Location"
                class="mr-1 text-primary-orange md:mr-2 icon"
              />
              <p class="text-white">Dharamshala, India</p>
            </div>
            <div class="flex items-center text-[10px] md:text-lg mb-2">
              <img
                src="https://favucswophavluggenlb.supabase.co/storage/v1/object/public/image/phone-icon.png"
                alt="Phone"
                class="mr-1 text-primary-orange md:mr-2 icon"
              />
              <p class="text-white">6230428101</p>
            </div>
            <div class="flex items-center text-[10px] md:text-lg mb-2">
              <img
                src="https://favucswophavluggenlb.supabase.co/storage/v1/object/public/image/mail-icon.png"
                alt="Email"
                class="mr-1 text-primary-orange md:mr-2 icon"
              />
              <p class="text-white">akhtar.tarique@gmail.com</p>
            </div>
            <div class="flex items-center text-[10px] md:text-lg mb-2">
              <img
                src="https://favucswophavluggenlb.supabase.co/storage/v1/object/public/image/globe-icon.png"
                alt="World"
                class="mr-1 text-primary-orange md:mr-2 icon"
              />
              <p class="text-white">www.thecocoonproject.in</p>
            </div>
          </div>
        </div>
  
        <!-- BookingDetails  ----------------------------------------------------------------  -->
        <div
          class="flex flex-col-reverse items-center justify-between w-full md:flex-row md:items-start mb-9 md:mb-14"
        >
          <div class="font-para">
            <h1
              class="mb-3 font-bold text-center capitalize text-md md:text-3xl text-primary-orange md:mb-5 md:text-start"
            >
              Booking details
            </h1>
            <div>
              <div class="flex items-center mb-3 text-xs capitalize md:text-lg">
                <h3 class="w-24 md:w-40">Check-In</h3>
                <p class="font-bold">Sunday 29, August, 2023</p>
              </div>
              <div class="flex items-center mb-3 text-xs capitalize md:text-lg">
                <h3 class="w-24 md:w-40">Check-out</h3>
                <p class="font-bold">Tuesday 1, november, 2023</p>
              </div>
              <div class="flex items-center mb-3 text-xs capitalize md:text-lg">
                <h3 class="w-24 md:w-40">guests</h3>
                <p class="font-bold">2 Adults</p>
              </div>
              <div class="flex items-center mb-3 text-xs capitalize md:text-lg">
                <h3 class="w-24 md:w-40">Unit</h3>
                <p class="font-bold">Cocoon Doubles</p>
              </div>
              <div class="flex items-center mb-3 text-xs capitalize md:text-lg">
                <h3 class="w-24 md:w-40">Extra bed</h3>
                <p class="font-bold">0</p>
              </div>
            </div>
          </div>
  
          <div
            class="flex flex-col items-center mb-10 uppercase font-para md:mb-0"
          >
            <h1
              class="mb-4 text-3xl font-medium md:text-6xl md:mb-10 text-primary-orange"
            >
              BOOKING
            </h1>
            <h3 class="mb-2 text-5xl font-bold md:text-7xl md:mb-4">2</h3>
            <p class="font-bold text-md md:text-xl">UNITY FEST TICKETS</p>
          </div>
        </div>
  
        <!--      BookingBy  ----------------------------------------------------------------  -->
        <div class="capitalize mb-14 md:mb-20 font-para">
          <h1
            class="mb-3 font-bold text-md md:text-3xl text-primary-orange md:mb-5"
          >
            Booking By
          </h1>
  
          <div
            class="flex flex-col items-start justify-between w-full md:flex-row"
          >
            <div class="mb-5 md:mb-0">
              <p class="mb-3 text-xs font-medium md:text-lg">Shomail Arquam</p>
              <p class="mb-3 text-xs font-medium md:text-lg">
                Sarquam09@gmail.com
              </p>
              <p class="mb-3 text-xs font-medium md:text-lg">+91-7319843634</p>
            </div>
  
            <div class="flex items-center justify-between md:w-auto">
              <div>
                <p class="mb-3 text-xs font-medium md:text-lg w-28 md:w-40">
                  Booking #
                </p>
                <p class="mb-3 text-xs font-medium md:text-lg w-28 md:w-40">
                  Booking Date
                </p>
                <p class="mb-3 text-xs font-medium md:text-lg w-28 md:w-40">
                  Status
                </p>
              </div>
  
              <div>
                <p class="mb-3 text-xs font-medium md:text-lg text-end">001</p>
                <p class="mb-3 text-xs font-medium md:text-lg text-end">
                  27-08-2023
                </p>
                <p class="mb-3 text-xs font-medium md:text-lg text-end">
                  Confirmed
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <!--    Table  ---------------------------------------------------------------- -->
        <div class="w-full capitalize font-para mb-9">
        <table class="w-full border-[1px] border-white">
            <tr class="flex justify-between px-2 py-2 bg-primary-orange md:px-8 md:py-5">
              <th class="font-bold text-black text-md md:text-2xl">Description</th>
              <th class="font-bold text-black text-md md:text-2xl">Amount</th>
            </tr>
            ${itemsHTML}
          </table>
          <div class=“flex items-center justify-end p-2 bg-white md:p-4”>
          <p class=“mr-10 font-bold text-black text-md md:text-2xl md:mr-28">Total</p>
          <p class=“text-xs font-bold text-black md:text-lg”>${data.total}</p>
        </div>
      </div>
        <!--      Footer  ---------------------------------------------------------------- -->
        <div class="">
          <h1 class="header">Additional Information</h1>
          <p class="paragraph wFooter">
            Default Booking in (days) are 2 for rooms. You can contact us if you
            want to increase your stay time.
          </p>
        </div>
      </div>
    </body>
  </html>`;
}
