// дозволяє краще структурувати код, коли багато однотипних елементів
// 2 типи запису
// Membership - Членство

enum Membership {
	Simple,
	Standart,
	Premium,
}

const membership = Membership.Standart
const membershipReverse = Membership[2]

console.log(membership)
console.log(membershipReverse)

enum SocialMedia {
	FACEBOOK = 'FACEBOOK',
	INSTAGRAM = 'INSTAGRAM',
}

const social = SocialMedia.FACEBOOK
console.log(social)
