const Page = require('./page');

class UsersPage extends Page {
    get loadingTitle() {
        return $('#users-loading')
    }

    get usersList() {
        return $('#users-list')
    }

    get usersItems() {
        return browser.react$$('User')
    }

    async loadData() {
        try {
            await this.open();
            await this.loadingTitle.waitForDisplayed({timeout: 2000});
            await this.usersList.waitForDisplayed({timeout: 2000});
        } catch (e) {
            throw new Error('No users were loaded')
        }
    }

    async deleteUser() {
        try {
            const usersCount = await this.usersItems.length;

            if(!usersCount) {
                throw new Error('No users were found')
            }

            await this.usersItems[1].$('#user-delete').click();

            const usersCountAfterDelete = await this.usersItems.length;

            if(usersCount - usersCountAfterDelete !== 1) {
                throw new Error('Deletion aborted or there were more than one user deleted');
            }

        } catch (e) {
            throw new Error('we could no delete the user. ' + e.message)
        }
    }

    open() {
        return super.open('/users-test');
    }
}

module.exports = new UsersPage();