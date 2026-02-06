// vite.config.js
import { defineConfig } from "file:///D:/HackathonRepo/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///D:/HackathonRepo/frontend/node_modules/@vitejs/plugin-react/dist/index.js";
import { crx } from "file:///D:/HackathonRepo/frontend/node_modules/@crxjs/vite-plugin/dist/index.mjs";

// src/manifest.json
var manifest_default = {
  manifest_version: 3,
  name: "Fake Resource Detector",
  version: "1.0.0",
  description: "Detects phishing websites and fake resources.",
  permissions: [
    "activeTab",
    "storage",
    "scripting"
  ],
  host_permissions: [
    "<all_urls>"
  ],
  action: {
    default_popup: "index.html"
  },
  background: {
    service_worker: "src/background.js"
  },
  content_scripts: [
    {
      matches: [
        "<all_urls>"
      ],
      js: [
        "src/content.js"
      ]
    }
  ]
};

// vite.config.js
var vite_config_default = defineConfig({
  plugins: [
    react(),
    crx({ manifest: manifest_default })
  ],
  server: {
    port: 3e3
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAic3JjL21hbmlmZXN0Lmpzb24iXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxIYWNrYXRob25SZXBvXFxcXGZyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxIYWNrYXRob25SZXBvXFxcXGZyb250ZW5kXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9IYWNrYXRob25SZXBvL2Zyb250ZW5kL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCB7IGNyeCB9IGZyb20gJ0Bjcnhqcy92aXRlLXBsdWdpbidcbmltcG9ydCBtYW5pZmVzdCBmcm9tICcuL3NyYy9tYW5pZmVzdC5qc29uJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBjcngoeyBtYW5pZmVzdCB9KSxcbiAgXSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogMzAwMCxcbiAgfVxufSlcbiIsICJ7XHJcbiAgICBcIm1hbmlmZXN0X3ZlcnNpb25cIjogMyxcclxuICAgIFwibmFtZVwiOiBcIkZha2UgUmVzb3VyY2UgRGV0ZWN0b3JcIixcclxuICAgIFwidmVyc2lvblwiOiBcIjEuMC4wXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGV0ZWN0cyBwaGlzaGluZyB3ZWJzaXRlcyBhbmQgZmFrZSByZXNvdXJjZXMuXCIsXHJcbiAgICBcInBlcm1pc3Npb25zXCI6IFtcclxuICAgICAgICBcImFjdGl2ZVRhYlwiLFxyXG4gICAgICAgIFwic3RvcmFnZVwiLFxyXG4gICAgICAgIFwic2NyaXB0aW5nXCJcclxuICAgIF0sXHJcbiAgICBcImhvc3RfcGVybWlzc2lvbnNcIjogW1xyXG4gICAgICAgIFwiPGFsbF91cmxzPlwiXHJcbiAgICBdLFxyXG4gICAgXCJhY3Rpb25cIjoge1xyXG4gICAgICAgIFwiZGVmYXVsdF9wb3B1cFwiOiBcImluZGV4Lmh0bWxcIlxyXG4gICAgfSxcclxuICAgIFwiYmFja2dyb3VuZFwiOiB7XHJcbiAgICAgICAgXCJzZXJ2aWNlX3dvcmtlclwiOiBcInNyYy9iYWNrZ3JvdW5kLmpzXCJcclxuICAgIH0sXHJcbiAgICBcImNvbnRlbnRfc2NyaXB0c1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm1hdGNoZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgXCI8YWxsX3VybHM+XCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJqc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcInNyYy9jb250ZW50LmpzXCJcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVEsU0FBUyxvQkFBb0I7QUFDaFMsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsV0FBVzs7O0FDRnBCO0FBQUEsRUFDSSxrQkFBb0I7QUFBQSxFQUNwQixNQUFRO0FBQUEsRUFDUixTQUFXO0FBQUEsRUFDWCxhQUFlO0FBQUEsRUFDZixhQUFlO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDSjtBQUFBLEVBQ0Esa0JBQW9CO0FBQUEsSUFDaEI7QUFBQSxFQUNKO0FBQUEsRUFDQSxRQUFVO0FBQUEsSUFDTixlQUFpQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxZQUFjO0FBQUEsSUFDVixnQkFBa0I7QUFBQSxFQUN0QjtBQUFBLEVBQ0EsaUJBQW1CO0FBQUEsSUFDZjtBQUFBLE1BQ0ksU0FBVztBQUFBLFFBQ1A7QUFBQSxNQUNKO0FBQUEsTUFDQSxJQUFNO0FBQUEsUUFDRjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKOzs7QUR4QkEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sSUFBSSxFQUFFLDJCQUFTLENBQUM7QUFBQSxFQUNsQjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
