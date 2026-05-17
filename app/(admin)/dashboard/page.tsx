import AdminSidebar from "@/components/admin/admin-sidebar";
import AdminTopbar from "@/components/admin/admin-topbar";
import {
  Package,
  ShoppingCart,
  Users,
  DollarSign,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-[#050505] text-white">

      {/* SIDEBAR */}
      <AdminSidebar />

      {/* MAIN */}
      <section className="flex-1 overflow-hidden bg-[#050505]">

        {/* TOPBAR */}
        <div className="sticky top-0 z-50 border-b border-white/[0.05] bg-[#050505]/80 backdrop-blur-2xl">

          <div className="px-8 py-5">
            <AdminTopbar />
          </div>

        </div>

        {/* CONTENT */}
        <div className="h-[calc(100vh-96px)] overflow-y-auto p-8">

          {/* FLOATING CONTAINER */}
          <div
            className="
              rounded-[36px]
              border
              border-white/[0.06]
              bg-[#0b0b0b]
              p-7
              shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_120px_rgba(0,0,0,0.75)]
            "
          >

            {/* HEADER */}
            <div className="mb-10 border-b border-white/[0.05] pb-6">

              <div className="h-5" />

              <h1 className="text-[28px] font-semibold tracking-tight">
                Dashboard
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-500">
                Monitor your store performance and analytics.
              </p>

            </div>

            {/* STATS */}
            <div className="mb-6 grid grid-cols-4 gap-4">

              {/* CARD */}
              <div className="rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-5 backdrop-blur-xl">

                <div className="mb-5 flex items-center justify-between">

                  <div className="rounded-2xl bg-white/[0.05] p-3">
                    <DollarSign size={18} />
                  </div>

                  <p className="text-sm text-green-400">
                    +24%
                  </p>

                </div>

                <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                  Revenue
                </p>

                <h2 className="mt-2 text-3xl font-semibold">
                  248M
                </h2>

              </div>

              {/* CARD */}
              <div className="rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-5 backdrop-blur-xl">

                <div className="mb-5 flex items-center justify-between">

                  <div className="rounded-2xl bg-white/[0.05] p-3">
                    <ShoppingCart size={18} />
                  </div>

                  <p className="text-sm text-green-400">
                    +18%
                  </p>

                </div>

                <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                  Orders
                </p>

                <h2 className="mt-2 text-3xl font-semibold">
                  1,248
                </h2>

              </div>

              {/* CARD */}
              <div className="rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-5 backdrop-blur-xl">

                <div className="mb-5 flex items-center justify-between">

                  <div className="rounded-2xl bg-white/[0.05] p-3">
                    <Users size={18} />
                  </div>

                  <p className="text-sm text-green-400">
                    +8%
                  </p>

                </div>

                <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                  Customers
                </p>

                <h2 className="mt-2 text-3xl font-semibold">
                  892
                </h2>

              </div>

              {/* CARD */}
              <div className="rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-5 backdrop-blur-xl">

                <div className="mb-5 flex items-center justify-between">

                  <div className="rounded-2xl bg-white/[0.05] p-3">
                    <Package size={18} />
                  </div>

                  <p className="text-sm text-green-400">
                    +12%
                  </p>

                </div>

                <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                  Products
                </p>

                <h2 className="mt-2 text-3xl font-semibold">
                  24
                </h2>

              </div>

            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-[1.4fr_0.7fr] gap-5">

              {/* LEFT */}
              <div className="space-y-5">

                {/* REVENUE */}
                <div className="rounded-3xl border border-white/[0.06] bg-[#090909] p-5 backdrop-blur-xl">

                  <div className="mb-5 flex items-center justify-between">

                    <div>

                      <h2 className="text-lg font-semibold">
                        Revenue Overview
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        Monthly analytics performance
                      </p>

                    </div>

                    <button className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-sm text-gray-300">
                      This Week
                    </button>

                  </div>

                  {/* CHART */}
                  <div className="relative h-[320px] overflow-hidden rounded-2xl border border-white/[0.04] bg-black">

                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,180,0,0.10),transparent_70%)]" />

                    <div className="absolute bottom-20 left-0 right-0 h-[3px] bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-500 shadow-[0_0_25px_rgba(234,179,8,0.55)]" />

                  </div>

                </div>

                {/* RECENT ORDERS */}
                <div className="rounded-3xl border border-white/[0.06] bg-[#090909] p-5 backdrop-blur-xl">

                  <div className="mb-5 flex items-center justify-between">

                    <h2 className="text-lg font-semibold">
                      Recent Orders
                    </h2>

                    <button className="text-sm text-gray-500 hover:text-white">
                      View All
                    </button>

                  </div>

                  <div className="space-y-4">

                    {[
                      ["#AUX-1001", "Aril", "Ascent", "Completed"],
                      ["#AUX-1002", "Daniel", "Noir", "Processing"],
                      ["#AUX-1003", "Fadly", "Ignite", "Pending"],
                    ].map((item) => (
                      <div
                        key={item[0]}
                        className="flex items-center justify-between rounded-2xl border border-white/[0.04] bg-white/[0.02] px-4 py-4"
                      >

                        <div>

                          <p className="font-medium">
                            {item[0]}
                          </p>

                          <p className="text-sm text-gray-500">
                            {item[1]} • {item[2]}
                          </p>

                        </div>

                        <div className="text-sm text-gray-400">
                          {item[3]}
                        </div>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

              {/* RIGHT */}
              <div className="space-y-5">

                {/* TOP PRODUCTS */}
                <div className="rounded-3xl border border-white/[0.06] bg-[#090909] p-5 backdrop-blur-xl">

                  <div className="mb-5 flex items-center justify-between">

                    <h2 className="text-lg font-semibold">
                      Top Products
                    </h2>

                    <button className="text-sm text-gray-500 hover:text-white">
                      View All
                    </button>

                  </div>

                  <div className="space-y-4">

                    {[
                      ["Aurox Ascent", "149M"],
                      ["Aurox Noir", "105M"],
                      ["Aurox Ignite", "86M"],
                      ["Aurox Zenith", "58M"],
                    ].map((item) => (
                      <div
                        key={item[0]}
                        className="flex items-center justify-between"
                      >

                        <div className="flex items-center gap-3">

                          <div className="h-12 w-12 rounded-2xl bg-white/[0.04]" />

                          <div>

                            <p className="font-medium">
                              {item[0]}
                            </p>

                            <p className="text-sm text-gray-500">
                              432 Sales
                            </p>

                          </div>

                        </div>

                        <p className="text-sm text-gray-400">
                          {item[1]}
                        </p>

                      </div>
                    ))}

                  </div>

                </div>

                {/* PIE CHART */}
                <div className="rounded-3xl border border-white/[0.06] bg-[#090909] p-5 backdrop-blur-xl">

                  <h2 className="mb-6 text-lg font-semibold">
                    Order Status
                  </h2>

                  <div className="flex flex-col items-center">

                    <div className="relative mb-6 flex h-[220px] w-[220px] items-center justify-center rounded-full bg-[conic-gradient(#22c55e_0%_65%,#eab308_65%_85%,#3b82f6_85%_95%,#ef4444_95%_100%)]">

                      <div className="flex h-[145px] w-[145px] flex-col items-center justify-center rounded-full bg-[#090909]">

                        <h3 className="text-4xl font-semibold">
                          1,248
                        </h3>

                        <p className="text-sm text-gray-500">
                          Total Orders
                        </p>

                      </div>

                    </div>

                    <div className="w-full space-y-3">

                      {[
                        ["Completed", "65%", "bg-green-500"],
                        ["Processing", "20%", "bg-yellow-500"],
                        ["Pending", "10%", "bg-blue-500"],
                        ["Cancelled", "5%", "bg-red-500"],
                      ].map((item) => (
                        <div
                          key={item[0]}
                          className="flex items-center justify-between"
                        >

                          <div className="flex items-center gap-3">

                            <div
                              className={`h-3 w-3 rounded-full ${item[2]}`}
                            />

                            <p className="text-sm text-gray-300">
                              {item[0]}
                            </p>

                          </div>

                          <p className="text-sm text-gray-500">
                            {item[1]}
                          </p>

                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}