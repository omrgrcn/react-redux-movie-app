import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { Container, Image, Menu, Visibility } from 'semantic-ui-react';
import { menuStyle, fixedMenuStyle } from './helpers/styleHelper';

import MoviesPage from './components/pages/MoviesPage';
import Footer from './components/Footer';

import { Link, Route } from 'react-router-dom';

class App extends Component {

	state = {
		menuFixed: null,
		overlayFixed: false,
  };

	stickTopMenu = () => this.setState({ menuFixed: true })
  unStickTopMenu = () => this.setState({ menuFixed: null })

  render() {
    const { menuFixed } = this.state;

    return (
      <div className="App">
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed && 'top'}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item>
                <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
              </Menu.Item>
              <Menu.Item header>Movieapp</Menu.Item>
              <Menu.Item as={Link} to='/movies'>
                Movies
              </Menu.Item>
              <Menu.Item as='a'>Add New</Menu.Item>
            </Container>
          </Menu>
        </Visibility>
        <Container text>
          <Route path='/movies' component={MoviesPage}></Route>
          <hr/>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum odit quae, dolorum amet quis, mollitia dolorem ex, omnis rerum maxime suscipit magni laudantium magnam totam necessitatibus eum excepturi quam quas!
            Recusandae saepe sint eius officiis a obcaecati hic, animi sed tempora, eos eligendi non voluptatem. Ipsa dolorem, cumque reiciendis unde cum sapiente nemo tempora tenetur obcaecati voluptatem veniam amet aliquid.
            Blanditiis sed at quo adipisci eum vel architecto reiciendis error ab temporibus, numquam accusantium tenetur vitae ut praesentium voluptatibus porro sit necessitatibus natus, perferendis iusto. Nisi eligendi possimus quidem dicta.
            Odit impedit qui harum distinctio inventore minima totam dolores nobis nisi sequi? Itaque deleniti doloribus vero numquam dolorum, provident minima reiciendis dicta dolores aperiam minus. Perferendis assumenda sint nostrum nam.
            Consectetur, libero. Autem cum reprehenderit maxime qui dignissimos porro ratione tempora fugit! Recusandae, ea? Ipsam vitae, labore amet non ex incidunt fugit dolorem doloribus voluptatem eum numquam quas possimus sed!
            Ea excepturi, voluptates aliquid quasi nihil sapiente, vitae at magnam omnis nostrum dolore iste deleniti alias nobis sit minima quam itaque delectus nam quo eius eum nisi temporibus libero! Autem.
            Ea voluptates enim aliquam debitis quaerat. Illo unde vel rerum corrupti deleniti, ullam facere. Earum quis commodi voluptas perferendis recusandae cupiditate? Harum eius tempora dolore sint quidem corrupti commodi laboriosam!
            Maiores commodi saepe beatae quam dolor voluptate laudantium, provident non aperiam? Distinctio quia, quidem rerum officiis excepturi eum, quisquam aliquam reprehenderit porro vel nostrum debitis aperiam exercitationem obcaecati hic amet?
            Error doloribus sunt rem enim inventore itaque sequi saepe, totam aliquid labore quos asperiores quibusdam temporibus voluptatem! Eveniet eaque expedita adipisci eius voluptatum alias, accusamus deleniti nesciunt aliquam ab quo.
            Ea nostrum facere velit consequatur impedit? Enim maiores, dolore tenetur magni labore a placeat tempora quasi cupiditate non culpa dicta magnam unde pariatur itaque vero vel beatae voluptates facere. Neque.
          </div>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;
