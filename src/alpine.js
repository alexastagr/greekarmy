import Alpine from "alpinejs";

// παράδειγμα global component
Alpine.data("counter", () => ({
  count: 0,
  inc() {
    this.count++;
  },
}));

window.Alpine = Alpine;
Alpine.start();
