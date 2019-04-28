import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import { Layout, Wrapper, Header, Subline, SEO, PrevNext } from '../components'
import config from '../../config'

const Content = styled.article`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  border-radius: 1rem;
  padding: 2rem 4.5rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  p {
    font-size: 1.1rem;
    letter-spacing: -0.003em;
    line-height: 1.58;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1rem;
    }
  }

  .prism-code {
    padding: 0.75rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    font-size: 16px;
  }
`

const Title = styled.h1`
  margin-bottom: 1rem;
`

const PostContent = styled.div`
  margin-top: 4rem;
`

const MCEmbedSignup = styled.div`
  clear: left;
  font-size: 14px;
  margin-top: 50px;
`

const MCEmbedSignUpScroll = styled.div`
  & > label {
    display: block;
  }
  & > .clear {
    margin-top: 20px;
    & > input {
      cursor: pointer;
    }
  }
`

const Post = ({ pageContext: { slug, prev, next }, data: { mdx: postNode } }) => {
  const post = postNode.frontmatter

  return (
    <Layout customSEO>
      <Wrapper>
        <SEO postPath={slug} postNode={postNode} article />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
        </Header>
        <Content>
          <Title>{post.title}</Title>
          <Subline>
            {post.date} &mdash; {postNode.timeToRead} Min Read &mdash; In{' '}
            {post.categories.map((cat, i) => (
              <React.Fragment key={cat}>
                {!!i && ', '}
                <Link to={`/categories/${kebabCase(cat)}`}>{cat}</Link>
              </React.Fragment>
            ))}
          </Subline>
          <PostContent>
            <MDXRenderer>{postNode.code.body}</MDXRenderer>
          </PostContent>
          <MCEmbedSignup>
            <form
              action="https://thrust.us15.list-manage.com/subscribe/post?u=bee39f4b2acab39adec7e8893&amp;id=32d282b8bc"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              noValidate
              target="_blank">
              <MCEmbedSignUpScroll id={'mc_embed_signup_scroll'}>
                <label htmlFor="mce-EMAIL">Subscribe For Email Updates</label>
                <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required/>
                {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                  <input type="text" name="b_bee39f4b2acab39adec7e8893_32d282b8bc" tabIndex="-1" value=""/>
                </div>
                <div className="clear">
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                </div>
              </MCEmbedSignUpScroll>
            </form>
          </MCEmbedSignup>
          <PrevNext prev={prev} next={next} />
        </Content>
      </Wrapper>
    </Layout>
  )
}

export default Post

Post.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    next: PropTypes.object,
    prev: PropTypes.object,
  }),
  data: PropTypes.shape({
    mdx: PropTypes.object.isRequired,
  }).isRequired,
}

Post.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null,
  }),
}

export const postQuery = graphql`
  query postBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
      excerpt
      frontmatter {
        title
        date(formatString: "MM/DD/YYYY")
        categories
      }
      timeToRead
      parent {
        ... on File {
          mtime
          birthtime
        }
      }
    }
  }
`
