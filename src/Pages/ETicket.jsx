import { useState } from "react";
import jsPDF from "jspdf";
import onewayIcon from "../assets/Icon/black-plane.png"
import twowayIcon from "../assets/Icon/black-plane.png"
import logo from "../assets/JB ICON.png";

const ETicket = () => {
    const [ticketData, setTicketData] = useState({
        passengerName: "",
        flightType: "oneway", // "oneway" or "twoway"
        passportNumber: "",
        pnr: "",
        ticketNumber: "",
        boeing: "",
        issueDate: new Date().toISOString().slice(0, 10),
        issueTime: "",
        origin: "",
        destination: "",
        flightDate: new Date().toISOString().slice(0, 10),
        flightTime: "",
        isTransit: false, // Default to no transit
        transit: {
            airport: "", // Initialize with empty strings to avoid undefined errors
            date: "",
            time: "",
        },
        contactNumber: "+8801317-290009",
        email: "jatrabondhu@gmail.com",
        address: "37 New Chashara, Narayanganj",
        facebook: "facebook.com/JatraBondhu",
        notes: `Please carry a government-issued identification (like a passport or National Identification Card) for check-in.`,
    });


    // PDF generation logic
    const handleDownloadPDF = () => {
        const doc = new jsPDF();

        // Company Header
        doc.addImage(logo, "PNG", 20, 20, 25, 25);

        // Company Name
        doc.setFontSize(18);
        doc.setFont("helvetica", "bold");
        doc.text("JATRA BONDHU", 50, 25);

        // E-Ticket Text (Right Portion)
        doc.setFontSize(22);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(0, 0, 0);
        const invoiceText = "E-Ticket";
        const invoiceTextWidth = doc.getTextWidth(invoiceText);
        const rightPosition = doc.internal.pageSize.width - invoiceTextWidth - 30;
        doc.text(invoiceText, rightPosition, 25);

        // Tagline
        doc.setFontSize(12);
        doc.setFont("helvetica", "italic");
        doc.setTextColor(50, 50, 50);
        doc.text("Tours & Travels", 50, 33);


        // Create Table for PNR, Issue Date, Passenger Name, and Ticket Number
        const tableStartY = 60;
        const columnWidth = doc.internal.pageSize.width / 2.5; // Width for table cells

        // Table Header
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.text("Passenger Name", doc.internal.pageSize.width / 4, tableStartY, { align: "center" });
        doc.text("Ticket Number", (3 * doc.internal.pageSize.width) / 4, tableStartY, { align: "center" });

        // Table Content
        const contentY = tableStartY + 10;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        doc.text(ticketData.passengerName, doc.internal.pageSize.width / 4, contentY, { align: "center" });
        doc.text(ticketData.ticketNumber, (3 * doc.internal.pageSize.width) / 4, contentY, { align: "center" });

        // Flight Information
        const flightInfoY = contentY + 20;
        doc.setFont("helvetica", "bold");
        doc.text(`Flight Details`, doc.internal.pageSize.width / 2, flightInfoY, { align: "center" });
        doc.setFontSize(11);
        doc.text(`Origin: ${ticketData.origin}`, doc.internal.pageSize.width / 2, flightInfoY + 10, { align: "center" });
        doc.text(`Destination: ${ticketData.destination}`, doc.internal.pageSize.width / 2, flightInfoY + 20, { align: "center" });
        doc.text(`Date: ${ticketData.flightDate}`, doc.internal.pageSize.width / 2, flightInfoY + 30, { align: "center" });
        doc.text(`Time: ${ticketData.flightTime}`, doc.internal.pageSize.width / 2, flightInfoY + 40, { align: "center" });

        // Return Flight Details (for roundtrip flights)
        if (ticketData.flightType === "twoway") {
            doc.setFont("helvetica", "bold");
            doc.text("Return Flight Details:", doc.internal.pageSize.width / 2, flightInfoY + 60, { align: "center" });
            doc.setFont("helvetica", "normal");
            doc.text(`Return Date: ${ticketData.returnDate}`, doc.internal.pageSize.width / 2, flightInfoY + 70, { align: "center" });
            doc.text(`Return Time: ${ticketData.returnTime}`, doc.internal.pageSize.width / 2, flightInfoY + 80, { align: "center" });
        }

        // Flight Type Icon
        const iconY = ticketData.flightType === "twoway" ? flightInfoY + 90 : flightInfoY + 50;
        const icon = ticketData.flightType === "oneway" ? onewayIcon : twowayIcon;
        doc.addImage(icon, "PNG", doc.internal.pageSize.width / 2 - 15, iconY, 30, 20);

        // Thank You Message
        const thankYouY = iconY + 30;
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.text(
            `Dear ${ticketData.passengerName},`,
            doc.internal.pageSize.width / 2,
            thankYouY,
            { align: "center" }
        );
        doc.text(
            `Thank you for choosing Jatra Bondhu. Your ${ticketData.flightType} flight`,
            doc.internal.pageSize.width / 2,
            thankYouY + 10,
            { align: "center" }
        );
        doc.text(
            `has been confirmed on ${ticketData.flightDate} at ${ticketData.flightTime}.`,
            doc.internal.pageSize.width / 2,
            thankYouY + 20,
            { align: "center" }
        );

        // Additional Notes
        const notesY = thankYouY + 40;
        doc.setFont("helvetica", "normal");
        doc.text("Important Information:", doc.internal.pageSize.width / 2, notesY, { align: "center" });
        doc.setFontSize(9);
        doc.text(ticketData.notes, 20, notesY + 10, { maxWidth: doc.internal.pageSize.width - 40 });

        // Save the PDF
        doc.save(`${ticketData.passengerName}_E-Ticket.pdf`);
    };

    return (
        <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
            <div className="max-w-5xl mx-auto bg-white p-6 sm:p-10 shadow-lg rounded-md">
                <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">E-Ticket</h1>

                {/* Flight Type */}
                <div className="mb-4">
                    <label className="block font-medium">Flight Type:</label>
                    <select
                        value={ticketData.flightType}
                        onChange={(e) => setTicketData({ ...ticketData, flightType: e.target.value })}
                        className="w-full border p-2 rounded"
                    >
                        <option value="oneway">Oneway</option>
                        <option value="twoway">Roundtrip</option>
                    </select>
                </div>

                {/* Passenger Name */}
                <div className="mb-4">
                    <label className="block font-medium">Passenger Name:</label>
                    <input
                        type="text"
                        value={ticketData.passengerName}
                        onChange={(e) => setTicketData({ ...ticketData, passengerName: e.target.value })}
                        className="w-full border p-2 rounded"
                    />
                </div>

                {/* Additional Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block font-medium">Passport Number:</label>
                        <input
                            type="text"
                            value={ticketData.passportNumber}
                            onChange={(e) => setTicketData({ ...ticketData, passportNumber: e.target.value })}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">PNR:</label>
                        <input
                            type="text"
                            value={ticketData.pnr}
                            onChange={(e) => setTicketData({ ...ticketData, pnr: e.target.value })}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Ticket Number:</label>
                        <input
                            type="text"
                            value={ticketData.ticketNumber}
                            onChange={(e) => setTicketData({ ...ticketData, ticketNumber: e.target.value })}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Boeing:</label>
                        <input
                            type="text"
                            value={ticketData.boeing}
                            onChange={(e) => setTicketData({ ...ticketData, boeing: e.target.value })}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Issue Date:</label>
                        <input
                            type="date"
                            value={ticketData.issueDate}
                            onChange={(e) => setTicketData({ ...ticketData, issueDate: e.target.value })}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Issue Time:</label>
                        <input
                            type="time"
                            value={ticketData.issueTime}
                            onChange={(e) => setTicketData({ ...ticketData, issueTime: e.target.value })}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                </div>

                {/* Flight Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block font-medium">Origin:</label>
                        <input
                            type="text"
                            value={ticketData.origin}
                            onChange={(e) => setTicketData({ ...ticketData, origin: e.target.value })}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Destination:</label>
                        <input
                            type="text"
                            value={ticketData.destination}
                            onChange={(e) => setTicketData({ ...ticketData, destination: e.target.value })}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Flight Date:</label>
                        <input
                            type="date"
                            value={ticketData.flightDate}
                            onChange={(e) => setTicketData({ ...ticketData, flightDate: e.target.value })}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Flight Time:</label>
                        <input
                            type="time"
                            value={ticketData.flightTime}
                            onChange={(e) => setTicketData({ ...ticketData, flightTime: e.target.value })}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                </div>

                {/* Return Flight Details */}
                {ticketData.flightType === "twoway" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block font-medium">Return Date:</label>
                            <input
                                type="date"
                                value={ticketData.returnDate}
                                onChange={(e) => setTicketData({ ...ticketData, returnDate: e.target.value })}
                                className="w-full border p-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Return Time:</label>
                            <input
                                type="time"
                                value={ticketData.returnTime}
                                onChange={(e) => setTicketData({ ...ticketData, returnTime: e.target.value })}
                                className="w-full border p-2 rounded"
                            />
                        </div>
                    </div>
                )}

                <div className="mb-4">
                    <label className="block font-medium">Is this a transit flight?</label>
                    <input
                        type="checkbox"
                        checked={ticketData.isTransit}
                        onChange={(e) => setTicketData({ ...ticketData, isTransit: e.target.checked })}
                        className="mr-2"
                    />
                    Transit
                </div>

                {/* Transit Details */}
                {ticketData.isTransit && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block font-medium">Transit Airport:</label>
                            <input
                                type="text"
                                value={ticketData.transit.airport}
                                onChange={(e) =>
                                    setTicketData({
                                        ...ticketData,
                                        transit: { ...ticketData.transit, airport: e.target.value },
                                    })
                                }
                                className="w-full border p-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Transit Date:</label>
                            <input
                                type="date"
                                value={ticketData.transit.date}
                                onChange={(e) =>
                                    setTicketData({
                                        ...ticketData,
                                        transit: { ...ticketData.transit, date: e.target.value },
                                    })
                                }
                                className="w-full border p-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Transit Time:</label>
                            <input
                                type="time"
                                value={ticketData.transit.time}
                                onChange={(e) =>
                                    setTicketData({
                                        ...ticketData,
                                        transit: { ...ticketData.transit, time: e.target.value },
                                    })
                                }
                                className="w-full border p-2 rounded"
                            />
                        </div>
                    </div>
                )}


                {/* Download Button */}
                <button
                    onClick={handleDownloadPDF}
                    className="mt-8 bg-green-500 text-white px-6 py-3 rounded w-full sm:w-auto"
                >
                    Download E-Ticket
                </button>
            </div>
        </div>

    );
};

export default ETicket;
