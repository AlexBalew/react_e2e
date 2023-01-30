export const UserDetailsPage = (user) => {

    return (
        <div data-testid='details-page'>
            <div>Users details page</div>
            <div>
                {user.id}
            </div>
            {user.name}
        </div>
    )
}