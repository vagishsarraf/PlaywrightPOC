const { test, expect } = require("@playwright/test");
var token;
var createdId;
test.describe("Booking - GetBookingIds", async () => {
  test.beforeAll(async ({ request }) => {
    const response = await request.post("auth", {
      data: {
        username: "admin",
        password: "password123",
      },
    });
    expect(response.ok).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    token = responseBody.token;
  });

  test("Booking - GetBookingIds", async ({ request }) => {
    const response = await request.get("booking");
    let jsonObj = await response.json();
  });

  test("Booking - DeleteBooking", async ({ request }) => {
    const response = await request.post("/booking", {
      data: {
        firstname: "Jim",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2023-06-01",
          checkout: "2023-06-15",
        },
        additionalneeds: "Breakfast",
      },
    });
    let responseBoy = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    createdId = responseBoy.bookingid;
    console.log(createdId);
    expect(responseBoy.booking.firstname).toEqual("Jim");
    expect(responseBoy.booking.lastname).toEqual("Brown");
    expect(responseBoy.booking.totalprice).toEqual(111);
    expect(responseBoy.booking.additionalneeds).toEqual("Breakfast");
    
    const deleteRequest = await request.delete(`booking/${createdId}`, {
      headers: {
        "Content-Type": "application/json",
        "Cookie": `token=${token}`
      },
    });
    expect(deleteRequest.status()).toBe(201);
    expect(deleteRequest.ok()).toBeTruthy();
    expect(deleteRequest.statusText()).toBe("Created");
  });
});
