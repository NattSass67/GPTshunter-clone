/* eslint-disable @next/next/no-img-element */
const navigation = {
  solutions: [
    { name: 'Explore All GPT Categories', href: '#' },
    { name: 'Discover Newest GPTs', href: '#' },
    { name: 'Search All GPTs', href: '#' },
    { name: 'OpenAI Sora GPTs', href: '#' },
    { name: 'Suno GPT', href: '#' },
    { name: 'Rizz GPT', href: '#' },
    { name: 'Homeworkify GPT', href: '#' },
    { name: 'Bypass GPT', href: '#' },
  ],
  support: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Service Status', href: '#' },
    { name: 'Download All GPTs Data', href: '#' },
    { name: "What's GPTs Hunter", href: '#' },
  ],
  products: [
    { name: 'Daily GPT Store Trending Data', href: '#' },
    { name: 'Daily Top 500 GPTs', href: '#' },
    { name: 'GPTs API', href: '#' },
    { name: 'GPTs Hunt', href: '#' },
    { name: 'Chrome extension', href: '#' },
    { name: 'GPT by GPTsHunter(WIP)', href: '#' },
    { name: 'Alternative to ChatGPT', href: '#' },
    { name: 'AI.LS', href: '#' },
    { name: 'IP.network', href: '#' },
    { name: 'MakerHunter Community', href: '#' },
  ],
  friends: [
    { name: 'd.id', href: '#' },
    { name: 'OKDID', href: '#' },
    { name: 'Monica', href: '#' },
    { name: 'MagicAnimate', href: '#' },
    { name: 'OutfitAnyone', href: '#' },
    { name: 'ChatGPT Sora', href: '#' },
  ],
}

export default function FooterGPT() {
  return (
    <footer className="bg-white shadow mt-32" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid xl:grid-cols-4 gap-8 sm:grid-cols-3">
          <div className="col-span-1 flex flex-col xl:col-span-1 sm:col-span-3">
            <div className="flex gap-2 sm:gap-3">
              <img
                className="h-9 w-auto"
                src="https://www.gptshunter.com/_nuxt/logo.DQOOruJz.png"
                alt="Your Company"
              />
              <span className="text-lg font-semibold text-orange-500 sm:text-xl">
                GPTs Hunter
              </span>
            </div>
            <span className="text-sm leading-6 mt-4 text-zinc-400">
              Share and discover the best custom GPTs on the GPT Store and use
              with ChatGPT.
            </span>
            <ul role="list" className="mt-4 space-y-3">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm leading-6 text-zinc-700 hover:text-orange-500"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-md font-semibold leading-6 text-zinc-500 ">
              Policy
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm leading-6 text-zinc-700 hover:text-orange-500"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-md font-semibold leading-6 text-zinc-500 ">
              Products
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm leading-6 text-zinc-700 hover:text-orange-500"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-md font-semibold leading-6 text-zinc-500 ">
              Friends
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              {navigation.friends.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm leading-6 text-zinc-700 hover:text-orange-500"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
