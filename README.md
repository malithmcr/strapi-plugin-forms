# 📝 Strapi Forms Plugin 📝

<p align="left">
  <a href="https://www.npmjs.com/package/strapi-plugin-forms">
    <img src="https://img.shields.io/npm/v/strapi-plugin-forms.svg?style=plastic" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/strapi-plugin-forms">
    <img src="https://img.shields.io/npm/dt/strapi-plugin-forms.svg?style=plastic" alt="Monthly download on NPM" /></a> 
</p>

Design your Forms directly from the [Strapi CMS](https://github.com/strapi/strapi) admin panel and collect your leads.

<img src="https://raw.githubusercontent.com/malithmcr/strapi-plugin-forms/master/public/assets/screenshot.png" alt="Forms screenshot" />


&nbsp;

## ⏳ Installation

Install Strapi with this **Quickstart** command to create a Strapi project instantly:

- (Use **yarn** to install the Strapi project (recommended). [Install yarn with these docs](https://yarnpkg.com/lang/en/docs/install/).)

```bash
# with yarn
yarn create strapi-app my-project --quickstart

# with npm/npx
npx create-strapi-app my-project --quickstart
```

_This command generates a brand new project with the default features (authentication, permissions, content management, content type builder & file upload). The **Quickstart** command installs Strapi using a **SQLite** database which is used for prototyping in development._

- Configure the `Strapi email` plugin ( [official documentation](https://strapi.io/documentation/developer-docs/latest/plugins/email.html#configure-the-plugin) )

- Add the `strapi-forms` plugin

```bash
yarn add strapi-plugin-forms@latest

# or

npm i -S strapi-plugin-forms@latest
```

- After successful installation you've to build a fresh package that includes plugin UI. To archive that simply use:

```bash
yarn build && yarn develop

# or

npm run build && npm run develop
```

- or just run Strapi in the development mode with `--watch-admin` option:

```bash
yarn develop --watch-admin

#or

npm run develop --watch-admin
```

The **Forms** plugin should appear in the **Plugins** section of Strapi sidebar after you run app again.

## 🥷 Usage

1. User one endpoint to collect all the leads.

2. Filter your leads.

3. Config your forms.

**Enjoy 🎉**

## 🖐 Requirements

Complete installation requirements are exact same as for Strapi itself and can be found in the documentation under <a href="https://strapi.io/documentation/v3.x/installation/cli.html#step-1-make-sure-requirements-are-met">Installation Requirements</a>.

**Supported Strapi versions**:

- Strapi v3.4.x

(This plugin may work with the older Strapi versions, but these are not tested nor officially supported at this time.)

**Node / NPM versions**:

- NodeJS >= 12.10 <= 14
- NPM >= 6.x

**We recommend always using the latest version of Strapi to start your new projects**.

## 🚧 Roadmap

- [ ] Collect Leads.
- [ ] One Endpoint for all.
- [ ] Multiple Forms.
- [ ] Reply Email.
- [ ] Form Configurations.
- [ ] Unit Tests
- [ ] i18n translations

## 🤝 Contributing

Feel free to fork and make a Pull Request to this plugin project. All the input is warmly welcome!

## ⭐️ Show your support

Give a star if this project helped you.
You can also [offer me a beer](https://www.paypal.me/malithmcr/10) 🍻.

## 🔗 Links

- [NPM package](https://www.npmjs.com/package/strapi-plugin-forms)
- [GitHub repository](https://github.com/malithmcr/strapi-plugin-forms)

## 🌎 Community support

- For general help using Strapi, please refer to [the official Strapi documentation](https://strapi.io/documentation/).
- Strapi Slack [channel](https://slack.strapi.io/)
- You can Contact me via [Email](malithcode@gmail.com)

## 📝 License

[MIT License](LICENSE.md) Copyright (c) 2021 [Malith Priyashan](https://craftcode.design/) &amp; [Strapi Solutions](https://strapi.io/).
