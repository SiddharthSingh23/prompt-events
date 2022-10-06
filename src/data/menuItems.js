export const menuItems = [
    {
        name: "All Events", to: `/all-events`, iconClassName: `bi bi-collection`
    },

    {
        name: "Calendar Events",
        iconClassName: `bi bi-calendar-event`,
        subMenus: [
            { name: "Today's Events", to: "/todays-events" },
            { name: "Upcoming Events", to: "/upcoming-events" }
        ]
    },

    {
        name: "Add Events", to: `/add-events`, iconClassName: `bi bi-plus-square`
    },

    {
        name: "Settings", to: `/settings`, iconClassName: `bi bi-app-indicator`
    }
];